<script setup>
import {useRoute} from "vue-router";
import {useMainStore} from "~/store/main.js";
import logo from "~/assets/logo.png";
import {useAuth0} from "@auth0/auth0-vue";
import Chat from "~/components/organism/Chat.vue";
const mainStore = useMainStore();
const {$Service} = useNuxtApp()
const router = useRoute();
const {id} = router.params
const {user, isAuthenticated, getAccessTokenSilently, loginWithRedirect, logout, isLoading} = useAuth0()
const showChat = ref(false)

await $Service.get_product(id)


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
  return $Service.parseMarkdown(text)
}
const message = ref("");
const openChat = ref(false);
const messages = ref([
  {message: "Hi, how can I help you today?", role: "assistant"},
  {message: "I would like to know more about this product", sender: "user"},
  {message: "Sure, what would you like to know?", role: "assistant"},
  {message: "What are the features of this product?", sender: "user"},
  {
    message: "This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).",
    role: "assistant"
  },
  {message: "Tested for battery health and guaranteed to have a minimum battery capacity of 80%.", role: "assistant"},
  {
    message: "Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.",
    role: "assistant"
  },
  {
    message: "The device does not come with headphones or a SIM card. It does include a generic (Mfi certified) charger and charging cable.",
    role: "assistant"
  },
  {
    message: "Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length.",
    role: "assistant"
  },
  {message: "What is the price of this product?", sender: "user"},
  {message: "The price of this product is $268", role: "assistant"},
  {message: "What is the rating of this product?", sender: "user"},
  {message: "The rating of this product is 4.2", role: "assistant"},
  {message: "What are the specifications of this product?", sender: "user"},
])
const sendMessage = async () => {
  messages.value.push({content: message.value, sender: "user"})
  let msg = await $Service.product_chat(id, message.value)
  messages.value.push({content: msg, role: "assistant"})
}
const tabs = ref([
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
  <div class="flex flex-col">
    <div class="flex-grow px-4">
<!--      <Button class="text-black" label="PrimeVue bttun" />-->
      <!--      Basic product details-->
      <div>
        <div class="product_description">
          <div class="flex-1 px-4">
            <div class="rounded-lg mb-4">
              <img class="m-auto" :src="mainStore.product.image_url" alt="Product Image">
            </div>
            <h2 class="text-xl font-bold text-gray-800 mb-2">{{ mainStore.product.title }}</h2>
          </div>

          <div class="flex text-center mb-4">
            <div class="w-1/2 px-2">
              Price: <span class="font-bold text-gray-800">$ {{ mainStore.product.price }}</span>
            </div>
            <div class="w-1/2 px-2">
                    <span class="font-bold text-gray-800">
                    <span class="text-yellow-300" v-for="i in Math.floor(mainStore.product.rating)" :key="i">★</span>
                    {{ mainStore.product.rating }}</span>
            </div>
          </div>
        </div>

        Tabs
        <template v-if="tabs[0].active">
          <div class="p-4 ">
            <p class="text-sm ">
              <ul>
                <li v-for="feature in mainStore.product.features" :key="feature" class="flex items-center py-1">
                  <span class="ml-2">{{ feature }}</span>
                </li>
              </ul>
            </p>
          </div>
        </template>
        <template v-if="tabs[1].active">
          <div class="p-4 rounded-lg">
            <p v-html="renderMarkdown(mainStore.product.generated_review)" class="">
            </p>
          </div>
        </template>
      </div>



      <template v-if="tabs[2].active">
        <div
            class="py-3 right-0 mr-4 bg-white p-6 rounded-lg border">
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
              <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI </span>Hi, how can I help
                you today?
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
                  placeholder="Type your message">
              <button
                  @click.prevent="sendMessage"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
                Send
              </button>
            </div>
          </div>

        </div>


      </template>
    </div>
  </div>
</template>

<style scoped>

</style>