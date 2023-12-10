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
swagger = OpenAPIHandler(
    info=Info(
        title="Only Meme API",
        version="0.0.0",
    ),
    ui_path="/",
)
swagger.bind_app(application)
application.serve_files(
    constants.MEDIA_DIR,
    extensions={"png", "gif"},
    root_path=constants.MEDIA_ROUTE,
)
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


if __name__ == "__main__":
    uvicorn.run(f"{__name__}:application", use_colors=True)
