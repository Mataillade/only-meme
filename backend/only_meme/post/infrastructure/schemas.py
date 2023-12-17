from pydantic import Field

from common.infrastructure import Schema


class PostSchema(Schema):
    content: str
    media_url: str | None = Field(default=None)


class ResponseSchema(Schema):
    media_url: str
