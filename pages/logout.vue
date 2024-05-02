<script setup>
import {useAuth0} from "@auth0/auth0-vue";

const config = useRuntimeConfig()
const {user, isAuthenticated, getAccessTokenSilently, loginWithRedirect, logout, isLoading} = useAuth0()
const logoutUser = async () => {
  localStorage.clear()
  await logout(
      {
        returnTo: config.public.appBase,
      }
  )
}
logoutUser()

</script>

<template>

</template>

<style scoped>

</style>