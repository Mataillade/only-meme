from uuid import UUID, uuid4

from blacksheep import FromFiles, FromJSON, Request, Response, allow_anonymous
from blacksheep.server.controllers import APIController, get, post
from injection import get_instance

from only_meme.entities import User
from only_meme.post.handler import PostHandler
from only_meme.post.infrastructure.schemas import PostSchema, ResponseSchema
from only_meme.post.infrastructure.serializers import (
    PostDetailsSerializer,
    PostSerializer,
    ResponseSerializer,
)
from only_meme.services import MediaService
from only_meme.user.handler import UserHandler


class PostController(APIController):
    def __init__(self):
        self.post_handler: PostHandler = get_instance(PostHandler)
        self.user_handler: UserHandler = get_instance(UserHandler)
        self.media_service: MediaService = get_instance(MediaService)

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
            PostSerializer.serialize_many(
                posts,
                field="date",
                reverse=True,
            ),
        )

    @allow_anonymous()
    @get("/:post_id")
    async def get_by_id(self, post_id: UUID) -> PostSerializer:
        post_entity = await self.post_handler.get_by_id(post_id)
        return PostDetailsSerializer.serialize(post_entity)

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

    @post("/:post_id/reply")
    async def reply(
        self,
        request: Request,
        post_id: UUID,
        payload: FromJSON[ResponseSchema],
    ) -> Response:
        author = await self.__get_user(request)
        data = payload.value.model_dump()
        post_entity = await self.post_handler.get_by_id(post_id)
        response_entity = await self.post_handler.reply(
            post_entity,
            author=author,
            **data,
        )
        return self.pretty_json(
            ResponseSerializer.serialize(response_entity),
            status=201,
        )

    @post("/upload")
    async def upload(self, from_files: FromFiles) -> Response:
        files = from_files.value

        if files:
            file = files[0]
            extension = f".{file.file_name.decode().split('.')[-1]}"

            if self.media_service.is_valid(extension):
                name = f"{uuid4().hex}{extension}"
                await self.media_service.save(name, file.data)

                return self.pretty_json(
                    {"media_route": self.media_service.get_route(name)},
                    status=201,
                )

        return self.bad_request()
