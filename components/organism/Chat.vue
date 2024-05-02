<script setup>
import {useMainStore} from "~/store/main.js";
import Carousel from "~/components/molecules/Carousel.vue";
import Typing from "~/components/atoms/Typing.vue";
import {useAuth0} from "@auth0/auth0-vue";

const {user} = useAuth0()

const {$Service} = useNuxtApp()

const props = defineProps({
  llmModel: String
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

const renderMarkdown = (text) => {
  return $Service.parseMarkdown(text)
}
const models = ref([
  {
    "id": 1,
    "name": "gemini-pro"
  },
  {
    "id": 2,
    "name": "gpt-3.5-turbo"
  },
  // {
  //   "id": 3,
  //   "name": "Llama3-8b-8192"
  // }
])
const selectedModel = ref(props.llmModel ? props.llmModel : models.value[0].name)
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
const emits = defineEmits(['update:llmModel'])

watch(() => selectedModel.value, (value) => {
  console.log(value)
  emits('update:llmModel', value)
})
watch(() => mainStore.messages, () => {
  scrollToBottom(100)
}, {deep: true})
onMounted(() => {
  setTimeout(() => {
    window.scrollTo({top: document.body.scrollHeight});
  }, 0)
})
const clearConversation = async () => {
  await $Service.clear_conversation(user.value)
  mainStore.messages = []
}
</script>

<template>
  <div class="sticky z-40 bg-white top-0 flex flex-col space-y-1.5 pb-6">
    <div class="mx-2">
      <div class="flex justify-between items-center">
        <p class="hidden sm:block text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500">
          AskTheShelf
        </p>
        <select class="p-2 font-semibold text-lg rounded-lg border " v-model="selectedModel">
          <option v-for="model in models">{{ model.name }}</option>
        </select>
        <button @click="clearConversation"
                class="bg-red-500 hover:bg-red-700 text-sm text-white font-bold py-2 px-4 rounded-lg">Clear Chat
        </button>
      </div>
    </div>
  </div>

  <!-- Chat Container -->
  <div class="md:px-6 bg-white overflow-y-auto scroll-smooth mb-10">
    <template v-for="(msg,index) in mainStore.messages">
      <template v-if="msg?.products && msg?.products?.length">
        <Carousel class="ml-4" :name="'carousels-'+index" :items="msg.products" :initialIndex="0"/>
      </template>

      <!--  User Chat Message -->
      <div v-if="msg.role === 'user'" class="flex gap-3 my-4 text-gray-600 text-sm flex-1">
        <div
            class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div class="rounded-full bg-gray-100 border p-1">
            <svg stroke="none" fill="black" stroke-width="0"
                 viewBox="0 0 16 16" height="20" width="20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z">
              </path>
            </svg>
          </div>
        </div>
        <p class="leading-relaxed overflow-auto"><span class="block font-bold text-gray-700">You </span>
          {{ msg.content }}</p>
      </div>
      <!-- Ai Chat Message  -->
      <div v-else class="flex gap-3 my-4 text-gray-600 text-sm flex-1">
        <div
            class="relative flex shrink-0 rounded-full w-8 h-8">
          <div class="rounded-full bg-gray-100 border p-1">
            <svg stroke="none" fill="black" stroke-width="1.5"
                 viewBox="0 0 24 24" aria-hidden="true" height="20"
                 width="20" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
              </path>
            </svg>
          </div>
        </div>
        <div>
          <span class="font-bold text-gray-700 ">AskTheShelf </span>
          <p v-html="renderMarkdown(msg?.content)" class="leading-relaxed overflow-auto"></p>
        </div>
      </div>
    </template>
    <div class="flex justify-end">
      <Typing v-if="mainStore?.loading"/>
    </div>

  </div>

</template>

<style scoped>

</style>