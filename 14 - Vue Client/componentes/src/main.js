import Vue from 'vue'
import { component } from 'vue/types/umd'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
imnport contador from './components/Contador.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
