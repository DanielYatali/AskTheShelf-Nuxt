<template>
</template>
<script setup>
import {useRuntimeConfig} from "#imports";
import {useAuth0} from '@auth0/auth0-vue';

definePageMeta({
  layout: "basic",
});
useHead({
      title: "Login",
      meta: [
        {
          name: "description",
          content: "Logging you in"
        }
      ]
    }
)

const config = useRuntimeConfig()

const route = useRoute()
const {query} = route

if (query.invitation !== undefined) {
  let auth0 = useAuth0();
  let urlString = '/callback'
  if (query && Object.keys(query).length > 0) {
    const queryParams = new URLSearchParams(query);
    urlString += `/?${queryParams.toString()}`;
  }
  auth0.loginWithRedirect({
    redirect_uri: config.public.appBase + urlString,
    invitation: query.invitation,
  })
}
const login = () => {
  let auth0 = useAuth0();
  localStorage.clear()
  let urlString = '/callback'
  if (query && Object.keys(query).length > 0) {
    const queryParams = new URLSearchParams(query);
    urlString += `?${queryParams.toString()}`;
  }
  auth0.loginWithRedirect({
    redirect_uri: config.public.appBase + urlString,
  })
}
const {user, isAuthenticated} = useAuth0()
if (!isAuthenticated.value) {
  login()
} else {
  navigateTo('/')
}
</script>


<style scoped>

</style>