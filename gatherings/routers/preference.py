from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.preference_queries import(
    PreferenceIn,
    PreferenceOut,
    PreferenceRepository
)

router = APIRouter()

@router.post("/gathering/{gathering_id}/preference", response_model=PreferenceOut)
def create_Preference(
    preference: PreferenceIn,
    gathering_id: str,
    repo: PreferenceRepository = Depends(),
):
    return repo.set_preference(gathering_id, preference)
