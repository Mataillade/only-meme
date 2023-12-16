from common.infrastructure import Schema


class PostSchema(Schema):
    content: str


class ResponseSchema(Schema):
    media_url: str
