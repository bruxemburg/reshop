/// <reference types="astro/client" />

import "@total-typescript/ts-reset"

interface ImportMetaEnv {
  readonly GRAPHQL_ENDPOINT: string
  readonly DIRECTUS_ASSETS_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
