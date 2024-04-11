import {createAuth0} from '@auth0/auth0-vue';

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    //only use this in the client side
    if (process.client) {
        let auth0 = createAuth0({
            domain: config.public.authDomain,
            clientId: config.public.authClientId,
            authorizationParams: {
                redirect_uri: "http://localhost:9000/callback",
                audience: config.public.authAudience,
            },
            cacheLocation: 'localstorage',
            useRefreshTokens: true,
        })
        nuxtApp.vueApp.use(auth0)
        nuxtApp.provide('auth0', auth0)//added this to make it available in the service plugin. I don't know if this is the right way to do it. The auth0 composable was not working (even though the auth0 plugin was loaded)
    }
})