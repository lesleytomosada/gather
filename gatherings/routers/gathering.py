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
