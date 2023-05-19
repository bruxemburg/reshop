import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import unocss from 'unocss/astro'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/server-side-rendering/
  output: 'server',

  // https://docs.astro.build/en/guides/integrations-guide/node/
  adapter: node({
    mode: 'standalone'
  }),

  integrations: [
    // https://unocss.dev/integrations/astro
    unocss({
      injectReset: '@unocss/reset/tailwind-compat.css'
    }),
    vue()
  ],

  // https://docs.astro.build/en/reference/configuration-reference/#trailingslash
  trailingSlash: 'never'
})
