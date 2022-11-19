from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.gathering_queries import(
    GatheringIn,
    GatheringOut,
    GatheringsOut,
    GatheringRepository,
)

router = APIRouter()

@router.post("/gathering", response_model=GatheringOut)
def create_gathering(
    gathering: GatheringIn,
    repo: GatheringRepository = Depends(),
):
    return repo.create(gathering)


@router.get("/gathering", response_model=GatheringsOut)
def get_all_gatherings(
    repo: GatheringRepository = Depends(),
):
    return GatheringsOut(gatherings=repo.get_all())


@router.get("/gathering/{gathering_id}", response_model=GatheringOut)
def get_one_gathering(
    gathering_id: str,
    response: Response,
    repo: GatheringRepository = Depends(),
):
    gathering = repo.get_one(gathering_id)
    if gathering is None:
        response.status_code = 404
    return gathering
