<script setup>
import { techs } from '../utils/techs'
</script>

<template>
  <div class="lg:container flex flex-col lg:flex-row justify-center lg:justify-between lg:items-start items-center gap-4 mx-auto pb-6">
    <div class="tech-container" v-for="tech in techs">
      <img :src="tech.image" class="lg:w-32 lg:h-32 w-20 h-20 drop-shadow-md" />
      <div class="tech-content">
        <h2 class="text-lg font-medium" :class="'text-' + tech.color">
          {{ tech.name }}
        </h2>
        <p class="text-justify">{{ tech.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-container {
  @apply flex flex-col items-center gap-4;
}

.tech-content {
  @apply w-80 sm:w-96 p-5 bg-white rounded shadow-md;
}
</style>
