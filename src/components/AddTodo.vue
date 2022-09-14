<script setup>
import { ref } from 'vue'
import { addDoc } from '@firebase/firestore'
import { db } from '../firebase'
import { collection } from '@firebase/firestore'

const todosCollection = collection(db, 'todos')

const newTodoContent = ref('')
const addTodo = () => {
  addDoc(todosCollection, {
    content: newTodoContent.value,
    done: false,
    date: Date.now(),
  })
  newTodoContent.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <div class="flex justify-between items-center w-96 mx-auto mb-4">
      <input
        v-model="newTodoContent"
        type="text"
        placeholder="Add todo"
        class="input w-72"
      />
      <button
        class="w-20 p-2 bg-vue-green text-white rounded shadow-lg cursor-pointer transition duration-300 hover:shadow-xl hover:brightness-90"
        :disabled="!newTodoContent"
      >
        Add
      </button>
    </div>
  </form>
</template>

<style scoped></style>
