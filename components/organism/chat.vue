<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-full md:max-w-2xl lg:max-w-4xl space-y-4">
    <div class="flex justify-end">
      <MoleculesUserMessage />
    </div>
    <div class="justify-start">
      <MoleculesResponseMessage />
    </div>
    <!-- <MoleculesTable :items="items" /> -->
  </div>
  <footer
    class="fixed bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-secondary"
  >
    <form class="flex mx-auto w-full lg:w-3/4">
      <label for="chat" class="sr-only">Your message</label>
      <div
        class="md:ml-64 flex items-center px-3 py-2 rounded-lg bg-gray-700 w-full"
      >
        <!--        <button-->
        <!--            type="button"-->
        <!--            class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-primary hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"-->
        <!--        >-->
        <!--          <svg-->
        <!--              class="w-5 h-5"-->
        <!--              aria-hidden="true"-->
        <!--              xmlns="http://www.w3.org/2000/svg"-->
        <!--              fill="none"-->
        <!--              viewBox="0 0 20 18"-->
        <!--          >-->
        <!--            <path-->
        <!--                fill="currentColor"-->
        <!--                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"-->
        <!--            />-->
        <!--            <path-->
        <!--                stroke="currentColor"-->
        <!--                stroke-linecap="round"-->
        <!--                stroke-linejoin="round"-->
        <!--                stroke-width="2"-->
        <!--                d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"-->
        <!--            />-->
        <!--            <path-->
        <!--                stroke="currentColor"-->
        <!--                stroke-linecap="round"-->
        <!--                stroke-linejoin="round"-->
        <!--                stroke-width="2"-->
        <!--                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"-->
        <!--            />-->
        <!--          </svg>-->
        <!--          <span class="sr-only">Upload image</span>-->
        <!--        </button>-->
        <!--        <button-->
        <!--            type="button"-->
        <!--            class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-primary hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"-->
        <!--        >-->
        <!--          <svg-->
        <!--              class="w-5 h-5"-->
        <!--              aria-hidden="true"-->
        <!--              xmlns="http://www.w3.org/2000/svg"-->
        <!--              fill="none"-->
        <!--              viewBox="0 0 20 20"-->
        <!--          >-->
        <!--            <path-->
        <!--                stroke="currentColor"-->
        <!--                stroke-linecap="round"-->
        <!--                stroke-linejoin="round"-->
        <!--                stroke-width="2"-->
        <!--                d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"-->
        <!--            />-->
        <!--          </svg>-->
        <!--          <span class="sr-only">Add emoji</span>-->
        <!--        </button>-->
        <textarea
          id="chat"
          rows="1"
          class="block mx-4 p-2.5 w-full text-sm text-white rounded-lg border bg-secondary border-gray-600 placeholder-gray-400"
          placeholder="Your message..."
        ></textarea>
        <button
          type="submit"
          class="inline-flex justify-center p-2 text-tertiary rounded-full cursor-pointer hover:bg-gray-600"
        >
          <svg
            class="w-5 h-5 rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path
              d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"
            />
          </svg>
          <span class="sr-only">Send message</span>
        </button>
      </div>
    </form>
  </footer>
</template>
