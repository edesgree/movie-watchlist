import { createWebHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import Watchlist from './pages/Watchlist.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
