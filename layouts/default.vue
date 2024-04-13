<script setup>
import logo from "assets/logo.png";
import {useAuth0} from "@auth0/auth0-vue";
import Chat from "~/components/organism/Chat.vue";
import {useMainStore} from "~/store/main.js";
import {useRoute} from "vue-router";
const {user, isAuthenticated, getAccessTokenSilently, loginWithRedirect, logout, isLoading} = useAuth0()
const showChat = ref(false)

const mainStore = useMainStore();
const {$Service} = useNuxtApp()
const router = useRoute();
const {id} = router.params

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
  {message: "Hi, how can I help you today?", sender: "ai"},
  {message: "I would like to know more about this product", sender: "user"},
  {message: "Sure, what would you like to know?", sender: "ai"},
  {message: "What are the features of this product?", sender: "user"},
  {
    message: "This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).",
    sender: "ai"
  },
  {message: "Tested for battery health and guaranteed to have a minimum battery capacity of 80%.", sender: "ai"},
  {
    message: "Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.",
    sender: "ai"
  },
  {
    message: "The device does not come with headphones or a SIM card. It does include a generic (Mfi certified) charger and charging cable.",
    sender: "ai"
  },
  {
    message: "Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length.",
    sender: "ai"
  },
  {message: "What is the price of this product?", sender: "user"},
  {message: "The price of this product is $268", sender: "ai"},
  {message: "What is the rating of this product?", sender: "user"},
  {message: "The rating of this product is 4.2", sender: "ai"},
  {message: "What are the specifications of this product?", sender: "user"},
])
const sendMessage = async () => {
  messages.value.push({message: message.value, sender: "user"})
  let msg = await $Service.product_chat(id, message.value)
  messages.value.push({message: msg, sender: "ai"})
}

</script>
<template>
  <div class="antialiased">
    <main class="p-4 h-auto mb-28">
      <div
          v-if="showChat">
        <Chat :product="mainStore.product" :messages="messages"/>
      </div>
      <div v-else>
        <slot/>
      </div>
    </main>
    <footer class="z-50 fixed inset-x-0 bottom-0 bg-white text-white text-center p-4">
      <form>
        <label for="chat" class="sr-only">Your message</label>
        <div class="flex items-center px-3 py-2 rounded-lg">
          <button type="button"
                  class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <button type="button"
                  class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
            </svg>
            <span class="sr-only">AI Search</span>
          </button>
          <textarea id="chat" rows="1"
                    class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search..."></textarea>
          <button type="submit"
                  class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
            <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 18 20">
              <path
                  d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
            <span class="sr-only">Send message</span>
          </button>
        </div>
      </form>
      <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <svg
              class="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>


          <span class="sr-only">Home</span>
        </button>

        <button type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <svg
              class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 1v16M1 9h16"/>
          </svg>
          <span class="sr-only">Home</span>
        </button>

        <button @click="showChat = !showChat" type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <img
              :src="logo"
              class="mr-3 h-8"
              alt="Ask the shelf logo"
          />
          <span class="sr-only">Chat</span>
        </button>

        <button type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
               stroke="currentColor"
               class="w-7 h-7 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
          </svg>

          <span class="sr-only">Home</span>
        </button>

        <button type="button"

                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <img
              :src="user.picture"
              class="mr-3 h-8 rounded-full"
              alt="Ask the shelf logo"
          />
          <span class="sr-only">Home</span>
        </button>
      </div>
    </footer>
  </div>

</template>

<style>
</style>
