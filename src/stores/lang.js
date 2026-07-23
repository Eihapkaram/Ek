import { defineStore } from 'pinia'
import { reactive, ref, watch, onMounted, computed } from 'vue'
import { En } from './En'
import { Ar } from './Ar'
export const lang = defineStore('langu', () => {
  const Enlang = En()
  const Arlang = Ar()

  const langv = ref('en')

  function toggleLang() {
    langv.value = langv.value === 'en' ? 'ar' : 'en'
  }

  const langfun = () => {
    if (langv.value == 'en') {
      return Enlang
    } else {
      return Arlang
    }
  }

  watch(
    () => langv.value,

    (newVal) => {
      if (newVal == 'en') {
        document.body.style.direction = 'ltr'
      } else {
        document.body.style.direction = 'rtl'
      }
    },
  )
  return { langfun, langv, toggleLang }
})
