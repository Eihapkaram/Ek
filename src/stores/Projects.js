import { reactive, ref, computed, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import { lang } from './lang'
import { ProEn } from './ProEn'
import { ProAr } from './ProAr'
export const Projects = defineStore('pro', () => {
  // 1. دالة عمومية لتحويل المسار النسبي لمسار حقيقي يفهمه Vite بعد الـ Build
  const getAssetUrl = (path) => {
    return `/${path}`
  }
  const EnPro = ProEn()
  const ArPro = ProAr()
  const lan = ref('en')
  const proh = () => {
    if (lan.value == 'en') {
      return EnPro
    } else {
      return ArPro
    }
  }

  watch(
    () => lang().langv,

    (newVal) => {
      lan.value = newVal
    },
  )
  return { proh }
})
