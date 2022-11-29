from pydantic import BaseModel
from typing import List, Optional, Union
import pymongo, os, bson
from pymongo.errors import DuplicateKeyError
from bson.objectid import ObjectId


dbhost = os.environ['MONGOHOST']
dbname = os.environ['MONGODATABASE']
dbuser = os.environ['MONGOUSER']
dbpass = os.environ['MONGOPASSWORD']

mongo_str = f"mongodb://{dbuser}:{dbpass}@{dbhost}"

client = pymongo.MongoClient(mongo_str)


class Account(BaseModel):
    id: str
    email: str
    hashed_password: str

class AccountIn(BaseModel):
    email: str
    password: str

class AccountOut(BaseModel):
    id: str
    email: str

class DuplicateAccountError(ValueError):
    pass

class AccountRepository:
    def get_one(self, email:str) -> Optional[Account]:
        db = client[dbname]
        result = db.accounts.find_one({"email" : email})
        if result:
            result["id"] = str(result["_id"])
        return Account(**result)

    def create(self, account: AccountIn, hashed_password: str) -> Account:
        db = client[dbname]
        props = account.dict()
        props["hashed_password"] = hashed_password
        props.pop('password')
        try:
            db.accounts.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] =str(props["_id"])
        return Account(**props)
