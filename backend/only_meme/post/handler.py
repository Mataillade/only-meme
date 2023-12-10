from typing import Iterable
from uuid import UUID

from injection import singleton

from only_meme.entities import Post
from only_meme.post.protocols import PPostRepository


@singleton
class PostHandler:
    def __init__(self, post_repository: PPostRepository):
        self.post_repository = post_repository

    async def posts(self) -> Iterable[Post]:
        return await self.post_repository.get_all()

    async def new_post(self, /, **data) -> Post:
        post = Post(**data)
        await self.post_repository.add(post)
        return post

    async def get_by_id(self, post_id: UUID) -> Post:
        return await self.post_repository.get_by_id(post_id)
