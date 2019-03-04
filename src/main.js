import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
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
  page:null,
  btcolor:null,
  search:'',
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

//const swalWithBootstrapButtons = Swal.mixin({
//  confirmButtonClass: 'btn btn-success',
//  cancelButtonClass: 'btn btn-danger',
//  buttonsStyling: false,
//})