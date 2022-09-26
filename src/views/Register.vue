<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const router = useRouter()

const register = async () => {
  const auth = getAuth()

  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log('Successfully registered')
    router.push('/todos')
  } catch (error) {
    console.log(error.code)
    switch (error.code) {
      case 'auth/invalid-email':
        errorMsg.value = 'Invalid email'
        break
    }
  }
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
    <h2>
      Already have an account?
      <RouterLink to="/login" class="text-vueGreen hover:underline">
        Login now!
      </RouterLink>
    </h2>
  </div>
</template>

<style scoped></style>
