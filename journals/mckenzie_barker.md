## Monday, November 21, 2022
## Friday, November 18, 2022
We made a lot of great progress today!! We updated our hardcoded data to actually connect to the database instead of producing the hardcoded data. We were able to create and connect 3 different endpoints for our gatherings. These were create gathering, get one gathering, and get all gatherings. It was so exciting when we were able to successfully test each one, and then see it show up in mongo express! One aha moment for me today was when we were getting an error getting all gatherings because id ws returning the wrong type. I suggested that we wrap it in a str and it worked!! We were all very excited and arms went flying. Cindy also showed us some progress she made on her endpoint and the yelp API integration. It was great!!

## Thursday, November 17, 2022
Today we learned about MongoDB, and have ultimately decided to use it over PostgreSQL. When we had group time to work, we added the MongoDB database to our docker compose yaml file. We tried to hook up mongo-express and ran into some trouble. When using mongo:5, we were receiving an error about authentication, however McKenzie tried using Mongo:0.54 instead and it worked then. We were all too tired to try to look more into it but we will get to it tomorrow. MongoDB seems cool, seems simpler to use and we will have more flexibility if we want to change any fields in the future.

## Wednesday, November 16, 2022
We group coded our first three endpoints today - we wrote our create gathering endpoint, our list of gatherings endpoint, and

We had to hard code in data since we haven't decided which database to use yet. Once we got the first endpoint done we decided to explore the Yelp API while we wait to learn about MongoDB tonight/tomorrow.

## Tuesday, November 15, 2022

Our to-dos for today:
* Finalizing our API endpoints
* Breaking down and assigning endpoints to members
* Creating issues on our gitlab issue board
