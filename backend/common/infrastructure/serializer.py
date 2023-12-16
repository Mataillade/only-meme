from abc import ABC
from typing import Any, Iterable, Self

from pydantic import BaseModel


class Serializer(BaseModel, ABC):
    @classmethod
    def serialize(cls, obj: Any) -> Self:
        return cls.model_validate(obj, from_attributes=True)

    @classmethod
    def serialize_many(
        cls,
        objs: Iterable[Any],
        field: str = None,
        reverse: bool = False,
    ) -> tuple[Self, ...]:
        return tuple(
            sorted(
                (cls.serialize(obj) for obj in objs),
                key=(lambda obj: getattr(obj, field)) if field else None,
                reverse=reverse,
            )
        )
