<img alt="Reshop thumbnail" src="https://user-images.githubusercontent.com/70956582/234014121-5b877eb2-dd82-4ce6-9fdd-73f5ba4d80da.png">
<h1 align="center">Reshop</h3>

<p align="center">
  Shopping experience, reimagined
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#development"><strong>Development</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#contributors"><strong>Contributors</strong></a>
</p>

## Introduction

Reshop is an e-commerce platform built under extreme constraints just for sake of fun :upside_down_face:

## Development

Below we describe the process of running the application locally.

### Prerequisites
 - ([Docker](https://www.docker.com/) OR [Node](https://nodejs.org/en/download)) AND [Hasura CLI](https://github.com/hasura/graphql-engine/releases) are required

### Setting up
1. Create a copy of the `.env.example` files in the both `directus` and `hasura` directories and name it `.env`
1. Put valid values into the `.env` files, i.e.
    ```diff
    # unique identifier for the project
    + KEY=SECRET
    - KEY= 
    ```

### Apply db migrations and Hasura metadata
1. Create a new or use existing Hasura free tier project
2. Create a new or use existing Postgres db
3. Connect it to your Hasura project
4. Don't forget to update `.env` files with new data (if any)
5. Run the `hasura deploy` command in your terminal from the `hasura` directory
6. If something will go wrong, or db migrations are corrupted, you can use Directus snapshot.yaml instead. In order to do so, run the following commands: `npx directus bootstrap` and then `npx directus schema apply ./snapshot.yaml` from the `directus` directory

### Launching Directus admin-panel
- Please run all the commands mentioned in this topic from the `directus` directory

#### Method 1 - Using docker:
1. Run the `docker-compose up` command
2. Wait for the `Server started` output
3. Open the URL provided in the same output line
4. Have ~~fun~~ pain

#### Method 2 - Using npm (or other package managers):
1. Run the `npm i directus` , which will install the Directus package
2. Run the `npx directus start` to launch the admin panel
3. Open the link provided in the output
4. Enter the login and password that you configured in the `.env` file
5. Good luck :)

#### Known issues:
1. In case you can't log-in into the admin panel (getting 401 response), it may be because Directus didn't create a such user. In order to create it manually, first, create an admin role if it doesn't exists `npx directus roles create --admin --role admin` (it will also output new roles' UUID, which we will need in the next command) and then run `npx directus users create --email {{ replace_me_with_the_email_from_the_env_file }} --password {{ replace_me_with_the_password_from_the_env_file }} --role {{ replace_me_with_the_role_UUID }}` to create an admin user.

### Launching Hasura console locally
1. Just run the `hasura console` command from the `hasura` directory

## Features
- :cloud: [Hasura Cloud](https://hasura.io/)
- :rabbit2: [Directus](https://directus.io/)
- :zap: [Redis Cache](https://redis.io/)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
