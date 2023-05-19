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

1. Run `docker-compose up` from the root of the project, which will start DBs, Directus, and Hasura services
1. Apply data seeds via hasura cli:
   1. Go to the hasura directory `cd ./packages/hasura-graphql`
   1. Apply whatever seeds you need: `hasura seed apply --file [seed_file]` (if you are planning to use directus admin pannel, please apply `directus_admin_user` and the latest `directus_metadata` seeds, and if you want to test FE you may also apply the latest `shop_data` seed)
1. Run `pnpm run dev` in the `cd ./packages/astro-ui` directory to start the Astro FE server.
1. Go to the `http://0.0.0.0:8080/console` to open the Hasura console
1. Go to the `http://0.0.0.0:8055` to open the Directus admin pannel
1. Go to the `http://0.0.0.0:3000` to see the FE

### Stopping

1. Before make sure you've created Directus snapshot of your changes `npx directus schema snapshot --yes ./snapshots/[name].yaml`
1. Make sure you've exported Directus metadata (such as file uploads etc.) by `hasura seed create directus_metadata_seed --from-table directus_presets --from-table directus_files --from-table directus_permissions --from-table directus_folders --from-table directus_settings` or `hasura seed create shop_data_seed --from-table categories --from-table products --from-table products_files --from-table users --from-table reviews --from-table orders --from-table order_lines`
1. `docker-compose down` - to stop Docker containers, you might also use `--volumes` to wipe the database data

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
