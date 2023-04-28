<img alt="Reshop thumbnail" src="https://user-images.githubusercontent.com/70956582/234014121-5b877eb2-dd82-4ce6-9fdd-73f5ba4d80da.png">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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

### Running
1. `docker-compose up -d` - to run Directus and Redis Cache
1. `hasura console` - to run Hasura locally
1. For more follow [Hasura CLI guide](https://hasura.io/docs/latest/hasura-cli/commands/index/)

### Stopping
1. `docker-compose down` - to stop Docker containers

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
