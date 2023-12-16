from dataclasses import field
from datetime import datetime, timezone

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
    date: datetime = field(default_factory=lambda: datetime.now(tz=timezone.utc))


class Post(Entity):
    content: str
    author: User
    responses: set[Response] = field(default_factory=set)
    date: datetime = field(default_factory=lambda: datetime.now(tz=timezone.utc))

    def reply(self, response: Response) -> Response:
        self.responses.add(response)
        return response
