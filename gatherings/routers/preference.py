from authenticator import authenticator
from fastapi import APIRouter, Depends
from queries.preference_queries import (
    PreferenceIn,
    PreferenceOut,
    PreferenceRepository,
)

router = APIRouter()


@router.post(
    "/gathering/{gathering_id}/preference", response_model=PreferenceOut
)
def create_Preference(
    preference: PreferenceIn,
    gathering_id: str,
    repo: PreferenceRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.set_preference(gathering_id, preference)
