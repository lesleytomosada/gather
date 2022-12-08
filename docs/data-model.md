# Data models

---

## Accounts Microservice

---

---

### Accounts

| Name | Type | Unique | Optional |
| --- | --- | --- | --- |
| email | string | true | false |
| password | string | false | false |

The account entity contains login information for each user. Upon creation, the account is given a mongo generated id value as well as a hashed_password value from our create_account function.

## Gatherings Microservice

---

---

### Gatherings

| Name | Type | Unique | Optional |
| --- | --- | --- | --- |
| name | string | false | false |
| location | string | false | false |
| date | datetime | false | false |
| preferences* | dictionary | false | true |
| recommendation** | dictionary | false | true |

The gathering entity contains details for a specific event. The user will populate the name, location, and date for their event. Once preferences have been set, they will be reflected on the specific gathering as a dictionary. The gathering must have at least one preference to generate a recommendation. Once the recommendation has been generated, it will be reflected on the specific gathering as a dictionary.

### Preferences*

| Name | Type | Unique | Optional |
| --- | --- | --- | --- |
| price | string | false | false |
| cuisine | string | false | false |

The preference entity contains the desired price, which is entered as a string containing a numeric value reflecting how many “dollar signs” the user wants to set. For example, when the user selects “$$” from the price dropdown on the preference form, the data is stored as “2”. The cuisine type is a string value that the user will select from a dropdown on the preference form as well. Once all preferences have been set, this information is passed to the create recommendation function.

### Recommendation**

| Name | Type | Unique | Optional |
| --- | --- | --- | --- |
| restaurant_name | string | false | n/a |
| address | string | true | n/a |
| price | string | false | n/a |
| cuisine | string | false | n/a |
| rating | float | false | n/a |
| image_url | string | false | n/a |
| url | string | true | n/a |

The recommendation entity contains the resulting data from finding a match based off of the users’ preferences. This data is generated from calling the Yelp API. All returned data in the recommendation dictionary is stored as a string value, except the rating which is stored as a float value.
