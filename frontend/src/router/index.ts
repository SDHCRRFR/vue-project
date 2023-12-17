import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/connexion/user'
// ==========================================================)->
import AdminDashboard from '@/views/admin/AdminDashboard.vue'
import * as Public from '@/views/public'
import * as User from '@/views/users'
// ===========================================================)->
import UserLogin from '@/views/public/UserLogin.vue'
import UserLogout from '@/views/UserLogout.vue'
import SignUp from '@/views/public/SignUp.vue'
import NotFound from '@/views/NotFound.vue'
// ============================================================)->

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
        {
          path: '/restaurant/:id',
          name: 'restaurant',
          component: Public.RestaurantId,
          props: true
        },
        { path: '/store-management', name: 'StoreManagement', component: Public.StoreManagement },
        { path: '/help-management', name: 'HelpManagement', component: Public.HelpManagement },
        { path: '/about', name: 'about', component: () => import('../views/public/AboutView.vue') }
      ]
    },
    { path: '/login', name: 'user-login', component: UserLogin },
    { path: '/signup', name: 'SignUp', component: SignUp },
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/user',
      name: 'user',
      component: User.UserLayout,
      meta: { requiresAuth: true },
      children: [
        { path: 'dashboard', name: 'UserDashboard', component: User.UserDashboard },
        { path: 'shop', name: 'user-shopping', component: User.UserShopping },
        {
          path: 'restaurants/:id',
          name: 'restaurants',
          component: User.RestaurantIdUser,
          props: true
        },
        { path: 'index/:id(\\d+)', name: 'user-index', component: User.UserIndex, props: true },
        { path: 'don/:id(\\d+)', name: 'user-don', component: User.FaireUnDon, props: true },
        { path: '/user-management', name: 'ManagementStore', component: User.ManagementStore },
        { path: '/management/help', name: 'ManagementHelp', component: User.ManagementHelp }
      ]
    },
    { path: '/logout', name: 'UserLogout', component: UserLogout },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

router.beforeEach(async (to, from, next) => {
  window.scrollTo(0, 0)
  const userStore = useUserStore()
  const isAuthenticated = userStore.isAuthenticated()
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'user-login' })
  } else {
    next()
  }
})

export default router
