from __future__ import annotations

from datetime import datetime
from typing import Any
from uuid import UUID

from pydantic import field_validator

from common.infrastructure.serializer import Serializer
from only_meme.user.infrastructure.serializers import UserSerializer


class PostSerializer(Serializer):
    id: UUID
    content: str
    author: UserSerializer
    date: datetime


class PostDetailsSerializer(PostSerializer):
    responses: tuple[ResponseSerializer, ...]

    @field_validator("responses", mode="before")
    def responses_validator(cls, value: Any) -> tuple[ResponseSerializer, ...]:
        return ResponseSerializer.serialize_many(value, field="date", reverse=True)


class ResponseSerializer(Serializer):
    id: UUID
    media_url: str
    author: UserSerializer
    date: datetime

    @field_validator("media_url", mode="before")
    def media_url_validator(cls, value: Any) -> str:
        return value
