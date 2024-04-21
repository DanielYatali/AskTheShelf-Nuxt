// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: false},
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    runtimeConfig: {
        public: {
            authDomain: '',
            authClientId: '',
            authAudience: '',
            authScopes: '',
            appBase: '',
            authLogoutRedirectUri: '',
            serviceEndpoint: '',
        }
    },
})
