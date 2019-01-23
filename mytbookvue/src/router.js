import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomePage from './views/Homepage.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import Bookform from './components/Bookform.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //landing//
      path: '/',
      name: 'homepage',
      component: HomePage
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
