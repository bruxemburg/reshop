import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

import uno from 'unocss/preset-uno'
import icons from 'unocss/preset-icons'

import { theme } from 'unocss/preset-mini'

export default defineConfig<Theme>({
  presets: [
    // https://github.com/unocss/unocss/tree/main/packages/preset-uno
    uno(),

    // https://github.com/unocss/unocss/tree/main/packages/preset-icons
    icons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        'align-self': 'center'
      }
    })
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Pretendard Std Variable"',
        '"Pretendard Std"',
        theme.fontFamily.sans
      ].join(',')
    }
  } as Theme,
  transformers: [
    // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
    transformerDirectives(),

    // https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group
    transformerVariantGroup()
  ],
  shortcuts: [
    // flex-center => flex items-center justify-center
    [/^flex-(start|end|center)$/, ([, p]) => `flex items-${p} justify-${p}`],

    // gap-8 => gap-8 supports-[not_(gap:calc(8rem/4))]:sibling:children:m, literally for wider support
    [
      /^gap?(.*-)(\d+)$/,
      ([, p, v]) => {
        const axis = p.replaceAll('-', '')
        const supports = `supports-[not_(gap:calc(${v}rem/4))]:sibling:children:m`

        const rule =
          axis === ''
            ? `${supports}l-${v} ${supports}t-${v}`
            : axis === 'x'
            ? `${supports}l-${v}`
            : `${supports}t-${v}`

        return `gap-${axis}-${v} ${rule}`
      }
    ]
  ],
  preflights: [
    // fixes text rendering and height on html level
    {
      getCSS: () => `
        html {
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          min-height: calc(100% + env(safe-area-inset-top));
        }
      `
    },

    // extra checks for scrollbar gutter
    {
      getCSS: () => `
        @supports (scrollbar-gutter: stable) {
          html {
            scrollbar-gutter: stable;
          }
        }
      `
    },

    // custom font family
    // https://github.com/orioncactus/pretendard/tree/main/packages/pretendard-std/docs/en#font-family
    {
      getCSS: ({ generator: { userConfig }, theme }) => `
        html {
          font-family: ${(userConfig.theme ?? theme).fontFamily?.sans};
        }
      `
    }
  ]
})
