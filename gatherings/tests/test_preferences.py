from fastapi.testclient import TestClient
from main import app
from queries.preference_queries import PreferenceRepository
from authenticator import authenticator

client = TestClient(app)


class CreatePreferenceQueries:
    def set_preference(self, gathering_id, preference):
        result = {"id": "sdgsgrpm58"}
        result.update(preference)
        return result


def test_create_preference():
    account = {"id": "123", "email": "hello@kitty.com"}
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = lambda: account
    app.dependency_overrides[PreferenceRepository] = CreatePreferenceQueries
    json = {
        "cuisine": "french",
        "price": "3",
    }

    expected = {
        "cuisine": "french",
        "price": "3",
    }

    response = client.post("/gathering/sdgsgrpm58/preference", json=json)
    assert response.status_code == 200
    assert response.json() == expected
    app.dependency_overrides = {}
