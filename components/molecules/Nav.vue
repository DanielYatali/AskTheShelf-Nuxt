<script setup>
import logoNav from "~/assets/images/logo-nav.png";
import Hamburger from "~/components/atoms/Hamburger.vue";
const props = defineProps({
  hamburgerTarget: {
    type: String,
    default: "drawer-navigation",
    required: true,
  },
  hamburgerActive: {
    type: Boolean,
    default: true,
    required: false,
  },
});
</script>
<template>
  <nav class="background-style px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex justify-start items-center">
        <Hamburger v-if="hamburgerActive" :target="hamburgerTarget" />
        <a
          href="https://flowbite.com"
          class="flex items-center justify-between mr-4"
        >
          <img :src="logoNav" class="mr-3 h-8" alt="Flowbite Logo" />
        </a>
      </div>
      <div class="flex items-center lg:order-2">
        <!-- nav bar icons go here (notifications, etc) -->
        <button
          type="button"
          class="flex mx-3 text-sm bg-secondary rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600"
          id="user-menu-button"
        >
          <img
            class="w-8 h-8 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            alt="user photo"
          />
        </button>
      </div>
    </div>
  </nav>
</template>
