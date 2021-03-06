import { defineNuxtConfig } from 'nuxt'

const lifecycle = process.env.npm_lifecycle_event

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // css
    css: ['~/assets/scss/index.scss'],

    // build
    build: {
        transpile:
            lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
    },

    typescript: {
        strict: true,
        shim: false,
    },

    // build modules
    modules: [
      '@nuxt/content',
      'unplugin-icons/nuxt',
    ],

    // auto import components
    components: true,
})
