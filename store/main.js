import {defineStore} from "pinia"

export const useMainStore = defineStore('main', () => {
    const products = ref([])
    const product = ref(null)
    const product_id = ref(null)
    const chatMessages = ref([])

    // const setInstalledApplications = (applications) => {
    //     installedApps.value = applications
    // }

})