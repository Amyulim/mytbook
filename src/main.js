import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.store = {
  viewPage:null,
  user_id:null,
  user_email:null,
  user_pass:null,
  student_id:null,
  cur_book_id:null,
  cur_book_title:null,
  cur_book_isbn:null,
  cur_book_course:null,
  cur_book_price:null,
  cur_book_img:null,
  cur_book_mdate:null,
  cur_book_desc:null,
  cur_book_condition:null,
  cur_book_status:null,
  page:1
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
