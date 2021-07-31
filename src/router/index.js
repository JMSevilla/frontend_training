import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/index")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/registration")
  }
]

const router = new VueRouter({
  routes
})

export default router
