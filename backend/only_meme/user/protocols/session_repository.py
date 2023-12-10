from abc import abstractmethod
from typing import Protocol

from only_meme.entities import Session


class PSessionRepository(Protocol):
    @abstractmethod
    async def add(self, session: Session):
        raise NotImplementedError

    @abstractmethod
    async def get_by_token(self, token: str) -> Session:
        raise NotImplementedError
