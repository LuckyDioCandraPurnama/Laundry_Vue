import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

// Vue.use(VueRouter);

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
Vue.component('table-component', require('./components/Member/Table.vue').default);
Vue.component('edit-component', require('./components/Member/Edit.vue').default);
 

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
