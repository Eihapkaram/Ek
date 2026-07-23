import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
export const En = defineStore('en', () => {
  //nav-links
  const HomeLink = reactive({
    title: 'Home',
    url: '/',
    right: 'All Rights Reserved.',
    links: reactive([
      { title: 'Experience', url: '#experience' },
      { title: 'Skills', url: '#skills' },
      { title: 'Projects', url: '#projects' },
      { title: 'Contact', url: '#contact' },
    ]),
  })

  //sectionOne
  const headerSOne = reactive({
    titleSOne: 'ABOUT ME',
    subtitleSOne: 'Discover My Journey',
  })
  const name = ref('IHAP KARAM')
  const sub = ref('FULL STACK DEVELOPER')
  const disc = ref(
    `Full-Stack Developer with strong experience in building modern, responsive, and SEO-optimized web applications. Proficient in front-end development using Vue.js, Nuxt.js, and React.js, along with modern UI libraries such as Vuetify and Bootstrap. Experienced in back-end development using PHP and Laravel, including building and integrating RESTful APIs, and working with SQL databases for efficient data modeling and querying. Passionate about user-centered design and creating efficient, scalable, and maintainable applications. Skilled in state management with Vuex, Pinia, and Redux Toolkit, and experienced with modern development tools such as Vite and Git.`,
  )
  const btndown = ref('Download Resume')
  //experince
  // مصفوفة بيانات الخبرات المهنية
  const experiencesHead = reactive({
    title: 'MY JOURNEY',
    subtitle: 'Work Experience',
  })
  const experiences = reactive([
    {
      role: 'Full-Stack Developer',
      company: 'Company Name', // يمكنك استبدالها بأسماء شركاتك الحقيقية لاحقاً
      location: 'Remote / Egypt',
      period: '202X - Present',
      current: true,
      description:
        'Leading the development of modern, responsive, and SEO-optimized web applications. Specialized in building seamless full-stack products, optimizing client-side performance, state management workflows, and engineering robust, secure RESTful APIs to connect intuitive interfaces with relational database architectures.',
      stack: ['Vue 3', 'Laravel', 'Pinia', 'Nuxt.js', 'REST API', 'MySQL'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Company Name',
      location: 'Cairo, Egypt',
      period: '202X - 202X',
      current: false,
      description:
        'Contributed heavily to building custom interactive front-end designs alongside robust back-end applications. Built state containers, and developed clean code for client management dashboards, improving code reusability, modular layouts, and database query executions across various projects.',
      stack: ['React.js', 'PHP', 'Laravel', 'Bootstrap', 'Vite', 'Git'],
    },
  ])
  //contact
  // النصوص الإنجليزية الأصلية داخل كائن تفاعلي
  const contactContent = reactive({
    subtitle: 'GET IN TOUCH',
    title: "Let's Connect",
    infoTitle: 'Contact Information',
    infoDesc:
      "Have a project in mind, looking for a full-stack developer, or just want to say hello? Drop a message and I'll get back to you as soon as possible.",
    phoneLabel: 'CALL',
    phone: '+20 01032869272',
    emailLabel: 'EMAIL',
    email: 'eihapkaram9090@gmail.com',
    locationLabel: 'LOCATION',
    location: 'Cairo, Egypt',
    socialLabel: 'Follow Me',
  })
  // مصفوفات البيانات المنظمة والمريحة للعين
  const SkillHead = reactive({
    title: ' & TECHNOLOGIES',

    subtitle: 'SKILLS',
    bigtitle: 'Frontend Development',
    bigtitle1: 'Backend Development',
    bigtitle2: 'Tools & Infrastructure',
  })
  const frontendCategories = reactive([
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', icon: 'react.png' },
        { name: 'Vue.js', icon: 'vuejs.png' },
        { name: 'Nuxt.js', icon: 'nuxt.png' },
      ],
    },
    {
      title: 'Styling & Ecosystem',
      skills: [
        { name: 'Tailwind', icon: 'tailwind.png' },
        { name: 'BootStrap', icon: 'bootstrap.png' },
        { name: 'SASS', icon: 'sass.png' },
        { name: 'Vuetify', icon: 'vuetify.png' },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: 'js.png' },
        { name: 'Es6', icon: 'js.png' },

        { name: 'Jquery', icon: 'jquery.png' },
      ],
    },
  ])

  const backendCategories = reactive([
    {
      title: 'Languages',
      skills: [{ name: 'PHP', icon: 'php.png' }],
    },
    {
      title: 'Frameworks',
      skills: [{ name: 'Laravel', icon: 'laravel.png' }],
    },
    {
      title: 'Architecture & APIs',
      skills: [
        { name: 'REST APIs', icon: 'apis.png' },

        { name: 'Json', icon: 'json.png' },
      ],
    },
  ])

  const toolsCategories = reactive([
    {
      title: 'State Management',
      skills: [
        { name: 'Vuex', icon: 'vuex.png' },

        { name: 'Pinia', icon: 'pinia.png' },
        { name: 'Redux-Toolkit', icon: 'redux.png' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: 'docker.png' },
        { name: 'Vite', icon: 'vite.png' },
      ],
    },
    {
      title: 'Databases',
      skills: [{ name: 'MySQL', icon: 'mysql.png' }],
    },
    {
      title: 'Version Control',
      skills: [{ name: 'GitHub', icon: 'github.webp' }],
    },
  ])
  return {
    HomeLink,
    name,
    experiencesHead,
    sub,
    disc,
    btndown,
    experiences,
    contactContent,
    headerSOne,
    SkillHead,
    frontendCategories,
    backendCategories,
    toolsCategories,
  }
})
