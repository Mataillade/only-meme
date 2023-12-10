from dataclasses import field

from common import Entity


class User(Entity):
    username: str
    password: str


class Session(Entity):
    token: str
    user: User


class Response(Entity):
    media_url: str
    author: User


class Post(Entity):
    content: str
    author: User
    responses: set[Response] = field(default_factory=set)
