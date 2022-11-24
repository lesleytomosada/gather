## November 21, 2022
Today, I worked on:
- "Create a Preference" endpoint
- Setup database (MongoDB) for Accounts microservice

The Seabeast team discussed the approach for how data would be stored in MongoDB for the "Create a Preference" endpoint. The two options included either creating its own collection or updating the database collection that's created upon creating a gathering (ie. the gatherings collection). The team determined that updating the gatherings collection would be the most uniform and consistent in grouping the pieces of data (in this case, the preferences) with a specific gathering. Because our preferences will be stored as list of dictionaries/objects, we discovered that when updating a collection, the use of the push operator in MongoDB would allow us to add an array with the the element (which will be our dictionaries/objects) if it doesn't exist. This was exactly what we needed! From there, the preferences endpoint was similar to the restaurant recommendation endpoint on the MongoDB side of things. We finished updating the code and was successful when creating a preference through FastAPI.

The team also worked on getting our database setup with our second microservice, Accounts. We had a few snags with mapping and coordinating the ports between our two microservices and with MongoDB. However, McKenzie was able to find some documentation on supporting more than one microservice and database with MongoDB and we were able to get our Mongo Express up and running for both microservices! We are making good progress and it's been really exciting to see things work each step of the way. 


## November 20, 2022
Today, I worked on:
- "Create a Recommendation" endpoint

I worked on designing the remaining segments to complete the "Create a Recommendation" endpoint. Next steps would require getting the preferences data, distilling the data into a criteria, and then pushing that into the Yelp API parameters. These parts will depend on how the preference data is stored (either through a new collection or updated through the gatherings collection), which is a segment that McKenzie is working on. In our next project session, we'll plan to discuss an approach on how we can connect the preference data into the restaurant recommendation. To prep for that discussion, I brainstormed a few ideas again, depending on how the preference data will be stored (in its own collection or updated in the gatherings collection). If it's the latter, I think there can be some similarities to how restaurant recommendations are added into the database.

## November 19, 2022
Today, I worked on:
- "Create a Recommendation" endpoint
- Updated GatheringOut class to include recommendation data

I worked on furthering next steps of the "Create a Recommendation" endpoint by shaping the data from the Yelp API call into the expected response shape. From our success in connecting with MongoDB, I was then able to work through on updating the set_recommendation query, which would help connect and store the selected restaurant to the database. I decided that the best way to keep our data uniform and organized would be to update the collection that's created when creating a gathering with the restaurant recommendation. Additionally, this would make it easier when getting a specific gathering details. Using the Pymongo documentation was helpful in guiding the steps to update a collection (filtering by a specific gathering id and setting new values).

Once I was able to successfully complete these steps, I then went back to update the parameter of location in the Yelp call as I had originally hardcoded that information. I wasn't exactly sure how to go about this at first, but after some debugging, I was able to import the code from our "Create a Gathering" endpoint repository to utilize getting a specific gathering by its id. From there, I was then able to utilize the location in the Yelp API call.

The last thing I worked on was adding the recommendation into our GatheringOut class so that when you get a specific gathering, it would include the restaurant recommendation. Because I used an update method in MongoDB for a gathering with the restaurant recommendation, it made getting a specific gathering and its details a lot simpler. I also learned more about the Optional type, which was useful when a restaurant recommendation did not exist in a gathering.

Each step in today's work was met with some errors, but it meant many ah-ha moments as I debugged and fixed them! Testing the endpoint to seeing the 200 success message every step of the way was awesome!


## November 18, 2022
Today, I worked on:
- worked on "Create a Gathering" endpoint
- worked on "Get a Gathering" endpoint
- worked on "Get All Gatherings" endpoint
- MongoDB setup and implementation

The Seabeast team decided to code together on implementing next steps with getting MongoDB connected to our FastAPI framework. As a first test, we wrote and added the MongoDB code for creating a gathering. We were successful in seeing the new gathering that we created through FastAPI in the database through Mongo Express. Next, we wrote the code for getting one gathering and getting all gatherings. When we tried, we hit a few errors in our terminal and worked together to debug. McKenzie and Lesley have both been really great at debugging and have eagle eyes with finding errors in our code. In one instance, we recalled that Mongo ids can contain numbers and letters, so we updated our id type hint to str. Additionally, we learned that with Mongo, the id of a document is stored as a ObjectId class. We did some research and through documentation, we learned that we needed to imported the ObjectId and wrapped the id variable with an ObjectId in order to search the database for the stored instance. On top of that, the ObjectId carries through, so also learned that we needed to wrap it with a string method to convert it into the expected type hint. With that, we were successful in getting 3 of our endpoints completed and connected to the database (to store data).

## November 17, 2022
Today, I worked on:
- Setup MongoDB
- Setup second microservice (Accounts)
- Worked on "Create a Recommendation" endpoint

The Seabeast team discussed the options between using a PostgreSQL and MongoDB database. With our application, we agreed that MongoDB would provide some flexibility and ease of use for storing and retrieving data. Although having a schema has its benefits, we plan to keep our data consistent and uniform so it should help keep our data organized with MongoDB.

The team coded together as a group in updating our Docker Compose yaml file to include the necessary pieces for our MongoDB and access to Mongo Express. We noted that we couldn't use the latest version of Mongo Express, but McKenzie dove into the research and tried changing our version number to 0.54. That tweak allowed Mongo Express up and running! We'll further look into this to understand why this might be the case. Additionally, we added pymongo into each of our requirements.txt files and also added our second microservice (Accounts) into the Docker Compose yaml.

I also began working on the "Create a Recommendation" endpoint which will ultimately help return a selected restaurant of each gathering. I was successful in creating the endpoint and getting the expected hardcoded response. The exciting part of the day was figuring out how to call the third-party API (Yelp). From there, I then filtered the list of restaurants by parameters of "location", "categories", and "open_now". Furthermore, I was able to code the logic for the Yelp call to return a randomized restaurant.


## November 16, 2022
Today, I worked on:
- Organized application directories and updated files
- "Create a Gathering" endpoint
- Explored Yelp API

The Seabeast team spent some time today to discuss project and directory organization. We agreed to utilize the Issues board to help track and document our workflow (to dos), progress, and any roadblocks/issues. We worked together to create directories for our two microservices, gatherings and accounts. We created directories for routers and queries and additionally created separate files in the respective directories for our endpoints (relating to gatherings, preferences, and restaurant recommendations) to anticipate and help minimize merge conflicts. We also updated the docker-compose yaml file in the service section to reflect our gatherings api.

The team utilized the Visual Studio Live Share tool to code together and attempt our first endpoint ("Create a Gathering") with the FastAPI framework. It was a great collaborative tool for the team to contribute and code together! We managed to write the code for creating a gathering (post) and was successful with our expected response through the FastAPI framework. This was a win for the team as we've now had some hands on experience with this new framework. Next steps, we'll need to determine a database, which will help in removing some of the roadblocks in our other endpoints.

I was able to create a Yelp account and gain access to an API key to begin exploring the Yelp API. Based on their documentation, I was able to successfully make a call to their business search endpoint through Insomnia, which will be vital in our restaurant recommendation endpoint. I also learned how to add the authorization header and my API key into Insomnia, while using the Query feature in Insomnia to help filter my search of businesses with parameters of location and categories.


## November 15, 2022
Today, I worked on:
- Finishing the API Endpoints
- Assigning endpoint, tasks, and branches
- Gitlab Issues Board

The Seabeast team discussed whether an endpoint of creating a restaurant recommendation was needed. Ultimately, we agreed that the endpoint is needed in order to help with storing the selected restaurant in the database so that it can persist on the frontend of the application.

The team worked together to divide backend tasks based on endpoints and agreed that each endpoint would have its own working branch to help keep our work organized and reduce merge issues. Each member would be responsible for creating the applicable branch. We also discussed and learned to use the Gitlab issues board and created issues according to our endpoints. I learned that by adding a commit id to a comment, it can link/connect the issue with the commit. Pretty cool!
