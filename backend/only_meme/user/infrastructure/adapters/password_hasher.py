from argon2 import PasswordHasher as Hasher
from injection import singleton

from only_meme.user.protocols import PPasswordHasher


@singleton(on=PPasswordHasher)
class PasswordHasher(PPasswordHasher):
    def __init__(self):
        self.__hasher = Hasher()

    async def hash(self, raw: str) -> str:
        return self.__hasher.hash(raw)

    async def verify(self, hidden: str, raw: str) -> bool:
        return self.__hasher.verify(hidden, raw)
