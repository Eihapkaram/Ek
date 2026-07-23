<template>
  <v-footer class="clean-footer py-8 px-4 px-md-8">
    <v-container fluid class="pa-0">
      <v-row align="center" justify="space-between" class="footer-row-gap">
        <!-- الجانب الأيسر: اسم المطور والحقوق -->
        <v-col cols="12" sm="6" class="text-center text-sm-left py-1">
          <div class="d-inline-flex align-center flex-wrap justify-center justify-sm-start">
            <span class="footer-logo font-weight-bold tracking-wider mr-2">
              {{ langStore.langfun().name }}</span
            >
            <span class="footer-separator d-none d-sm-inline">|</span>
            <span class="footer-copyright ml-sm-2">
              &copy; {{ currentYear }} {{ langStore.langfun().HomeLink.right }}
            </span>
          </div>
        </v-col>

        <!-- الجانب الأيمن: روابط التنقل السريعة والآمنة -->
        <v-col id="rightcon" cols="12" sm="6" class="text-center text-sm-right py-1">
          <div class="footer-links d-flex justify-center justify-sm-end flex-wrap gap-4">
            <v-list-item>
              <router-link class="footer-link-item" style="margin: 0px; padding: 0px" to="/">{{
                langStore.langfun().HomeLink.title
              }}</router-link>
            </v-list-item>

            <v-list-item v-for="(link, i) in langStore.langfun().HomeLink.links" :key="i">
              <router-link class="footer-link-item" :to="link.url">
                {{ link.title }}
              </router-link>
            </v-list-item>
          </div>
        </v-col>
      </v-row>

      <!-- خط برميجي سفلي ناعم جداً للتزيين -->
      <v-row class="mt-6 pt-4 footer-bottom-border justify-center">
        <v-col cols="auto" class="text-center">
          <div class="akatsuki-accent-dot"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { computed, reactive, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '/src/stores/counter'
import { lang } from '/src/stores/lang'
const langStore = lang()
const store = useCounterStore()
const { theme } = storeToRefs(store)
onMounted(() => {
  if (theme.value == 'dark') {
    document.querySelector('.clean-footer').style.backgroundColor = 'transparent'
  } else {
    document.querySelector('.clean-footer').style.backgroundColor = 'transparent'
  }
})
watch(
  () => theme.value,
  (newVal, oldVal) => {
    theme.value = newVal
    if (theme.value == 'dark') {
      document.querySelector('.clean-footer').style.backgroundColor = 'transparent'
    } else {
      document.querySelector('.clean-footer').style.backgroundColor = 'transparent'
    }
  },
)
const links = reactive([
  { title: 'Experience', url: '#experience' },
  { title: 'Skills', url: '#skills' },
  { title: 'Projects', url: '#projects' },
  { title: 'Contact', url: '#contact' },
])
// جلب السنة الحالية ديناميكياً بشكل آمن لمنع مشاكل اختلاف التوقيت أو تحديثات الصفحات (2026)
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-links {
  display: flex;
  flex-flow: row, wrap;
}
/* التنسيق الأساسي للتذييل المتناسق مع الخلفيات البيضاء */
.clean-footer {
  /* خلفية بيضاء نقية */
  border-top: 1px solid #e2e8f0; /* خط علوي رمادي ناعم جداً يفصله عن الأقسام الفوقية */
  font-family: 'Inter', sans-serif;
  color: #64748b;
}

/* تنسيق الشعار والكتابة */
.footer-logo {
  color: #1e293b; /* رمادي داكن يقارب الأسود */
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.footer-separator {
  color: #cbd5e1;
  font-weight: 300;
}

.footer-copyright {
  font-size: 0.85rem;
  color: #64748b;
}

/* روابط التنقل السريعة */
.gap-4 {
  gap: 20px;
}

.footer-link-item {
  color: #64748b;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* تأثير تحويم ناعم يحول الرابط للون الأحمر الأكاتسكي الراقي */
.footer-link-item:hover {
  color: #d32f2f;
}

/* الخط التزييني السفلي المصغر */
.footer-bottom-border {
  border-top: 1px dashed #f1f5f9;
}

/* نقطة التزيين المستوحاة من طابع الأكاتسكي الهادئ */
.akatsuki-accent-dot {
  width: 6px;
  height: 6px;
  background-color: #ef5350;
  border-radius: 50%;
  opacity: 0.6;
  box-shadow: 0 0 8px rgba(239, 83, 80, 0.4);
}

@media (max-width: 991px) {
  #rightcon {
    max-width: none;
  }
}
/* معالجة مرونة المسافات على الهواتف */
@media (max-width: 500px) {
  #rightcon {
    max-width: 200px;
    display: flex;
  }
  .footer-row-gap {
    row-gap: 10px;
  }
  .footer-links {
    gap: 15px !important;
    display: block;
  }
  .footer-link-item {
    font-size: 0.8rem;
  }
}
</style>
