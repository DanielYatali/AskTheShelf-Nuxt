// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
    devtools: {enabled: false},
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-primevue'
    ],
    primevue: {
        unstyled: true,
        importPT: { as: 'Lara', from: '../components/presets/lara'},
        components: {
            exclude: ["Editor", "Chart"]
        }
    },
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
    build: {
        transpile: ["nuxt-primevue"],
    },
})
