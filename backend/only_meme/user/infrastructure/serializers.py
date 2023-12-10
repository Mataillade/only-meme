from uuid import UUID

from common.infrastructure.serializer import Serializer


class UserSerializer(Serializer):
    id: UUID
    username: str
