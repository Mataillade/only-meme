from blacksheep import FromJSON, Request, Response, allow_anonymous
from blacksheep.server.controllers import APIController, get, post
from injection import get_instance

from only_meme.user.handler import UserHandler
from only_meme.user.infrastructure.schemas import (
    LoginSchema,
    RefreshSchema,
    RegistrationSchema,
)
from only_meme.user.infrastructure.serializers import UserSerializer


class UserController(APIController):
    def __init__(self):
        self.handler: UserHandler = get_instance(UserHandler)

    @classmethod
    def class_name(cls) -> str:
        return "user"

    @allow_anonymous()
    @post("/register")
    async def register(self, payload: FromJSON[RegistrationSchema]) -> Response:
        data = payload.value.model_dump()
        await self.handler.register(**data)
        return self.created()

    @allow_anonymous()
    @post("/login")
    async def login(self, payload: FromJSON[LoginSchema]) -> Response:
        data = payload.value.model_dump()
        tokens = await self.handler.login(**data)
        return self.pretty_json(tokens)

    @allow_anonymous()
    @post("/refresh")
    async def refresh(self, payload: FromJSON[RefreshSchema]) -> Response:
        data = payload.value.model_dump()
        access_token = await self.handler.refresh(**data)
        return self.pretty_json({"access_token": access_token})

    @get("/:user_id")
    async def get_by_id(
        self,
        request: Request,
        user_id: str,
    ) -> UserSerializer | Response:
        if user_id == "me":
            user_id = request.identity.get("user_id")

        user = await self.handler.get_by_id(user_id)
        return UserSerializer.serialize(user)
