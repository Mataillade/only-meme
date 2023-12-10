from typing import Iterable

from injection import singleton

from common.infrastructure.repositories import LocalRepository
from only_meme.entities import Post
from only_meme.post.protocols import PPostRepository


@singleton(on=PPostRepository)
class PostRepository(LocalRepository[Post]):
    async def get_all(self) -> Iterable[Post]:
        return (entity for entity in self.data)
