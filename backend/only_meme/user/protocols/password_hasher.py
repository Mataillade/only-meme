from abc import abstractmethod
from typing import Protocol


class PPasswordHasher(Protocol):
    @abstractmethod
    async def hash(self, raw: str) -> str:
        raise NotImplementedError

    @abstractmethod
    async def verify(self, hidden: str, raw: str) -> bool:
        raise NotImplementedError
