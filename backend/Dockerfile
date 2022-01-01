FROM python:3.10-slim
WORKDIR /app

RUN pip install poetry

COPY pyproject.toml ./
COPY poetry.lock ./
RUN poetry install

CMD poetry run uvicorn main:app --reload --host 0.0.0.0 --port 8880
