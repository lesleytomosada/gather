from fastapi.testclient import TestClient
from main import app
from queries.gathering_queries import GatheringRepository
from authenticator import authenticator

client = TestClient(app)


class EmptyGatheringRepository:
    def get_all(self, owner_id):
        return []

    def get_one(self, gathering_id, owner_id):
        result = {
            "id": "kdsjghoq3usd",
            "name": "Test Party",
            "location": "Honolulu, HI",
            "date": "2022-12-08T00:17:31",
        }
        return result


def test_get_all_gatherings():
    account = {"id": "123", "email": "hello@kitty.com"}
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = lambda: account
    app.dependency_overrides[GatheringRepository] = EmptyGatheringRepository
    response = client.get("/gathering")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == {"gatherings": []}


def test_get_one_gathering():
    expected = {
        "id": "kdsjghoq3usd",
        "name": "Test Party",
        "location": "Honolulu, HI",
        "date": "2022-12-08T00:17:31",
        "preferences": None,
        "recommendation": None,
    }
    account = {"id": "123", "email": "hello@kitty.com"}
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = lambda: account
    app.dependency_overrides[GatheringRepository] = EmptyGatheringRepository
    response = client.get("/gathering/kdsjghoq3usd")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == expected


class CreateGatheringQueries:
    def create(self, gathering, owner_id):
        result = {"id": "sdgsgrpm58"}
        result.update(gathering)
        return result


def test_create_gathering():
    account = {"id": "123", "email": "hello@kitty.com"}
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = lambda: account
    app.dependency_overrides[GatheringRepository] = CreateGatheringQueries
    json = {
        "name": "Test Party",
        "location": "Honolulu, HI",
        "date": "2022-12-08T00:17:31",
    }

    expected = {
        "id": "sdgsgrpm58",
        "name": "Test Party",
        "location": "Honolulu, HI",
        "date": "2022-12-08T00:17:31",
        "preferences": None,
        "recommendation": None,
    }

    response = client.post("/gathering", json=json)
    assert response.status_code == 200
    assert response.json() == expected
    app.dependency_overrides = {}
