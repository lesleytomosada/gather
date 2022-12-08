from queries.recommendation_queries import RecommendOut
from pydantic import BaseModel
import pymongo
import os
from typing import List, Optional
from datetime import datetime
from bson.objectid import ObjectId
from .preference_queries import PreferenceOut


dbhost = os.environ['mongo']
dbname = os.environ["MONGODATABASE"]
dbuser = os.environ["MONGOUSER"]
dbpass = os.environ["MONGOPASSWORD"]

mongo_str = f"mongodb+srv://{dbuser}:{dbpass}@{dbhost}"

client = pymongo.MongoClient(mongo_str)


class GatheringIn(BaseModel):
    name: str
    location: str
    date: datetime


class GatheringOut(BaseModel):
    id: str
    name: str
    location: str
    date: datetime
    preferences: Optional[List[PreferenceOut]]
    recommendation: Optional[RecommendOut]


class GatheringsOut(BaseModel):
    gatherings: List[GatheringOut]


class GatheringRepository:
    def get_one(self, gathering_id, owner_id):
        db = client[dbname]
        result = db.gatherings.find_one({"_id": ObjectId(gathering_id)})
        if result:
            result["id"] = str(result["_id"])
            if result["owner_id"] != owner_id:
                return None
        return result

    def get_all(self, owner_id):
        db = client[dbname]
        filter = {"owner_id": owner_id}
        result = list(db.gatherings.find(filter))
        for value in result:
            value["id"] = str(value["_id"])
        return result

    def create(self, data, owner_id):
        db = client[dbname]
        props = data.dict()
        props["owner_id"] = owner_id
        result = db.gatherings.insert_one(props)
        print('date :', data.date)
        if result.inserted_id:
            result = self.get_one(result.inserted_id, owner_id)
            result["id"] = str(result["id"])
            return result
