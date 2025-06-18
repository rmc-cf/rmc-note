import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/account',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeResolve(() => {
  Loading.open(5)
})

router.afterEach(() => {
  requestAnimationFrame(() => {
    Loading.open(100)
  })
})
