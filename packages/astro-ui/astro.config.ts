import { defineConfig } from 'astro/config'

import node from '@astrojs/node'
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/server-side-rendering/
  output: 'server',

  // https://docs.astro.build/en/guides/integrations-guide/node/
  adapter: node({
    mode: 'standalone',
  }),

  integrations: [
    // https://unocss.dev/integrations/astro
    unocss(),
  ],
})
