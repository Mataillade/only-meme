ARG PYTHON_VERSION="3.12.1"

# Python
FROM python:${PYTHON_VERSION}-slim

ARG WORK_DIR="/application"

# Working directory
WORKDIR ${WORK_DIR}
COPY . .

# Setup system
RUN apt-get upgrade -y
RUN apt-get update
RUN apt-get autoremove
RUN apt-get clean

RUN apt-get install build-essential -y

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV POETRY_HOME="$HOME/.poetry"
ENV PATH="$POETRY_HOME/bin:$PATH"
ENV PORT=8000
ENV UVICORN_PORT=${PORT}

EXPOSE ${PORT}

# Setup Python
RUN pip install pip poetry --upgrade --no-cache-dir
RUN poetry config installer.modern-installation true
RUN poetry config virtualenvs.create false
RUN poetry install --compile --no-cache --without dev
RUN poetry cache clear pypi --all

ENTRYPOINT ["uvicorn", "main:application", "--host", "0.0.0.0"]
CMD ["--use-colors"]
