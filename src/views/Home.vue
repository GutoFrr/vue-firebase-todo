<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import HeroTechs from '../components/HeroTechs.vue'

const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

let checkOut = '/login'

if (isLoggedIn === true) {
  checkOut = '/todos'
}
</script>

<template>
  <div class="h-screen">
    <div
      class="flex flex-col justify-center items-center md:items-start py-20 md:py-40 md:px-52 gap-6"
    >
      <h1
        class="text-2xl sm:text-4xl text-center md:text-left font-bold px-12 sm:px-0"
      >
        <span class="text-vueGreen">Vue</span> +
        <span class="text-firebase">Firebase</span> +
        <span class="text-tailwind">Tailwind</span> Todo List.
        <br />
        Start writing your todos now!
      </h1>
      <RouterLink :to="checkOut">
        <button
          class="bg-vueGreen py-2 px-8 rounded shadow-sm text-white transition duration-300 hover:brightness-90 hover:shadow-md"
        >
          Check out!
        </button>
      </RouterLink>
    </div>
    <HeroTechs />
  </div>
</template>

<style scoped></style>
