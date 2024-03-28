<script setup>
import logo from '~/assets/logo.png'
import {useRoute} from "vue-router";
import MarkdownIt from "markdown-it";
import {useMainStore} from "~/store/main.js";
import {initFlowbite} from "flowbite";
import {onMounted} from "vue";

const mainStore = useMainStore();
const {$Service} = useNuxtApp()
const router = useRoute();
const {id} = router.params
await $Service.get_product(id)
onMounted(() => {
  initFlowbite()
})


const product = {
  "_id": "B07ZPKZSSC",
  "id": "B07ZPKZSSC",
  "job_id": "65f4c3684cc0f6448ca0cca4",
  "domain": "www.amazon.com",
  "title": "Apple iPhone 11 Pro, 64GB, Space Gray - Unlocked (Renewed)",
  "description": "Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. All in the first iPhone powerful enough to be called Pro.",
  "price": 268,
  "image_url": "https://m.media-amazon.com/images/I/81LmL94PUvS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  "specs": {
    "Product Dimensions": "7 x 5 x 4 inches",
    "Item Weight": "10.5 ounces",
    "ASIN": "B07ZPKZSSC",
    "Item model number": "A2160",
    "Batteries": "1 Lithium Ion batteries required. (included)",
    "Customer Reviews": "",
    "Best Sellers Rank": "",
    "OS": "iOS",
    "RAM": "64 GB",
    "Wireless communication technologies": "Cellular",
    "Connectivity technologies": "Bluetooth, Wi-Fi, USB, NFC",
    "Other display features": "Wireless",
    "Human Interface Input": "Touchscreen",
    "Form Factor": "Smartphone",
    "Color": "Space Gray",
    "Battery Power Rating": "10 Watts",
    "Whats in the box": "Adapter, USB Cable",
    "Manufacturer": "Apple Computer",
    "Date First Available": "October 28, 2019",
    "Memory Storage Capacity": "64 GB",
    "Standing screen display size": "5.8 Inches",
    "Ram Memory Installed Size": "4 GB"
  },
  "features": [
    "This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).",
    "Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    "Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.",
    "The device does not come with headphones or a SIM card. It does include a generic (Mfi certified) charger and charging cable.",
    "Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length."
  ],
  "rating": 4.2,
  "created_at": "2024-03-15T21:53:52.900393",
  "updated_at": "2024-03-16T17:05:11.389000",
  "similar_products": [
    {
      "title": "Apple iPhone 12 Mini, 64GB, Blue - Unlocked (Renewed)",
      "image": "https://m.media-amazon.com/images/I/41lgH-aDCeL._AC_.jpg",
      "asin": "B08PNN2SKF",
      "url": "https://www.amazon.com/dp/B08PNN2SKF",
      "price": "$242.47"
    },
    {
      "title": "Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)",
      "image": "https://m.media-amazon.com/images/I/41xrOzoHI8L._AC_.jpg",
      "asin": "B08PNM1LNZ",
      "url": "https://www.amazon.com/dp/B08PNM1LNZ",
      "price": "$283.00"
    },
    {
      "title": "Apple iPhone 11 64GB, Black - Locked Cricket Wireless (Renewed)",
      "image": "https://m.media-amazon.com/images/I/415MXx2q63L._AC_.jpg",
      "asin": "B08M5RFKWK",
      "url": "https://www.amazon.com/dp/B08M5RFKWK",
      "price": "$243.97"
    },
    {
      "title": "Apple iPhone 12 Pro, 128GB, Graphite - Fully Unlocked (Renewed)",
      "image": "https://m.media-amazon.com/images/I/41wlLGJKSrL._AC_.jpg",
      "asin": "B08PNP5YGV",
      "url": "https://www.amazon.com/dp/B08PNP5YGV",
      "price": "$369.50"
    },
    {
      "title": "Apple iPhone 12 Pro, 128GB, Pacific Blue - Fully Unlocked (Renewed)",
      "image": "https://m.media-amazon.com/images/I/41VqOPD0q8L._AC_.jpg",
      "asin": "B08PMYLKVF",
      "url": "https://www.amazon.com/dp/B08PMYLKVF",
      "price": "$374.99"
    }
  ],
  "overview": "The Apple iPhone 11 Pro, 64GB, Space Gray (Renewed) is a premium smartphone that boasts exceptional camera capabilities with Ultra Wide, Wide, and Telephoto lenses, Night mode for low-light photography, a Super Retina XDR display for HDR content, and a high-performance",
  "tips": "Ensure to check the battery health upon arrival, as some users experienced discrepancies with the advertised levels. Consider purchasing additional accessories like screen protectors and cases to safeguard the phone against wear and tear. When encountering any issues, promptly contact customer support for assistance or returns to address any concerns efficiently.",
  "generated_review": "# Overview:\nThe Apple iPhone 11 Pro, 64GB, Space Gray (Renewed) is a premium smartphone that boasts exceptional camera capabilities with Ultra Wide, Wide, and Telephoto lenses, Night mode for low-light photography, a Super Retina XDR display for HDR content, and a high-performance A13 Bionic chip. Priced at $268.0, this phone offers great value for users seeking a top-notch smartphone experience.\n\n## User Feedback Summary:\n\n### Common Praises:\n- Users appreciate the phone's cosmetic condition, camera quality, and overall value for money.\n- The phone comes with a charger and cable, showcasing good packaging and accessories.\n- Positive feedback on clear images, impressive stabilization for videos, and long battery life after a full charge.\n\n### Common Critiques:\n- Some users encountered issues with battery health below advertised levels.\n- Occasional defects reported in camera systems or batteries affecting daily functionality.\n- Reports of slow touch screen responses in certain units impacting user experience.\n\n## User Experience Overview:\nUsers generally enjoy the camera performance and display quality of the iPhone 11 Pro. Despite occasional concerns about battery health and defects, the phone offers a premium experience suitable for those prioritizing photography and overall performance, thanks to the advanced A13 Bionic chip.\n\n## User Tips and Recommendations:\n- Ensure to check the battery health upon arrival, as some users experienced discrepancies with the advertised levels.\n- Consider purchasing additional accessories like screen protectors and cases to safeguard the phone against wear and tear.\n- When encountering any issues, promptly contact customer support for assistance or returns to address any concerns efficiently.",
  "embedding_text": "Title: Apple iPhone 11 Pro, 64GB, Space Gray - Unlocked (Renewed)\nCategory: Electronics - Smartphone\nPrice: $268.0\nKey Facts:\n- Camera: Ultra Wide, Wide, and Telephoto lenses with Night mode\n- Display: Super Retina XDR display for HDR content\n- Performance: A13 Bionic chip for gaming, AR, and photography\n- Battery: Tested with a minimum 80% capacity\n- Accessories: Charger and cable included, no headphones or SIM card\n\nDescription Summary:\nThe Apple iPhone 11 Pro offers exceptional camera capabilities, A13 Bionic chip performance, and a Super Retina XDR display. Priced at $268.0, it provides a premium smartphone experience with great value.\n\nDetailed Specifications:\n- Dimensions: 7 x 5 x 4 inches\n- Weight: 10.5 ounces\n- OS: iOS\n- RAM: 4GB\n- Storage: 64GB\n- Connectivity: Cellular, Bluetooth, Wi-Fi, USB, NFC\n- Display Size: 5.8 Inches\n- Color: Space Gray\n\nThis summary is structured to optimize search functionalities with factual and relevant details for effective comparison and decision-making."
}
const renderMarkdown = (text) => {
  const md = new MarkdownIt();
  return md.render(text);
}
const message = ref("");
const openChat = ref(false);
const messages = ref([]);
const sendMessage = async () => {
  messages.value.push({message: message.value, sender: "user"})
  let msg = await $Service.product_chat(id, message.value)
  messages.value.push({message: msg, sender: "ai"})
}
const tabs = ref( [
  {
    name: "Details",
    active: false
  },
  {
    name: "AI Review",
    active: true
  },
  {
    name: "Chat",
    active: false
  },
])

</script>

<template>
  <div class="dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="rounded-lg mb-4">
            <img class="m-auto" :src="mainStore.product.image_url" alt="Product Image">
          </div>
          <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{{ mainStore.product.title }}</h2>

        </div>
        <div class="md:flex-1 px-4">
          <div class="flex text-center mb-4">
            <div class="w-1/2 px-2">
              Price: <span class="font-bold text-gray-800 dark:text-white">$ {{ mainStore.product.price }}</span>
            </div>
            <div class="w-1/2 px-2">
              <span class="font-bold text-gray-800 dark:text-white">
              <span class="text-yellow-300" v-for="i in Math.floor(mainStore.product.rating)" :key="i">★</span>
              {{ mainStore.product.rating }}</span>
            </div>
          </div>
          <template v-if="tabs[0].active">
            <div class="p-4 rounded-lg dark:bg-gray-800">
              <p class="text-sm dark:text-gray-400">
                <ul>
                  <li v-for="feature in mainStore.product.features" :key="feature" class="flex items-center py-1">
                    <span class="ml-2">{{ feature }}</span>
                  </li>
                </ul>
              </p>
            </div>
          </template>
          <template v-if="tabs[1].active">
            <div class="p-4 rounded-lg dark:bg-gray-800">
              <p v-html="renderMarkdown(mainStore.product.generated_review)" class="dark:text-gray-400">
              </p>
            </div>
          </template>
          <template v-if="tabs[2].active">
            Chat

          </template>




<!--          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">-->
<!--            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab"-->
<!--                data-tabs-toggle="#default-styled-tab-content"-->
<!--                data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"-->
<!--                data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"-->
<!--                role="tablist">-->
<!--              <li class="me-2" role="presentation">-->
<!--                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="generated-review-styled-tab"-->
<!--                        data-tabs-target="#styled-review" type="button" role="tab" aria-controls="review"-->
<!--                        aria-selected="false">Review-->
<!--                </button>-->
<!--              </li>-->
<!--              <li class="me-2" role="presentation">-->
<!--                <button-->
<!--                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"-->
<!--                    id="features-styled-tab" data-tabs-target="#styled-features" type="button" role="tab"-->
<!--                    aria-controls="features" aria-selected="false">Features-->
<!--                </button>-->
<!--              </li>-->
<!--              <li class="me-2" role="presentation">-->
<!--                <button-->
<!--                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"-->
<!--                    id="specs-styled-tab" data-tabs-target="#styled-specs" type="button" role="tab"-->
<!--                    aria-controls="specs" aria-selected="false">Specs-->
<!--                </button>-->
<!--              </li>-->
<!--              <li class="me-2" role="presentation">-->
<!--                <button-->
<!--                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"-->
<!--                    id="overview-styled-tab" data-tabs-target="#styled-overview" type="button" role="tab"-->
<!--                    aria-controls="specs" aria-selected="false">Overview-->
<!--                </button>-->
<!--              </li>-->
<!--              <li class="me-2" role="presentation">-->
<!--                <button-->
<!--                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"-->
<!--                    id="tips-styled-tab" data-tabs-target="#styled-tips" type="button" role="tab"-->
<!--                    aria-controls="specs" aria-selected="false">Tips-->
<!--                </button>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div id="default-styled-tab-content">-->
<!--            <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="styled-review" role="tabpanel"-->
<!--                 aria-labelledby="review-tab">-->
<!--              <p v-html="renderMarkdown(mainStore.product.generated_review)" class="dark:text-gray-400">-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="styled-features" role="tabpanel"-->
<!--                 aria-labelledby="features-tab">-->
<!--              <p class="text-sm dark:text-gray-400">-->
<!--                <ul>-->
<!--                  <li v-for="feature in mainStore.product.features" :key="feature" class="flex items-center py-1">-->
<!--                    <span class="ml-2">{{ feature }}</span>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="styled-specs" role="tabpanel"-->
<!--                 aria-labelledby="specs-tab">-->
<!--              <ul class="text-sm  dark:text-gray-400">-->
<!--                <li v-for="(value, key) in mainStore.product.specs" :key="key" class="flex justify-between">-->
<!--                  <span class="font-bold">{{ key }}:</span>-->
<!--                  <span>{{ value }}</span>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->

<!--            <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="styled-overview" role="tabpanel"-->
<!--                 aria-labelledby="overview-tab">-->
<!--              {{ product.overview }}-->

<!--            </div>-->

<!--            <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="styled-tips" role="tabpanel"-->
<!--                 aria-labelledby="tips-tab">-->
<!--              {{ product.tips }}-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>

  <button
      @click="openChat = !openChat"
      class="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
      type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
    <svg xmlns=" http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         class="text-white block border-gray-200 align-middle">
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" class="border-gray-200">
      </path>
    </svg>
  </button>


  <div v-if="openChat"
       class="fixed bottom-[calc(4rem+1.5rem)] py-3 right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] sm:w-[440px] h-[634px]">

    <!-- Heading -->
    <div class="flex flex-col space-y-1.5 pb-6">
      <h2 class="font-semibold text-lg tracking-tight">Product Assistant</h2>
      <p class="text-sm text-[#6b7280] leading-3">{{ product.title }}</p>
    </div>

    <!-- Chat Container -->
    <div class="pr-4 h-[474px] bg-white overflow-y-auto">
      <!-- Chat Message AI -->
      <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
          class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5"
                                                                viewBox="0 0 24 24" aria-hidden="true" height="20"
                                                                width="20" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
              </path>
            </svg></div>
        </span>
        <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI </span>Hi, how can I help you today?
        </p>
      </div>
      <template v-for="msg in messages">

        <!--  User Chat Message -->
        <div v-if="msg.sender === 'user'" class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
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
            {{ msg.message }}</p>
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
            {{ msg.message }}
          </p>
        </div>
      </template>

    </div>
    <!-- Input box  -->
    <div class="flex items-center pt-0">
      <div class="flex items-center justify-center w-full space-x-2">
        <input
            v-model="message"
            class="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
            placeholder="Type your message" value="">
        <button
            @click.prevent="sendMessage"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
          Send
        </button>
      </div>
    </div>

  </div>


  <div
      class="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div class="w-full">
      <div class="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
           role="group">
        <template v-for="tab in tabs">
          <button
              @click="tabs.forEach(t => t.active = false); tab.active = true"
              :class="tab.active ? 'bg-gray-900 text-white' : ''"
              class="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg">
            {{ tab.name }}
          </button>
        </template>
      </div>
    </div>
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
      <button data-tooltip-target="tooltip-home" type="button"
              class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg
            class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        <span class="sr-only">Home</span>
      </button>
      <div id="tooltip-home" role="tooltip"
           class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Home
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button data-tooltip-target="tooltip-bookmark" type="button"
              class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg
            class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
          <path
              d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/>
        </svg>
        <span class="sr-only">Bookmark</span>
      </button>
      <div id="tooltip-bookmark" role="tooltip"
           class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Bookmark
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button data-tooltip-target="tooltip-search" type="button"
              class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <img
            :src="logo"
            class="mr-3 h-8"
            alt="Ask the shelf logo"
        />
        <span class="sr-only">Product</span>
      </button>
      <div id="tooltip-search" role="tooltip"
           class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Product
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button data-tooltip-target="tooltip-post" type="button"
              class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg
            class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 1v16M1 9h16"/>
        </svg>
        <span class="sr-only">New post</span>
      </button>
      <div id="tooltip-post" role="tooltip"
           class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        New post
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button data-tooltip-target="tooltip-settings" type="button"
              class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg
            class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

        <span class="sr-only">Profile</span>
      </button>
      <div id="tooltip-settings" role="tooltip"
           class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Profile
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>