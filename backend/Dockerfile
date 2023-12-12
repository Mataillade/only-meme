ARG PYTHON_VERSION="3.12.1"

# Python
FROM python:${PYTHON_VERSION}-slim

ARG WORK_DIR="/application"
ARG PORT=8000

# Working directory
WORKDIR ${WORK_DIR}

COPY ./common ./common
COPY ./only_meme ./only_meme
COPY ./constants.py .
COPY ./main.py .
COPY ./pyproject.toml .
COPY ./poetry.lock .

# Setup system
RUN apt-get upgrade -y
RUN apt-get update
RUN apt-get autoremove
RUN apt-get clean

RUN apt-get install gcc -y

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV POETRY_HOME="$HOME/.poetry"
ENV PATH="$POETRY_HOME/bin:$PATH"

ENV UVICORN_HOST="0.0.0.0"
ENV UVICORN_PORT=$PORT

ENV FORWARDED_ALLOW_IPS="*"

EXPOSE ${PORT}

# Setup Python
RUN pip install pip poetry --upgrade --no-cache-dir
RUN poetry config installer.modern-installation true
RUN poetry config virtualenvs.create false
RUN poetry install --compile --no-cache --without dev
RUN poetry cache clear pypi --all

ENTRYPOINT ["uvicorn", "main:application"]
CMD ["--use-colors"]
