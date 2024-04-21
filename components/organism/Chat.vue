<script setup>
import {useMainStore} from "~/store/main.js";

const props = defineProps({
  product: Object,
  messages: Array
})
const tabs = [
  {id: 1, name: 'Architecto'},
  {id: 2, name: 'Corrupti'},
]
const mainStore = useMainStore();
const selectedTabIndex = ref(0)
const selectTab = (index) => {
  selectedTabIndex.value = index
}
const closeTab = (index) => {
  tabs.splice(index, 1)
}
const scrollContainer = ref(null)
const models = ref([
  {
    "name": "General",
    "description": "General model for all products",
    "id": 1,
    "value": "general"
  },
  {
    "name": "Product",
    "description": "Product model for all products",
    "id": 2,
    "value": "product"
  }
])
const selectedModel = ref(models.value[0].name)
const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]
const scrollToBottom = (timeout) => {
  setTimeout(() => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  }, timeout)
}

watch(() => mainStore.messages, () => {
  scrollToBottom(100)
}, {deep: true})
onMounted(() => {
  scrollToBottom(100)
})
</script>

<template>
  <div class="sticky z-40 bg-white top-0 flex flex-col space-y-1.5 pb-6">
    <div class="mt-2 mx-2">
      <div class="flex justify-between items-center">
        <button class="rounded-lg">
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
          </svg>
        </button>
        <select class="p-2 font-semibold text-lg rounded-lg" v-model="selectedModel">
          <option v-for="model in models">{{ model.name }}</option>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
      </div>
    </div>
    <p v-if="selectedModel === 'General'" class="mt-1 text-center text-gray-600">Results will be general</p>
    <p v-else class="mt-1 text-center text-gray-600">Results will be based on the context of the current product</p>
  </div>

  <!-- Chat Container -->
  <div ref="scrollContainer" class="px-6 bg-white overflow-y-auto scroll-smooth mb-10">
    <!--    &lt;!&ndash; Chat Message AI &ndash;&gt;-->
    <!--    <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span-->
    <!--        class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">-->

    <!--                <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5"-->
    <!--                                                                      viewBox="0 0 24 24" aria-hidden="true" height="20"-->
    <!--                                                                      width="20" xmlns="http://www.w3.org/2000/svg">-->
    <!--                    <path stroke-linecap="round" stroke-linejoin="round"-->
    <!--                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">-->
    <!--                    </path>-->
    <!--                  </svg></div>-->
    <!--              </span>-->
    <!--      <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI </span>Hi, how can I help-->
    <!--        you today?-->
    <!--      </p>-->
    <!--    </div>-->
    <template v-for="msg in mainStore.messages">
      <template v-if="msg?.products && msg?.products?.length">

        <Carousel class="" :value="msg.products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions"
                  circular
        >
          <template #item="slotProps">
            <div class="flex flex-col border-1 rounded-lg m-2  p-3 shadow-lg h-72 w-72">
              <div class="mb-3">
                <div class="relative h-36">
                  <img :src="slotProps.data?.image_url"
                       :alt="slotProps.data?.title" class="w-full rounded-lg object-contain h-full border-round"/>
                </div>
              </div>
              <div class="mb-3 font-medium line-clamp-2">{{ slotProps.data?.title }}</div>
              <div class="flex gap-2 items-center">
              </div>
              <div class="flex items-center justify-between">
                <div class="mt-0 font-semibold text-xl">${{ slotProps.data?.price }}</div>
                <div class="mt-0 font-semibold text-xl flex items-center">{{ slotProps.data?.rating }}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                  </svg>
                </div>
              </div>
              <div class="w-full flex gap-2 text-center items-center justify-between mt-2">
                <button class="flex p-2 gap-2 bg-gray-100 rounded-lg items-center w-1/2 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                  </svg>
                  Details
                </button>
                <button class="flex bg-gray-100 rounded-lg items-center w-1/2">
                  <svg class="h-10 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 60" fill-rule="evenodd">
                    <path
                        d="M72.038 40.703c-5.8 4.283-14.234 6.57-21.486 6.57-10.168 0-19.323-3.76-26.248-10.016-.544-.492-.057-1.162.596-.78 7.474 4.35 16.715 6.965 26.26 6.965 6.438 0 13.52-1.332 20.032-4.096.984-.418 1.806.644.844 1.358m2.418-2.764c-.74-.95-4.9-.448-6.782-.226-.57.07-.657-.427-.144-.784 3.32-2.338 8.77-1.663 9.407-.88s-.165 6.25-3.286 8.858c-.48.4-.936.187-.723-.344.7-1.75 2.272-5.672 1.528-6.625"
                        fill="#f90"/>
                    <path
                        d="M67.803 20.427v-2.272a.56.56 0 0 1 .575-.575H78.55c.326 0 .588.235.588.575V20.1c-.004.326-.28.753-.766 1.428l-5.27 7.526c1.96-.048 4.026.244 5.802 1.245.4.226.5.557.54.884v2.425c0 .33-.366.718-.75.518-3.13-1.64-7.287-1.82-10.747.017-.353.192-.723-.192-.723-.522v-2.303c0-.37.004-1 .374-1.563l6.107-8.758H68.4c-.326 0-.588-.23-.588-.57M30.694 34.605H27.6c-.296-.022-.53-.244-.553-.527V18.194c0-.318.266-.57.596-.57h2.886c.3.013.54.244.562.53v2.076h.057c.753-2.007 2.168-2.943 4.074-2.943 1.937 0 3.147.936 4.018 2.943.75-2.007 2.45-2.943 4.275-2.943 1.297 0 2.716.535 3.582 1.737.98 1.336.78 3.278.78 4.98L47.87 34.03c0 .318-.266.575-.596.575h-3.1c-.3-.022-.557-.27-.557-.575V25.6c0-.67.06-2.342-.087-2.977-.23-1.066-.923-1.367-1.82-1.367-.75 0-1.532.5-1.85 1.302s-.287 2.142-.287 3.043v8.42c0 .318-.266.575-.596.575h-3.1c-.313-.022-.557-.27-.557-.575l-.004-8.42c0-1.772.292-4.38-1.907-4.38-2.224 0-2.137 2.542-2.137 4.38v8.42c0 .318-.266.575-.596.575M87.896 17.3c4.592 0 7.078 3.944 7.078 8.958 0 4.845-2.747 8.688-7.078 8.688-4.5 0-6.965-3.944-6.965-8.858 0-4.945 2.486-8.8 6.965-8.8m.026 3.243c-2.28 0-2.425 3.108-2.425 5.045s-.03 6.085 2.398 6.085c2.398 0 2.512-3.343 2.512-5.38 0-1.34-.057-2.943-.46-4.214-.348-1.106-1.04-1.537-2.024-1.537m13.007 14.075h-3.082c-.3-.022-.557-.27-.557-.575l-.004-15.888c.026-.292.283-.518.596-.518h2.87c.27.013.492.196.553.444v2.43h.057c.866-2.172 2.08-3.208 4.218-3.208 1.4 0 2.742.5 3.613 1.872.8 1.27.8 3.408.8 4.945v10c-.035.28-.292.5-.596.5H106.3c-.283-.022-.518-.23-.548-.5V25.48c0-1.737.2-4.28-1.937-4.28-.753 0-1.445.505-1.8 1.27-.435.97-.492 1.937-.492 3.008v8.554c-.004.318-.274.575-.605.575m-41.225-7.6c0 1.206.03 2.2-.58 3.282-.492.87-1.275 1.406-2.142 1.406-1.188 0-1.885-.905-1.885-2.242 0-2.638 2.364-3.117 4.605-3.117v.67m3.12 7.544c-.205.183-.5.196-.73.074-1.027-.853-1.214-1.25-1.776-2.063-1.698 1.732-2.903 2.25-5.102 2.25-2.607 0-4.632-1.606-4.632-4.823 0-2.512 1.358-4.222 3.3-5.058 1.68-.74 4.026-.87 5.82-1.075v-.4c0-.736.057-1.606-.38-2.242-.374-.57-1.097-.805-1.737-.805-1.18 0-2.23.605-2.486 1.86-.052.28-.257.553-.54.566l-3-.322c-.252-.057-.535-.26-.46-.65.688-3.64 3.98-4.736 6.92-4.736 1.506 0 3.474.4 4.662 1.54 1.506 1.406 1.362 3.282 1.362 5.324v4.823c0 1.45.6 2.085 1.167 2.87.196.28.24.614-.013.823L62.82 34.57l-.004-.01M19.12 27.017c0 1.206.03 2.2-.58 3.282-.492.87-1.27 1.406-2.142 1.406-1.188 0-1.88-.905-1.88-2.242 0-2.638 2.364-3.117 4.6-3.117v.67m3.12 7.544c-.205.183-.5.196-.73.074-1.027-.853-1.2-1.25-1.776-2.063-1.698 1.732-2.9 2.25-5.102 2.25C12.028 34.822 10 33.216 10 30c0-2.512 1.362-4.222 3.3-5.058 1.68-.74 4.026-.87 5.82-1.075v-.4c0-.736.057-1.606-.374-2.242-.38-.57-1.1-.805-1.737-.805-1.18 0-2.233.605-2.5 1.86-.052.28-.257.553-.535.566l-3.004-.322c-.252-.057-.53-.26-.46-.65.692-3.64 3.98-4.736 6.92-4.736 1.506 0 3.474.4 4.662 1.54 1.506 1.406 1.362 3.282 1.362 5.324v4.823c0 1.45.6 2.085 1.167 2.87.2.28.244.614-.01.823l-2.36 2.052-.01-.01"
                        fill="#221f1f"/>
                  </svg>
                </button>
              </div>
            </div>
          </template>
        </Carousel>

      </template>

      <!--  User Chat Message -->
      <div v-if="msg.role === 'user'" class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
          class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="0"
                                                                      viewBox="0 0 16 16" height="20" width="20"
                                                                      xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z">
                    </path>
                  </svg></div>
              </span>
        <p class="leading-relaxed"><span class="block font-bold text-gray-700">You </span>
          {{ msg.content }}</p>
      </div>
      <!-- Ai Chat Message  -->
      <div v-else class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
          class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5"
                                                                      viewBox="0 0 24 24" aria-hidden="true" height="20"
                                                                      width="20" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                    </path>
                  </svg></div>
              </span>
        <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI </span>
          {{ msg.content }}
        </p>
      </div>
    </template>

  </div>

</template>

<style scoped>

</style>