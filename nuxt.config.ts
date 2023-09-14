// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        ['@pinia/nuxt', {autoImports: ['defineStore', 'acceptHMRUpdate']}],
        '@formkit/nuxt',
        'nuxt-icon',

    ],
    imports: {
        dirs: ['store']
    },
    app: {
        head: {
            title: 'IM-Overflow',
        }
    },
})
