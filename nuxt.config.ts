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
        importPT: { from: path.resolve(__dirname, './presets/lara/') },
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
    }
})
