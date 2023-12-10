from abc import abstractmethod
from typing import Iterable, Protocol
from uuid import UUID

from only_meme.entities import Post


class PPostRepository(Protocol):
    @abstractmethod
    async def get_all(self) -> Iterable[Post]:
        raise NotImplementedError

    @abstractmethod
    async def add(self, post: Post):
        raise NotImplementedError

    @abstractmethod
    async def get_by_id(self, post_id: UUID) -> Post:
        raise NotImplementedError
