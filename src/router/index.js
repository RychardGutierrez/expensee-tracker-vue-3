import { createRouter, createWebHistory } from 'vue-router'
import ExpenseTrackerView from '@/views/ExpenseTrackerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ExpenseTrackerView
    }
  ]
})

export default router
