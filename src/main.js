import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router' // import VueRouter from 'vue-router'
import App from './App.vue'
import List from './components/list/list.vue'
import Detail from './components/detail/detail.vue'

// const NotFound = { template: '<p>Page not found</p>' }
const routes = [
  { path: '/', component: List },
  { path: '/detail', component: Detail },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
