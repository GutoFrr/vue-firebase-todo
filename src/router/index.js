import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import LogIn from '../views/LogIn.vue'
import Todos from '../views/Todos.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todos',
      component: Todos,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/login',
      component: LogIn,
    },
  ],
  linkActiveClass: 'active-route',
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert("you don't have access!")
    }
  } else {
    next()
  }
})

export default router
