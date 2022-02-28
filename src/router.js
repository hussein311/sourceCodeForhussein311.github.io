import { createRouter, createWebHashHistory } from 'vue-router'

import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: ContactView, path: '/contact' },
    { component: HomeView, path: '/' }
  ]
})
