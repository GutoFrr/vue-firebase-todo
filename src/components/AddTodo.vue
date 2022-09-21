<script setup>
import { ref } from 'vue'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase'

const newTodoContent = ref('')

const auth = getAuth()
const user = auth.currentUser

const todosCollection = collection(db, 'todos')

const addTodo = () => {
  if (user) {
    addDoc(todosCollection, {
      author: user.uid,
      content: newTodoContent.value,
      done: false,
      createdAt: serverTimestamp(),
    })
  }
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
        class="w-20 p-2 bg-vueGreen text-white rounded shadow-lg cursor-pointer transition duration-300 hover:shadow-xl hover:brightness-90"
        :disabled="!newTodoContent"
      >
        Add
      </button>
    </div>
  </form>
</template>

<style scoped></style>
