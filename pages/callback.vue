<template>
  Hey this is the callback
  screen
  <template v-if="error">
    <div class="flex items-center justify-center h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-red-500">Error</h1>
        <p class="text-lg text-gray-700">{{ error }}</p>
      </div>
    </div>


  </template>
<!--  <template v-else-if="!error">-->
<!--    <div class="flex items-center justify-center h-screen">-->
<!--      <div class="loader">-->
<!--        <div class="inner one"></div>-->
<!--        <div class="inner two"></div>-->
<!--        <div class="inner three"></div>-->
<!--        <div class="text">-->
<!--          <img :src="logo" alt="logo" class="logo">-->
<!--          <p>-->
<!--            Logging you in-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </template>-->
</template>
<script setup>
import {useRoute} from 'vue-router';
import {useAuth0} from "@auth0/auth0-vue";

useHead({
      title: "Callback",
      meta: [
        {
          name: "description",
          content: "callback"
        }
      ]
    }
)
definePageMeta({
  layout: "basic",
});
const {user, isAuthenticated, getAccessTokenSilently, loginWithRedirect, isLoading} = await useAuth0()
const error = ref(null)
const route = useRoute()
const {query} = route

if (query.error !== undefined) {
  error.value = query.error
  if (query.error_description !== undefined) {
    error.value = query.error_description
  }
}
</script>

<style scoped>
</style>

