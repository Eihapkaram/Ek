<template>
  <v-container fluid id="contact" class="contact-clean-section py-12 px-4 px-md-8">
    <v-row justify="center" class="mb-12">
      <v-col id="tiTelCol" cols="12" class="text-center">
        <v-row>
          <div class="d-inline-flex align-center justify-center mb-2">
            <v-icon
              icon="mdi-email-outline"
              color="red-darken-2"
              class="mr-2"
              size="small"
            ></v-icon>
            <span style="color: rgb(244, 36, 36); font-weight: bold" class="section-subtitle"
              >GET IN TOUCH</span
            >
          </div>
        </v-row>
        <v-row>
          <h2 id="titl" class="text-h3 font-weight-bold tracking-wide">Let's Connect</h2>
          <div class="title-line mx-auto mt-3"></div>
        </v-row>

        <v-row>
          <span id="line"></span>
        </v-row>
      </v-col>
    </v-row>

    <v-row id="rowT" justify="center" class="px-md-6">
      <v-col id="coltxt" cols="12" sm="10" md="8" lg="6" class="text-center">
        <h3 class="text-h5 font-weight-bold text-slate-800 mb-4">Contact Information</h3>
        <p class="text-body-2 text-slate-500 mb-8 line-height-relaxed max-w-md mx-auto">
          Have a project in mind, looking for a full-stack developer, or just want to say hello?
          Drop a message and I'll get back to you as soon as possible.
        </p>

        <div class="d-flex flex-column gap-4 max-w-md mx-auto">
          <div class="info-item d-flex align-center pa-3 rounded-lg text-left">
            <v-avatar color="red-lighten-5" rounded size="40" class="mr-4">
              <v-icon icon="mdi-phone" color="red-darken-2" size="small"></v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-slate-400 font-weight-medium">CALL</div>
              <div class="text-body-2 font-weight-bold text-slate-700">+20 01032869272</div>
            </div>
          </div>

          <div class="info-item d-flex align-center pa-3 rounded-lg text-left">
            <v-avatar color="red-lighten-5" rounded size="40" class="mr-4">
              <v-icon icon="mdi-email" color="red-darken-2" size="small"></v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-slate-400 font-weight-medium">EMAIL</div>
              <div class="text-body-2 font-weight-bold text-slate-700">
                eihapkaram9090@gmail.com
              </div>
            </div>
          </div>

          <div class="info-item d-flex align-center pa-3 rounded-lg text-left">
            <v-avatar color="red-lighten-5" rounded size="40" class="mr-4">
              <v-icon icon="mdi-map-marker" color="red-darken-2" size="small"></v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-slate-400 font-weight-medium">LOCATION</div>
              <div class="text-body-2 font-weight-bold text-slate-700">Cairo, Egypt</div>
            </div>
          </div>
        </div>

        <div class="mt-10 pt-6 social-border-top max-w-md mx-auto">
          <div
            class="text-caption text-slate-400 font-weight-bold mb-4 tracking-wider text-uppercase"
          >
            Follow Me
          </div>

          <div class="d-flex justify-center gap-3">
            <v-btn
              icon="mdi-github"
              variant="text"
              color="slate-700"
              class="social-btn"
              href="https://github.com/Eihapkaram"
              target="_blank"
            ></v-btn>
            <v-btn
              icon="mdi-linkedin"
              variant="text"
              color="slate-700"
              class="social-btn"
              href="https://www.linkedin.com/in/eihap-karam/"
              target="_blank"
            ></v-btn>
            <v-btn
              icon="mdi-youtube"
              variant="text"
              color="slate-700"
              class="social-btn"
              href="https://www.youtube.com/@eihapkaram80"
              target="_blank"
            ></v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
#line {
  height: 3px;
  width: 50px;
  background-color: rgb(175, 36, 36);
  border-radius: 10px;
}
/* التجاوب مع الشاشات والأجهزة اللوحية */
@media (max-width: 991px) {
  #coltxt {
    max-width: 99%;
  }
}
/* التجاوب مع الشاشات والأجهزة اللوحية */
@media (max-width: 500px) {
  #rowT {
    display: flex;
    flex-flow: column;
  }
  #coltxt {
    max-width: 80%;
  }
  #tiTelCol {
    position: relative;
  }
}
</style>
<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '/src/stores/counter'
import { computed, reactive, onMounted, watch } from 'vue'
const store = useCounterStore()
const { theme } = storeToRefs(store)
onMounted(() => {
  if (theme.value == 'dark') {
    document.querySelector('#contact').style.backgroundColor = 'black'
    document.querySelector('#tiTelCol').style.color = ''
    document.querySelector('#rowT').style.color = ''
  } else {
    document.querySelector('#contact').style.backgroundColor = '#fff'
    document.querySelector('#tiTelCol').style.color = 'black'
    document.querySelector('#rowT').style.color = 'black'
  }
})
watch(
  () => theme.value,
  (newVal, oldVal) => {
    theme.value = newVal
    if (theme.value == 'dark') {
      document.querySelector('#contact').style.backgroundColor = 'black'
      document.querySelector('#tiTelCol').style.color = ''
      document.querySelector('#rowT').style.color = ''
    } else {
      document.querySelector('#contact').style.backgroundColor = '#fff'
      document.querySelector('#tiTelCol').style.color = 'black'
      document.querySelector('#rowT').style.color = 'black'
    }
  },
)
</script>
