from os import makedirs

import uvicorn
from blacksheep import Application, Request, pretty_json
from blacksheep.server.openapi.v3 import OpenAPIHandler
from guardpost import Policy
from guardpost.common import AuthenticatedRequirement
from injection.utils import load_package
from openapidocs.v3 import Info

import constants
from common.exceptions import Error
from only_meme.user.infrastructure.authentication import AuthenticationHandler

application = Application()
application.use_cors(
    allow_methods="*",
    allow_origins="*",
    allow_headers="* Authorization",
    max_age=300,
)
swagger = OpenAPIHandler(
    info=Info(
        title="Only Meme API",
        version="0.0.0",
    ),
    ui_path="/",
)
swagger.bind_app(application)
application.use_authentication().add(
    AuthenticationHandler(),
)
application.use_authorization().default_policy = Policy(
    "Authenticated",
    AuthenticatedRequirement(),
)


@application.exception_handler(Error)
async def error_handler(_, request: Request, error: Error):
    return pretty_json(error.content, status=error.code)


@application.on_start
async def load(_):
    import only_meme

    load_package(only_meme)


@application.on_start
async def serve_files(_):
    makedirs(constants.MEDIA_DIR, exist_ok=True)
    application.serve_files(
        constants.MEDIA_DIR,
        extensions=constants.MEDIA_EXTENSIONS,
        root_path=constants.MEDIA_ROUTE,
    )


if __name__ == "__main__":
    uvicorn.run(f"{__name__}:application", use_colors=True)
