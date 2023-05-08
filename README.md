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

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Introduction

Reshop is an e-commerce platform built under extreme constraints just for sake of fun :upside_down_face:

## Development

Bellow we describe the process of running the application locally.

### Prerequisites
 - [Docker](https://www.docker.com/)
 - [`docker-compose`](https://docs.docker.com/compose/)
 - [Hasura CLI](https://github.com/hasura/graphql-engine/releases)

### Setting up
1. Create the copy of `.env.example` file
1. Rename it to `.env`, i.e.
    ```diff
    + .env
    - .env.example Copy
    ```
1. Put valid values into `.env`, i.e.
    ```diff
    # unique identifier for the project
    + KEY=SECRET
    - KEY= 
    ```
1. Do above step for each `package` under `packages/` directory

### Running
1. `docker-compose up -d` - to run Directus and Redis Cache
1. Go to Directus container CLI and use `npx directus schema apply --yes ./snapshots/[name].yaml` to apply some schema
1. Before launching Hasura make sure you do:
    1. Applied existing metadata: `hasura metadata apply`
    1. Applied existing seeds: `hasura seed apply --file [seed_file]`
    1. Or do everything at once by using `hasura deploy --with-seeds` 
1. `hasura console` - to run Hasura locally
1. For more follow [Hasura CLI guide](https://hasura.io/docs/latest/hasura-cli/commands/index/)

### Stopping
1. Before make sure you've created Directus snapshot of your changes `npx directus schema snapshot --yes ./snapshots/[name].yaml`
1. Make sure you've exported Directus metadata (such as file uploads etc.) by `hasura seed create directus_metadata_seed --from-table directus_presets --from-table directus_files --from-table directus_folders --from-table directus_settings`
1. `docker-compose down` - to stop Docker containers use `--volumes` to wipe the database

## Features
- :cloud: [Hasura Cloud](https://hasura.io/)
- :rabbit2: [Directus](https://directus.io/)
- :zap: [Redis Cache](https://redis.io/)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/e3stpavel"><img src="https://avatars.githubusercontent.com/u/70956582?v=4?s=100" width="100px;" alt="e3stpavel"/><br /><sub><b>e3stpavel</b></sub></a><br /><a href="https://github.com/bruxemburg/reshop/commits?author=e3stpavel" title="Code">💻</a> <a href="https://github.com/bruxemburg/reshop/commits?author=e3stpavel" title="Documentation">📖</a> <a href="https://github.com/bruxemburg/reshop/issues?q=author%3Ae3stpavel" title="Bug reports">🐛</a> <a href="#design-e3stpavel" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/eskozloi"><img src="https://avatars.githubusercontent.com/u/72350904?v=4?s=100" width="100px;" alt="Esko Zloi"/><br /><sub><b>Esko Zloi</b></sub></a><br /><a href="https://github.com/bruxemburg/reshop/commits?author=eskozloi" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
