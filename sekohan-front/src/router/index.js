// Composables
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: () => import('../views/Product.vue')},
  { path: '/faq', component: () => import('../views/Faq.vue')},
  { path: '/product/page', component: () => import("@/components/product_page/ProductPage.vue")},
  { path: '/mypage', component: () => import("../components/my_page/MyPage")},
  { path: '/signin', component: () => import("../components/sign/SignIn.vue")}, 
  { path: '/signup', component: () => import("../components/sign/SignUp.vue")},
  { path: '/help', component: () => import("../components/forgot_account/HelpUser.vue")},
  { path: '/admin', component: () => import("../components/admin/control/controlMember.vue")},
  { path: '/adminPro', component: () => import("../components/admin/control.vue")}

  // { path: '/upload', component: () => import("@/components/my_page/Upload.vue")}
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