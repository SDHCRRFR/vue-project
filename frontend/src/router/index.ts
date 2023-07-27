import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishList from '../views/WishList.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import FaireUnDon from '../views/FaireUnDon.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wish-list',
      component: WishList,
      name: 'WishList'
    },
    {
      path: '/shopping-cart',
      component: ShoppingCart,
      name: 'ShoppingCart'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/faire-un-don',
      name: 'FaireUnDon',
      component: () => import('../views/FaireUnDon.vue')
    },
  ]
})

export default router
