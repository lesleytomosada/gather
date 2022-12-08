# Gather

Gather is an application designed for the indecisive and hungry. The application helps determine a restaurant based on provided cuisine and price point preferences. So gather around with Gather!

### Team

- McKenzie Barker
- Cindy Chiang
- Daisy Song
- Lesley Tomosada

### Unit Tests

#### Gatherings

- Create a Gathering - McKenzie Barker
- Get All Gatherings - Lesley Tomosada

#### Recommendations

- Get Cuisine - Cindy Chiang
- Get Minimum Price - Daisy Song

## Design

- [API Design](docs/api-design.md)
- [Data Model](docs/data-model.md)
- [Diagram & User Story](docs/diagrams.md)
- [Integrations](docs/integrations.md)

## Functionality

- Visitors to Gather must have an account and log in to use the site
- Users can visit the Create a Gathering page to create their Gathering
- After creation, the page will redirect to the Gathering's detail page
- On the Gathering detail page, the user can add each individual's restaurant preferences for price and cuisine
- Once a preference exists, the user can create a recommendation, which will return a suggested restaurant from the Yelp API
- Users can view a list of all upcoming and past Gatherings at the Gathering List page

## Getting Started

Please note the following directions to start the application:

1.  Fork and clone from the repository https://gitlab.com/seabeast/gather.
2.  Upon opening the repository, please click on the clone button and select "Clone with HTTPS".
3.  Open a terminal and navigate to the directory where this application will be stored. To navigate to a directory, use the command `cd <<directory name>>`. If you need to make a new directory, use the command `mkdir <<directory name>>`.
4.  Once you've navigated to the appropriate directory, execute the command `git clone` and paste the copied repository link.
5.  Then enter `code .` to open the application in Visual Studio Code.
6.  Because this application will require the use of Docker, you'll need to execute the following commands in the terminal in this order:

        docker volume create mongo-data
        docker volume create account-data
        docker-compose build
        docker-compose up

7.  To view the application, go to http://localhost:3000.

// Note: When you run `docker-compose up` and if you're on macOS, you will see a warning about an environment variable named OS being missing. You can safely ignore this.
