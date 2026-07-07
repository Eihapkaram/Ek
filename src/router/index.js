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
})
router.beforeEach((to, from, nuxt) => {
  if (to.name == 'ProjectDetails') {
    document.title = to.query.title
  }
  if (to.name == 'home') {
    document.title = 'Ihap_Karam'
  }
  nuxt()
})
export default router
