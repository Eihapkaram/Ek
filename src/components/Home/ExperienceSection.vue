<template>
  <v-container fluid id="experience" class="experience-clean-section py-12 px-4 px-md-8">
    <!-- عنوان القسم العلوي -->
    <v-row justify="center" class="mb-12">
      <v-col id="titelCo" cols="12" class="text-center">
        <div class="d-inline-flex align-center justify-center mb-2">
          <v-icon
            icon="mdi-briefcase-outline"
            color="red-darken-2"
            class="mr-2"
            size="small"
          ></v-icon>
          <span class="section-subtitle">MY JOURNEY</span>
        </div>
        <h2 class="text-h3 font-weight-bold text-slate-800 tracking-wide">Work Experience</h2>
        <div class="title-line mx-auto mt-3"></div>
      </v-col>
    </v-row>

    <!-- الخط الزمني للخبرات -->
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8" sm="12">
        <v-timeline
          id="line"
          align="start"
          justify="center"
          line-color="grey-lighten-2"
          line-thickness="4"
          :side="$vuetify.display.smAndDown ? 'end' : undefined"
        >
          <v-timeline-item
            v-for="(exp, index) in experiences"
            :key="index"
            :dot-color="index === 0 ? 'red-darken-2' : 'white'"
            :fill-dot="index === 0"
            size="small"
            class="timeline-item-wrapper"
          >
            <!-- تخصيص شكل النقطة للوظائف السابقة بدائرة بيضاء ذات إطار رمادي -->
            <template v-if="index !== 0" #icon>
              <div class="past-dot"></div>
            </template>

            <!-- كرت تفاصيل الوظيفة -->
            <v-card flat class="experience-card pa-6">
              <div
                class="d-flex flex-column flex-sm-row justify-space-between align-start align-sm-center mb-3"
              >
                <div>
                  <h3 id="roletitle" class="text-h6 font-weight-bold text-slate-800 mb-1">
                    {{ exp.role }}
                  </h3>
                  <div
                    class="d-flex align-center text-subtitle-2 font-weight-medium text-slate-600"
                  >
                    <span class="company-name">{{ exp.company }}</span>
                    <v-icon icon="mdi-circle" size="6" class="mx-2 text-grey-lighten-1"></v-icon>
                    <span>{{ exp.location }}</span>
                  </div>
                </div>
                <!-- كبسولة التاريخ والمدة -->
                <span class="date-badge mt-2 mt-sm-0" :class="{ 'current-job': exp.current }">
                  {{ exp.period }}
                </span>
              </div>

              <v-card-text class="pa-0 text-body-2 text-slate-500 line-height-relaxed">
                {{ exp.description }}
              </v-card-text>

              <!-- الكلمات المفتاحية / التقنيات المستخدمة في هذه الوظيفة -->
              <div class="d-flex flex-wrap gap-2 mt-4 pt-3 tech-border-top">
                <span v-for="tech in exp.stack" :key="tech" class="exp-tech-tag">
                  {{ tech }}
                </span>
              </div>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '/src/stores/counter'

const store = useCounterStore()
const { theme } = storeToRefs(store)
// مصفوفة بيانات الخبرات المهنية
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
onMounted(() => {
  if (theme.value == 'dark') {
    document.querySelector('.experience-clean-section').style.backgroundColor = ''
    document.querySelector('.experience-card').style.backgroundColor = ''
    document.querySelector('#roletitle').style.color = ''
  } else {
    document.querySelector('.experience-clean-section').style.backgroundColor = ''

    document.querySelector('.experience-card').style.backgroundColor = ''
    document.querySelector('#roletitle').style.color = ''
  }
})
watch(
  () => theme.value,
  (newVal, oldVal) => {
    theme.value = newVal
    if (theme.value == 'dark') {
      document.querySelector('.experience-clean-section').style.backgroundColor = ''
      document.querySelector('.experience-card').style.backgroundColor = ''
      document.querySelector('#roletitle').style.color = ''
    } else {
      document.querySelector('.experience-clean-section').style.backgroundColor = ''

      document.querySelector('.experience-card').style.backgroundColor = ''
      document.querySelector('#roletitle').style.color = ''
    }
  },
)
</script>

<style scoped>
/* التنسيق الأساسي للخلفية الفاتحة والنظيفة */
.experience-clean-section {
  font-family: 'Inter', sans-serif;
}

/* خط تزييني أسفل العنوان الرئيسي */
.title-line {
  width: 60px;
  height: 3px;
  background-color: #d32f2f; /* لون أحمر أكاتسكي هادئ */
  border-radius: 2px;
}

.section-subtitle {
  color: #ef5350;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.text-slate-800 {
  color: #9a9797;
}
.text-slate-600 {
  color: #475569;
}
.text-slate-500 {
  color: #64748b;
}

/* كرت الخبرة الاحترافي (White Minimal Card) */

.experience-card {
  border-radius: 12px !important;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.03),
    0 2px 4px -1px rgba(0, 0, 0, 0.02) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* تأثير الصعود الناعم وحواف حمراء خفيفة عند الـ Hover */
.experience-card:hover {
  transform: translateY(-4px);
  border-color: rgba(211, 47, 47, 0.3);

  box-shadow:
    0 10px 15px -3px rgba(237, 29, 29, 0.847),
    0 4px 6px -2px rgba(0, 0, 0, 0.02) !important;
}

.company-name {
  color: #d32f2f; /* تمييز اسم الشركة باللون الأحمر الهادئ */
}

/* كبسولات التاريخ والمدة */
.date-badge {
  background-color: #f1f5f9;
  color: #475569;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
}
.date-badge.current-job {
  background-color: rgba(211, 47, 47, 0.08); /* خلفية حمراء شفافة جداً للوظيفة الحالية */
  color: #d32f2f;
  border-color: rgba(211, 47, 47, 0.2);
}

.line-height-relaxed {
  line-height: 1.7;
}

/* خط فاصل علوي قبل التقنيات داخل الكرت */
.tech-border-top {
  border-top: 2px solid rgb(67, 61, 61);
}

/* كبسولات التقنيات المستخدمة في الوظائف */
.gap-2 {
  gap: 15px;
}
.exp-tech-tag {
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;

  padding: 4px 10px;
  border-radius: 6px;
}

/* تخصيص الدائرة للوظائف السابقة لتكون مريحة للعين وبسيطة */
.past-dot {
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 50%;
}

.timeline-item-wrapper:hover .past-dot {
  border-color: #d32f2f; /* تحول النقطة للرمزي الأحمر عند تحويم الكرت */
  background-color: #d32f2f;
  transition: all 0.2s ease;
}

/* تباعد مخصص للشاشات الصغيرة */
@media (max-width: 959px) {
  .v-timeline--vertical.v-timeline--justify-center {
    grid-template-columns: minmax(auto, 20%) min-content minmax(auto, 50%);
  }
  .text-h3 {
    font-size: 1.8rem !important;
  }
}
@media (max-width: 500px) {
  .v-timeline--vertical.v-timeline--justify-center[data-v-9f0b4001] {
    grid-template-columns: minmax(0px, 0%) min-content minmax(0px, 0%);
  }
  #experience {
    padding: 0px;
  }
  .past-dot {
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
  }

  #titelCo {
    position: relative;
  }
  .experience-card {
    max-width: 17rem;
  }
  /* كبسولات التقنيات المستخدمة في الوظائف */
  .gap-2 {
    gap: 1px;
    display: flex;
    flex-flow: row, nowrap;
    overflow: scroll;
  }
  .exp-tech-tag {
    color: #64748b;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    flex-flow: row, nowrap;
    width: fit-content;
    padding: 4px 10px;
    border-radius: 6px;
  }
}
</style>
