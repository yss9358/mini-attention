import { createRouter, createWebHistory } from 'vue-router'
import MainSilde  from '@/views/index/MainSilde.vue'
import PayCard from '@/views/payment/PayCard.vue'
import PayMobile from '@/views/payment/PayMobile.vue'
import PayOthers from '@/views/payment/PayOthers.vue'
import PayResult from '@/views/payment/PayResult.vue'


const routes = [
  {
    path : '/',
    name : '/',
    component : MainSilde
  },
  {
    path: '/pays/card',
    name: '/pays/card',
    component: PayCard
  },
  {
    path : '/pays/mobile',
    name : '/pays/mobile',
    component : PayMobile
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
