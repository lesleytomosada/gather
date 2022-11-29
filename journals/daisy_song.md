## November 28, 2022
Running a issue, react-router-dom is not resovled, we change to ghi directory and run
npm install react-router-dom --save to fix it


## November 23, 2022
Cindy was excited to tell us in the morning that she figure something out for our authorization login. So it is because we accidentally wrote "email" to "username" in the routers accounts.py
after fixing that, we are able to create an account, and login logout function all work

## November 22, 2022
We run into an error that we we dont have the proper authorization to access the database. We brainstorm a little bit but feel lost somehow. We thought that the database was set up correctly, but we couldnt create an account functionally. Will try figure it out tomorrow with our amazing team. We also plan to ask for help from SEIR if we canot work it out

## November  21, 2022
We are still on progress. We decided to finish our endpoints before thanksgiving, our amazing teammates are very confident that we can have that done. Today we finished McKenzie's create a preference form and were able to get it to show up on the gathering in the database. We were also able to get the database hooked up for our accounts microservice, which was very challenging.
tomorrow we are going to write some codes to finish our auth backend.

## November 18, 2022
We successfully create 3 different endpoints of our gathering.
- Create gatherings
- get one gathering
- get all gatherings
We did some test for each function and all of them work! Especially they show up in mongo express.

## November 17, 2022

Today, We Learned about MongoDB:
- Our team decided to use MongoDB database instead of PostgreSQL.
- Adding the MongoDB database to our docker compose yaml file. We tried to hook up mongo-express and ran into some trouble. When using mongo:5, we were receiving an error about authentication

## November 16, 2022

Today, I worked on:
- Having fastAPI set up
We had to hard code in data since we haven't decided which database to use yet. Once we got the first endpoint done we decided to explore the Yelp API while we wait to learn about MongoDB tonight/tomorrow.

## November 15, 2022

Today, I worked on:
- Finishing the API endpoints
- Assigning endpoints, branches, tasks to my teammate. I am working on authBranch
- Gitlab Issues Board and finishing some git commits

Our team worked together to divide tasks based on endpoints and agreed that each endpoint would have its own working branch to keep our work organized.
