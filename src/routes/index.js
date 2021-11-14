import { createRouter, createWebHistory } from 'vue-router' // TODO: import VueRouter from 'vue-router'

import List from '../pages/list/list.vue'
import Detail from '../pages/detail/detail.vue'
import NotFound from '../pages/not-found/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: List },
  { path: '/detail', name: 'Detail', component: Detail },
  { path: '/:pathMatch(.*)*', Name: 'NotFound', component: NotFound } // TODO: change path match for *
]

// TODO: change to use VueRouter
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
