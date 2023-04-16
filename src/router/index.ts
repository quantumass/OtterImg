import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Pricing from '../views/Pricing.vue'

import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import CookiePolicy from '../views/CookiePolicy.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Profile from '../views/Profile.vue'
// import componentsRoutes from './componentsRoutes'
// import layoutCompRoutes from './layoutCompRoutes'
// import styleRoutes from './styleRoutes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'default-layout' }
  },
  // {
  //   path: '/pricing',
  //   name: 'Pricing',
  //   component: Pricing,
  //   meta: { layout: 'default-layout' }
  // },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { layout: 'default-layout' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { layout: 'default-layout' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'default-layout' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { layout: 'default-layout' }
  },
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: Services,
  //   meta: { layout: 'default-layout' }
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { layout: 'default-layout' }
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: CookiePolicy,
    meta: { layout: 'default-layout' }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: { layout: 'default-layout' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { layout: 'default-layout' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
