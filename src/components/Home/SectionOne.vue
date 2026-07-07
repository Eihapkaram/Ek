<template>
  <v-container fluid class="con" id="about">
    <!-- نظام تطاير غربان إيتاشي السينمائي فوق الشاشة والنصوص بالكامل -->
    <div v-if="isEyeActive" class="global-crows-container">
      <div class="crow crow-1">
        <div class="wing left"></div>
        <div class="wing right"></div>
      </div>
      <div class="crow crow-2">
        <div class="wing left"></div>
        <div class="wing right"></div>
      </div>
      <div class="crow crow-3">
        <div class="wing left"></div>
        <div class="wing right"></div>
      </div>
      <div class="crow crow-4">
        <div class="wing left"></div>
        <div class="wing right"></div>
      </div>
      <div class="crow crow-5">
        <div class="wing left"></div>
        <div class="wing right"></div>
      </div>
    </div>

    <v-row class="row">
      <!-- الجانب الأيسر: النصوص والبيانات والـ Typewriter -->
      <v-col class="textCol" cols="12" lg="6" md="8" sm="12">
        <v-row>
          <v-col cols="12">
            <div class="d-inline-flex align-center mb-2">
              <span class="section-subtitle">ABOUT ME</span>
            </div>
            <h1 class="text-h3 font-weight-bold text-slate-800 tracking-wide mb-1">
              Discover My Journey
            </h1>
            <div class="title-line mt-2 mb-6"></div>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col cols="12" class="py-1">
            <h2 class="text-h4 font-weight-black text-slate-800 typewriter-name">{{ name }}</h2>
          </v-col>
          <v-col cols="12" class="py-1">
            <h3 class="sub-title-2 font-weight-bold text-red-darken-2 text-slate-800">{{ sub }}</h3>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <p class="dis line-height-relaxed text-slate-500">
              {{ disc }}
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-4">
          <v-col cols="12">
            <v-btn
              class="submit-btn text-none font-weight-bold px-0"
              flat
              ripple
              size="large"
              :href="`${path}FullStackCv.pdf`"
              download="IhapKaramCv"
            >
              Download Resume
              <v-icon icon="mdi-download" class="ml-2" size="small"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <!-- الجانب الأيمن: الصورة الشخصية المحاطة بهالة أكاتسكي حمراء هادئة مع أيقونات التقنيات الطائرة -->
      <v-col class="imgCol" cols="12" lg="6" md="4" sm="12">
        <!-- حاوية التأثير الحركية للدائرة الكبرى -->
        <div class="divimg" :class="{ 'is-loading': isEyeActive }">
          <!-- النيران السوداء المتوهجة (تظهر فقط عند تفعيل العين) -->
          <div v-if="isEyeActive" class="black-flames"></div>
          <div v-if="isEyeActive" class="black-flames secondary"></div>

          <!-- طبقة العين المنجيكيو (تتلاشى بعد التحميل لتبين الصورة خلفها) -->
          <div class="eye-layer" :class="{ 'fade-out-eye': !isEyeActive }">
            <div class="iris-texture">
              <div class="mangekyou-pattern"></div>
            </div>
            <div class="lens-flare"></div>
          </div>

          <!-- الصورة الشخصية الأساسية تظهر بتأثير Fade-in ناعم -->
          <img
            class="photo"
            :src="`${path}imgg.jpg`"
            alt="Ihap Karam"
            :class="{ 'photo-visible': !isEyeActive }"
          />

          <!-- تأثير سيلان الدم العضوي من أسفل الدائرة -->
          <div v-if="isEyeActive" class="realistic-bleed"></div>
        </div>

        <!-- أيقونات التقنيات بتأثير الطيران (Flay) المتناسق -->
        <img class="photo2 tech-icon-shadow" :src="`${path}react.png`" alt="React" />
        <img class="photo3 tech-icon-shadow" :src="`${path}vuejs.png`" alt="Vue" />
        <img class="photo4 tech-icon-shadow" :src="`${path}laravel.png`" alt="Laravel" />
        <img class="photo5 tech-icon-shadow" :src="`${path}mysql.png`" alt="MySQL" />
      </v-col>
    </v-row>
  </v-container>

  <!-- فلاتر التسييل للدم وتشويه نيران الأماتيراسو -->
  <svg style="position: absolute; width: 0; height: 0">
    <filter id="amaterasu-distortion">
      <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" result="noise" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale="18"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
    <filter id="liquid-bleed">
      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
  </svg>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '/src/stores/counter'

const store = useCounterStore()
const { theme } = storeToRefs(store)
const name = ref('')
const sub = ref('')
const disc = ref(``)
const path = ref(`/`)
// متغير للتحكم في ظهور واختفاء تأثير العين والدم والغربان للتحول إلى الصورة الشخصية
const isEyeActive = ref(true)

onMounted(() => {
  // مدة التأثير السينمائي للتحول (4 ثوانٍ) لمنح الغربان فرصة كاملة لقطع الشاشة وفوق النصوص
  setTimeout(() => {
    isEyeActive.value = false
  }, 4000)

  if (theme.value == 'dark') {
    document.body.style.backgroundColor = 'black'
    document.querySelector('.submit-btn').style.backgroundColor = ''
    document.querySelector('.submit-btn').style.color = ''
  } else {
    document.body.style.backgroundColor = 'transparent'
    window.about.style.backgroundColor = 'transparent'
    document.querySelector('.submit-btn').style.backgroundColor = '#f536369e'
    document.querySelector('.submit-btn').style.color = ''
  }

  const name2 = ref('IHAP KARAM')
  const sub2 = ref('FULL STACK DEVELOPER')
  const disc2 = ref(
    `Full-Stack Developer with strong experience in building modern, responsive, and SEO-optimized web applications. Proficient in front-end development using Vue.js, Nuxt.js, and React.js, along with modern UI libraries such as Vuetify and Bootstrap. Experienced in back-end development using PHP and Laravel, including building and integrating RESTful APIs, and working with SQL databases for efficient data modeling and querying. Passionate about user-centered design and creating efficient, scalable, and maintainable applications. Skilled in state management with Vuex, Pinia, and Redux Toolkit, and experienced with modern development tools such as Vite and Git.`,
  )
  let x = 0
  let x2 = 0
  let x3 = 0

  const inter = setInterval(() => {
    if (x < name2.value.length) {
      name.value += name2.value[x]
      x++
    } else {
      clearInterval(inter)
    }
  }, 100)

  const intersub = setInterval(() => {
    if (x2 < sub2.value.length) {
      sub.value += sub2.value[x2]
      x2++
    } else {
      clearInterval(intersub)
    }
  }, 120)

  const interdis = setInterval(() => {
    if (x3 < disc2.value.length) {
      disc.value += disc2.value[x3]
      x3++
    } else {
      clearInterval(interdis)
    }
  }, 3)
})

watch(
  () => theme.value,
  (newVal, oldVal) => {
    theme.value = newVal

    if (theme.value == 'dark') {
      document.body.style.backgroundColor = 'black'
      document.querySelector('.submit-btn').style.backgroundColor = ''
      document.querySelector('.submit-btn').style.color = '#fff'
    } else {
      document.body.style.backgroundColor = 'transparent'
      window.about.style.backgroundColor = 'transparent'
      document.querySelector('.submit-btn').style.backgroundColor = '#f536369e'
      document.querySelector('.submit-btn').style.color = ''
    }
  },
)
</script>

<style scoped>
/* التنسيق الأساسي لقسم About Me الفاتح */
.con {
  position: relative;
  min-height: 550px;
  margin-block: 40px;
  font-family: 'Inter', sans-serif;
}

.row {
  display: flex;
  flex-flow: row;
  position: relative;
}

.textCol {
  display: flex;
  flex-flow: column;
  justify-content: start;
  height: fit-content;
  direction: ltr;
  z-index: 2; /* بقاء النصوص في طبقة جيدة لكن الغربان ستعلوها بالكامل */
}

.imgCol {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 530px;
  position: relative;
  z-index: 2;
}

/* عناصر تصميم الأكاتسكي النظيف */
.section-subtitle {
  color: #ef5350;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.title-line {
  width: 60px;
  height: 10px;
  background-color: #d32f2f; /* أحمر أكاتسكي هادئ */
  border-radius: 2px;
}

.text-slate-800 {
  color: #1e293b;
}
.text-slate-500 {
  color: #64748b;
  font-size: 0.95rem;
}
.line-height-relaxed {
  line-height: 1.7;
}

.typewriter-name {
  letter-spacing: 0.5px;
}

/* زر تحميل السيرة الذاتية بتصميم متناسق */
.submit-btn {
  border-radius: 8px !important;
  letter-spacing: 0.5px;
  transition: transform 0.2s ease;
  padding: 0 !important;
  overflow: hidden;
}
.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(245, 21, 21, 0.652) !important;
  color: #e0d3d394;
}

/* ========================================= */
/* نظام الغربان الشامل والممتد فوق النصوص (Global Crows) */
/* ========================================= */
.global-crows-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999; /* طبقة عليا مطلقة تضمن الطيران فوق النصوص والأزرار */
  pointer-events: none;
  perspective: 600px;
  overflow: hidden;
}

/* هيكل وتصميم الغراب برمجياً مع تفعيل خاصية الـ 3D لرفرفة الأجنحة */
.crow {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 20px;
  opacity: 0;
  transform-style: preserve-3d;
}

/* الأجنحة وجسم الغراب الأساسي */
.wing {
  position: absolute;
  width: 25px;
  height: 14px;
  background: #0a0101;
  top: 0;
  clip-path: polygon(0% 40%, 40% 0%, 100% 70%, 70% 100%, 30% 80%);
}

.wing.left {
  right: 50%;
  transform-origin: right center;
  animation: wing-flap-left 0.25s ease-in-out infinite alternate;
}

.wing.right {
  left: 50%;
  transform-origin: left center;
  clip-path: polygon(100% 40%, 60% 0%, 0% 70%, 30% 100%, 70% 80%);
  animation: wing-flap-right 0.25s ease-in-out infinite alternate;
}

/* ذيل وجسد الغراب الصغير بالمنتصف */
.crow::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 18px;
  background: #110202;
  border-radius: 50% 50% 40% 40%;
  z-index: 2;
}

/* إعدادات حركة ومسار كل غراب من العين (اليمين) مروراً بالنصوص (اليسار) */
.crow-1 {
  right: 25%;
  top: 45%;
  animation: fly-across-1 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  animation-delay: 0.1s;
}
.crow-2 {
  right: 23%;
  top: 40%;
  scale: 0.7;
  animation: fly-across-2 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  animation-delay: 0.5s;
}
.crow-3 {
  right: 26%;
  top: 48%;
  scale: 1.2;
  animation: fly-across-3 3.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  animation-delay: 0s;
}
.crow-4 {
  right: 24%;
  top: 43%;
  scale: 0.85;
  animation: fly-across-4 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  animation-delay: 1.2s;
}
.crow-5 {
  right: 25%;
  top: 46%;
  scale: 1.05;
  animation: fly-across-5 3.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  animation-delay: 1.8s;
}

/* أنيميشن رفرفة الأجنحة بشكل واقعي وسريع */
@keyframes wing-flap-left {
  0% {
    transform: rotateY(-40deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(30deg) rotateZ(-10deg);
  }
}
@keyframes wing-flap-right {
  0% {
    transform: rotateY(40deg) rotateZ(-10deg);
  }
  100% {
    transform: rotateY(-30deg) rotateZ(10deg);
  }
}

/* مسارات الحركة السينمائية المارّة فوق قسم النصوص بالكامل */
@keyframes fly-across-1 {
  0% {
    transform: translate3d(0, 0, 0) scale(0.3) rotate(-10deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-800px, -150px, 150px) scale(1.5) rotate(-25deg);
    opacity: 0;
  }
}
@keyframes fly-across-2 {
  0% {
    transform: translate3d(0, 0, 0) scale(0.2) rotate(5deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-750px, -280px, 80px) scale(1.2) rotate(-5deg);
    opacity: 0;
  }
}
@keyframes fly-across-3 {
  0% {
    transform: translate3d(0, 0, 0) scale(0.4) rotate(-20deg);
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-850px, 80px, 250px) scale(1.8) rotate(-35deg);
    opacity: 0;
  }
}
@keyframes fly-across-4 {
  0% {
    transform: translate3d(0, 0, 0) scale(0.2) rotate(-5deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-780px, -50px, 120px) scale(1.4) rotate(-15deg);
    opacity: 0;
  }
}
@keyframes fly-across-5 {
  0% {
    transform: translate3d(0, 0, 0) scale(0.3) rotate(15deg);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-820px, -200px, 200px) scale(1.6) rotate(-10deg);
    opacity: 0;
  }
}

/* ========================================= */
/* محرك تحول الشارينغان والصورة الشخصية الأصلية */
/* ========================================= */
.photo {
  height: 290px;
  width: 290px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border: 4px solid #ffffff; /* فاصل أبيض ناصع لإبراز الصورة */
  opacity: 0;
  transform: scale(1.1);
  transition:
    opacity 1.5s ease-in-out,
    transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.photo-visible {
  opacity: 1;
  transform: scale(1);
}

/* حاوية الصورة المستديرة المضيئة بظلال الأكاتسكي الحمراء النظيفة */
.divimg {
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ffffff;
  border: 5px solid rgb(251, 5, 5); /* إطار خارجي أحمر خفيف */
  position: relative;
  box-shadow:
    0 0 25px rgb(253, 59, 59),
    0 0 45px #f54848;
  animation: flay 4s ease-in-out infinite;
  transition:
    box-shadow 1s ease-in-out,
    border-color 1s ease-in-out;
}

.divimg.is-loading {
  border-color: #000000;
  box-shadow:
    0 0 35px #000000,
    0 0 50px rgba(179, 0, 0, 0.6);
  animation: amaterasu-shake 0.15s infinite alternate;
}

.eye-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  z-index: 4;
  background: #000;
  transition:
    opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1),
    transform 1.2s ease;
}

.iris-texture {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #ff0000 0%, #a30000 35%, #4a0000 70%, #000000 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: eye-focus-activation 3.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.mangekyou-pattern {
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g fill="black"><circle cx="100" cy="100" r="16"/><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z M100,15 C138,52 112,88 100,82 C108,68 108,42 100,15 Z"/><g transform="rotate(120 100 100)"><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z M100,15 C138,52 112,88 100,82 C108,68 108,42 100,15 Z"/></g><g transform="rotate(240 100 100)"><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z M100,15 C138,52 112,88 100,82 C108,68 108,42 100,15 Z"/></g></g></svg>');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.lens-flare {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  pointer-events: none;
}

.fade-out-eye {
  opacity: 0;
  transform: scale(0.85);
  pointer-events: none;
}

.black-flames {
  position: absolute;
  width: 125%;
  height: 125%;
  background: radial-gradient(circle, #000000 20%, rgba(30, 5, 5, 0.8) 55%, transparent 70%);
  border-radius: 50%;
  filter: url(#amaterasu-distortion);
  z-index: 1;
  mix-blend-mode: multiply;
  animation: flame-burn 1.8s linear infinite;
}
.black-flames.secondary {
  animation: flame-burn 2.2s linear infinite reverse;
  opacity: 0.6;
}

.realistic-bleed {
  position: absolute;
  top: 85%;
  left: 47%;
  width: 10px;
  height: 70px;
  background: linear-gradient(to bottom, #4a0000 0%, #1a0000 70%, transparent 100%);
  border-radius: 5px;
  filter: url(#liquid-bleed);
  z-index: 3;
  animation: bleed-down-effect 3.5s ease-in-out forwards;
}

/* أنيميشن التركيز والهز */
@keyframes eye-focus-activation {
  0% {
    transform: rotate(0deg) scale(0.9);
  }
  25% {
    transform: rotate(360deg) scale(1.5);
  }
  85% {
    transform: rotate(-360deg) scale(1.02);
  }
  100% {
    transform: rotate(740deg) scale(1);
  }
}

@keyframes flame-burn {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bleed-down-effect {
  0%,
  20% {
    transform: scaleY(0);
    opacity: 0;
    transform-origin: top;
  }
  60% {
    transform: scaleY(1);
    opacity: 0.9;
    transform-origin: top;
  }
  100% {
    transform: scaleY(1.1);
    opacity: 0;
    transform-origin: top;
    filter: blur(2px);
  }
}

@keyframes amaterasu-shake {
  0% {
    transform: translate(0.5px, 0.5px) translateY(0px);
  }
  100% {
    transform: translate(-0.5px, -0.5px) translateY(-2px);
  }
}

/* ========================================= */
/* تنسيق الأيقونات الطائرة حول الصورة الشخصية */
/* ========================================= */
.tech-icon-shadow {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  padding: 6px;
}

.photo2 {
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  top: 60px;
  left: 15%;
  animation: flay 3s ease-in-out infinite;
}

.photo3 {
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 50%;
  bottom: 80px;
  right: 15%;
  animation: flay 3.5s ease-in-out infinite;
}

.photo4 {
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  top: 40px;
  right: 20%;
  animation: flay 2.8s ease-in-out infinite;
}

.photo5 {
  width: 55px;
  height: 55px;
  position: absolute;
  border-radius: 50%;
  bottom: 60px;
  left: 20%;
  animation: flay 3.2s ease-in-out infinite;
}

/* تأثير حركة طيران ناعم وسلس ومريح للعين تماماً */
@keyframes flay {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* التجاوب مع الشاشات والأجهزة اللوحية */
@media (max-width: 991px) {
  .row {
    flex-flow: column-reverse;
  }
  .textCol {
    align-items: center;
    text-align: center;
    margin-top: 24px;
    width: 99%;
  }
  .title-line {
    margin-inline: auto;
  }
  .imgCol {
    height: 360px;
    top: 20px;
    width: 99%;
  }
  .divimg {
    height: 260px;
    width: 260px;
  }
  .photo {
    height: 250px;
    width: 250px;
  }
  .photo2 {
    left: 5%;
    top: 40px;
  }
  .photo3 {
    right: 5%;
    bottom: 40px;
  }
  .photo4 {
    right: 10%;
    top: 20px;
  }
  .photo5 {
    left: 10%;
    bottom: 20px;
  }

  /* تعديل مسار الغربان في الشاشات الصغيرة ليصبح عمودياً للأعلى فوق النصوص */
  @keyframes fly-across-1 {
    0% {
      transform: translate3d(0, 150px, 0) scale(0.3);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -450px, 100px) scale(1.3);
      opacity: 0;
    }
  }
  @keyframes fly-across-2 {
    0% {
      transform: translate3d(30px, 150px, 0) scale(0.2);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    100% {
      transform: translate3d(-50px, -480px, 80px) scale(1.1);
      opacity: 0;
    }
  }
  @keyframes fly-across-3 {
    0% {
      transform: translate3d(-30px, 150px, 0) scale(0.4);
      opacity: 0;
    }
    8% {
      opacity: 1;
    }
    100% {
      transform: translate3d(40px, -500px, 140px) scale(1.5);
      opacity: 0;
    }
  }
  /* الغاء الأنيميشن الزائد للشاشات الصغيرة لتجنب العشوائية */
  .crow-4,
  .crow-5 {
    display: none;
  }
  .global-crows-container {
    right: 0;
    top: 0;
    width: 100%;
    height: 130%;
  }
}

@media (max-width: 500px) {
  .imgCol {
    height: 360px;
    top: 20px;
    width: 100%;
  }

  .textCol {
    align-items: center;
    text-align: center;
    margin-top: 24px;
    width: 100%;
    position: relative;
  }
  /* أنيميشن التركيز والهز */
  @keyframes eye-focus-activation {
    0% {
      transform: rotate(0deg) scale(0.9);
    }
    25% {
      transform: rotate(360deg) scale(1.05);
    }
    85% {
      transform: rotate(-360deg) scale(1.02);
    }
    100% {
      transform: rotate(740deg) scale(1);
    }
  }

  @keyframes flame-burn {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bleed-down-effect {
    0%,
    20% {
      transform: scaleY(0);
      opacity: 0;
      transform-origin: top;
    }
    60% {
      transform: scaleY(1);
      opacity: 0.9;
      transform-origin: top;
    }
    100% {
      transform: scaleY(1.1);
      opacity: 0;
      transform-origin: top;
      filter: blur(2px);
    }
  }

  @keyframes amaterasu-shake {
    0% {
      transform: translate(0.5px, 0.3px) translateY(0px);
    }
    100% {
      transform: translate(-0.5px, -0.3px) translateY(-2px);
    }
  }
}
</style>
