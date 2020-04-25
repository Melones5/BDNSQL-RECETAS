import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2'


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
