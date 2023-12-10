from __future__ import annotations

from abc import ABC, abstractmethod


class AbstractFactory[T](ABC):
    __slots__ = ()

    @abstractmethod
    def build(self, /, **kwargs) -> T:
        raise NotImplementedError
