// Composables
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/faq', component: () => import('../views/Faq.vue')},
  { path: '/product', component: () => import('../views/Product.vue')},
  { path: '/product/page', component: () => import('../productpage/productpage.vue')}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



export default router;







// children: [
//   {
//     path: '',
//     name: 'Home',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
//   },
// ],

//() => import('@/views/Home.vue')