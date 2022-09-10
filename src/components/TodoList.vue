<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

const todos = ref([
  {
    id: 1,
    content: 'Do the dishes',
    done: false,
  },
  {
    id: 2,
    content: 'Go to shower',
    done: false,
  },
  {
    id: 3,
    content: 'Shave my head',
    done: false,
  },
  {
    id: 4,
    content: 'Play guitar',
    done: false,
  },
])
</script>

<template>
  <div class="card" v-for="todo in todos">
    <TodoItem :todo="todo.content" />
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
