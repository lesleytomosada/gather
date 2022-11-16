from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import datetime


class GatheringIn(BaseModel):
    name: str
    location: str
    # date: datetime


class GatheringOut(BaseModel):
    id: int
    name: str
    location: str
    # date: datetime


class GatheringsOut(BaseModel):
    gatherings: List[GatheringOut]


class GatheringRepository:
    def create(self, gathering: GatheringIn) -> GatheringOut:
        return {
          "id": 1,
          "name": "Cindy's Gathering",
          "location": "Disney Land",
        }
