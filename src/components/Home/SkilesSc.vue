<template>
  <v-container fluid id="skills" class="skills-clean-con pa-4 pa-md-8">
    <v-row id="Row" no-gutters class="align-center justify-space-between mb-8 pb-4 header-border">
      <v-col id="titelcon">
        <v-row>
          <div class="d-flex align-center flex-wrap">
            <h4 style="color: rgb(244, 36, 36); font-weight: bold">/ SKILLS</h4>
            <h3 id="contitle" class="text-h1 text-grey-darken-1 font-weight-light">
              & TECHNOLOGIES
            </h3>
          </div>
        </v-row>
        <v-row>
          <span id="line"></span>
        </v-row>
      </v-col>
    </v-row>

    <v-row id="rowCards">
      <v-col id="sctionSkill" cols="12" md="6" sm="12" class="mb-6 mb-md-0">
        <v-card flat class="skill-group-card pa-6">
          <div class="group-header mb-6">
            <v-icon icon="mdi-xml" color="blue-lighten-2" class="mr-2" size="small"></v-icon>
            <span id="frontdev" class="text-h6 font-weight-medium text-white"
              >Frontend Development</span
            >
          </div>

          <div id="sction" v-for="cat in frontendCategories" :key="cat.title" class="mb-6">
            <div id="sctiontitle" class="category-label mb-3">{{ cat.title }}</div>
            <div class="d-flex flex-wrap gap-3">
              <div v-for="skill in cat.skills" :key="skill.name" class="skill-badge">
                <img :src="`${path}${skill.icon}`" :alt="skill.name" class="skill-icon" />
                <span class="skill-text">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col id="sctionSkill" cols="12" sm="12" md="6">
        <v-card flat class="skill-group-card pa-6">
          <div class="group-header mb-6">
            <v-icon icon="mdi-server" color="blue-lighten-2" class="mr-2" size="small"></v-icon>
            <span id="backdev" class="text-h6 font-weight-medium text-white"
              >Backend Development</span
            >
          </div>

          <div v-for="cat in backendCategories" :key="cat.title" class="mb-6">
            <div class="category-label mb-3">{{ cat.title }}</div>
            <div class="d-flex flex-wrap gap-3">
              <div v-for="skill in cat.skills" :key="skill.name" class="skill-badge">
                <img :src="`${path}${skill.icon}`" :alt="skill.name" class="skill-icon" />
                <span class="skill-text">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col id="sctionSkill" cols="12" sm="12" md="6" class="mt-md-4">
        <v-card flat class="skill-group-card pa-6">
          <div class="group-header mb-6">
            <v-icon icon="mdi-wrench" color="blue-lighten-2" class="mr-2" size="small"></v-icon>
            <span class="text-h6 font-weight-medium text-white">Tools & Infrastructure</span>
          </div>

          <div v-for="cat in toolsCategories" :key="cat.title" class="mb-4">
            <div class="category-label mb-3">{{ cat.title }}</div>
            <div class="d-flex flex-wrap gap-3">
              <div v-for="skill in cat.skills" :key="skill.name" class="skill-badge">
                <img :src="`${path}${skill.icon}`" :alt="skill.name" class="skill-icon" />
                <span class="skill-text">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '/src/stores/counter'
const path = ref(`/`)
const store = useCounterStore()
const { theme } = storeToRefs(store)
onMounted(() => {
  if (theme.value == 'dark') {
    document.querySelector('#frontdev').style.color = ''
    document.querySelector('.skill-group-card').style.backgroundColor = ''
    document.querySelector('#contitle').style.color = ''
  } else {
    document.querySelector('.skill-group-card').style.backgroundColor = 'transparent'
    document.querySelector('#contitle').style.color = 'black'
  }
})
// مصفوفات البيانات المنظمة والمريحة للعين
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
    skills: [{ name: 'JavaScript', icon: 'js.png' }],
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
    skills: [{ name: 'REST APIs', icon: 'mysql.png' }],
  },
])

const toolsCategories = reactive([
  {
    title: 'DevOps & Cloud',
    skills: [{ name: 'Docker', icon: 'docker.png' }],
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
watch(
  () => theme.value,
  (newVal, oldVal) => {
    theme.value = newVal
    if (theme.value == 'dark') {
      document.querySelector('#frontdev').style.color = ''
      document.querySelector('.skill-group-card').style.backgroundColor = ''
      document.querySelector('#contitle').style.color = ''
    } else {
      document.querySelector('.skill-group-card').style.backgroundColor = 'transparent'
      document.querySelector('#contitle').style.color = 'black'
    }
  },
)
</script>

<style scoped>
#line {
  height: 3px;
  width: 60px;
  background-color: rgb(175, 36, 36);
  border-radius: 10px;
}
/* التنسيق الأساسي والخلفية المريحة للعين */
.skills-clean-con {
  /* أسود مطفي ناعم جداً مريح للعين مائل للرمادي */
  font-family: 'Inter', sans-serif;
  border-radius: 16px;
  margin-bottom: 20px;
}

/* خط فاصل أنيق للهيدر */
.header-border {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.tracking-wide {
  letter-spacing: 1.5px;
}

/* روابط التنقل الهادئة */
.gap-4 {
  gap: 16px;
}
.nav-item {
  color: #707075;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
}
.nav-item:hover,
.nav-item.active {
  color: #fff;
}

/* كروت المجموعات (تأثير زجاجي بسيط جداً وبدون حواف حادة) */
.skill-group-card {
  /* رمادي داكن ناعم */
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 12px !important;
}

.group-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  padding-bottom: 12px;
}

/* تسمية الفئات الرمادية الناعمة */
.category-label {
  color: #64748b; /* رمادي أزرق مريح جداً للعين */
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

/* أزرار المهارات الذكية (Skill Badges) */
.gap-3 {
  gap: 12px;
}
.skill-badge {
  display: inline-flex;
  align-items: center;
  background-color: #222227; /* أغمق بقليل من الكرت لإبرازه */
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 8px 16px;
  border-radius: 30px; /* حواف دائرية بالكامل ناعمة بصرياً */
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* تأثير تحويم ناعم وراقي مريح جداً */
.skill-badge:hover {
  background-color: #2a2a32;
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.skill-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 10px;
  filter: grayscale(20%); /* تقليل حدة ألوان الأيقونات لجعلها مريحة */
  transition: filter 0.2s ease;
}
.skill-badge:hover .skill-icon {
  filter: grayscale(0%); /* استعادة الألوان الكاملة عند التحويم فقط */
}

.skill-text {
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 500;
}

/* الاستجابة للهواتف */
@media (max-width: 900px) {
  #sctionSkill {
    max-width: 100%;
  }
}
/* الاستجابة للهواتف */
@media (max-width: 500px) {
  #titelcon {
    position: relative;

    margin-block: 20px;
  }
  #line {
    height: 3px;
    width: 60px;
    background-color: rgb(175, 36, 36);
    border-radius: 10px;
    margin-block: 15px;
  }
  #rowCards {
    display: flex;
    flex-flow: row, wrap;

    flex: 1 1 auto;
    margin: -12px;
  }
  #sctionSkill {
    max-width: 100%;
  }
  .text-h4 {
    font-size: 1.5rem !important;
  }
  .skill-badge {
    padding: 6px 12px;
  }
  .skill-text {
    font-size: 0.8rem;
  }
}
</style>
