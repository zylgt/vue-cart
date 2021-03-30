import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../page/home')
const cart = () => import('../page/cart')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
