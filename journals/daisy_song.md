## December 9, 2022
Today, On our first demo to Andrew, our MVP and project requirements were complete. But Andrew noted our unit tests needed to specifically test our FastAPI endpoints. So, we decides to delete our unit tests for get_min_price and get_cuisine and reviewed other endpoints that we could create. Cindy created get_one_gathering and McKenzie created a unit test for create_preference. After Andrew was reviewing, both unit tests were passing. We spent the rest of the day testing out some CSS styling. 

## December 8, 2022
Because we had all the issues solved last night in CI/CD. Today we focused on adding an alert for signing up frontend. If the email existing, it will pop up "You've entered an email already in use! Please log in or try again." It was not smoothy, because We forgot to put await in the async function that handle submit action.
After fixing that, we were working on split up README.md and looked for a CSS theme to use on our project.

## December 7, 2022
After finishing standing ups in the morning, we asked help from Andrew about our render microservices not being able to create data due to unauthorized accounts after deployment. Andrew gave us a very sure answer that the token created from our render accounts microservice no longer shares the cookies with our second microservice. However, creating backend data could now be done via Mongo Express. Well, that answered all the questions! Then we switched gears to unit tests.
We decided to assign the following unit tests: get_cuisine (my test) and get_min_price (Daisy) in our gatherings recommendations routers and also to test the functions for get_all_gatherings (Lesley) and create_gathering (McKenzie) functions in our gatherings router. Error agian. Jason told us that we needed an __init__.py file.
The unit test was not as easy as we thought, we realized we were getting unauthorized restrictions and this was because the endpoints were restricted.
We referred to the the example repo from learn and noticed that we could create a fake account to override the account authorization. When we started working on the create gatherings unit test, we started running into problems with setting up the datetime as it's not serializable.
With following Jason's suggestion We ended up removing GatheringIn and just passing in an object and it worked. Next we pushed this all to main and uncommented the unit test job in our gitlab ci file.

## December 6, 2022
Still worked on CI/CD. We have changed our environment variables to match what our database_url variable had in render. This led to a successful deploy for us! Today we plan to deploy accounts microservice. While we were waiting, we merge few changes from Lesley. She made a button that says  create a gathering link to the create a gathering page and also made the name and yelp addresses into clickable links.
There was an issue that said our server had no address. Luckily Daniel came to our breakout room and help us troubleshooting. He pointed out that we were missing  +srv in our queries files (as that's the shape it was in from the url provided by MongoDB Atlas). After fixing that, we were able to deploy our front end page. Life saver!
Then we fixed all the lint errors and delete all console.logs. So that we are able to pass and view our frontend in the gitlab websites.
We noticed that we still weren't able to login to our website and our render logs noted some error responses. We acturally have no clue what is going on. So decided to wait for rescue from our teacher tomorrow.

## December 5, 2022
Today we started CI/CD! We were kind of nervous, because it is totally new to us.
Reviewing reading from Learn CI cookbook section, we have our .gitlab-ci.yml file set up. Udpated our App.js file to include our basename  and created a .env file to hold our Yelp API key. We then worked together to navigate creating a database through MongoDB atlas.  We were a little confused on how to create a cluster and what we should have designated as our IP address, but we figured we'd try something and then update as needed.
Our deployment failed as we were getting a router module not found error, so we managed to fix that by adding an __init__.py file. However, we were still getting the same error. Cindy came up with a golden suggestion that we needed to update our Dockerfile to COPY our routers, queries, and authenticator.py file.  We added our SIGNING KEY to the environment variables on render, which resolved this error,changing the environment variables (for MONGOHOST, MONGOUSER, MONGOPASSWORD) into the various pieces from the Mongo Atlas url that was provided upon creating a cluster, the error is gone. It was not as bad as we thought.

## December 2, 2022
Our front end did not go as smooth as backend. But we have smartest teammates work as a strong team!
We got an issue "useNavigate() may be used only in the context of a component". I did some research and figure out we need to wrap the BrowserRouter in(App.js) around all of other components <AuthProvider><GetToken /><Nav />as it child router. And error is gone.
We were still running into errors when logging in,
Cindy wanted to just suggest update the field the arguments passed in the login function (from email to username) within the context provider. She also explained because McKenzie connected the dots in that the login function in our accounts microservice FastAPI docs, required the username field, which made sense as to why the argument in the context provider needed to be updated from email to username. Our frontend auth was up and running. So we decide to merge our component branchs to main.

## December 1, 2022
Today we worked on helping Mckenzie troubleshoot her gathering detail component in order to make our fetch to the fastAPI endpoint to make a restaurant recommendation.
We agreed that even though we were trying to get a recommendation, it's actually creating a recommendation, which would be a POST method. Lesley pointed out that because the logic of making a restaurant recommendation is handled in the backend, our fetch to the endpoint didn't need the body framework. With that being considered, we agreed we didn't need to pass the object of a recommendation in our router. And it helped we get the restaurant recommendation on frontend!
We also worded on authentication part to restrict our endpoints to those who are logged in. Within adding an additional authenticator.py file to our gatherings directory with passing pass.

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
