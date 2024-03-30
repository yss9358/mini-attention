import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/index/MainView.vue'
import PayCard from '@/views/payment/PayCard.vue'
import PayResult from '@/views/payment/PayResult.vue'
import PayOthers from '@/views/payment/PayOthers.vue'

const routes = [
  {
    path : '/',
    name : '/',
    component : MainView
  },
  {
    path: '/pays/card',
    name: '/pays/card',
    component: PayCard
  },
  {
    path : '/pays/others',
    name : '/pays/others',
    component : PayOthers
  },
  {
    path : '/pays/result',
    name : '/pays/result',
    component : PayResult
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
