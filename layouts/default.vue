<script setup>
import logo from '~/assets/logo.png'

</script>
<template>
  <div class="antialiased dark:bg-gray-900">
    <nav class="bg-white px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div class="flex flex-wrap justify-between items-center">

          <form class="mx-4 w-full">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            </div>
          </form>

          <!--          <a href="/" class="flex items-center justify-between mr-4">-->
<!--            <img-->
<!--                :src="logo"-->
<!--                class="mr-3 h-8"-->
<!--                alt="Ask the shelf logo"-->
<!--            />-->
<!--            <span class="self-center font-bold text-xl text-[#bc4d25]">Ask the Shelf</span>-->
<!--          </a>-->
      </div>
    </nav>

    <main class="p-4 h-auto pt-8">
      <slot/>
    </main>
  </div>

</template>

<style>
</style>
