import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/views/HomePage.vue')
const AboutPage = () => import('../views/AboutPage.vue')
const ProjectDetails = () => import('../views/ProjectDetails.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/prodetails/:id',
      name: 'ProjectDetails',
      component: ProjectDetails,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // إذا كان الرابط يحتوي على هاش (#section)
    if (to.hash) {
      return {
        el: to.hash, // تم تفعيلها لأنك تستخدم Vue Router v4 مع Vite
        behavior: 'smooth', // لجعل الانتقال سلساً ومتحركاً
      }
    }
    // إذا لم يكن هناك هاش، اعود لأعلى الصفحة أو احتفظ بالمكان السابق
    return savedPosition || { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if (to.name === 'ProjectDetails' && to.query.title) {
    document.title = to.query.title
  } else if (to.name === 'home') {
    document.title = 'Ihap_Karam'
  }
  next() // استخدام next بالشكل الصحيح بدلاً من nuxt
})

export default router
