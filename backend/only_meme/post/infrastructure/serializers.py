from uuid import UUID

from common.infrastructure.serializer import Serializer
from only_meme.user.infrastructure.serializers import UserSerializer


class PostSerializer(Serializer):
    id: UUID
    content: str
    author: UserSerializer
