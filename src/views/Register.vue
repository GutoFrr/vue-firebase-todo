<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = async () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully registered')
      router.push('/todos')
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}
</script>

<template>
  <Navbar />
  <div class="w-96 flex flex-col items-center gap-3 mx-auto">
    <h1 class="text-3xl font-bold self-start">Register</h1>
    <input type="email" placeholder="Email" v-model="email" class="input" />
    <input
      type="password"
      placeholder="Password"
      v-model="password"
      class="input"
    />
    <p v-if="errorMsg" class="text-md font-medium text-red-500 self-start">
      {{ errorMsg }}
    </p>
    <button
      @click="register"
      class="w-96 p-1 rounded shadow-md bg-vueGreen text-white font-medium transition duration-300 hover:brightness-90"
    >
      Register
    </button>
  </div>
</template>

<style scoped></style>
