<script setup>
import {useMainStore} from "~/store/main.js";
import {useAuth0} from "@auth0/auth0-vue";
import {useRuntimeConfig} from "#imports";

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
  } catch (e) {
    console.log(e)
  }
}
await handleLogin()

const url = ref("")
const product = ref()
const query = ref("")
const search = async () => {
  if (query.value === "") {
    return
  }
  try {
    const response = await $Service.search(query.value)
    console.log(response)
    if (response[0]["product_id"]) {

      let prod_id = response[0]["product_id"]
      navigateTo(`/products/${prod_id}`)
    }
  } catch (e) {
    console.log(e)
  }
}

const submit = async () => {
  if (url.value === "" || url.value === "a") {
    return
  }
  try {
    const response = await $Service.start_job(url.value)
    //poll for the status of the job
    const job_id = response.id
    console.log(job_id)
    const interval = setInterval(async () => {
      try {
        const product_json = await $Service.poll_product(job_id);
        // Assuming an empty response is represented by an empty array
        if (Array.isArray(product_json) && product_json.length > 0) {
          console.log(product_json);
          navigateTo(`/products/${product_json[0].id}`)
          clearInterval(interval);
        }
      } catch (error) {
        console.error("Error polling product:", error);
        // Decide whether to clear the interval and stop polling in case of error
      }
    }, 5000);

  } catch (e) {
    console.log(e)
  }
}


</script>


<template>
  <div class="relative overflow-hidden">
    <div class="relative">


      <section class="text-gray-800">
        <div class="max-w-7xl mx-auto px-5 pt-20 text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6">Discover Your Perfect Product</h1>
          <p class="text-lg md:text-xl mb-8">Ask The Shelf makes shopping easy with natural language searches and
            comprehensive reviews.</p>
          <p class="text-lg md:text-xl mt-8 mb-10">Have a question about a product? Just ask it!</p>
        </div>
      </section>

      <!-- Moved "How It Works" section up for immediate visibility -->
      <section>
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 flex items-center">
              <div>
                <h2 class="text-2xl font-bold mb-4">How It Works</h2>
                <p class="mb-4">Discover how Ask The Shelf can transform your shopping experience. Our intuitive
                  platform allows you to search for products using natural language, engage in interactive chats for
                  more information, and explore comprehensive reviews to make informed decisions.</p>
                <p>Simply ask a question or paste an Amazon link, and let Ask The Shelf do the rest. It's shopping made
                  simple and smart.</p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="aspect-w-16 aspect-h-9">
                <iframe class="w-full h-full" src="https://www.youtube.com/watch?v=uCjcc1TXk5c" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Search sections follow after the "How It Works" for a more logical flow -->
      <section class="text-gray-800">
        <div class="max-w-7xl mx-auto px-5 py-20 text-center">
          <!-- Search using natural language -->
          <div class="mb-10">
            <h2 class="text-lg md:text-xl font-semibold mb-4">Search with Natural Language</h2>
            <div class="flex justify-center items-center gap-4">
              <div class="relative w-full max-w-lg">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input v-model="query" type="text"
                       class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                       placeholder="What are you looking for?" required>
              </div>
            </div>
            <br>
            <button @click="search"
                    class="py-2.5 px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Search
            </button>
          </div>

          <!-- Search using Amazon URL -->
          <div>
            <h2 class="text-lg md:text-xl font-semibold mb-4">Search by Amazon URL</h2>
            <div class="flex justify-center items-center gap-4">
              <div class="relative w-full max-w-lg">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input v-model="url" type="text"
                       class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                       placeholder="Paste your Amazon link here" required>
              </div>
            </div>
            <br>
            <button @click="submit"
                    class="py-2.5 px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Search
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>


</style>