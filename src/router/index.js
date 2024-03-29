import { createRouter, createWebHistory } from 'vue-router'
import PayCard from '@/views/payment/PayCard.vue'
import PayResult from '@/views/payment/PayResult.vue'

const routes = [
  {
    path: '/pays/card',
    name: '/pays/card',
    component: PayCard
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
