<template>
  <v-app-bar style="" v-if="show">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="open = !open"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title style="position: relative; left: -5px">Ek</v-app-bar-title>
    <v-btn @click="langStore.toggleLang()">
      {{ langStore.langv }}
    </v-btn>
    <template v-slot:append>
      <!-- مفتاح التبديل المنزلق الاحترافي (Toggle Switch) -->
      <div :class="['theme-switch-container', theme]" @click="store.toggleTheme">
        <!-- الخلفية التفاعلية للأيقونات الثابتة في المسار -->
        <v-icon class="switch-bg-icon sun" size="small">mdi-white-balance-sunny</v-icon>
        <v-icon class="switch-bg-icon moon" size="small">mdi-weather-night</v-icon>

        <!-- المقبض المنزلق الذكي -->
        <div class="switch-handle">
          <v-icon size="x-small" class="handle-icon">
            {{ theme === 'dark' ? 'mdi-circle-medium' : 'mdi-cloud' }}
          </v-icon>
        </div>
      </div>
    </template>
  </v-app-bar>
  <v-navigation-drawer
    v-if="show"
    :width="220"
    v-model="open"
    class="akatsuki-cyber-drawer"
    floating
  >
    <div class="sharingan-bg-overlay"></div>

    <v-list class="linkslist2 akatsuki-core-list py-6 px-3">
      <div class="akatsuki-brand-header mb-4">
        <div class="user-info-block">
          <v-list-item-title class="dev-name font-weight-black"> Ihap_Karam </v-list-item-title>
          <v-list-item-subtitle class="dev-role font-weight-bold"> FullStack </v-list-item-subtitle>
        </div>

        <div class="akatsuki-cloud-icon">
          <div class="cloud-inner"></div>
        </div>
      </div>

      <div class="headband-slash-divider my-4">
        <div class="slash-line"></div>
      </div>

      <div class="navigation-links-container">
        <router-link id="links" class="akatsuki-link-item" to="/">
          <span class="link-glow-effect"></span>
          <span class="link-text">{{ langStore.langfun().HomeLink.title }}</span>
          <span class="japanese-char">ホーム</span>
        </router-link>

        <li
          id="links"
          class="akatsuki-li"
          v-for="(link, i) in langStore.langfun().HomeLink.links"
          :key="i"
        >
          <router-link class="akatsuki-link-item" :to="link.url">
            <span class="link-glow-effect"></span>
            <span class="link-text">{{ link.title }}</span>
            <span class="japanese-char">忍</span>
          </router-link>
        </li>
      </div>

      <div class="headband-slash-divider mt-auto mb-2">
        <div class="slash-line secondary"></div>
      </div>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar v-if="!show" class="nav">
    <span class="logo">Ihap_karam</span>

    <v-list class="linkslist">
      <router-link style="margin-bottom: 5px" to="/">{{
        langStore.langfun().HomeLink.title
      }}</router-link>
      <li v-for="(link, i) in langStore.langfun().HomeLink.links" :key="i">
        <router-link style="text-decoration: none" :to="link.url">
          {{ link.title }}
        </router-link>
      </li>
    </v-list>

    <!-- مفتاح التبديل المنزلق الاحترافي (Toggle Switch) -->
    <div :class="['theme-switch-container', theme]" @click="store.toggleTheme">
      <!-- الخلفية التفاعلية للأيقونات الثابتة في المسار -->
      <v-icon class="switch-bg-icon sun" size="small">mdi-white-balance-sunny</v-icon>
      <v-icon class="switch-bg-icon moon" size="small">mdi-weather-night</v-icon>

      <!-- المقبض المنزلق الذكي -->
      <div class="switch-handle">
        <v-icon size="x-small" class="handle-icon">
          {{ theme === 'dark' ? 'mdi-circle-medium' : 'mdi-cloud' }}
        </v-icon>
      </div>
    </div>
    <v-btn @click="langStore.toggleLang()">
      {{ langStore.langv }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { lang } from '/src/stores/lang'
import { useCounterStore } from '/src/stores/counter'
import { useTheme } from 'vuetify'
import { storeToRefs } from 'pinia'

//data

const store = useCounterStore()
const langStore = lang()
const { theme } = storeToRefs(store)
const open = ref(false)
const show = ref(true)
onMounted(() => {
  if (document.body.clientWidth <= 500) {
    show.value = true
  } else {
    show.value = false
  }
})
watch(
  () => document.body.clientWidth,
  (newVal, oldVal) => {
    if (document.body.clientWidth <= 500) {
      show.value = true
    } else {
      show.value = false
    }
  },
)
</script>

<style scoped>
/* الحاوية الرئيسية: عمق اللون الأسود للأكاتسكي مع بريق جانبي أحمر */
.akatsuki-cyber-drawer {
  background: #080404 !important;
  border-right: 3px solid #bc1212 !important;

  overflow: hidden;
  position: relative;
}

/* الشارينغان العملاقة الخافتة جداً في الخلفية لإعطاء عمق فخم دون تشتيت النصوص */
.sharingan-bg-overlay {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 220px;
  height: 220px;
  opacity: 0.04;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g fill="%23ff0000"><circle cx="100" cy="100" r="16"/><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z"/><g transform="rotate(120 100 100)"><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z"/></g><g transform="rotate(240 100 100)"><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z"/></g></g></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 1;
  animation: background-rotate 40s linear infinite;
}

.akatsuki-core-list {
  background: transparent !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
}

/* الهيدر الاحترافي للأكاتسكي */
.akatsuki-brand-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
}

.dev-name {
  color: #ffffff !important;
  font-size: 1.25rem !important;
  letter-spacing: 0.5px;
  font-family: 'Segoe UI', Roboto, sans-serif;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.dev-role {
  color: #ff2222 !important;
  font-size: 0.75rem !important;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 2px;
  text-shadow: 0 0 8px rgba(255, 34, 34, 0.3);
}

/* غيمة الأكاتسكي الرسمية بالـ CSS النقي وعالي الدقة */
.akatsuki-cloud-icon {
  width: 42px;
  height: 26px;
  background: #ff1111;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(255, 17, 17, 0.6);
  border: 1.5px solid #ffffff;
}
.akatsuki-cloud-icon::before,
.akatsuki-cloud-icon::after {
  content: '';
  position: absolute;
  background: #ff1111;
  border-radius: 50%;
}
.akatsuki-cloud-icon::before {
  width: 20px;
  height: 20px;
  top: -10px;
  left: 6px;
}
.akatsuki-cloud-icon::after {
  width: 24px;
  height: 24px;
  top: -6px;
  right: 4px;
}

/* فاصل خط الشطب الشهير لحامية جبين إيتاشي (Leaf Village Rogue Symbol) */
.headband-slash-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #331111, transparent);
  position: relative;
}
.slash-line {
  position: absolute;
  top: 50%;
  left: 15%;
  width: 70%;
  height: 2px;
  background: #ff0000;
  box-shadow: 0 0 8px #ff0000;
  transform: rotate(-4deg); /* زاوية شطب دقيقة واحترافية */
}
.slash-line.secondary {
  transform: rotate(2deg);
  background: #550000;
  box-shadow: none;
}

/* حاوية الروابط والتأثيرات التفاعلية */
.navigation-links-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.akatsuki-li {
  list-style: none;
  display: block;
}

/* تصميم أزرار الروابط الفخم والسلس */
.akatsuki-link-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 14px;
  text-decoration: none !important;
  color: #aaaaaa !important;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 4px;
  background: rgba(20, 10, 10, 0.4);
  border: 1px solid rgba(255, 0, 0, 0.03);
  position: relative;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* الرمز الياباني الخافت في أقصى اليمين ليعطي عمق المانجا اليابانية */
.japanese-char {
  font-size: 0.75rem;
  color: #331111;
  font-family: 'Courier New', monospace;
  transition: color 0.25s ease;
}

/* توهج أحمر خلفي يتحرك مرناً داخل الزر عند الـ Hover */
.link-glow-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(239, 21, 21, 0.15), transparent);
  transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* تأثير الـ Hover الاحترافي الصاعق كعين الـ Mangekyou الشارينغان */
.akatsuki-link-item:hover {
  color: #ffffff !important;
  border-color: rgba(255, 17, 17, 0.4);
  background: rgba(15, 3, 3, 0.85);
  padding-left: 18px; /* اندفاع فخم خفيف */
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.6),
    inset 3px 0 0 #ff1111;
}

.akatsuki-link-item:hover .link-glow-effect {
  left: 100%;
}

.akatsuki-link-item:hover .japanese-char {
  color: #ff1111;
  text-shadow: 0 0 5px rgba(255, 17, 17, 0.5);
}

/* الستايل التلقائي عند تنشيط الرابط الحالي (Active Route) */
.router-link-active.akatsuki-link-item {
  color: #ffffff !important;
  background: linear-gradient(
    90deg,
    rgba(188, 18, 18, 0.2) 0%,
    rgba(10, 3, 3, 0.6) 100%
  ) !important;
  border-color: rgba(255, 17, 17, 0.5);
  box-shadow:
    inset 4px 0 0 #ff1111,
    0 0 15px rgba(255, 11, 11, 0.15);
}

.router-link-active.akatsuki-link-item .japanese-char {
  color: #ff3333;
}

/* حركة دوران لطيفة للشارينغان الخلفية */
@keyframes background-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* خط متناسق */
.nav,
.logo,
.linkslist {
  font-family: 'Inter', sans-serif;
}

/* تنسيق النيف بار المتوافق مع الـ Themes */
.nav {
  background-color: transparent !important;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}
#links {
  padding-block: 10px;
  margin-left: 50px;
  width: 100%;
  color: #a52626a7;
}
#links a {
  color: #d32f2f;
  padding-block: 10px;
}
#links:hover {
  color: #d2c4c4;
}
.linkslist2 {
  display: block;
  height: 100%;
  color: #d32f2f;
  list-style-type: none;
  text-decoration: none;
  text-align: start;
  padding: 0%;
  margin: 0%;
}

.logo {
  color: rgb(var(--v-theme-on-surface));
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.v-list.linkslist {
  background: transparent !important;
  padding: 0;
}

.linkslist :deep(a) {
  color: rgb(var(--v-theme-on-surface)) !important;
  opacity: 0.7;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-transform: capitalize;
  position: relative;
  padding-bottom: 4px;
  transition:
    color 0.2s ease,
    opacity 0.2s ease;
}

.linkslist :deep(a):hover {
  color: #d32f2f !important;
  opacity: 1;
}

.linkslist :deep(a)::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #d32f2f;
  transition: width 0.2s ease;
}

.linkslist :deep(a):hover::after {
  width: 100%;
}

/* ========================================= */
/* هندسة وتصميم الـ Toggle Switch المنزلق */
/* ========================================= */
.theme-switch-container {
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 30px;
  background-color: #e2e8f0;
  border: 1px solid #cbd5e1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  margin-left: 0px;
  margin-right: 0px;
  user-select: none;
  transition:
    background-color 0.4s ease,
    border-color 0.4s ease;
}

/* الأيقونات الخلفية الثابتة */
.switch-bg-icon {
  font-size: 0.95rem !important;
  z-index: 1;
  transition:
    opacity 0.3s ease,
    color 0.3s ease;
}

.switch-bg-icon.sun {
  color: #fb8c00;
}

.switch-bg-icon.moon {
  color: #64748b;
}

/* تصميم المقبض الدائري المتحرك */
.switch-handle {
  position: absolute;
  z-index: 2;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.3s ease;
}

.handle-icon {
  color: #64748b;
  transition: color 0.3s ease;
}

/* ========================================= */
/* حركات الانزلاق وتغيير الهوية (تأثير الأكاتسكي) */
/* ========================================= */

/* الوضع الفاتح (Light Mode): يذهب ناحية القمر (اليمين) */
.theme-switch-container.light {
  background-color: #f1f5f9;
  border-color: rgba(211, 47, 47, 0.3);
}

.theme-switch-container.light .switch-handle {
  transform: translateX(32px); /* ينزلق لليمين تماماً باتجاه القمر */
  background-color: #d32f2f; /* يتحول للون الأكاتسكي الأحمر */
}

.theme-switch-container.light .handle-icon {
  color: #ffffff; /* سحابة بيضاء ناعمة تظهر داخل المقبض */
}

.theme-switch-container.light .switch-bg-icon.moon {
  color: #d32f2f; /* يضيء القمر باللون الأحمر */
  opacity: 1;
}
.theme-switch-container.light .switch-bg-icon.sun {
  opacity: 0.4;
}

/* الوضع الداكن (Dark Mode): يذهب ناحية الشمس المتوهجة (اليسار) */
.theme-switch-container.dark {
  background-color: #1e293b;
  border-color: #334155;
}

.theme-switch-container.dark .switch-handle {
  transform: translateX(0px); /* يعود لأقصى اليسار باتجاه الشمس */
  background-color: #ffb74d; /* المقبض يصبح متوهج شمسياً */
}

.theme-switch-container.dark .handle-icon {
  color: #e65100;
}

.theme-switch-container.dark .switch-bg-icon.sun {
  opacity: 1;
}
.theme-switch-container.dark .switch-bg-icon.moon {
  opacity: 0.3;
  color: #94a3b8;
}

/* حركة ضغط مطاطية خفيفة أثناء النقر */
.theme-switch-container:active .switch-handle {
  width: 30px;
}

/* التجاوب مع مقاسات الشاشات والميديا كويري الخاصة بك */
@media (min-width: 1024px) {
  .logo {
    position: relative;
    left: 10px;
    padding-right: 20px;
  }
  .nav {
    display: flex;
    flex-flow: row, wrap;
    position: relative;
    box-shadow: none;
  }
  .linkslist {
    display: flex;
    flex-flow: row, nowrap;
    list-style-type: none;
    width: auto;
    justify-content: center;
    align-content: center;
    gap: 50px;
    margin-left: 300px;
    margin-right: 300px;
  }
}

@media (max-width: 991px) {
  .theme-switch-container {
    position: relative;
    left: -20px;
  }
  .logo {
    position: relative;
    left: 20px;
  }
  .nav {
    display: flex;
    flex-flow: row, wrap;
    box-shadow: none !important;
  }
  .linkslist {
    display: flex;
    flex-flow: row, nowrap;
    list-style-type: none;
    width: auto;
    justify-content: center;
    align-content: center;
    gap: 30px;
    margin-left: 100px;
  }
  .linkslist :deep(a) {
    font-size: 0.85rem;
  }
}

@media (max-width: 500px) {
  .logo {
    position: relative;
    left: 10px;
  }

  .linkslist {
    display: flex;
    flex-flow: row, nowrap;
    list-style-type: none;
    width: auto;
    justify-content: center;
    align-content: center;
    gap: 12px;
    margin-left: 20px;
  }
  .linkslist :deep(a) {
    font-size: 0.8rem;
  }

  .theme-switch-container {
    margin-right: 4px;
    width: 56px;
    height: 28px;
    position: relative;
    left: 0px;
  }
  .switch-handle {
    width: 22px;
    height: 22px;
  }
  .theme-switch-container.light .switch-handle {
    transform: translateX(28px);
  }
}
</style>
