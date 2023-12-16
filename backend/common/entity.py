from abc import ABCMeta
from dataclasses import dataclass, field
from typing import Any
from uuid import UUID, uuid4


class EntityMeta(ABCMeta):
    def __new__(mcs, *args, **kwargs):
        cls = super().__new__(mcs, *args, **kwargs)
        return dataclass(cls, repr=False, eq=False, kw_only=True)


class Entity(metaclass=EntityMeta):
    id: UUID = field(default_factory=uuid4)

    def __init__(self, /, **kwargs):
        ...

    def __repr__(self) -> str:
        class_name = self.__class__.__name__
        return f"<{class_name} {self.id}>"

    def __eq__(self, other: Any) -> bool:
        return isinstance(other, type(self)) and self.id == other.id

    def __hash__(self) -> int:
        return self.id.int
