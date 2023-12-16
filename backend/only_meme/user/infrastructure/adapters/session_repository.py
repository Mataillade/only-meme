from injection import singleton

from common.exceptions import Error
from common.infrastructure.repositories import LocalRepository
from only_meme.entities import Session
from only_meme.user.protocols import PSessionRepository


@singleton(on=PSessionRepository)
class SessionRepository(LocalRepository[Session]):
    async def add(self, session: Session):
        for s in self.data:
            if s.token == session.token:
                raise Error(401)

        await super().add(session)

    async def get_by_token(self, token: str) -> Session:
        for session in self.data:
            if session.token == token:
                return session

        raise Error(404)
