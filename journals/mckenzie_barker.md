## Monday, November 21, 2022
## Friday, November 18, 2022
We made a lot of great progress today!! We updated our hardcoded data to actually connect to the database instead of producing the hardcoded data. We were able to create and connect 3 different endpoints for our gatherings. These were create gathering, get one gathering, and get all gatherings. It was so exciting when we were able to successfully test each one, and then see it show up in mongo express! One aha moment for me today was when we were getting an error getting all gatherings because id ws returning the wrong type. I suggested that we wrap it in a str and it worked!! We were all very excited and arms went flying. Cindy also showed us some progress she made on her endpoint and the yelp API integration. It was great!!

## Thursday, November 17, 2022
Today we learned about MongoDB, and have ultimately decided to use it over PostgreSQL. When we had group time to work, we added the MongoDB database to our docker compose yaml file. We tried to hook up mongo-express and ran into some trouble. When using mongo:5, we were receiving an error about authentication, however McKenzie tried using Mongo:0.54 instead and it worked then. We were all too tired to try to look more into it but we will get to it tomorrow. MongoDB seems cool, seems simpler to use and we will have more flexibility if we want to change any fields in the future.

After learning about MongoDB we decided to go with that for our site's database. We added our database information to the docker compose file together as a group. When we went to use Mongo express we ran into errors regarding authentication. Our solution for this was to use a different Mongo version(:54) and got it to work. We decided on Mongo for its flexibility

## Wednesday, November 16, 2022
We group coded our first three endpoints today - we wrote our create gathering endpoint, our list of gatherings endpoint, and get one gathering endpoint.
We decided to hard code our test data since we haven't decided if we're using MongoDB or PostgreSQL. After we wrote the code for our create gathering endpoint we decided to explore the Yelp API and will wait on decided our database until we learn about MongoDB.

## Tuesday, November 15, 2022

Our to-dos for today:
* Finalizing our API endpoints
* Breaking down and assigning endpoints to each team member
* Creating issues on our gitlab issue board

We spent a lot of time today discussing the design of the site and reviewed it with James. We received feedback on our endpoints and were able to get them all written out how we expect our site to function. Once all of the endpoints were designed, we assigned each to a team member and will decide on if we are going to group code, partner code, or spend time working individually.
