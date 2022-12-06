from pydantic import BaseModel
import pymongo, os
from typing import List, Optional, Union
from bson.objectid import ObjectId


dbhost = os.environ["MONGOHOST"]
dbname = os.environ["MONGODATABASE"]
dbuser = os.environ["MONGOUSER"]
dbpass = os.environ["MONGOPASSWORD"]

mongo_str = f"mongodb://{dbuser}:{dbpass}@{dbhost}"

client = pymongo.MongoClient(mongo_str)


class PreferenceIn(BaseModel):
    price: str
    cuisine: str


class PreferenceOut(BaseModel):
    price: str
    cuisine: str


class PreferenceRepository:
    def set_preference(
        self, gathering_id, preference: PreferenceIn
    ) -> PreferenceOut:
        db = client[dbname]
        filter = {"_id": ObjectId(gathering_id)}
        new_preference = {"$push": {"preferences": preference.dict()}}
        db.gatherings.update_one(filter, new_preference)
        return PreferenceOut(**preference.dict())
