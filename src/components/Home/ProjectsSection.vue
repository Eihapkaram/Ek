<template>
  <v-container fluid id="projects" class="projects-clean-section py-12 px-4 px-md-8">
    <v-row justify="center" class="mb-10">
      <v-col id="colTitle" cols="12" class="text-center">
        <div class="d-inline-flex align-center justify-center mb-2">
          <v-icon icon="mdi-cloud" color="red-darken-2" class="mr-2" size="small"></v-icon>
          <span class="section-subtitle">MY WORK</span>
        </div>
        <h2 id="title2" class="text-h3 font-weight-bold tracking-wide">Featured Projects</h2>
        <div class="title-line mx-auto mt-3"></div>
      </v-col>
    </v-row>

    <v-row id="CardsRow" class="px-md-6">
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        id="procol"
        cols="12"
        sm="6"
        lg="4"
        class="d-flex"
      >
        <v-card flat class="project-minimal-card d-flex flex-column w-100 pa-5">
          <div class="project-image-wrapper mb-4">
            <v-img
              :src="`${project.mainImg}`"
              :alt="project.title"
              height="250"
              cover
              class="rounded-lg bg-grey-lighten-4"
            >
              <div class="tags-overlay pa-3 d-flex flex-wrap gap-2">
                <span v-for="tech in project.skills.slice(0, 4)" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </v-img>
          </div>

          <v-card-item class="pa-0 mb-2">
            <v-card-title id="cardtitle" class="text-h6 font-weight-bold text-slate-800 pa-0">
              {{ project.title }}
            </v-card-title>
          </v-card-item>

          <v-card-text class="pa-0 text-body-2 text-slate-500 flex-grow-1 line-clamp">
            {{ project.dis }}
          </v-card-text>

          <v-card-actions class="pa-0 mt-5 pt-3 card-footer-border">
            <v-btn
              variant="text"
              color="red-darken-2"
              class="action-btn font-weight-bold px-0 text-none"
              append-icon="mdi-arrow-right"
              @click="Go(project)"
            >
              View Project
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { storeToRefs } from 'pinia'
import { useCounterStore } from '/src/stores/counter'
import { Projects } from '/src/stores/Projects'
const ProStore = Projects()
function Go(pro) {
  router.push({
    name: 'ProjectDetails',
    params: {
      id: pro.id,
    },
    query: {
      title: pro.title,
      category: pro.subtitle,
      fullDescription: pro.dis,
      videoUrl: pro.videoUrl,
      images: pro.imags,
      mainImg: pro.mainImg,
      technologies: pro.imags,
      features: pro.skills,
      liveUrl: pro.link,
    },
  })
}
const store = useCounterStore()
const { theme } = storeToRefs(store)
onMounted(() => {
  if (theme.value == 'dark') {
    document.querySelector('.projects-clean-section').style.backgroundColor = 'transparent'
    document.querySelector('.project-minimal-card').style.backgroundColor = ''
    document.querySelector('#cardtitle').style.color = ''
    document.querySelector('.action-btn').style.color = ''
    document.querySelector('#title2').style.color = ''
  } else {
    document.querySelector('.projects-clean-section').style.backgroundColor = 'transparent'
    document.querySelector('.project-minimal-card').style.backgroundColor = ''
    document.querySelector('#cardtitle').style.color = ''
    document.querySelector('.action-btn').style.color = ''
    document.querySelector('#title2').style.color = 'black'
  }
})
// تم تحديث المصفوفة بروابط صفحة الـ Behance الخاصة بك بشكل مباشر ومنظم
const projects = ProStore.all

watch(
  () => theme.value,
  (newVal, oldVal) => {
    theme.value = newVal
    if (theme.value == 'dark') {
      document.querySelector('.projects-clean-section').style.backgroundColor = 'transparent'
      document.querySelector('.project-minimal-card').style.backgroundColor = ''

      document.querySelector('.action-btn').style.color = ''
      document.querySelector('#title2').style.color = ''
    } else {
      document.querySelector('.projects-clean-section').style.backgroundColor = 'transparent'
      document.querySelector('.project-minimal-card').style.backgroundColor = ''

      document.querySelector('.action-btn').style.color = ''
      document.querySelector('#title2').style.color = 'black'
    }
  },
)
</script>

<style scoped>
/* التنسيق الأساسي للخلفية البيضاء المريحة */
.projects-clean-section {
  background-color: #f8fafc; /* لون أبيض ناصع ناعم جداً مائل للأزرق الخفيف جداً (Slate 50) */
  font-family: 'Inter', sans-serif;
  margin-bottom: 20px;
}

/* خط تزييني أسفل العنوان الرئيسي */
.title-line {
  width: 60px;
  height: 3px;
  background-color: #d32f2f; /* لون أحمر أكاتسكي */
  border-radius: 2px;
}

.section-subtitle {
  color: #ef5350;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
}

#cardtitle {
  color: #64748b;
}
.text-slate-500 {
  color: #64748b;
}

/* غلاف صورة المشروع */
.project-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

/* كبسولات التقنيات الفوقية */
.gap-2 {
  gap: 8px;
}
.tech-tag {
  background-color: rgba(30, 41, 59, 0.85); /* رمادي داكن شفاف */
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

/* الكرت البسيط الاحترافي (White Minimal Card) */
.project-minimal-card {
  border-radius: 12px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03) !important;
}

/* تأثير السحب الاحترافي المتناسق مع لمسة الأكاتسكي الحمراء الناعمة عند الـ Hover */
.project-minimal-card:hover {
  transform: translateY(-6px);
  border-color: rgba(211, 47, 47, 0.4); /* بوردر أحمر خفيف جداً عند التحويم */
  box-shadow:
    0 12px 20px -3px rgba(211, 47, 47, 0.08),
    0 4px 12px -2px rgba(0, 0, 0, 0.04) !important;
}

/* لتحديد عدد أسطر النص البرمجي بشكل متناسق في الكروت */
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
}

/* الخط الفاصل في أسفل الكرت */
.card-footer-border {
  border-top: 1px solid #f1f5f9;
}

/* تنسيق زر العرض */
.action-btn {
  letter-spacing: 0.5px;
  transition: transform 0.2s ease;
  color: black;
  background-color: rgb(255, 117, 117);
}

.project-minimal-card:hover .action-btn {
  transform: translateX(3px); /* تحريك السهم للأمام بخفة عند حرك الماوس على الكرت */
}

/* التجاوب مع الشاشات والأجهزة اللوحية */
@media (max-width: 991px) {
  #procol {
    max-width: 65%;
  }
}

@media (max-width: 500px) {
  #procol {
    max-width: 100%;
  }
  #colTitle {
    position: relative;
  }
  #CardsRow {
  }
}
</style>
