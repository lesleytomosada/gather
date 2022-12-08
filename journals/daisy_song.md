## December 1, 2022








## November 30, 2022
Our team run a dates zone issue. They were showing in UTC/GMT, so if we set time to 7pm it would pull the recommendation from 3pm which does not make sense.
After trouble shooting for few hours, Cindy came up with a solution that if we add "Z" to the string in which we were converting， and magic showing up! Our current time zone! Everyone feels so released after solving this tricky issue.
We also created another branch called "TestBox" to merge everything without messing up our main branch.

## November 29, 2022
Today we I have worked on my account branch for login and sign up in the frontend. I was able to create an account, and login in localhost 3000. Which is cool. However, I need to work on alert that email already existing in the database.
We also refactored our App.js due to an issue that McKenzie was running into trying to pass the gathering id into the url.

## November 28, 2022
Today we were running a issue, can't resolve react-router-dom, we did brainstorm and we change to ghi directory and run
npm install react-router-dom --save to fix the issue!
We also finished all our backend. We split up for the react front-end, and will have it done by this Friday.
Cindy also figured out how to make our duplicate key error work. We had to add a new setup directory and add a file to create account indices.
We are going to tackle restricting each endpoint to being logged in once we finish our components.

## November 23, 2022
Cindy was excited to tell us in the morning that she figure something out for our authorization login. So it is because we accidentally wrote "email" to "username" in the routers accounts.py
after fixing that, we are able to create an account, and login logout function all work

## November 22, 2022
We run into an error that we we do not have the proper authorization to access the database. We brainstorm a little bit but feel lost somehow. We thought that the database was set up correctly, but we could not create an account functionally. Will try figure it out tomorrow with our amazing team. We also plan to ask for help from SEIR if we can not work it out

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
