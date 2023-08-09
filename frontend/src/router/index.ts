import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public'

import * as Admin from '@/views/admin'

// =============================================================>

import FaireUnDon from '@/views/admin/users/FaireUnDon.vue'

// =============================================================>

import Login from '@/views/auth/Login.vue'

// =============================================================>
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Public.PublicLayout,
      children: [
        { path: '/', name: 'home', component: Public.HomeView },
        {
          path: '/wish-list',
          component: Public.WishList,
          name: 'WishList'
        },
        {
          path: '/shopping-cart',
          component: Public.ShoppingCart,
          name: 'ShoppingCart'
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/public/AboutView.vue')
        },
        {
          path: '/faire-un-don',
          name: 'FaireUnDon',
          component: FaireUnDon
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin.AdminLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Admin.Dashboard
        },
        {
          path: 'user/fait-un-don',
          name: 'user-fait-un-don',
          component: Admin.FaireUnDon
        },
        {
          path: 'user/wishlist',
          name: 'user-wishlist',
          component: Admin.WishList
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ]
})

export default router
