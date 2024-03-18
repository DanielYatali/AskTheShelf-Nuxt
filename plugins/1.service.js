import {useMainStore} from "~/store/main";
import {Service} from "~/services/Service";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const mainStore = useMainStore()
    const service = new Service("http://localhost:8000", mainStore);
    nuxtApp.provide("Service", service);
})