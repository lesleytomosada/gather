# API Endpoint Design and Documentation
Based on our Gather application wireframes, we developed our API design to include two microservices: Accounts and Gatherings. Both microservices were developed with RESTful methods to provide frontend capabilities of managing users and gatherings.

The Accounts microservice includes creating a new user (signup), login and logout features. Authorization was implemented to help restrict access of the Gathering microservice for users that are not logged in. Account information includes an email and password, which are used to identify users and is applied within the application.

The Gatherings microservice includes creating a gathering, creating preferences for the gathering and generating a restaurant recommendation for the gathering. Additionally, you can view a list of upcoming and past gatherings. Authorization was implemented to all endpoints to help restrict access of the features within this microservice to logged in users. 

<br />

### Accounts Microservice
The Accounts microservice is on port 8001 and has a url of http://localhost:8001. The api endpoints include:

| Action | Method | URL |
| --- | :---: | --- |
| Signup - create a new user | POST | `http://localhost:8001/token`
| User login | POST |`http://localhost:8001/gathering/accounts`
| User logout | DELETE | `http://localhost:8001/token`


#### Signup - create a new user

- Endpoint path: `/gathering/accounts`
- Endpoint method: POST
- Request shape (JSON):
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


#### User Login

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


#### User Logout

- Endpoint path: `/token`
- Endpoint method: DELETE
- Headers:
  - Authorization: Bearer token
- Response: Always true
- Response shape (JSON):
    ```json
    true
    ```

<br />

### Gatherings Microservice
The Gatherings microservice is on port 8000 and has a url of http://localhost:8000. The api endpoints include:

| Action | Method | URL |
| --- | :---: | --- |
| Create a new gathering | POST | `http://localhost:8000/gathering`
| Get a List of Gatherings | GET | `http://localhost:8000/gathering`
| Get details for a specific gathering | GET |`http://localhost:8000/gathering/${gathering_id}`
| Create a preference | POST | `http://localhost:8000/gathering/{gathering_id}/preference`
| Create a restaurant recommendation | POST | `http://localhost:8000/gathering/{gathering_id}/recommend`

#### Create a New Gathering

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
* Response: Gathering information
* Response shape (JSON):
    ```json
	{
        "id": string,
        "name": string,
        "location": string,
        "date": datetime
    }
    ```


#### Get a List of Gatherings

* Endpoint path: `/gathering`
* Endpoint method: GET
* Headers:
  * Authorization: Bearer token
* Response: List of gatherings and each gathering's information
* Response shape (JSON):
    ```json
	{
        "gatherings":[
            {
                "id": string,
                "name": string,
                "location": string,
                "date": datetime
            }
        ]
    }
    ```


#### Get Details for a Specific Gathering

* Endpoint path: `/gathering/${gathering_id}`
* Endpoint method: GET
* Headers:
  * Authorization: Bearer token
* Response: Gathering information (including restaurant recommendation)
* Response shape (JSON):
    ```json
	{
        "id": string,
        "name": string,
        "location": string,
        "date": datetime,
        "recommendation": {
            "restaurant_name": string,
            "address": string,
            "price": string,
            "cuisine": string,
            "rating": float,
            "image_url": string,
            "url": string
        }
    }
    ```


#### Create a Preference

* Endpoint path: `/gathering/{gathering_id}/preference`
* Endpoint method: POST
* Headers:
  * Authorization: Bearer token
* Request shape (JSON):
    ```json
    - price
    - cuisine
    ```
* Response: Preference information
* Response shape (JSON):
    ```json
    {
        "price": string,
        "cuisine": string
    }
    ```


#### Create a Restaurant Recommendation

* Endpoint path: `/gathering/{gathering_id}/recommend`
* Endpoint method: POST
* Headers:
  * Authorization: Bearer token
* Response: Restaurant recommendation information
* Response shape (JSON):
    ```json
	{
        "recommendation": {
            "restaurant_name": string,
            "address": string,
            "price": string,
            "cuisine": string,
            "rating": float,
            "image_url": string,
            "url": string
        }
    }
    ```
