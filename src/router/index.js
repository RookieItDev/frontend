import { createRouter, createWebHistory } from 'vue-router'
//import layouts
import FrontendLayout from '@/layouts/Frontend.vue'
//import views frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
//import views backend
import Product from '@/views/backend/Product.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children: [
      {
        path:'',
        component: Home //การทำงาน children คือเอา component home ไปแปะกับ component frontendLayout
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: FrontendLayout,
    children: [
      {
        path:'',
        component: About
      }
    ]
  },
  {
    path: '/product',
    name: 'Product',
    component: FrontendLayout,
    children: [
      {
        path:'',
        component: Product
      }
    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
