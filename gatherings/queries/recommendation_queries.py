from pydantic import BaseModel
import pymongo, os, bson
from typing import List, Optional, Union
from bson.objectid import ObjectId


dbhost = os.environ['MONGOHOST']
dbname = os.environ['MONGODATABASE']
dbuser = os.environ['MONGOUSER']
dbpass = os.environ['MONGOPASSWORD']

mongo_str = f"mongodb://{dbuser}:{dbpass}@{dbhost}"

client = pymongo.MongoClient(mongo_str)


class RecommendIn(BaseModel):
    restaurant_name: str
    address: str
    price: str
    cuisine: str
    rating: float
    image_url: str
    url: str

class RecommendOut(BaseModel):
    restaurant_name: str
    address: str
    price: str
    cuisine: str
    rating: float
    image_url: str
    url: str


class RecommendQueries:
    def set_recommendation(self, gathering_id, recommend: RecommendIn) -> RecommendOut:
        db = client[dbname]
        filter = {"_id": ObjectId(gathering_id)}
        newvalues = {"$set": {"recommendation": recommend.dict()}}
        db.gatherings.update_one(filter, newvalues)
        return RecommendOut(**recommend.dict())
