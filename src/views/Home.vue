<script setup></script>

<template>
  <div class="h-screen">
    <div class="h-1/2 py-40 px-52">
      <h1 class="lg:text-4xl lg:font-bold mb-6">
        Vue + Firebase + Tailwind Todo List
        <br />
        Register now and write yours!
      </h1>
      <button
        class="bg-vue-green py-2 px-8 rounded shadow-sm text-white transition duration-300 hover:brightness-90 hover:shadow-md"
      >
        Register
      </button>
    </div>
    <div class="h-1/2 lg:flex lg:justify-between lg:items-center px-52">
      <img src="../assets/vue.svg" class="lg:w-32 lg:h-32" />
      <img src="../assets/firebase.svg" class="lg:w-32 lg:h-32" />
      <img src="../assets/tailwind.svg" class="lg:w-32 lg:h-32" />
    </div>
  </div>
</template>

<style scoped></style>
