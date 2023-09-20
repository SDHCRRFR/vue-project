import { createRouter, createWebHistory } from 'vue-router'
//
import * as Public from '@/views/public'
import * as Admin from '@/views/admin'
// ========================================================)->
import ManagementStore from '@/views/ManagementStore.vue'
import UserLogin from '@/views/auth/UserLogin.vue'
import SignUp from '../views/auth/SignUp.vue'
import { authGuard } from '@/_helpers/auth-guard'
import NotFound from '@/views/NotFound.vue'

localStorage.setItem('token', 'marcel')

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
        { path: '/about', name: 'about', component: () => import('../views/public/AboutView.vue') }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      // beforeEnter: authGuard,
      component: Admin.AdminLayout,
      children: [
        { path: 'dashboard', name: 'UserDashboard', component: Admin.UserDashboard },
        {
          path: 'user/shop/:id(\\d+)',
          name: 'user-shopping',
          component: Admin.UserShopping,
          props: true
        },
        {
          path: 'user/index/:id(\\d+)',
          name: 'user-index',
          component: Admin.UserIndex,
          props: true
        },
        {
          path: 'user/don/:id(\\d+)',
          name: 'user-fait-un-don',
          component: Admin.FaireUnDon,
          props: true
        },
        { path: '/admin/user/wishlist', name: 'user-wishlist', component: Admin.WishList },
        { path: '/admin/logout', name: 'UserLogout', component: Admin.UserLogout }
      ]
    },
    { path: '/login', name: 'UserLogin', component: UserLogin },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/management', name: 'ManagementStore', component: ManagementStore },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

// vérouillage de la partie admin (tooken)
router.beforeEach((to, from, next) => {
  if (to.matched[0].name == 'admin') {
    authGuard()
  }
  next()
})

export default router
