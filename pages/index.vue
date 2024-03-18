<script setup>
import amazonIcon from "assets/amazon.svg";
import MarkdownIt from 'markdown-it';
import {useMainStore} from "~/store/main.js";

const mainStore = useMainStore();
const {$Service} = useNuxtApp()

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
    if (response[0]["id"]) {

      let prod_id = response[0]["id"]
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

const renderMarkdown = (text) => {
  const md = new MarkdownIt();
  return md.render(text);
}

</script>

<template>
  <template v-if="product">
    <div class="dark:bg-gray-800 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg mb-4">
              <img class="w-full h-full object-cover" :src="product.image_url" alt="Product Image">
            </div>
            <div class="flex -mx-2 mb-4">
              <div class="w-1/2 px-2">
                <button
                    class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Go to Amazon
                </button>
              </div>
              <div class="w-1/2 px-2">
                <button
                    class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Generate Review
                </button>
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{{ product.title }}</h2>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {{ product.features[0] }}
            </p>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span class="text-gray-600 dark:text-gray-300">${{ product.price }}</span>
              </div>
              <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span class="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>
            <div class="mb-4">
              <span class="font-bold text-gray-700 dark:text-gray-300">Select Buyer</span>
              <div class="flex items-center mt-2">
                <img class="dark:bg-gray-200 w-8 h-8 p-1 mr-2 rounded-full" :src="amazonIcon" alt="Amazon Icon">
                <img class="dark:bg-gray-200 w-8 h-8 p-1 mr-2 rounded-full" :src="amazonIcon" alt="Amazon Icon">
                <img class="dark:bg-gray-200 w-8 h-8 p-1 mr-2 rounded-full" :src="amazonIcon" alt="Amazon Icon">
                <img class="dark:bg-gray-200 w-8 h-8 p-1 mr-2 rounded-full" :src="amazonIcon" alt="Amazon Icon">
              </div>
            </div>

            <div>
              <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="" v-html="renderMarkdown(product.generated_review)"></div>
      </div>

    </div>

  </template>
  <template v-else>

    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From
            checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment
            stack.</p>
          <form class="flex items-center">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"/>
                </svg>

              </div>
              <input v-model="url" type="text"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Enter you amazon link here" required/>
            </div>
            <button @click.prevent="submit"
                    class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              Search
            </button>
          </form>

          <br>

          <form class="flex items-center">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"/>
                </svg>

              </div>
              <input v-model="query" type="text"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search with natural language" required/>
            </div>
            <button @click.prevent="search"
                    class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              Search
            </button>
          </form>
        </div>
        <div class="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
        </div>
      </div>
    </section>
  </template>

</template>

<style scoped>

</style>