<script setup>
import {useMainStore} from "~/store/main.js";
import {useAuth0} from "@auth0/auth0-vue";
import {useRuntimeConfig} from "#imports";
import bottom from "~/assets/images/bottom.jpg";
import Carousel from "~/components/molecules/Carousel.vue";

const config = useRuntimeConfig()
const {user, isAuthenticated, getAccessTokenSilently, loginWithRedirect, logout, isLoading} = useAuth0()
console.log(user)
const mainStore = useMainStore();
const {$Service} = useNuxtApp()
// watch(isAuthenticated.value, async (value) => {
//   if (value) {
//     await handleLogin()
//   }
// })
const handleLogin = async () => {
  try {
    console.log(user)
    if (isAuthenticated.value) {
      let existingUser = await $Service.get_user_by_email(user.value)
      console.log(existingUser)
      if (!existingUser) {
        let newUser = await $Service.create_user(user)
        await loginWithRedirect(
            {
              redirect_uri: config.public.appBase + "/callback",
            }
        )
      }
    }
  } catch (e) {
    console.log(e)
  }
}
await handleLogin()

const sendMessage = (event) => {
}
const items = [
  {
    name: 'AI',
    svg: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
  },
  {
    name: 'Link',
    svg: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244'
  }
]
const selectedSearchType = ref(items[0])
const message = ref("");
const isOpen = ref(false)
const messages = ref([])

const selectItem = (item) => {
  console.log(item)
  selectedSearchType.value = item;
  isOpen.value = false; // Close dropdown after selection
  console.log(isOpen.value)
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
])
const tutorial0 = [
  {
    "timestamp": "2024-05-02T18:03:36.348000",
    "role": "user",
    "content": "Hey Im looking for a lenovo laptop with at least 8gb ram",
    "products": [],
    "related_products": []
  },
  {
    "timestamp": "2024-05-02T18:03:48.392000",
    "role": "assistant",
    "content": "Here are some Lenovo laptops with at least 8GB RAM",
    "products": [
      {
        "product_id": "B0BPTJ1ST7",
        "title": "Lenovo IdeaPad 3 Laptop, 14\" FHD Display",
        "image_url": "https://m.media-amazon.com/images/I/71egcGQZq2L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        "price": 665.0,
        "rating": 4.5,
        "domain": "www.amazon.com",
        "stock": "Only 5 left in stock - order soon.",
        "affiliate_url": "https://www.amazon.com/dp/B0BPTJ1ST7?tag=070777-20",
        "discount_percentage": 0.0
      },
      {
        "product_id": "B0CJB5N9BQ",
        "title": "Lenovo IdeaPad 1 – AMD Ryzen5-5500U",
        "image_url": "https://m.media-amazon.com/images/I/81O3TvrFnUL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        "price": 329.99,
        "rating": 4.3,
        "affiliate_url": "https://www.amazon.com/dp/B0CJB5N9BQ?tag=070777-20",
      },
    ],
  },
  {
    "timestamp": "2024-05-02T18:05:00.278000",
    "role": "user",
    "content": "Compare them",
    "products": [],
    "related_products": []
  },
  {
    "timestamp": "2024-05-02T18:05:14.674000",
    "role": "assistant",
    "content": "Lenovo IdeaPad 3 (B0BPTJ1ST7) Pros:\n" +
        "Higher quality display FHD(1920x1080vs" +
        "15.6 Full HD (1920x1080))\n" +
        "Better processor (11th Gen Intel Core i7-1165G7 vs AMD Ryzen5-5500U)\n" +
        "More RAM (20 GB vs 8 GB)\n" +
        "More storage (1 TB vs 512 GB)\n" +
        "Longer battery life (Up to 12 Hours vs Up to 10 Hours)\n" +
        "Lenovo IdeaPad 1 (B0CJB5N9BQ) Pros:\n" +
        "Lower price ($329.99 vs $665.00)",
    "products": [],
    "related_products": [
      {
        "product_id": "B0BPTJ1ST7",
        "product_name": "Lenovo IdeaPad 3 Laptop, 14\" FHD Display, Intel Core i7-1165G7, Intel Iris Xe Graphics, Fingerprint Reader, Long Battery Life, Wi-Fi 6, Dolby Audio, Windows 11 (20GB RAM | 1TB PCIe SSD)",
        "domain": "www.amazon.com"
      },
      {
        "product_id": "B0CJB5N9BQ",
        "product_name": "Lenovo IdeaPad 1 – AMD Ryzen5-5500U – 15.6\" Full HD (1920x1080) – 8GB Memory – 512GB SSD Storage – Windows 11 - Cloud Grey – (2023 Model)",
        "domain": "www.amazon.com"
      }
    ]
  }
]
messages.value = []
const handleTutorial = async () => {
  for (let i = 0; i < tutorial0.length; i++) {
    setTimeout(() => {
      messages.value.push(tutorial0[i])
    }, 3000 * i)
  }
}
watch(() => messages.value, () => {
  scrollToBottom(100)
}, {deep: true})
handleTutorial()
const selectedModel = ref(models.value[0].name)
const scrollToBottom = (timeout) => {
  setTimeout(() => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  }, timeout)
}

const clearConversation = async () => {
  messages.value = []
}


</script>


<template>
  <div class="relative">
    <div class="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500">
      AskTheShelf
    </div>
    <div class="relative">
      <section>
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 flex items-center">
              <div class="flex flex-col items-center justify-center text-center">
                <h1 class="text-5xl md:text-7xl font-extrabold mb-6">Less Scrolling <span class="text-red-500">More Shopping</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8">
                  <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500">AskTheShelf</span>
                  makes shopping easy with <span class="font-semibold">web scraping</span>
                  and <span class="font-semibold">natural language search</span>.</p>

                <ul class="text-lg md:text-xl mb-8 space-y-4">
                  <li>Say goodbye to endless scrolling through product pages.</li>
                  <li>Want a detailed breakdown of customer reviews? <span class="font-bold">Just ask!</span></li>
                  <li>Have a question about a product? <span class="font-bold">Just ask it!</span></li>
                </ul>

                <button @click="navigateTo('/login')"
                        class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 relative mt-20">
              <div
                  class="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div
                    class="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div
                    class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div
                    class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div
                    class="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 px-2">
                  <div class="sticky z-40 bg-white top-0 flex flex-col space-y-1.5 pb-2 mt-2 mx-2">
                    <div class="mx-2">
                      <div class="flex justify-between items-center">
                        <select class="p-2 font-semibold rounded-lg border text-sm" v-model="selectedModel">
                          <option v-for="model in models">{{ model.name }}</option>
                        </select>
                        <button @click="clearConversation"
                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-xs">
                          Clear Chat
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Chat Container -->
                  <div class="md:px-6 bg-white overflow-y-auto scroll-smooth mb-10" style="height: 430px">
                    <template v-for="(msg,index) in messages">
                      <template v-if="msg?.products && msg?.products?.length">
                        <Carousel :variant="true" :name="'carousels-'+index" :items="msg.products" :initialIndex="0"/>
                      </template>

                      <!--  User Chat Message -->
                      <div v-if="msg.role === 'user'"
                           class="flex gap-3 my-4 text-gray-600 text-xs flex-1 transition-opacity">
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
                        <p class="leading-relaxed overflow-auto text-xs"><span
                            class="block font-bold text-gray-700 text-xs">You </span>
                          {{ msg.content }}</p>
                      </div>
                      <!-- Ai Chat Message  -->
                      <div v-else class="flex gap-3 my-4 text-gray-600 text-xs flex-1">
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
                          <p v-html="renderMarkdown(msg?.content)" class="leading-relaxed overflow-auto text-xs"></p>
                        </div>
                      </div>
                    </template>
                  </div>


                  <footer class="z-50 absolute bottom-0 bg-white rounded-b-3xl">


                    <div class="flex items-center py-2 rounded-lg relative px-2">
                    <textarea id="chat" rows="1"
                              class="pl-16 text-xs relative block p-2 pt-2.5 w-full  text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Search..."
                              v-model="message"
                              @keydown.enter="sendMessage"
                    >
                    </textarea>
                      <div class="absolute left-3 bottom-3.5 z-40">
                        <div class="relative">
                          <button @blur="isOpen = false"
                                  class="bg-gray-900 py-1 rounded-lg hover:bg-gray-700 flex gap-2 items-center text-white w-14 text-xs">
                            <div class="flex gap-2 items-center w-full" @click="isOpen = !isOpen">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                   stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      :d="selectedSearchType.svg"/>
                              </svg>
                              {{ selectedSearchType.name }}
                            </div>
                            <div v-if="isOpen"
                                 class="absolute left-0 w-auto mt-1 bg-white text-gray-700 shadow-lg rounded z-50 bottom-12">
                              <ul class="py-1">
                                <li v-for="(item, index) in items" :key="index"
                                    class="flex items-center hover:bg-gray-100 cursor-pointer px-4 py-2 gap-2"
                                    @click="selectItem(item)">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                       stroke-width="1.5"
                                       stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          :d="item.svg"/>
                                  </svg>
                                  <span>{{ item.name }}</span>
                                </li>
                              </ul>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <img :src="bottom" class="px-4" alt="">
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

::-webkit-scrollbar-track {
  border-radius: 100vh;
}


</style>