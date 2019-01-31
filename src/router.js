import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import Bookform from './components/Bookform.vue'
import Booklist from './components/Booklist.vue'
import BookViewPage from './components/BookView.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //landing//
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path:'/signin',
      name:'signin',
      component: Signin,
    },
    {
      path:'/signup',
      name:'signup',
      component: Signup,
    },
    {
      path:'/bookform',
      name:'bookform',
      component: Bookform,
    },
    {
      path:'/booklist',
      name:'booklist',
      component: Booklist,
    },
    {
      //for the book view
      path:'/bookview',
      name:'bookview',
      component: BookViewPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
