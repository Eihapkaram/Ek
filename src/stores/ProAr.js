import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
export const ProAr = defineStore('ProAr', () => {
  const getAssetUrl = (path) => {
    return `/${path}`
  }
  //Ar
  const header = reactive({
    subtitle: 'تواصل معي',
    title: 'مشاريعي وأعمالي',
  })

  const all = reactive([
    {
      id: 1,
      title: 'منصة تاجر البلد (جملة) لتجارة الـ B2B',
      link: 'https://jomlit.vercel.app/',
      subtitle: 'مشروع ويب متكامل (Full Stack)',
      dis: `منصة "جملة" هي أول مشروع ويب متكامل (Full-Stack) قمت بتطويره بالكامل من الصفر باستخدام Laravel (PHP) و Vue.js.

المنصة عبارة عن نظام تجارة إلكترونية شامل مخصص للبيع بالجملة داخل السوق المصري، وتستهدف تجار التجزئة والموزعين.

يقدم الموقع تجربة شراء حديثة وسريعة تعتمد على أفضل ممارسات تحسين الأداء مثل تقسيم الكود (Code Splitting)، والتحميل الكسول (Lazy Loading)، وتحسين التوجيه (Optimized Routing) لتقليل أوقات التحميل وتحسين مؤشرات الأداء مثل LCP و Speed Index.

🧩 الميزات الرئيسية للمشروع: 💻 تقنياً (Full-Stack):

• خلفية برمجية كاملة (Backend) باستخدام Laravel.
• واجهة برمجية متكاملة (REST API) لإدارة البيانات والطلبات.
• نظام تسجيل دخول وإنشاء حسابات يدعم صلاحيات البائع والتاجر.
• لوحة تحكم كاملة لإدارة المنتجات، العملاء، الصفحات، الأقسام، الطلبات، العروض، والإشعارات.
• بوابة دفع إلكتروني مفعّلة.
• دعم خيار الدفع عند الاستلام (COD).
• نظام إشعارات مدمج لدعم تنبيهات المستخدمين.
• حماية وإدارة صلاحيات الوصول باستخدام الـ Middleware والـ Role Permissions.

🎨 الواجهة الأمامية (Vue.js + Vite):

• واجهة مستخدم مبنية بكفاءة عالية باستخدام Vue.js.
• تفعيل الـ Code Splitting والـ Lazy Loading لتسريع التصفح.
• تهيئة قوية لمحركات البحث (SEO) وتحسين الـ Meta Tags + OG Tags.
• تصميم متجاوب بالكامل ومعاد تدويره ليناسب الأجهزة المحمولة.
• نظام بحث متقدم وتصنيف ذكي للمنتجات.
• سلة تسوق، قائمة مفضلات، ونظام كامل لإدارة حساب المستخدم.

🛒 وظائف المتجر الشاملة:

• عرض منتجات الجملة: الشاي، العلكة، الحلويات، الكيك، المصاصات، وغيرها.
• إنشاء الطلبات للتجار ومندوبي المبيعات.
• تتبع حالة الطلب خطوة بخطوة.
• نظام عروض وخصومات مرن.
• إدارة الاستفسارات، الأسئلة الشائعة، وصفحات المحتوى.

🎯 هدف المنصة:

تسهيل عملية شراء منتجات الجملة في السوق المصري وتوفير تجربة حديثة وسريعة تساعد التجار وأصحاب المشاريع الصغيرة في الحصول على البضائع بأسعار المصنع مباشرة.
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
      title: 'منصة التسويق العقاري',
      subtitle: 'مشروع ويب متكامل (Full Stack)',
      link: 'https://hotel-react-five.vercel.app/',
      dis: `🚀 منصة التسويق العقاري | مشروع ويب متكامل (Full Stack)

يسعدني مشاركة أحد أحدث مشاريعي — منصة تسويق عقاري شاملة تم تصميمها لتقديم تجربة رقمية سلسة واحترافية للمستخدمين، مع التركيز بشكل قوي على عرض المشاريع العقارية والوحدات السكنية بطريقة منظمة وجذابة بصرياً.

🔹 مميزات المنصة

تتضمن المنصة ست صفحات رئيسية، إلى جانب العديد من الميزات المتكاملة:

• صفحة المشاريع العقارية
• صفحة من نحن
• صفحة تسجيل الاهتمام
• صفحة طلبات الصيانة
• صفحة تفاصيل الوحدة العقارية
• ربط المحادثات المباشرة عبر تطبيق WhatsApp
• لوحة تحكم بسيطة وسهلة الاستخدام

💻 تطوير الواجهة الأمامية (Frontend)

تم بناء واجهة المستخدم باستخدام React.js، مع الاعتماد على Redux Toolkit لإدارة حالة التطبيق بشكل فعال وقابل للتوسع. تضمن المنصة:

✅ أداء عالي وسرعة فائقة
✅ تجربة مستخدم سلسة وخالية من التعقيد
✅ تصميم متجاوب بالكامل
✅ متوافق تماماً مع الهواتف الذكية، الأجهزة اللوحية، وأجهزة الكمبيوتر

⚙️ تطوير الخلفية البرمجية (Backend)

تم تطوير الجزء الخلفي باستخدام Laravel (PHP)، مع اعتماد نظام قواعد البيانات MySQL لإدارة البيانات بأمان وكفاءة عالية لـ:

• المشاريع العقارية
• الوحدات العقارية وال سكنية
• طلبات الصيانة المقدمة
• بيانات العملاء المهتمين

🎯 هدف المشروع

تجمع هذه المنصة بين الأداء العالي، القابلية للتوسع، وسهولة الاستخدام، مما يوفر أساساً قوياً ومرناً للتحديثات المستقبلية وحلول التسويق العقاري المتقدمة.

أنا منفتح دائماً للملاحظات، فرص التعاون، والتحديات الجديدة في مجال تطوير الواجهات الأمامية ومشاريع الـ Full Stack.
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
      title: 'صفحة هبوط لمطعم بيتزا (Pizza Landing Page)',
      subtitle: 'مشروع واجهة أمامية (Frontend)',
      link: 'https://pizzal.vercel.app/',
      dis: `صفحة الهبوط لمطعم البيتزا هي تطبيق ويب من صفحة واحدة (Single Page Application) لطلب البيتزا عبر الإنترنت، وعرض قائمة المنتجات بطريقة تساهم في زيادة المبيعات. تتميز الصفحة بأنها متجاوبة مع جميع الشاشات، وسريعة للغاية، ومعدة لتصدر نتائج البحث.`,
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
      title: 'منصة الأفلام والمسلسلات (Movies)',
      subtitle: 'مشروع واجهة أمامية (Frontend)',
      link: 'https://movi-0.vercel.app/',
      dis: `موقع متكامل لمتابعة أحدث الأفلام والمسلسلات الحصرية. يتوافق التصميم ويتجاوب مع جميع الشاشات، كما يتيح لك إمكانية تحميل الأفلام، ويتميز بتحديث المحتوى تلقائياً وبشكل دوري.`,
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
      title: 'موقع فندق فيستا (Vista)',
      subtitle: 'مشروع واجهة أمامية (Frontend)',
      link: 'https://vista-coral.vercel.app/',
      dis: `فندق فيستا (Vista Hotel) هو موقع إلكتروني مخصص لحجز الغرف الفندقية عبر الإنترنت. يدعم العمل بكفاءة على جميع أنواع الشاشات والأجهزة، ويتكون الموقع من 5 صفحات رئيسية منسقة.`,
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
      title: 'صفحة هبوط لحجز الرحلات - TravelToor',
      link: 'https://travel-beta-snowy.vercel.app/',
      subtitle: 'مشروع واجهة أمامية (Frontend)',
      dis: `ترافل تور (TravelToor) – صفحة هبوط مبتكرة لحجز الرحلات الجوية ✈️

نظرة عامة على المشروع:
قمت بتصميم وتطوير صفحة هبوط باسم TravelToor مخصصة لوكالات السفر ومنظمي الرحلات السياحية. يهدف المشروع إلى عرض الوجهات السياحية بشكل جذاب وتبسيط عملية الاستفسار والحجز للمسافرين.

التقنيات المستخدمة:
• Vue.js
• Vuetify

الميزات الأساسية:
• تصميم حديث ومتجاوب بالكامل (يتكيف مع كافة الأجهزة).
• ميزة الدردشة المباشرة للتواصل الفوري مع العملاء.
• عرض الوجهات السياحية مع الأسعار والمميزات بطريقة منظمة وجذابة.
• تجربة مستخدم سلسة وبسيطة تضمن تصفحاً مريحاً.

القيمة المضافة:
يساعد هذا المشروع شركات السياحة على زيادة التفاعل ونسب المبيعات من خلال تقديم واجهة احترافية وسهلة الاستخدام للمستخدم النهائي.`,
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
      title: 'متجر إيلا مارت بلس (Ella mart+)',
      subtitle: 'مشروع واجهة أمامية (Frontend)',
      link: 'https://ella6.vercel.app/',
      dis: `إيلا مارت (Ella mart) هو متجر إلكتروني متكامل لبيع وعرض المنتجات المتنوعة. يتميز بتصميم متجاوب ومرن يناسب جميع الشاشات. يحتوي المتجر على سلة تسوق ذكية وقائمة لحفظ المنتجات للعودة إليها لاحقاً، بالإضافة إلى صفحات إتمام الشراء والدفع الإلكتروني. يتكون الموقع من 8 صفحات تفاعلية.`,
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
  return { all, header }
})
