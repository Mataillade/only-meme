from __future__ import annotations

import secrets
import string
from dataclasses import dataclass, field
from datetime import datetime, timedelta, timezone
from typing import Any, Self

import jwt
from injection import singleton

import constants
from common.exceptions import Error


class SecretService:
    def __init__(self, secret: str):
        self.secret = secret
        self.alphabet = string.digits + string.ascii_letters + string.punctuation

    async def generate(self, length: int) -> str:
        return r"".join(secrets.choice(self.alphabet) for _ in range(length))

    async def encode_jwt(
        self,
        data: dict[str, Any] = None,
        lifespan: timedelta = None,
    ) -> str:
        expiration = (datetime.now(tz=timezone.utc) + lifespan) if lifespan else None
        token = JWT(data=data, expiration=expiration)
        return token.encode(self.secret)

    async def decode_jwt(self, token: str) -> JWT:
        try:
            return JWT.decode(token, self.secret)
        except jwt.exceptions.InvalidTokenError as exc:
            raise Error(401) from exc


@singleton
def secret_service_factory() -> SecretService:
    return SecretService(constants.SECRET_KEY)


@dataclass(repr=False, frozen=True, slots=True)
class JWT:
    data: dict[str, Any]
    expiration: datetime = field(default=None)

    def encode(self, secret: str) -> str:
        payload = {} | self.data

        if self.expiration:
            payload["exp"] = self.expiration

        return jwt.encode(payload, secret, algorithm="HS256")

    @classmethod
    def decode(cls, token: str, secret: str) -> Self:
        decoded = jwt.decode(token, secret, algorithms=("HS256",))
        expiration = decoded.pop("exp", None)
        return cls(data=decoded, expiration=expiration)
