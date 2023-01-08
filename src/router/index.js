import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/welcome', 
      name: 'Welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Welcome
      //props: true
    }
  ]
})

export default router
