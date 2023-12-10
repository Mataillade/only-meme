from typing import Any


class Error(Exception):
    def __init__(self, code: int, message: str = "", details: dict[str, Any] = None):
        super().__init__(message)
        self.code = code
        self.details = details or {}

    @property
    def message(self) -> str:
        return str(self)

    @property
    def content(self) -> dict[str, Any]:
        return {
            "message": self.message,
            "details": self.details,
        }
