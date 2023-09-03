import { createRouter, createWebHistory } from 'vue-router'
import * as Public from '@/views/public'
import * as Admin from '@/views/admin'
// ========================================================)->
import Management from '@/views/Management.vue'
// ========================================================)->
import Login from '@/views/auth/Login.vue'
// ========================================)>
import { authGuard } from '@/_helpers/auth-guard'
// =============================================================)->
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
        { path: '/wishlist', component: Public.WishList, name: 'WishList' },
        { path: '/shopping-cart', component: Public.ShoppingCart, name: 'ShoppingCart' },
        { path: '/about', name: 'about', component: () => import('../views/public/AboutView.vue') },
        { path: '/faire-un-don', name: 'FaireUnDon', component: Public.FaireUnDon }
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
        { path: 'user/index/:id(\\d+)', name: 'user-index', component: Admin.UserIndex },
        {
          path: 'user/don/:id(\\d+)',
          name: 'user-fait-un-don',
          component: Admin.FaireUnDon,
          props: true
        },
        { path: '/admin/user/wishlist', name: 'user-wishlist', component: Admin.WishList },
        { path: '/admin/logout', name: 'logout', component: Admin.Logout }
      ]
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/:pathMatch(.*)*', component: NotFound },
    { path: '/management', name: 'Management', component: Management }
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
