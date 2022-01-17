import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Table from '../components/Member/Table.vue'
import Edit from '../components/Member/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/member',
    name: 'table',
    component: Table,
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router