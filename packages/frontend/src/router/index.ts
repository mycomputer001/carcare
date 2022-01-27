import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import * as Page from '@/views'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Page.Home
  },
  {
    path: '/buypage',
    name: 'buypage',
    component: Page.Buypage
  },
  {
    path: '/register',
    name: 'register',
    component: Page.Register
  },
  {
    path: '/login',
    name: 'login',
    component: Page.Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: Page.Profile
  },
  {
    path: '/rate',
    name: 'rate',
    component: Page.Rate
  },
  {
    path: '/status',
    name: 'status',
    component: Page.Status
  },
  {
    path: '/contact',
    name: 'contact',
    component: Page.Contact
  },
  {
    path: '/firstpage',
    name: 'firstpage',
    component: Page.Firstpage
  },
  {
    path: '/bill',
    name: 'bill',
    component: Page.Bill
  },
  {
    path: '/admin',
    name: 'admin',
    component: Page.Admin
  },
  {
    path: '/employee',
    name: 'employee',
    component: Page.Employee
  },
  {
    path: '/chartview',
    name: 'chartview',
    component: Page.Chartview
  },
  {
    path: '/rateview',
    name: 'rateview',
    component: Page.Rateview
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
