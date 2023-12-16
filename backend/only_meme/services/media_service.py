from pathlib import Path

from injection import singleton

import constants


class MediaService:
    def __init__(self, media_dir: Path, route: str, extensions: tuple[str, ...]):
        self.dir = media_dir
        self.route = route.strip("/")
        self.extensions = extensions

    def get_route(self, file_path: Path | str) -> str:
        return f"/{self.route}/{str(file_path).strip('/')}"

    def is_valid(self, file_path: Path | str) -> bool:
        if not file_path:
            return False

        return str(file_path).endswith(self.extensions)

    async def save(self, file_path: Path | str, data: bytes):
        with open(self.dir / file_path, "wb") as file:
            file.write(data)


@singleton
def media_service_factory() -> MediaService:
    return MediaService(
        constants.MEDIA_DIR,
        constants.MEDIA_ROUTE,
        tuple(constants.MEDIA_EXTENSIONS),
    )
