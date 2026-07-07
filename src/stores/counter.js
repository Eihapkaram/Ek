import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const theme = ref('dark')
  function toggleTheme() {
    console.log(`store ${theme.value}`)

    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { toggleTheme, theme }
})
