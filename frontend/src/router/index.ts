import { createRouter, createWebHistory } from 'vue-router'
import * as Public from '@/views/public'
import * as Admin from '@/views/admin'
// ========================================================)->
import FaireUnDon from '@/views/admin/users/FaireUnDon.vue'
// ========================================================)->
import Login from '@/views/auth/Login.vue'
// ========================================)>
import { authGuard } from '@/_helpers/auth-guard'
// =============================================================)->
import NotFound from '@/views/NotFound.vue'

// localStorage.setItem('token', 'marcel')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Public.PublicLayout,
      children: [
        { path: '/', name: 'home', component: Public.HomeView },
        { path: '/wish-list', component: Public.WishList, name: 'WishList' },
        { path: '/shopping-cart', component: Public.ShoppingCart, name: 'ShoppingCart' },
        { path: '/about', name: 'about', component: () => import('../views/public/AboutView.vue') },
        { path: '/faire-un-don', name: 'FaireUnDon', component: FaireUnDon }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      // beforeEnter: authGuard,
      component: Admin.AdminLayout,
      children: [
        { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
        {
          path: 'user/shop/:id(\\d+)',
          name: 'user-shopping',
          component: Admin.UserShopping,
          props: true
        },
        {
          path: 'user/don/:id(\\d+)',
          name: 'user-fait-un-don',
          component: Admin.FaireUnDon,
          props: true
        },
        { path: '/admin/user/wishlist', name: 'user-wishlist', component: Admin.WishList }
      ]
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

// vérouillage de la partie admin (tooken)
router.beforeEach((to, from, next) => {
  if (to.matched[0].name == 'admin') {
    console.log('pas de token pas dadmin')
    authGuard()
  }
  next()
})

export default router
