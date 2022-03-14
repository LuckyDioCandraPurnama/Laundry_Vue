import Vue from 'vue'
import VueRouter from 'vue-router'

//LOGIN
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

//PAKET
import Paket from '../components/Paket/Paket.vue'
import Tambah_Paket from '../components/Paket/Tambah_Paket.vue'
import Edit_Paket from '../components/Paket/Edit_Paket.vue'

//OUTLET
import Outlet from '../components/Outlet/Outlet.vue'
import Edit_Outlet from '../components/Outlet/Edit_Outlet.vue'

//TRANSAKSI
import Transaksi from '../components/Transaksi/Transaksi.vue'
import Tambah_Transaksi from '../components/Transaksi/Tambah_Transaksi.vue'
import Tambah_Detail from '../components/Transaksi/Tambah_Detail.vue'
import Detail_Transaksi from '../components/Transaksi/Detail_Transaksi.vue'
import Edit_Transaksi from '../components/Transaksi/Edit_Transaksi.vue'
//MEMBER
import Member from '../components/Member/Member.vue'
import Edit_Member from '../components/Member/Edit_Member.vue'
import Detail_Member from '../components/Member/Detail_Member.vue'
import Tambah_Member from '../components/Member/Tambah_Member.vue'
//USER
import User from '../components/User/User.vue'
import Tambah_User from '../components/User/Tambah_User.vue'
import Edit_User from '../components/User/Edit_User.vue'
import Detail_User from '../components/User/Detail_User.vue'
//REPORT
import Report from '../components/Report/Report.vue'

Vue.use(VueRouter)

const routes = [
  //DASHBOARD
  {path: '/', name: 'dashboard', component: Dashboard,meta: {requiresAuth: true}},

  //LOGIN
  { path: '/login', name: 'login', component: Login },
  
  //MEMBER
  { path: '/member', name: 'member', component: Member, meta: {requiresAuth: true }},
  { path: '/member/edit/:id', name: 'edit_member', component: Edit_Member, meta: { requiresAuth: true }},
  {path: '/member/detail/:id', name: 'detail_member', component: Detail_Member, meta: {requiresAuth: true}},
  {path: '/member/tambah', name: 'tambah_member', component: Tambah_Member, meta: {requiresAuth: true}},
  
  //USER
  { path: '/user', name: 'user', component: User, meta: {requiresAuth: true} },
  { path: '/user/edit/:id', name: 'edit_user', component: Edit_User, meta: { requiresAuth: true} },
  { path: '/user/tambah', name: 'tambah_user', component: Tambah_User, meta: {requiresAuth: true}},
  { path: '/user/detail/:id', name: 'detail_user', component: Detail_User,meta: {requiresAuth: true} },
  
  //TRANSAKSI
  { path: '/transaksi', name: 'transaksi', component: Transaksi, meta: {requiresAuth: true}},
  { path: '/transaksi/tambah', name: 'tambah_transaksi', component: Tambah_Transaksi, meta: {requiresAuth: true}},
  { path: '/transaksi/detail/tambah/:id', name: 'tambah_detail', component: Tambah_Detail, meta: {requiresAuth: true}},
  { path: '/transaksi/detail/:id', name: 'detail_transaksi', component: Detail_Transaksi, meta: {requiresAuth: true}},
  { path: '/transaksi/edit/:id', name: 'edit_transaksi', component: Edit_Transaksi, meta: {requiresAuth: true}},

  //PAKET
  { path: '/paket', name: 'paket', component: Paket, meta: {requiresAuth: true} },
  { path: '/paket/tambah', name: 'tambah_paket', component: Tambah_Paket, meta: {requiresAuth: true}},
  { path: '/paket/edit/:id', name: 'edit_paket', component: Edit_Paket, meta: {requiresAuth: true}},
  
  //OUTLET
  { path: '/outlet', name: 'outlet', component: Outlet, meta: {requiresAuth: true} },
  { path: '/outlet/:id', name: 'edit_outlet', component: Edit_Outlet, meta: {requiresAuth: true} },

  //REPORT
  { path: '/report', name: 'report', component: Report, meta: {requiresAuth: true} },

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
