from routers.recommendation import get_min_price, get_cuisine


def test_get_min_price():
    input = [
        {"price": 1},
        {"price": 2},
        {"price": 2},
    ]
    target = "1"
    result = get_min_price(input)
    assert result == target


def test_get_cuisine():
    input = [
        {"cuisine": "indpak"},
        {"cuisine": "indpak"},
        {"cuisine": "mexican"},
    ]
    target = "indpak"
    result = get_cuisine(input)
    assert result == target
