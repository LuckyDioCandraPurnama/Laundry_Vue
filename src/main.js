import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'

// Vue.use(VueRouter);
Vue.use(VueAxios, axios)

// const Sidebar = { template: '<div>Sidebar</div>' }
// const Navbar = { template: '<div>Navbar</div>' }
// const routes = new VueRouter({
// })

// const routes = [
//   { path: '/sidebar', component: Sidebar },
//   { path: '/navbar', component: Navbar }
// ]

Vue.config.productionTip = false
Vue.component('navbar-component', require('./components/Template/Navbar.vue').default);
Vue.component('sidebar-component', require('./components/Template/Sidebar.vue').default);
Vue.component('footer-component', require('./components/Template/Footer.vue').default);
// Vue.component('member-component', require('./components/Member/Member.vue').default);
// Vue.component('update_member-component', require('./components/Member/Edit_Member.vue').default);
// Vue.component('transaksi-component', require('./components/Transaksi.vue').default);
// Vue.component('paket-component', require('./components/Paket.vue').default);
// Vue.component('user-component', require('./components/User/User.vue').default);
 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
