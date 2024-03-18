<template>
  <div class="relative w-full">
    <div id="carousel" class="relative items-center h-60 overflow-hidden rounded-lg md:h-96 z-20">
      <template v-for="(item, index) in slides">
        <div class="inset-0 duration-700 ease-in-out transition-transform transform" :class="handleAnimation(index) ">
          <div class="hidden lg:flex text-center justify-center items-center w-full">
            <div class="w-1/2 max-h-96">
              <img
                  :src="item.icons[1].src"
                  class="md:max-h-96 w-full max-w-full object-fit"
                  alt="..."
              />
            </div>
            <div class="w-1/2 text-white">{{ item.description }}</div>
          </div>
          <div
              class="flex lg:hidden flex-col text-center justify-center items-center w-full"
          >
            <img :src="item.icons[1].src" class=" max-h-44 md:max-h-80" alt="..."/>
            <div class="text-white">{{ item.name }}</div>
          </div>
        </div>
      </template>
    </div>
    <div class="z-30 carousel-controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
              :class="{ 'bg-tertiary': currentIndex === index }" class="w-3 h-3 rounded-full bg-gray-700">
      </button>
    </div>
    <button
        @click="prevSlide"
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    >
      <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
      >
        <svg
            class="w-4 h-4 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
        >
          <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
        @click="nextSlide"
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    >
      <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
      >
        <svg
            class="w-4 h-4 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
        >
          <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>

</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const touchStartX = ref(0);
const isDragging = ref(false);
let slides = props.items;
const mounted = ref(false);
onMounted(() => {
  console.log(props.items)
  mounted.value = true;
  slides = props.items;
  console.log("slides", slides);
});
const handleAnimation = (index) => {
  const totalSlides = slides.length;
  const diff = (index - currentIndex.value + totalSlides) % totalSlides;
  if (!mounted.value) {
    return 'hidden z-10';
  } else {
    if (diff === 0) {
      return 'absolute z-20';
    } else if (diff === 1 || diff === -(totalSlides - 1)) {
      // If going right (next slide) or wrapping from the last slide to the first slide
      return 'absolute translate-x-full z-10';
    } else if (diff === -1 || diff === totalSlides - 1) {
      // If going left (previous slide) or wrapping from the first slide to the last slide
      return 'absolute -translate-x-full z-10';
    } else {
      return 'hidden z-10';
    }
  }
};

console.log("slides", slides);


const prevSlide = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = slides.length - 1;
  } else {
    currentIndex.value = Math.max(currentIndex.value - 1, 0);
  }
};

const nextSlide = () => {
  if (currentIndex.value === slides.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = Math.min(currentIndex.value + 1, slides.length - 1);
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const onTouchStart = (event) => {
  isDragging.value = true;
  touchStartX.value = event.touches[0].clientX;
};

const minDistanceToSlide = 50; // Set your desired minimum distance to consider a slide
let hasSlideOccurred = false; // Flag to keep track of whether a slide has occurred

const onTouchMove = (event) => {
  if (isDragging.value && !hasSlideOccurred) {
    const touchX = event.touches[0].clientX;
    const deltaX = touchX - touchStartX.value;

    if (Math.abs(deltaX) >= minDistanceToSlide) {
      const direction = Math.sign(deltaX);
      const totalSlides = slides.length;
      currentIndex.value = (currentIndex.value - direction + totalSlides) % totalSlides;
      touchStartX.value = touchX; // Reset the touch start position for the next slide
      hasSlideOccurred = true; // Set the flag to true to prevent further sliding in this touch event
    }
  }
};
const onTouchEnd = () => {
  isDragging.value = false;
  hasSlideOccurred = false; // Reset the flag when the touch event ends
};
onMounted(() => {
  window.addEventListener("touchstart", onTouchStart);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("touchend", onTouchEnd);
});

onUnmounted(() => {
  window.removeEventListener("touchstart", onTouchStart);
  window.removeEventListener("touchmove", onTouchMove);
  window.removeEventListener("touchend", onTouchEnd);
});









</script>

<style scoped>

.carousel-controls {
  display: flex;
  justify-content: center;
}


</style>


