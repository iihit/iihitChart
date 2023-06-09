// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css', integrity: 'sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==', crossorigin: 'anonymous' },
      ]
    },
  },
  css: [
    '~/assets/scss/index.scss',
  ],
  plugins: [
    {
      src: '~/plugins/tradingviewChart.ts',
      mode: 'client'
    },
  ],
  runtimeConfig: {
    bitmexAPI: process.env.BITMEX_API,
    bitmexSecret: process.env.BITMEX_SECRET,
  }
})
