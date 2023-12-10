from pathlib import Path

from injection import singleton

import constants


class MediaService:
    def __init__(self, media_dir: Path):
        self.media_dir = media_dir

    async def save(self, file_name: str, data: bytes):
        with open(self.media_dir / file_name, "wb") as file:
            file.write(data)


@singleton
def media_service_factory() -> MediaService:
    return MediaService(constants.MEDIA_DIR)
