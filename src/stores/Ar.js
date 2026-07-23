import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
export const Ar = defineStore('arabc', () => {
  //nav-links
  const HomeLink = reactive({
    title: 'الرئيسية',
    url: '/',
    right: 'جميع الحقوق محفوظة',
    links: reactive([
      { title: 'الخبرات', url: '#experience' },
      { title: 'المهارات', url: '#skills' },
      { title: 'المشاريع', url: '#projects' },
      { title: 'تواصل معي', url: '#contact' },
    ]),
  })

  //sectionOne
  const headerSOne = reactive({
    titleSOne: 'من انا',
    subtitleSOne: 'تعرف على مسيرتي',
  })
  const name = ref('ايهاب كرم')
  const sub = ref('مطور برمجيات شامل')
  const disc = ref(
    `مطور برمجيات شامل (Full-Stack Developer) يتمتع بخبرة واسعة في بناء تطبيقات ويب حديثة ومتجاوبة ومحسّنة لمحركات البحث (SEO). يمتلك مهارات عالية في تطوير الواجهات الأمامية (Front-end) باستخدام تقنيات Vue.js وNuxt.js وReact.js، إلى جانب مكتبات واجهة المستخدم الحديثة مثل Vuetify وBootstrap. كما يتمتع بخبرة في تطوير الواجهات الخلفية (Back-end) باستخدام PHP وLaravel، بما في ذلك بناء ودمج واجهات برمجة التطبيقات (RESTful APIs) والتعامل مع قواعد بيانات SQL لنمذجة البيانات والاستعلام عنها بكفاءة. لديه شغف بالتصميم المتمحور حول المستخدم وبناء تطبيقات تتسم بالكفاءة والقابلية للتوسع وسهولة الصيانة. يتقن إدارة حالة التطبيق (State Management) باستخدام Vuex وPinia وRedux Toolkit، ولديه خبرة في استخدام أدوات التطوير الحديثة مثل Vite وGit.`,
  )
  const btndown = ref('تنزيل سابقة الاعمال ')
  //experince
  // مصفوفة بيانات الخبرات المهنية
  const experiencesHead = reactive({
    title: 'مسيرتي',
    subtitle: 'خبرة العمل ',
  })
  const experiences = reactive([
    {
      role: 'مطور ويب متكامل (Full-Stack Developer)',
      company: 'اسم الشركة', // يمكنك استبدالها بأسماء شركاتك الحقيقية لاحقاً
      location: 'عن بعد / مصر',
      period: '202X - الحالي',
      current: true,
      description:
        'قيادة تطوير تطبيقات ويب حديثة، متجاوبة، ومحسنّة لمحركات البحث (SEO). متخصص في بناء منتجات متكاملة وسلسة، تحسين أداء واجهات المستخدم، إدارة تدفقات الحالة (State Management)، وهندسة واجهات برمجة تطبيقات (RESTful APIs) قوية وآمنة لربط الواجهات التفاعلية بقواعد البيانات 관계ية.',
      stack: ['Vue 3', 'Laravel', 'Pinia', 'Nuxt.js', 'REST API', 'MySQL'],
    },
    {
      role: 'مطور ويب متكامل (Full-Stack Developer)',
      company: 'اسم الشركة',
      location: 'القاهرة، مصر',
      period: '202X - 202X',
      current: false,
      description:
        'المساهمة بشكل كبير في بناء تصميمات واجهات تفاعلية مخصصة إلى جانب تطبيقات خلفية قوية. قمت ببناء حاويات إدارة الحالة، وكتابة كود نظيف للوحات تحكم إدارة العملاء، مما ساهم في تحسين إعادة استخدام الكود، وتطوير واجهات برمجية نمطية (Modular)، وتحسين كفاءة استعلامات قواعد البيانات عبر مشاريع مختلفة.',
      stack: ['React.js', 'PHP', 'Laravel', 'Bootstrap', 'Vite', 'Git'],
    },
  ])
  //contact

  // المحتوى باللغة العربية داخل كائن تفاعلي
  const contactContent = reactive({
    subtitle: 'تواصل معي',
    title: 'لنبدأ العمل معاً',
    infoTitle: 'معلومات الاتصال',
    infoDesc:
      'هل لديك مشروع ترغب في تنفيذه، تبحث عن مطور ويب متكامل (Full-Stack Developer)، أو تريد فقط إلقاء التحية؟ أرسل رسالتك وسأرد عليك في أقرب وقت ممكن.',
    phoneLabel: 'اتصل بنا',
    phone: '+20 01032869272',
    emailLabel: 'البريد الإلكتروني',
    email: 'eihapkaram9090@gmail.com',
    locationLabel: 'الموقع',
    location: 'القاهرة، مصر',
    socialLabel: 'تابعني على',
  })
  // المحتوى باللغة العربية داخل كائن  skills
  const SkillHead = reactive({
    title: ' & التكنولوجيا',

    subtitle: 'المهارات',
    bigtitle: 'تطوير واجهات المستخدم',
    bigtitle1: 'تطوير الأنظمة الخلفية',
    bigtitle2: 'الأدوات والبنية التحتية',
  })
  const frontendCategories = reactive([
    {
      title: 'الإطارات البرمجية',
      skills: [
        { name: 'React', icon: 'react.png' },
        { name: 'Vue.js', icon: 'vuejs.png' },
        { name: 'Nuxt.js', icon: 'nuxt.png' },
      ],
    },
    {
      title: 'التصميم والأنظمة المساعدة',
      skills: [
        { name: 'Tailwind', icon: 'tailwind.png' },
        { name: 'BootStrap', icon: 'bootstrap.png' },
        { name: 'SASS', icon: 'sass.png' },
        { name: 'Vuetify', icon: 'vuetify.png' },
      ],
    },
    {
      title: 'لغات البرمجة',
      skills: [
        { name: 'JavaScript', icon: 'js.png' },
        { name: 'Es6', icon: 'js.png' },
        { name: 'Jquery', icon: 'jquery.png' },
      ],
    },
  ])

  const backendCategories = reactive([
    {
      title: 'لغات البرمجة',
      skills: [{ name: 'PHP', icon: 'php.png' }],
    },
    {
      title: 'الإطارات البرمجية',
      skills: [{ name: 'Laravel', icon: 'laravel.png' }],
    },
    {
      title: 'الهندسة والواجهات البرمجية',
      skills: [
        { name: 'REST APIs', icon: 'apis.png' },
        { name: 'Json', icon: 'json.png' },
      ],
    },
  ])

  const toolsCategories = reactive([
    {
      title: 'إدارة الحالة',
      skills: [
        { name: 'Vuex', icon: 'vuex.png' },
        { name: 'Pinia', icon: 'pinia.png' },
        { name: 'Redux-Toolkit', icon: 'redux.png' },
      ],
    },
    {
      title: 'ديف أوبس والحوسبة السحابية',
      skills: [
        { name: 'Docker', icon: 'docker.png' },
        { name: 'Vite', icon: 'vite.png' },
      ],
    },
    {
      title: 'قواعد البيانات',
      skills: [{ name: 'MySQL', icon: 'mysql.png' }],
    },
    {
      title: 'إدارة الإصدارات',
      skills: [{ name: 'GitHub', icon: 'github.webp' }],
    },
  ])
  return {
    HomeLink,
    experiencesHead,
    name,
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
