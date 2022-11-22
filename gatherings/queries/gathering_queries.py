from pydantic import BaseModel
import pymongo, os, bson
from typing import List, Optional, Union
from datetime import datetime
from bson.objectid import ObjectId
from .preference_queries import PreferenceOut


dbhost = os.environ['MONGOHOST']
dbname = os.environ['MONGODATABASE']
dbuser = os.environ['MONGOUSER']
dbpass = os.environ['MONGOPASSWORD']

mongo_str = f"mongodb://{dbuser}:{dbpass}@{dbhost}"

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


class GatheringsOut(BaseModel):
    gatherings: List[GatheringOut]


class GatheringRepository:
    def get_one(self, gathering_id):
        db = client[dbname]
        result = db.gatherings.find_one({"_id" : ObjectId(gathering_id)})
        if result:
            result["id"] = str(result["_id"])
        return result

    def get_all(self):
        db = client[dbname]
        result = list(db.gatherings.find())
        for value in result:
            value["id"] = str(value["_id"])
        return result

    def create(self, data):
        db = client[dbname]
        result = db.gatherings.insert_one(data.dict())
        if result.inserted_id:
            result = self.get_one(result.inserted_id)
            result['id'] = str(result['id'])
            return result
