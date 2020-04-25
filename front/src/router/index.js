import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Error from '../views/Error.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listar/:id',
    name: 'Listar',
    component: () => import(/* webpackChunkName: "Listar" */ '../views/Listar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
