import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/index.vue')
    },
    {
      path: '/products',
      name: 'products.index',
      component: () => import('../views/products/index.vue')
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: () => import('../views/products/Show.vue')
    },
    {
      path: '/cart',
      name: 'cart.index',
      component: () => import('../views/cart/Index.vue')
    },


    {
      path: '/users/login',
      name: 'user.login',
      component: () => import('../views/users/Login.vue')
    },

    {
      path: '/users/registration',
      name: 'user.registration',
      component: () => import('../views/users/Registration.vue')
    },
  ]
})

export default router
