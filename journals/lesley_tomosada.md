## Thursday, December 1, 2022

## Wednesday, November 30, 2022

We didn't get a whole lot of project time today but we were still super productive! We did about 15 minutes of pair programming before lunch while Daisy and Cindy worked on a little bit of the auth stuff and McKenzie and I were trouble shooting an issue we had with our dates showing up on the front end. They were showing in UTC/GMT, which made things look like they were happening at 2am instead of 6pm. After lunch we regrouped and told the group about our discovery. Cindy was super invested too and we all were researching how to make the time show up correctly. We then figured out that while the date and time were being stored in mongo as GMT, when we use the "new Date and .toLocaleDate() it was automatically default that same time stamp to our local Pacific time. Luckily Cindy was able to do some great digging and found out that if we added "Z" to the string in which we were converting, it showed in our correct time zone!! WOooooo!! After the afternoon auth lecture, we realized we were all more or less done with our components bare bones functionality. We created another branch called "TestBox" to merge everything without messying up our main / individual component branches since we will need to edit them for whatever css we end up doing. This will make merge conflicts easier hopefully! We discussed that tomorrow we will plan to work on finishing up our auth and hopefully into CI/CD.

The group also helped me figure out my issue from yesterday. I needed to add [] into my function before the last ).

## Tuesday, November 29, 2022

Today we actually broke off to work individually on our components. We refactored our App.js due to an issue that McKenzie was running into trying to pass the gathering id into the url. I spent some time trying to make data through the docs so I can test the functionality of my page. I ran into a few issues trying to create data, because I realized that I was trying to create an event on Christmas and many restaurants are closed on Christmas. But I also think there is some limitation of how far into the future we can do a search for. It took some time to remember how to use React, as well as understanding how to use hooks, since I didn't use them last time. Perhaps doing some additional research on Youtube will help a little bit. I did however get some data to show up on my page!! That was exciting. One issue I ran into though was that the ghi container continually keeps refreshing at a crazy fast speed. Will need to ask the team if they've ever encountered this before. It's cool that I got data to show up, however I just made a simple table to get it to show up. Making the cards that we wanted will be a little tougher, but I have the conference go repo to refer back to for help!

## Monday, November 28, 2022

Today we got started on our front end components. We had actually planned to split off and work on our assigned components. However,we first decided to together, code our our App.js file to make it easier and more consistent. There's also much less potential for merge conflicts on this page that way. We also set up all the files and imported them to App.js. We were getting an error about the react-router-dom, and we realized we had to install it to the ghi directory. After we finished that, Cindy showed us how she figured out how to make our duplicate key error work. She found this in the books example repo from learn. We had to add a new setup directory and add a file to create account indices. Thanks Cindy! With this, we merged Daisy's auth branch to main. We will tackle restricting each endpoint to being logged in once we finish our components. We figured this would make testing easier. We learned CI/CD in lecture today but will wait to implement that once we have the updated CI/CD cookbook with the render.com instructions instead of Heroku.

## Wednesday, November 23, 2022

We started off the day great with Cindy figuring out why our Mango Express wasn't working. She found in docker that the server it was trying to access was mongo instead of mango. That was a great relief and then we were able to wrap up auth. There were a few more issues along the way, but the main one was that in our authenticator file we were referencing username instead of email, oops! We also ran into a little bit of trouble because our Account model was expecting a property hashed_password and we weren't passing it in. We will still need to add the line of code to each of our endpoints to require authentication, but we will tackle that once we get our front end components working. We also added the preference aggregation logic into Cindy's preference endpoint. It was actually somewhat similar to one of our practice projects this morning so that was a pretty cool warm up for us. We've set the $ to equal the lowest price chosen in the preference and the cuisine will either pick the highest frequency chosen or a random choice between any ties. We were able to successfully test it in the browser and it was SO EXCITING!! All the little pieces coming together is so exciting. We ended the day by dividing up the react components so people could work on them over the Thanksgiving break if they wanted to. I will be working on the gathering list page!

## Tuesday, November 22, 2022

Unfortunately what we thought we successfully set up yesterday actually didn't work. We're running into an error that is telling us that we dont have the proper authorization to access the database. This is the same issue that we got last Thursday and just changed the version and it worked. It seems like now we need to actually get to the root of the issue instead of slapping on bandaids like changing the version number. This was definitely sad for us as this felt like the biggest issue we've had so far. We though that the database was set up correctly, but today when we went to test our create an account functionality, it didn't work. Print statements were showing us that the data was being accessed correctly, but was returning false once we tried to retrieve it. We looked again at the mango express and realized that we didn't have the admin or config pages, and we think that might be the reason that our create is failing. We'll have to investigate more tomorrow because we were all too brain fried. Today we did take a bit of a step back and talked through what the code was doing and everyone had questions they wanted to ask. This was nice as it helped us get on the same page and understand the code a little bit better. We'll try on our own for a little bit longer tomorrow and then ask for help from an instructor or SEIR. ttfn

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

- Finalizing our API endpoints
- Breaking down and assigning endpoints to members
- Creating issues on our gitlab issue board

Today we were all still discussing the design together. We had our design review with James and got the ok from him as well as some additional clarification on one of the endpoints that we were having some trouble on.

Before today I was a little fuzzy on what issues were, but creating the board and putting issues in it helped clarify that for me.
