<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

const email = ref('')
const password = ref('')
const errorMsg = ref()
const router = useRouter()

const login = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully signed!')
      router.push('/todos')
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errorMsg.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errorMsg.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errorMsg.value = 'Incorrect password'
          break
        default:
          errorMsg.value = 'Email or password was incorrect'
          break
      }
    })
}
// const signInWithGoogle = () => {}
</script>

<template>
  <Navbar />
  <div class="w-96 flex flex-col items-center gap-3 mx-auto">
    <h1 class="text-3xl font-bold self-start">LogIn</h1>
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
      @click="login"
      class="w-96 p-1 rounded shadow-md bg-vueGreen text-white font-medium transition duration-300 hover:brightness-90"
    >
      LogIn
    </button>
  </div>
</template>

<style scoped></style>
