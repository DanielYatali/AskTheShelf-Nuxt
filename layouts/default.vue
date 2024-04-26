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


if (isAuthenticated.value) {
  await $Service.getConversation(user.value)
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
const sendMessage = async () => {
  if (!showChat.value) {
    showChat.value = true
  }
  if (message.value === "") return
  mainStore.addMessage({content: message.value, role: "user"})
  if (selectedSearchType.value.name === "Link") {
    const response = await $Service.start_job(message.value)
    const productId = response['product_id']
    if (productId) {
      mainStore.addMessage({content: "Please wait while we fetch the product", role: "assistant"})
      const interval = setInterval(async () => {
        try {
          const product_json = await $Service.get_product(productId)
          if (product_json['product_id']) {
            // navigateTo(`/products/${product_json['product_id']}`)
            await $Service.getConversation(user.value)
            clearInterval(interval)
          }
        } catch (error) {
          console.error("Error polling product:", error);
          // Decide whether to clear the interval and stop polling in case of error
        }
      }, 5000);
    } else if (response['products']) {
      mainStore.addMessage({content: response['message'], role: "assistant", products: response['products']})
    }
  } else if (selectedSearchType.value.name === "AI") {
    let response = await $Service.search(message.value)
    if (typeof response === "object" && response !== null) {
      mainStore.addMessage(response)
      // if (response["products"] !== undefined) {
      //   if (response["products"].length > 0) {
      //     if (response["message"] !== undefined) {
      //       mainStore.addMessage({content: response["message"], role: "assistant", products: response["products"]})
      //     } else {
      //
      //       mainStore.addMessage({content: "", role: "assistant", products: response["products"]})
      //     }
      //   } else {
      //     if (response["message"] !== undefined) {
      //       mainStore.addMessage({content: response["message"], role: "assistant"})
      //     } else {
      //       mainStore.addMessage({content: "Please try again, encountered an error", role: "assistant"})
      //     }
      //   }
      // } else {
      //   if (response !== undefined) {
      //     mainStore.addMessage({content: response, role: "assistant"})
      //   } else {
      //     mainStore.addMessage({content: "Please try again, encountered an error", role: "assistant"})
      //   }
      // }
    } else {
      if (response !== undefined) {
        mainStore.addMessage({content: response, role: "assistant"})
      } else {
        mainStore.addMessage({content: "Please try again, encountered an error", role: "assistant"})
      }
    }
  }
  message.value = ""
}
const selectItem = (item) => {
  console.log(item)
  selectedSearchType.value = item;
  isOpen.value = false; // Close dropdown after selection
  console.log(isOpen.value)
}
const logoutUser = async () => {
  localStorage.clear()
  await logout(
      {
        returnTo: window.location.origin,
      }
  )
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
    <footer v-if="isAuthenticated" class="z-50 fixed inset-x-0 bottom-0 bg-white text-center p-4">
      <div  class="flex items-center py-2 rounded-lg relative">
          <textarea id="chat" rows="1"
                    class="pl-32 relative block p-3.5 w-full  text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search..."
                    v-model="message"
                    @keydown.enter="sendMessage"
          >
          </textarea>
        <div class="absolute left-2 bottom-3.5 z-40">
          <div class="relative">
            <button @blur="isOpen = false"
                    class="bg-gray-900 rounded-lg hover:bg-gray-700 flex gap-2 items-center text-white w-24 text-xs">
              <div class="flex gap-2 items-center w-full p-2" @click="isOpen = !isOpen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
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
      <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <svg
              class="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
        </button>


        <button type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
               stroke="currentColor"
               class="w-7 h-7 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
          </svg>

        </button>
        <button @click="showChat = !showChat" type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <img
              :src="logo"
              class="mr-3 h-8"
              alt="Ask the shelf logo"
          />
        </button>

        <button @click="logoutUser" type="button"
                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/>
          </svg>
        </button>


        <button type="button"

                class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group">
          <img v-if = "user?.picture"
              :src="user?.picture"
              class="mr-3 h-8 rounded-full"
              alt="Ask the shelf logo"
          />
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </button>
      </div>
    </footer>
  </div>

</template>

<style>
</style>
