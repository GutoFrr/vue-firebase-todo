<script setup>
import { ref } from 'vue'
import { addDoc, collection } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase'

const todosCollection = collection(db, 'todos')

const newTodoContent = ref('')

const isLoggedIn = ref(false)
const auth = getAuth()
const user = auth.currentUser

const addTodo = () => {
  if (user) {
    isLoggedIn.value = true
    addDoc(todosCollection, {
      user: user.uid,
      content: newTodoContent.value,
      done: false,
      date: Date.now(),
    })
  } else {
    isLoggedIn.value = false
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
        class="w-20 p-2 bg-vue-green text-white rounded shadow-lg cursor-pointer transition duration-300 hover:shadow-xl hover:brightness-90"
        :disabled="!newTodoContent"
      >
        Add
      </button>
    </div>
  </form>
</template>

<style scoped></style>
