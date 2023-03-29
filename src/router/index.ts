import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Stock from '../views/Stock.vue'
import Favorites from '../views/Favorites.vue'
import TheDeals from '../views/TheDeals.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/deals',
    name: 'TheDeals',
    component: TheDeals,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
