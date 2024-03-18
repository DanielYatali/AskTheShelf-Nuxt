<script setup lang="ts">
const props = defineProps({
  identifier: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button
    :id="identifier"
    :data-dropdown-toggle="identifier + '-menu'"
    class="inline-flex items-center p-2 text-sm font-medium text-center bg-secondary text-tertiary rounded-lg focus:outline-none"
    type="button"
  >
    <slot name="title">
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 4 15"
      >
        <path
          d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    </slot>
  </button>
  <div
    :id="identifier + '-menu'"
    class="z-10 hidden divide-y rounded-lg shadow shadow-tertiary w-44 bg-gray-800 divide-gray-600"
  >
    <ul
      class="py-2 text-sm text-gray-200"
      :aria-labelledby="identifier"
    >
      <slot name="items">
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-600 hover:text-white"
            >Example item</a
          >
        </li>
      </slot>
    </ul>
    <slot name="footer">
      <!-- <div class="py-2">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >Separated link</a
        >
      </div> -->
    </slot>
  </div>
</template>
