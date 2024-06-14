import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../components/SignIn.vue'
import WelcomeView from '../views/WelcomeView.vue'
import HomeLayout from '@/layouts/HomeLayout.vue'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
      children: [
        {
          path: '/',
          name: 'initial',
          component: HomeView
        },
        {
          path: '/store',
          name: 'store',
          component: StoreView
        }
      ]
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})

export default router
