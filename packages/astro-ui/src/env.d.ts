/// <reference types="astro/client" />

import '@total-typescript/ts-reset'

interface ImportMetaEnv {
  readonly PUBLIC_GRAPHQL_ENDPOINT: string
  readonly PUBLIC_DIRECTUS_ASSETS_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
