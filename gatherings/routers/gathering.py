from authenticator import authenticator
from fastapi import APIRouter, Depends, Response
from typing import Optional
from queries.gathering_queries import (
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
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.create(gathering, account_data["id"])


@router.get("/gathering", response_model=GatheringsOut)
def get_all_gatherings(
    repo: GatheringRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return GatheringsOut(gatherings=repo.get_all(account_data["id"]))


@router.get("/gathering/{gathering_id}", response_model=Optional[GatheringOut])
def get_one_gathering(
    gathering_id: str,
    response: Response,
    repo: GatheringRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    gathering = repo.get_one(gathering_id, account_data["id"])
    if gathering is None:
        response.status_code = 404
    return gathering
