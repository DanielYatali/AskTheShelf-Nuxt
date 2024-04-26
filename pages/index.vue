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





</script>


<template>
  <div class="relative overflow-hidden">
    <div class="relative">


      <section class="text-gray-800 mb-4 ">
        <div class="max-w-7xl mx-auto px-5 pt-20 text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6">Discover Your Perfect Product</h1>
          <p class="text-lg md:text-xl mb-8">Ask The Shelf makes shopping easy with natural language searches and
            comprehensive reviews.</p>
          <p class="text-lg md:text-xl mt-8 mb-10">Have a question about a product? Just ask it!</p>
          <button @click="navigateTo('/login')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button>
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

    </div>
  </div>
</template>

<style>


</style>