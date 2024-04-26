import {defineStore} from "pinia"

export const useMainStore = defineStore('main', () => {
    const products = ref([])
    const product = ref(null)
    const product_id = ref(null)
    const messages = ref([])
    const loading = ref(false)

    const addMessage = (message) => {
        messages.value.push(message)
    }

    return {
        products,
        product,
        product_id,
        messages,
        addMessage
    }
})