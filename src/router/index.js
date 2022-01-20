import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Paket from '../components/Paket.vue'
import Transaksi from '../components/Transaksi.vue'
//MEMBER
import Member from '../components/Member/Member.vue'
import Edit_Member from '../components/Member/Edit_Member.vue'
import Tambah_Member from '../components/Member/Tambah_Member.vue'
//USER
import User from '../components/User/User.vue'
import Tambah_User from '../components/User/Tambah_User.vue'
import Edit_User from '../components/User/Edit_User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'dashboard', component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  { path: '/login', name: 'login', component: Login },
  // { path: '/logout', name: 'logout', component: Login },
  { path: '/paket', name: 'paket', component: Paket },
  { path: '/transaksi', name: 'transaksi', component: Transaksi },
  //MEMBER
  {
    path: '/member', name: 'member', component: Member,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/member/edit/:id', name: 'update_member', component: Edit_Member, meta: {
      requiresAuth: true
    }
  },
  { path: '/tambah_member', name: 'tambah_member', component: Tambah_Member, },
  //USER
  { path: '/user', name: 'user', component: User },
  { path: '/edit_user', name: 'edit_user', component: Edit_User, },
  { path: '/tambah_user', name: 'tambah_user', component: Tambah_User, },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth')) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})


export default router
