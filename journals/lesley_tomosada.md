## Monday, November 21, 2022
It is a short week this week! Last week, we decided to make a goal to finish our endpoints by the time we left for Thanksgiving break and it seems like we are on track to get there. Although we are making great progress, I am definitely nervous by how soon our deadline is approaching! We're still continuing to group code our endpoints for the most part. Today we finished McKenzie's create a preference form and were able to get it to show up on the gathering in the database! Super exciting!! We also were able to get the database hooked up for our accounts microservice. Since everyone kept accidentally calling Mongo mango, we decided to name our second database mango. A great test of our eyes haha. All that is left on our backend is finishing up the auth, which hopefully shouldn't be too bad with jwotdown and adding onto Cindy's create a recommendation endpoint. We need to add in a function to aggregate and choose a cuisine / price point to send to the yelp API. 

## Friday, November 18, 2022
We made a lot of great progress today!! We updated our hardcoded data to actually connect to the database instead of producing the hardcoded data. We were able to create and connect 3 different endpoints for our gatherings. These were create gathering, get one gathering, and get all gatherings. It was so exciting when we were able to successfully test each one, and then see it show up in mongo express! One aha moment for me today was when we were getting an error getting all gatherings because id was returning the wrong type. I suggested that we wrap it in a str and it worked!! We were all very excited and arms went flying. Cindy also showed us some progress she made on her endpoint and the yelp API integration. It was great!!

## Thursday, November 17, 2022
Today we learned about MongoDB, and have ultimately decided to use it over PostgreSQL. When we had group time to work, we added the MongoDB database to our docker compose yaml file. We tried to hook up mongo-express and ran into some trouble. When using mongo:5, we were receiving an error about authentication, however McKenzie tried using Mongo:0.54 instead and it worked then. We were all too tired to try to look more into it but we will get to it tomorrow. MongoDB seems cool, seems simpler to use and we will have more flexibility if we want to change any fields in the future. 

## Wednesday, November 16, 2022
Today our group decided to group code our first endpoint for creating a gathering. We were all a little fuzzy on the steps but bouncing ideas off each other as well as using previous examples from class we were able to get through it and make our first post request!! This was a great AHA moment for all of us to get it working. 

We had to hard code in data since we haven't decided which database to use yet. Once we got the first endpoint done we decided to explore the Yelp API while we wait to learn about MongoDB tonight/tomorrow. 

## Tuesday, November 15, 2022

Today our group worked on:
* Finalizing our API endpoints
* Breaking down and assigning endpoints to members
* Creating issues on our gitlab issue board 

Today we were all still discussing the design together. We had our design review with James and got the ok from him as well as some additional clarification on one of the endpoints that we were having some trouble on. 

Before today I was a little fuzzy on what issues were, but creating the board and putting issues in it helped clarify that for me. 