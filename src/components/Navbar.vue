<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth'
import router from '../router'

const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      router.push('/todos')
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleLogOut = () => {
  signOut(auth).then(() => {
    router.push('/login')
  })
}
</script>

<template>
  <nav class="flex items-center justify-between w-96 gap-2 mx-auto py-4">
    <RouterLink to="/" class="nav-link"> Home </RouterLink>
    <RouterLink to="/todos" class="nav-link"> Todos </RouterLink>
    <RouterLink to="/login" class="nav-link" v-if="!isLoggedIn">
      LogIn
    </RouterLink>
    <RouterLink to="/register" class="nav-link" v-if="!isLoggedIn">
      Register
    </RouterLink>
    <button
      @click="handleLogOut"
      v-if="isLoggedIn"
      class="w-24 p-1.5 bg-vueGreen text-white rounded shadow-md cursor-pointer transition duration-300 hover:shadow-lg hover:brightness-90"
    >
      LogOut
    </button>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply grid place-items-center w-24 p-1.5 font-medium antialiased transition duration-300 hover:text-vueGreen;
}

.active-route {
  @apply text-vueGreen bg-white rounded shadow-md transition duration-300 hover:shadow-lg;
}
</style>
