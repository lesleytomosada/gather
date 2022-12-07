# Gather

Gather is an application designed for the indecisive and hungry. The application helps determine a restaurant based on provided cuisine and price point preferences. So gather around with Gather!

Team:
- McKenzie Barker
- Cindy Chiang
- Daisy Song
- Lesley Tomosada

## Design
- [Wire-frame diagrams]
- [API design](docs/api-design.md)
- [Data Model](docs/data-model.md)
- [GHI](docs/ghi.md)
- [Integrations](docs/integrations.md)


## Getting Started

Please note the following directions to start the application:
1. Fork and clone from the repository https://gitlab.com/seabeast/gather.
2. Upon opening the repository, please click on the clone button and select "Clone with HTTPS".
3. Open a terminal and navigate to the directory where this application will be stored. To navigate to a directory, use the command `cd <<directory name>>`. If you need to make a new directory, use the command `mkdir <<directory name>>`.
4. Once you've navigated to the appropriate directory, execute the comand `git clone` and paste the copied repository link.
5. Then enter `code .` to open the application in Visual Studio Code.
6. Because this application will require the use of Docker, you'll need to execute the following commands in the terminal in this order:

        docker volume create mongo-data
        docker volume create account-data
        docker-compose build
        docker-compose up

7. To view the application, go to http://localhost:3000.

// Note: When you run `docker-compose up` and if you're on macOS, you will see a warning about an environment variable named OS being missing. You can safely ignore this.