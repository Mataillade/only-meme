from uuid import UUID

from common import Entity
from common.exceptions import Error


class LocalRepository[E: Entity]:
    def __init__(self):
        self.data: set[E] = set()

    async def add(self, entity: E):
        self.data.add(entity)

    async def get_by_id(self, entity_id: UUID | str) -> E:
        if not isinstance(entity_id, UUID):
            try:
                entity_id = UUID(entity_id)
            except ValueError as exc:
                raise Error(404) from exc

        for entity in self.data:
            if entity.id == entity_id:
                return entity

        raise Error(404)
