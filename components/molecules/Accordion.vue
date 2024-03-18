<script setup>
const props = defineProps({
  identifier: {
    type: String,
    default: "accordion-arrow-icon",
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <div :id="identifier" data-accordion="open">
    <h2 :id="identifier + '-header'">
      <button
        type="button"
        class="p-2 px-4 flex items-center justify-between w-full text-gray-300 bg-secondary"
        :data-accordion-target="'#' + identifier + '-body'"
        aria-expanded="false"
        :aria-controls="identifier + '-body'"
      >
        <slot name="title">
          <span class="font-mono text-xs text-left text-gray-200">
            {{ name }}</span>
        </slot>
        <slot name="icon">
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </slot>
      </button>
    </h2>
    <div
      :id="identifier + '-body'"
      class="hidden border-t border-dashed border-gray-600"
      :aria-labelledby="identifier + '-header'"
    >
      <div class="">
        <div class="px-4 p-2">
          <slot name="body">
            <div class="text-white">The body of the accordion</div>
          </slot>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
