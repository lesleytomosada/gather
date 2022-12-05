from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from gatherings.routers import gathering, preference, recommendation
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(gathering.router)
app.include_router(preference.router)
app.include_router(recommendation.router)
