## Wednesday, December 7, 2022
Today was code freeze day and we just barely made it through!! We learned that on render, our microservices are not connected on the database which is why we couldn't pass our token, and that this is to be expected so we could move on from that. We then wrote our unit tests and found out that while we are working locally we need to take the "+srv" back out of our mongo strings for the database urls. We hit another stopping point when we were trying to pass datetime through our tests because on our GatheringIn model it needed to be formatted that way for the YelpAPI call. After trying a few different ways to convert the data to a string, we decided to just hardcode our test data into a dictionary instead of passing our GatheringIn. We hit more errors with our environment variables and realized we needed to add them each to gitlab (previously we had only added our Yelp api key). Once all of that was completed we were up and running!

## Tuesday, December 6, 2022
Today was another long CI/CD day. Cindy fixed our environment variables to match what our database_url variable had in render which fixed our deployment issues! We decided to deploy accounts microservice next. While we were waiting for render deploy I went back to my component and added the buttons to add a preference and generate a recommendation. We fixed a lot of linting errors that were causing our front end deployment to fail. We found out we needed to add +srv to each of our mongo_str in our queries to match what render had for the database url.

## Monday, December 5, 2022
It's deployment day! We started out by working the CI cookbook. We removed our keys.py and added to our new .env file. We swapped any hard coded localhost addresses to reference our environment variables from our docker compose file. We all signed up for accounts on MongoDb. When we tried to deploy our app we were getting errors about our routers not being defined. We needed to update our dockerfile because we had commented out the copy routers line. We hit an error regarding our SIGNING_KEY and think we need to add that to our render page but will keep working on this tomorrow.

## Friday, December 2, 2022
The day started off with front end auth again. Cindy helped us realize that we need to change the field we had in our login function in our auth.js file from email to username which fixed our errors! We then began merging all of our front end components to main which took longer than expected but we got through all the merge conflicts. I started getting errors on my component again after merging so I will have to go back and work through that more on Monday.

## Thursday, December 1, 2022
I needed help today on part of my gathering detail component. I was getting a method not allowed error in my console when trying to create a recommendation. Once we realized we didn't need to pass a body through the request due to how our recommendation endpoint works we were able to fix the function and all of our react endpoints are done! We switched gears to authentication after that and restricted our endpoints except for the main page and added an authenticatory.py file. Once our backend auth was functional we started work on front end auth and hit a few errors and decided to let that be tomorrow's problem :)

## Wednesday, November 30, 2022
There was less dedicated project time today but we decided to split up into pair programming. Cindy and Daisy worked on accounts/auth pieces and Lesley and I tried to trouble shoot the formatting of our datetime info. We realized that our times were automatically converting to UTC and Cindy found that if we added "Z" to the end of the datetime string it would know that the time was in UTC so when we call toLocaleDate() it actually functioned the way we wanted!
We decided to create a TestBox branch to push all of our components to for testing before merging any of our components to main.

## Tuesday, November 29, 2022
We each split off to work on individual components. I was working on the gathering detail page which would start by showing the event's name, date/time, and location information. From there the user can create a preference via a button that navigates to the preference form, or generate a recommendation once at least one preference is added. Those buttons are not written in yet until we get everyone's components completed.

## Monday, November 28, 2022
Today was front end kick off day! We started by group coding our App.js file. We got an error about the react-router-dom and realized we needed to install it to the ghi directory still. Diasy merged her autth branch to main so we will be able to test our authentication once the components are all finished and functioning.

## Wednesday, November 23, 2022
Cindy figured out our accounts database issue!! She saw in Docker that the server it was trying to access was for our gatherings microservice instead of our accounts microservice. We also realized that in our authenticator file we were referencing username instead email so we fixed that. We also fixed our account creation by passing in a hashed_password value. We ended our day by creating a list of the needed react components and assigned them out to each team member.

## Tuesday, November 22, 2022
Our group had to take a step back today and look into database issues. We are getting an authorization error like we got with mango express on our gatherings microservice. We tried to fix this by updating the mongo version again but this did not solve our problem. We used print statements to verify that the data was being accessed correctly, but when we tried to receive it it would fail. Because we were all struggling with brain fog we decided to just step back, run through all the code that we had completed up to this point and be sure we are all on the same page on understanding all the pieces of code we've written so far.

## Monday, November 21, 2022
We continued to group code today and are focusing on making sure our endpoints are completed before the holiday this week. We got our accounts database linked with that microservice by updating our docker compose file.

## Friday, November 18, 2022
We were able to connect our endpoints to our database today. We tested our create, get one, and get all gatherings endpoints and were able to send data from our create endpoint to mongo express, and call that data back with our get one and get all endoints. We realized that we needed to wrap our "id" value in a str method because otherwise it returns an IdObject from mongo express.

## Thursday, November 17, 2022
After learning about MongoDB we decided to go with that for our site's database. We added our database information to the docker compose file together as a group. When we went to use Mongo express we ran into errors regarding authentication. Our solution for this was to use a different Mongo version(:54) and got it to work. We decided on Mongo for its flexibility.

## Wednesday, November 16, 2022
We group coded our first three endpoints today - we wrote our create gathering endpoint, our list of gatherings endpoint, and get one gathering endpoint.
We decided to hard code our test data since we haven't decided if we're using MongoDB or PostgreSQL. After we wrote the code for our create gathering endpoint we decided to explore the Yelp API and will wait on decided our database until we learn about MongoDB.

## Tuesday, November 15, 2022
Our to-dos for today:
* Finalizing our API endpoints
* Breaking down and assigning endpoints to each team member
* Creating issues on our gitlab issue board

We spent a lot of time today discussing the design of the site and reviewed it with James. We received feedback on our endpoints and were able to get them all written out how we expect our site to function. Once all of the endpoints were designed, we assigned each to a team member and will decide on if we are going to group code, partner code, or spend time working individually.
