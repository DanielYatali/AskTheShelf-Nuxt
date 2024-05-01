<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { onMounted } from 'vue'
import '~/assets/css/input.css'
import {useAuth0} from "@auth0/auth0-vue";
import {App as CapApp} from '@capacitor/app';
import {Browser} from '@capacitor/browser';
const { handleRedirectCallback } = useAuth0();

CapApp.addListener("appUrlOpen", async ({ url }) => {
  try {
    console.error("App opened with URL: " + url)
    if (
        url.includes("state") &&
        (url.includes("code") || url.includes("error"))
    ) {
      await handleRedirectCallback(url);
      navigateTo('/')
    }
    // No-op on Android
    // await Browser.close();
  } catch (e) {
    console.error(e)
  }
//   console.error("App opened with URL: " + url)
//   if (
//       url.includes("state") &&
//       (url.includes("code") || url.includes("error"))
//   ) {
//     await handleRedirectCallback(url);
//     navigateTo('/welcome')
//   }
//   // No-op on Android
//   await Browser.close();
});
// initialize components based on data attribute selectors
// On page load or when changing themes, best to add inline in `head` to avoid FOUC

onMounted(() => {
//   let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
//   let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
//
// // Change the icons inside the button based on previous settings
//   if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon.classList.remove('hidden');
//     // document.documentElement.style.backgroundColor = '#1f2937';
//   } else {
//     themeToggleDarkIcon.classList.remove('hidden');
//     // document.documentElement.style.backgroundColor = '#f3f4f6';
//   }
//
//   let themeToggleBtn = document.getElementById('theme-toggle');
//
//   themeToggleBtn.addEventListener('click', function() {
//
//     // toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');
//
//     // if set via local storage previously
//     if (localStorage.getItem('color-theme')) {
//       if (localStorage.getItem('color-theme') === 'light') {
//         document.documentElement.classList.add('dark');
//         // document.documentElement.style.backgroundColor = '#1f2937';
//         localStorage.setItem('color-theme', 'dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//         // document.documentElement.style.backgroundColor = '#f3f4f6';
//         localStorage.setItem('color-theme', 'light');
//       }
//
//       // if NOT set via local storage previously
//     } else {
//       if (document.documentElement.classList.contains('dark')) {
//         document.documentElement.classList.remove('dark');
//         // document.documentElement.style.backgroundColor = '#f3f4f6';
//         localStorage.setItem('color-theme', 'light');
//       } else {
//         document.documentElement.classList.add('dark');
//         // document.documentElement.style.backgroundColor = '#1f2937';
//         localStorage.setItem('color-theme', 'dark');
//       }
//     }
//
//   });

})
</script>


<style>

</style>