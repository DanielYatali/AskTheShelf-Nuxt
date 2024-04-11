import {useMainStore} from "~/store/main";
import {Service} from "~/services/Service.js";
import {ApiRequest} from "~/services/ApiRequest.js";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const {$auth0} = useNuxtApp()
    const mainStore = useMainStore()
    console.log("endpoint", config.public.serviceEndpoint)
    const api = new ApiRequest(config.public.authAudience, $auth0.getAccessTokenSilently, $auth0.getAccessTokenWithPopup, mainStore);
    const service = new Service(config.public.serviceEndpoint, mainStore, api);
    nuxtApp.provide("Service", service);
})