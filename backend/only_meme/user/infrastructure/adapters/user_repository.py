from injection import singleton

from common.exceptions import Error
from common.infrastructure.repositories import LocalRepository
from only_meme.entities import User
from only_meme.user.protocols import PUserRepository


@singleton(on=PUserRepository)
class UserRepository(LocalRepository[User]):
    async def add(self, user: User):
        safe_username = user.username.lower()

        for u in self.data:
            if u.username.lower() == safe_username:
                raise Error(409, "Username already used.")

        await super().add(user)

    async def get_by_username(self, username: str) -> User:
        safe_username = username.lower()

        for user in self.data:
            if user.username.lower() == safe_username:
                return user

        raise Error(404)
