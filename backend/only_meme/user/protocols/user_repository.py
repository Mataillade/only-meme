from abc import abstractmethod
from typing import Protocol
from uuid import UUID

from only_meme.entities import User


class PUserRepository(Protocol):
    @abstractmethod
    async def add(self, user: User):
        raise NotImplementedError

    @abstractmethod
    async def get_by_username(self, username: str) -> User:
        raise NotImplementedError

    @abstractmethod
    async def get_by_id(self, user_id: UUID | str) -> User:
        raise NotImplementedError
