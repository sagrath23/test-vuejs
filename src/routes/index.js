import { createRouter, createWebHistory } from 'vue-router' // TODO: import VueRouter from 'vue-router'

import List from '../pages/list/List.vue'
import Detail from '../pages/detail/Detail.vue'
import NotFound from '../pages/not-found/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: List },
  { path: '/pokemon/:pokemonName', name: 'Detail', component: Detail },
  { path: '/:pathMatch(.*)*', Name: 'NotFound', component: NotFound } // TODO: change path match for *
]

// TODO: change to use VueRouter
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
