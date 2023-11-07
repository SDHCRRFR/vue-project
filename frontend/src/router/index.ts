import { createRouter, createWebHistory } from 'vue-router'

// ==========================================================)->

import AdminDashboard from '@/views/admin/AdminDashboard.vue'
import * as Public from '@/views/public'
import * as User from '@/views/users'

// ===========================================================)->

import UserLogin from '@/views/public/UserLogin.vue'
import SignUp from '@/views/public/SignUp.vue'
import ManagementStore from '@/views/ManagementStore.vue'
import ManagementHelp from '@/views/public/ManagementHelp.vue'
import NotFound from '@/views/NotFound.vue'

// ===============================================)->

import { authGuard } from '@/_helpers/auth-guard'
// ==============================================localStorage.setItem('token', 'marcel') ================================================= \\ =======================================================================================================================================

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Public.PublicLayout,
      children: [
        { path: '/', name: 'home', component: Public.HomeView },
        { path: '/shopping-cart', component: Public.ShoppingCart, name: 'ShoppingCart' },
        { path: '/restaurant/:id(\\d+)', name: 'RestaurantId', component: Public.RestaurantId },
        { path: '/about', name: 'about', component: () => import('../views/public/AboutView.vue') }
      ]
    },
    {
      path: '/login',
      name: 'user-login',
      component: UserLogin
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      beforeEnter: authGuard,
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/user',
      name: 'user',
      beforeEnter: authGuard,
      component: User.UserLayout,
      children: [
        { path: 'dashboard', name: 'UserDashboard', component: User.UserDashboard },
        {
          path: 'user/shop/:id(\\d+)',
          name: 'user-shopping',
          component: User.UserShopping,
          props: true
        },
        {
          path: 'user/index/:id(\\d+)',
          name: 'user-index',
          component: User.UserIndex,
          props: true
        },
        { path: 'user/don/:id(\\d+)', name: 'user-don', component: User.FaireUnDon, props: true },
        { path: '/user/wishlist', name: 'user-wishlist', component: User.WishList },
        { path: '/user/logout', name: 'UserLogout', component: User.UserLogout }
      ]
    },
    { path: '/management', name: 'ManagementStore', component: ManagementStore },
    { path: '/management/help', name: 'ManagementHelp', component: ManagementHelp },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

// vérouillage de la partie admin (tooken)
router.beforeEach((to, from, next) => {
  if (to.matched[0].name == 'user') {
    authGuard()
  }
  next()
})

router.beforeEach((to, from, next) => {
  // Défilement de la page vers le haut à chaque changement de route
  window.scrollTo(0, 0)
  next()
})

export default router
