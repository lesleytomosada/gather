from authenticator import authenticator
from fastapi import APIRouter, Depends
from queries.recommendation_queries import (
    RecommendIn,
    RecommendOut,
    RecommendQueries,
)
from queries.gathering_queries import (
    GatheringRepository,
)
import os
import requests
import json
import random

YELP_API_KEY = os.environ["YELP_API_KEY"]
router = APIRouter()


@router.post(
    "/gathering/{gathering_id}/recommend", response_model=RecommendOut
)
def create_recommendation(
    gathering_id: str,
    queries: RecommendQueries = Depends(),
    repo: GatheringRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    gathering = repo.get_one(gathering_id, account_data["id"])
    preferences = gathering["preferences"]
    min_price = get_min_price(preferences)
    cuisines = get_cuisine(preferences)

    headers = {"Authorization": YELP_API_KEY}
    params = {
        "location": gathering["location"],
        "categories": cuisines,
        "price": min_price,
    }
    url = "https://api.yelp.com/v3/businesses/search"
    response = requests.get(url, params=params, headers=headers)

    content = json.loads(response.content)
    num_businesses = len(content["businesses"]) - 1
    rand_index = random.randint(0, num_businesses)
    selected = content["businesses"][rand_index]
    recommendation = RecommendIn(
        restaurant_name=selected["name"],
        address=", ".join(selected["location"]["display_address"]),
        price=selected["price"],
        cuisine=cuisines,
        rating=selected["rating"],
        image_url=selected["image_url"],
        url=selected["url"],
    )
    return queries.set_recommendation(gathering_id, recommendation)


def get_min_price(preferences):
    min = 4
    for preference in preferences:
        if int(preference["price"]) < min:
            min = int(preference["price"])
    return str(min)


def get_cuisine(preferences):
    cuisine_counts = {}
    winner = []
    for preference in preferences:
        if cuisine_counts.get(preference["cuisine"]):
            cuisine_counts[preference["cuisine"]] += 1
        else:
            cuisine_counts[preference["cuisine"]] = 1
    max_count = max(cuisine_counts.values())
    for k, v in cuisine_counts.items():
        if v >= max_count:
            winner.append(k)
    num_cuisines = len(winner) - 1
    rand_index = random.randint(0, num_cuisines)
    return winner[rand_index]
