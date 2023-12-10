from abc import ABC
from typing import Any, Iterable, Self

from pydantic import BaseModel


class Serializer(BaseModel, ABC):
    @classmethod
    def serialize(cls, obj: Any) -> Self:
        return cls.model_validate(obj, from_attributes=True)

    @classmethod
    def serialize_many(cls, objs: Iterable[Any]) -> tuple[Self, ...]:
        return tuple(cls.serialize(obj) for obj in objs)
