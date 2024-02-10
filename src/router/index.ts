// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Auth/LoginPage.vue'),
    },
    {
      path: '/home',
      component: () => import('@/pages/HomePage.vue'),
      children: [
        {
          path: 'patient',
          component: () => import('@/pages/PatientPage.vue'),
        },
        {
          path: 'payment',
          component: () => import('@/pages/PaymentPage.vue'),
        },
        {
          path: 'add-patient',
          component: () => import('@/pages/AddPatient.vue'),
        },
        {
          path: 'add-visit',
          component: () => import('@/pages/VisitPage.vue'),
        },
        {
          path: 'treatment',
          component: () => import('@/pages/TreatmentPage.vue'),
        },
        {
          path: 'add-treatment',
          component: () => import('@/pages/AddTreatmentPage.vue'),
        }
        // {
        //   path: 'azolik',
        //   name: 'AzolikPage',
        //   component: () => import('@/pages/Dashboard/AzolikPage.vue')
        // },
        // {
        //   path: 'davo-ariza',
        //   name: 'DavoArizaPage',
        //   component: () => import('@/pages/Dashboard/DavoArizaPage.vue')
        // },
        // {
        //   path: 'kadr',
        //   name: 'Kadr',
        //   component: () => import('@/pages/Dashboard/KadrPage.vue')
        // }
      ]
    },
  ]
})

export default router