import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useTheme } from 'vuetify'
export const useCounterStore = defineStore('counter', () => {
  const theme = ref('light')
  const tho = useTheme()
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  const hasSeenAnimation = ref(false)

  function setAnimationSeen() {
    hasSeenAnimation.value = true
  }
  watch(
    () => theme.value,

    (newVal, oldVal) => {
      theme.value = newVal
      tho.global.name.value = theme.value
      if (newVal == 'dark') {
        document.body.style.backgroundColor = 'black'
      } else {
        document.body.style.backgroundColor = '#fff'
      }
    },
  )
  return { toggleTheme, theme, hasSeenAnimation, setAnimationSeen }
})
