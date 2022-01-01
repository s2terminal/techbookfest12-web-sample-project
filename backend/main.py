from typing import Optional

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return [
        {
            "title": "こんにちは",
            "body": "今日はいい天気ですね"
        },
        {
            "title": "こんばんは",
            "body": "明日もいい天気だといいですね"
        },
    ]
