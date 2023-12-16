from blacksheep import Request
from guardpost import AuthenticationHandler as Handler
from guardpost import Identity
from injection import inject

from common.exceptions import Error
from only_meme.services import SecretService


@inject
class AuthenticationHandler(Handler):
    def __init__(self, secret_service: SecretService):
        self.secret_service = secret_service

    async def authenticate(self, request: Request) -> Identity | None:
        key = request.get_first_header(b"Authorization")

        if not key or not key.startswith(b"Bearer "):
            return None

        try:
            jwt = await self.secret_service.decode_jwt(
                key.decode()[7:],
            )
        except Error:
            return None

        request.identity = Identity(jwt.data, "Access Token")
        return request.identity
