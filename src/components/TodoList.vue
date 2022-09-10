<script setup>
import TodoItem from './TodoItem.vue'
</script>

<template>
  <div class="card" v-for="i in 3">
    <TodoItem />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block: 10px;
}
</style>
