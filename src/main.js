import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.store = {
  viewPage:null,
  user_id:null,
  user_email:null,
  user_pass:null,
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
