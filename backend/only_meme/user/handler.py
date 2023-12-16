from datetime import timedelta
from uuid import UUID

from injection import singleton

from common.exceptions import Error
from only_meme.entities import Session, User
from only_meme.services import SecretService
from only_meme.user.protocols import (
    PPasswordHasher,
    PSessionRepository,
    PUserRepository,
)


@singleton
class UserHandler:
    def __init__(
        self,
        user_repository: PUserRepository,
        session_repository: PSessionRepository,
        secret_service: SecretService,
        hasher: PPasswordHasher,
    ):
        self.user_repository = user_repository
        self.session_repository = session_repository
        self.secret_service = secret_service
        self.hasher = hasher

    async def register(self, /, **data) -> User:
        user = User(**data)
        user.password = await self.hasher.hash(user.password)
        await self.user_repository.add(user)
        return user

    async def login(self, username: str, password: str) -> dict[str, str]:
        try:
            user = await self.user_repository.get_by_username(username)
        except Error:
            user = None

        if user and await self.hasher.verify(user.password, password):
            session = await self.__new_session(user)
            return {
                "access_token": await self.__new_access_token(user),
                "session_token": session.token,
            }

        raise Error(401)

    async def refresh(self, session_token: str) -> str:
        session = await self.session_repository.get_by_token(session_token)
        return await self.__new_access_token(session.user)

    async def get_by_id(self, user_id: UUID | str) -> User:
        return await self.user_repository.get_by_id(user_id)

    async def __new_access_token(self, user: User) -> str:
        return await self.secret_service.encode_jwt(
            {"user_id": user.id.hex},
            timedelta(hours=1),
        )

    async def __new_session(self, user: User) -> Session:
        token = await self.secret_service.generate(256)
        session = Session(token=token, user=user)
        await self.session_repository.add(session)
        return session
