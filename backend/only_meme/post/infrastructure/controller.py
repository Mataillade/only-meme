from uuid import UUID

from blacksheep import FromJSON, Request, Response, allow_anonymous
from blacksheep.server.controllers import APIController, get, post
from injection import get_instance

from only_meme.entities import User
from only_meme.post.handler import PostHandler
from only_meme.post.infrastructure.schemas import PostSchema
from only_meme.post.infrastructure.serializers import PostSerializer
from only_meme.user.handler import UserHandler


class PostController(APIController):
    def __init__(self):
        self.post_handler: PostHandler = get_instance(PostHandler)
        self.user_handler: UserHandler = get_instance(UserHandler)

    async def __get_user(self, request: Request) -> User:
        user_id = request.identity.get("user_id")
        return await self.user_handler.get_by_id(user_id)

    @classmethod
    def class_name(cls) -> str:
        return "post"

    @allow_anonymous()
    @get("/list")
    async def posts(self) -> Response:
        posts = await self.post_handler.posts()
        return self.pretty_json(
            PostSerializer.serialize_many(posts),
        )

    @allow_anonymous()
    @get("/:post_id")
    async def get_by_id(self, post_id: UUID) -> Response:
        ...

    @post("/")
    async def new_post(
        self,
        request: Request,
        payload: FromJSON[PostSchema],
    ) -> Response:
        author = await self.__get_user(request)
        data = payload.value.model_dump()
        post_entity = await self.post_handler.new_post(author=author, **data)
        return self.pretty_json(
            PostSerializer.serialize(post_entity),
            status=201,
        )

    @post("/:post_id/response")
    async def new_response(self, post_id: UUID, payload: FromJSON) -> Response:
        ...

    @post("/upload")
    async def upload(self, request: Request) -> Response:
        files = await request.files()

        if not files:
            return self.bad_request()

        for file in files:
            ...

        return self.created()
