from common.infrastructure import Schema


class RegistrationSchema(Schema):
    username: str
    password: str


class LoginSchema(Schema):
    username: str
    password: str


class RefreshSchema(Schema):
    session_token: str
