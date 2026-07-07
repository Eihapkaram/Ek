import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const Projects = defineStore('pro', () => {
  // 1. دالة عمومية لتحويل المسار النسبي لمسار حقيقي يفهمه Vite بعد الـ Build
  const getAssetUrl = (path) => {
    return `/${path}`
  }
  const all = reactive([
    {
      id: 1,
      title: 'Tajer El Balad (Jomlet) B2B Platform',
      link: 'https://jomlit.vercel.app/',
      subtitle: 'Full Stack Project',
      dis: `Gomla is my first Full-Stack project, developed from scratch using Laravel (PHP) and Vue.js.

The project is a comprehensive e-commerce platform designed for wholesale sales within the Egyptian market for retailers and distributors.

The website offers a modern and fast buying experience built on best performance practices such as Code Splitting, Lazy Loading, and Optimized Routing to reduce loading times and improve LCP and Speed ​​Index.

🧩 Key Project Features: 💻 Technically (Full-Stack):

Complete backend using Laravel.

Integrated REST API for data and order management.

Login and account registration system supporting both seller and dealer roles.

Complete dashboard for managing products, customers, pages, categories, orders, offers, and notifications.

Online payment gateway enabled.

Cash on Delivery (COD) support.

System-based notifications and user notification support.

Protect and manage access using Middleware and Role Permissions.

🎨 Front-End (Vue.js + Vite):

User interface built with high-performance Vue.js.

Code Splitting and Lazy Loading enabled for faster loading times.

Powerful SEO and Meta Tags + OG Tags optimization.

Fully responsive design for mobile devices.

Advanced search and ranking system.

Shopping cart, favorites, and user account management system.

🛒 Full store functionality:

Display wholesale products: tea, chewing gum, sweets, cakes, lollipops, etc.

Create orders for merchants and sales representatives.

Track order status.

Offers and discounts system.

Manage inquiries, FAQs, and content pages.

🎯 Platform objective:

To facilitate the purchase of wholesale products in the Egyptian market and provide a modern and fast experience that helps merchants and small business owners obtain goods at factory prices.
`,
      mainImg: getAssetUrl('tajer/cover.jpg'),
      imags: [
        getAssetUrl('tajer/6.png'),
        getAssetUrl('tajer/1.png'),
        getAssetUrl('tajer/2.png'),
        getAssetUrl('tajer/3.png'),
        getAssetUrl('tajer/4.png'),
      ],
      videoUrl: '',

      skills: [
        'Rest Api',

        'Vuetify',

        'vuejs',
        'laravel',
        'option api',
        'compositin api',
        'PHP',

        'MySQL',

        'Vite',

        'تحسين نتائج محركات البحث (SEO)',

        'HTML',

        'CSS',

        'Pinia',

        'JavaScript',
      ],
    },
    {
      id: 2,
      title: 'Real Estate Marketing Platform',
      subtitle: 'Full Stack Project',
      link: 'https://hotel-react-five.vercel.app/',
      dis: `🚀 Real Estate Marketing Platform | Full Stack Project

I’m excited to share one of my recent projects — a comprehensive real estate marketing platform designed to deliver a seamless and professional digital experience for users, with a strong focus on showcasing real estate projects and property units in an organized and visually appealing way.

🔹 Platform Features

The platform includes six core pages, along with several integrated features:

Real Estate Projects Page

About Us Page

Interest Registration Page

Maintenance Requests Page

Property Unit Details Page

WhatsApp Live Chat Integration

Simple and user-friendly Control Panel

💻 Frontend Development

The user interface was built using React.js, with Redux Toolkit for efficient and scalable state management. The platform ensures:

✅ High performance
✅ Smooth user experience
✅ Fully responsive design
✅ Optimized for Mobile, Tablet, and Desktop devices

⚙️ Backend Development

The backend was developed using Laravel (PHP), with MySQL as the database system to securely and efficiently manage:

Real estate projects

Property units

Maintenance requests

Customer interests

🎯 Project Goal

This platform combines performance, scalability, and usability, providing a strong and flexible foundation for future enhancements and advanced real estate marketing solutions.

I’m always open to feedback, collaboration opportunities, and new challenges in Front-End Development and Full Stack Projects.
`,
      mainImg: getAssetUrl('realState/cover.png'),
      imags: [
        getAssetUrl('realState/about.png'),
        getAssetUrl('realState/dash.png'),
        getAssetUrl('realState/intersted.png'),
        getAssetUrl('realState/one.png'),
        getAssetUrl('realState/orders.png'),
        getAssetUrl('realState/projcts.png'),
        getAssetUrl('realState/untie.png'),
      ],
      videoUrl: '',
      skills: [
        'Reactjs',
        'Rest Api',

        'Vite',

        'Redux Toolkit',

        'laravel',

        'PHP',

        'MySQL',

        'تحسين نتائج محركات البحث (SEO)',

        'OOP',

        'HTML',

        'CSS',

        'JavaScript',
      ],
    },
    {
      id: 3,
      title: 'pizza landing page',
      subtitle: 'frontend Project',
      link: 'https://pizzal.vercel.app/',
      dis: `Pizza landing page is a single page web application for ordering pizza through the web, displaying the product list, and increasing sales. It is a responsive page for all screens, and it will top the search results. It is also characterized by speed.

`,
      mainImg: getAssetUrl('pizza/cover.png'),
      imags: [getAssetUrl('pizza/صفحه1 بيتزا.png')],
      videoUrl: '',
      skills: [
        'HTML5',

        'jQuery',

        'تحسين نتائج محركات البحث (SEO)',

        'OOP',

        'CSS',

        'JavaScript',

        'Nuxtjs',

        'Vite',
      ],
    },

    {
      id: 4,
      title: 'Movies',
      subtitle: 'frontend Project',
      link: 'https://movi-0.vercel.app/',
      dis: `A site for following the latest movies and series. It is responsive to all screens. It also allows you to download movies and updates the content automatically.

`,
      mainImg: getAssetUrl('movies/cover.png'),
      imags: [
        getAssetUrl('movies/all.png'),
        getAssetUrl('movies/detels.png'),
        getAssetUrl('movies/moves3'),
        getAssetUrl('movies/search.png'),
      ],
      videoUrl: '',
      skills: [
        'Rest Api',
        'HTML5',

        'Vuex',

        'vuejs',

        'jQuery',

        'OOP',

        'CSS',

        'Bootstrap',

        'JavaScript',

        'JSON',

        'AJAX',
      ],
    },
    {
      id: 5,
      title: 'Vista',
      subtitle: 'frontend Project',
      link: 'https://vista-coral.vercel.app/',
      dis: `Vista Hotel is a website for booking hotel rooms via the Internet. It supports working on all types of screens and consists of 5 pages

`,
      mainImg: getAssetUrl('vista/cover.png'),
      imags: [
        getAssetUrl('vista/about.png'),
        getAssetUrl('vista/contact.png'),
        getAssetUrl('vista/home.png'),
      ],
      videoUrl: '',
      skills: [
        'vuejs',

        'Option api',

        'jQuery',

        'Git',

        'OOP',

        'HTML',

        'CSS',

        'Bootstrap',

        'JavaScript',

        'JSON',

        'AJAX',
      ],
    },

    {
      id: 6,
      title: 'Landing Page -TravelToor',
      link: 'https://travel-beta-snowy.vercel.app/',
      subtitle: 'frontend Project',
      dis: `TravelToor – Landing Page for Booking Flights ✈️
Live Link
Project Overview:
I designed and developed a landing page called TravelToor for travel agencies and tour operators. Its purpose is to showcase tourist destinations attractively and simplify the inquiry and booking process for customers.

Technologies Used:
Vue.js
Vuetify
Features:
Modern and responsive design (Adaptable to all devices).

Live chat for instant communication with customers.

Display of tourist destinations with prices and features in an organized and attractive manner.

Smooth and simple user experience.

Added Value:
This project helps travel agencies increase engagement and sales by providing a professional and user-friendly interface.`,
      mainImg: getAssetUrl('travel/cover.png'),
      imags: [getAssetUrl('travel/home.png'), getAssetUrl('travel/travel.png')],
      videoUrl: '',
      skills: [
        'HTML5',

        'Vuetify',

        'vuejs',

        'تحسين نتائج محركات البحث (SEO)',

        'JavaScript',

        'HTML',

        'CSS',

        'Git',
      ],
    },

    {
      id: 7,
      title: 'Ella mart+',
      subtitle: 'frontend Project',
      link: 'https://ella6.vercel.app/',
      dis: `Ella mart is an online store website for selling and displaying products. It has a responsive design for all screens. It also contains a shopping cart and a list for saving the product for later. It also has purchase and electronic payment pages. It consists of 8 pages.

`,
      mainImg: getAssetUrl('ella/cover.png'),
      imags: [
        getAssetUrl('ella/cart.png'),
        getAssetUrl('ella/detils.png'),
        getAssetUrl('ella/marcket.jpg'),
        getAssetUrl('ella/market.jpg'),
        getAssetUrl('ella/pay.png'),
      ],
      videoUrl: '',
      skills: [
        'Rest Api',

        'Vuetify',

        'vuejs',

        'تحسين نتائج محركات البحث (SEO)',

        'OOP',

        'HTML',

        'CSS',

        'Pinia',

        'JavaScript',
      ],
    },
  ])

  return { all }
})
