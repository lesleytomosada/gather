# API Endpoint Design and Documentation
- Based on our Gather application wireframes, we developed our API design and identified the following endpoints:

### Login

- Endpoint path: `/token`
- Endpoint method: POST

- Request shape (form):
    ```json
    - email: string
    - password: string
    ```

- Response: Account information and a token
- Response shape (JSON):
    ```json
    {
        "account": {
            "email": string
        },
        "token": string
    }
    ```


### Signup

- Endpoint path: `/users`
- Endpoint method: POST

- Request shape (form):
    ```json
    - email: string
    - password: string
    ```

- Response: Account information and a token
- Response shape (JSON):
    ```json
    {
        "account": {
            "email": string
        },
        "token": string
    }
    ```


### Log out

- Endpoint path: `/token`
- Endpoint method: DELETE

- Headers:
  - Authorization: Bearer token

- Response: Always true
- Response shape (JSON):
    ```json
    true
    ```

### Create A New Gathering

* Endpoint path: `/gathering`
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    - name
    - location
    - date
    ```

* Response: Create a new gathering
* Response shape (JSON):
    ```json
	{
        "id": integer,
        "name": string,
        "location": {
            "city": string,
            "state": string
        },
        "date": datetime
    }
    ```


### Get Details for Specific Gathering

* Endpoint path: `/gathering/<int:pk>`
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: Get details for a specific gathering
* Response shape (JSON):
    ```json
	{
        "id": integer,
        "name": string,
        "location": {
            "city": string,
            "state": string
        },
        "date": datetime,
        "recommendation": {
            "id": integer,
            "restaurant_name": string,
            "address": string,
            "price": string,
            "cuisine": string,
            "rating": float
        }
    }
    ```


### Create A Preference Form

* Endpoint path: `/gathering/<int:pk>/preference`
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    - price
    - cuisine
    ```

* Response: Create a restaurant preference for a specific gathering
* Response shape (JSON):
    ```json
    {
        "price": string,
        "cuisine": string
    }
    ```


### Create A Gathering Recommendation

* Endpoint path: `/gathering/<int:pk>/recommend`
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request shape (JSON): (Need this data if making yelp fetch call from React/front-end)
    ```json
    - restaurant_name
    - address
    - price
    - cuisine
    - rating
    ```

* Response: Create a restaurant recommendation for a specific gathering
* Response shape (JSON):
    ```json
	{
        "recommendation": {
            "id": integer,
            "restaurant_name": string,
            "address": string,
            "price": string,
            "cuisine": string,
            "rating": float
        }
    }
    ```


### Get A List of Gatherings (Lesley)

* Endpoint path: `/gathering`
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: Get a list of gatherings
* Response shape (JSON):
    ```json
	{
        "gatherings":[
            {
                "id": integer,
                "name": string,
                "location": {
                    "city": string,
                    "state": string
                },
                "date": datetime
            }
        ]
    }
    ```
