ARG PYTHON_VERSION="3.12.1"

# Python
FROM python:${PYTHON_VERSION}-slim

ARG WORK_DIR="/server"
ARG PORT=8000

# Working directory
WORKDIR ${WORK_DIR}
COPY . .

# Setup system
RUN apt-get update &&  \
    apt-get full-upgrade -y &&  \
    apt-get install gcc -y &&  \
    apt-get autoremove &&  \
    apt-get clean

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV UVICORN_HOST="0.0.0.0"
ENV UVICORN_PORT=$PORT

EXPOSE ${PORT}

# Setup Python
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir poetry
RUN poetry config installer.modern-installation true
RUN poetry config virtualenvs.create false
RUN poetry install --compile --no-cache --without dev
RUN poetry cache clear pypi --all

ENTRYPOINT ["uvicorn", "main:application"]
CMD ["--use-colors"]
