<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import LayOut from '@/components/LayOut.vue'
import LoadingScreen from './components/LoadingScreen.vue'
const route = useRoute()
const isLoading = ref(true)
onMounted(() => {
  // محاكاة انتهاء التحميل بعد 3 ثوانٍ (يمكنك ربطها بحالة التحميل الفعلية للموقع)
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <LoadingScreen v-if="isLoading" />
  <lay-out class="lay" style="position: relative">
    <RouterView :key="route.fullPath" />
  </lay-out>
  <!-- يوضع في أسفل ملف App.vue داخل الـ <template> -->
  <v-btn
    icon="mdi-whatsapp"
    style="color: #95f9ac76; background-color: rgba(95, 97, 95, 0.696)"
    size="large"
    elevation="4"
    class="floating-whatsapp-btn"
    href="https://wa.me/201032869272"
    target="_blank"
  ></v-btn>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
.lay {
  width: 200rem;
}
body {
  display: block;
  font-family: 'Roboto', sans-serif;
  font-optical-sizing: auto;

  font-style: normal;
  font-variation-settings: 'wdth' 100;
}

.v-main[data-v-ff182e94] {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 100px !important;
  padding-bottom: 0px;
  margin: 0 !important;
  flex: 1 0 auto;
  max-width: 100%;
}
#app {
  display: flex;
  flex-flow: column, wrap;
  justify-content: center;
  align-content: center;
  max-width: 1280px;
  margin: 0px;
  padding: 0px;
  font-weight: normal;
}
.floating-whatsapp-btn {
  position: fixed !important;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  border-radius: 50% !important;
  transition: transform 0.3s ease !important;
}

.floating-whatsapp-btn:hover {
  transform: scale(1.1) translateY(-3px);
}
/*/tablet/*/
@media (max-width: 991px) {
  .v-main[data-v-ff182e94] {
    margin: 0 !important;
    padding: 0 !important;
    max-width: 100%;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  .v-main[data-v-ff182e94] {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 100px !important;
    padding-bottom: 0px;
    margin: 0 !important;
    max-width: 100%;
  }
}
</style>
