<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth'

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
    <div class="h-1/2 py-40 px-52">
      <h1 class="lg:text-4xl font-bold mb-6">
        <span class="text-vueGreen">Vue</span> +
        <span class="text-firebase">Firebase</span> +
        <span class="text-tailwind">Tailwind</span> Todo List
        <br />
        Start writing your todos now!
      </h1>
      <button
        class="bg-vueGreen py-2 px-8 rounded shadow-sm text-white transition duration-300 hover:brightness-90 hover:shadow-md"
      >
        <RouterLink :to="checkOut"> Check out! </RouterLink>
      </button>
    </div>
    <div class="h-1/2 lg:flex lg:justify-between lg:items-start px-52">
      <div class="tech-container">
        <img src="../assets/vue.svg" class="lg:w-32 lg:h-32 drop-shadow-md" />
        <div class="tech-content selection:bg-vueGreen selection:text-white">
          <h2 class="text-lg font-medium text-vueGreen">Vue.js</h2>
          <p class="text-justify">
            Vue.js is an open-source front-end JavaScript framework for building
            user interfaces and single-page applications. It was created by Evan
            You, and is maintained by him and the rest of the active core team
            members.
          </p>
        </div>
      </div>
      <div class="tech-container">
        <img src="../assets/firebase.svg" class="lg:w-32 lg:h-32" />
        <div class="tech-content selection:bg-firebase selection:text-white">
          <h2 class="text-lg font-medium text-firebase">Firebase</h2>
          <p class="text-justify">
            Firebase is a set of hosting services for any type of application.
            It offers NoSQL and real-time hosting of databases, content, social
            authentication, and notifications, such as a real-time communication
            server.
          </p>
        </div>
      </div>
      <div class="tech-container">
        <img src="../assets/tailwind.svg" class="lg:w-32 lg:h-32" />
        <div class="tech-content selection:bg-tailwind selection:text-white">
          <h2 class="text-lg font-medium text-tailwind">Tailwind</h2>
          <p class="text-justify">
            A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup. This whole application is styled with
            Tailwind.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-container {
  @apply flex flex-col items-center gap-4;
}

.tech-content {
  @apply max-w-sm p-5 bg-white rounded shadow-md;
}
</style>
