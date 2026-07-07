<template>
  <v-container fluid class="project-details-section py-16 px-4 px-md-12">
    <div class="top-accent-line"></div>

    <v-row class="mb-8">
      <v-col cols="12">
        <v-btn
          variant="text"
          color="slate-800"
          class="back-btn font-weight-bold px-0 text-none"
          @click="goBack"
        >
          <v-icon icon="mdi-arrow-left" class="back-icon mr-2" size="small"></v-icon>
          <span class="back-text">Back to Showcase</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="isLoading">
      <v-col cols="12" lg="7">
        <v-skeleton-loader
          type="image, heading"
          height="450"
          class="rounded-xl"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="5">
        <v-skeleton-loader
          type="article, actions"
          height="450"
          class="rounded-xl"
        ></v-skeleton-loader>
      </v-col>
    </v-row>

    <v-row v-else class="project-content-row justify-space-between">
      <v-col cols="12" lg="7" class="visual-column">
        <!-- قسم الفيديو المتجاوب -->
        <div
          v-if="project.videoUrl && project.videoUrl.length > 0"
          class="video-hero-wrapper rounded-xl overflow-hidden mb-8"
        >
          <iframe
            :src="project.videoUrl"
            title="Project Showcase Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
            class="project-video"
          ></iframe>
        </div>

        <!-- قسم الصورة الأساسية المتجاوبة (تم إصلاح العرض الثابت) -->
        <div
          v-if="!project.videoUrl || project.videoUrl.length < 1"
          class="rounded-xl overflow-hidden mb-8 responsive-image-wrapper"
        >
          <img :src="project.mainImg" alt="Main Project Image" class="responsive-main-img" />
        </div>

        <div class="gallery-header d-flex align-center mb-6">
          <span class="gallery-decor-line"></span>
          <h3 class="text-h6 font-weight-black text-slate-800 tracking-wide px-3">
            PROJECT GALLERY
          </h3>
          <span class="gallery-decor-line flex-grow-1"></span>
        </div>

        <!-- شبكة الصور (تم إصلاح idx إلى i ليعمل التجاوب تلقائياً) -->
        <v-row class="gallery-masonry-grid dense">
          <v-col
            v-for="(img, i) in project.images"
            :key="i"
            :cols="i === 0 ? 12 : 6"
            :sm="i === 0 ? 8 : 4"
            class="pa-2"
          >
            <v-card
              flat
              class="gallery-interactive-card rounded-xl overflow-hidden"
              @click="openlightbox(i)"
            >
              <v-img
                :src="img"
                cover
                :height="i === 0 ? '260' : '120'"
                class="bg-slate-100 project-gallery-img"
                alt="Gallery Image"
                loading="lazy"
              >
                <div class="img-overlay-hover d-flex align-center justify-center">
                  <v-icon icon="mdi-magnify-plus" color="white" size="large"></v-icon>
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="5" class="details-column pl-lg-8">
        <v-card flat class="premium-details-card pa-6 pa-md-8 rounded-xl d-flex flex-column">
          <div class="mb-6">
            <div class="d-flex align-center mb-2">
              <span class="akatsuki-dot mr-2"></span>
              <span class="project-category-tag font-weight-black">{{ project.category }}</span>
            </div>
            <h2 class="text-h4 font-weight-black text-slate-900 tracking-tight transition-color">
              {{ project.title }}
            </h2>
          </div>

          <div class="project-rich-text mb-6 text-body-1 text-slate-600 font-weight-medium">
            <p>{{ project.fullDescription }}</p>
          </div>

          <div class="mb-6">
            <h4 class="details-subtitle text-uppercase font-weight-bold mb-3">Tech Stack</h4>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="tech in project.features" :key="tech" class="modern-tech-pill">
                {{ tech }}
              </span>
            </div>
          </div>

          <v-divider class="mb-6 opacity-1"></v-divider>

          <!-- أزرار متجاوبة بالكامل للهواتف -->
          <v-card-actions class="pa-0">
            <v-btn
              variant="outlined"
              size="x-large"
              class="premium-action-btn secondary-btn w-100 font-weight-bold text-none"
              :href="project.liveUrl"
              target="_blank"
            >
              Live Link
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- شاشة عرض الصور المنبثقة المتجاوبة -->
    <v-dialog v-model="lightbox.open" max-width="950" transition="dialog-bottom-transition">
      <v-card flat class="bg-transparent position-relative mx-2">
        <v-btn
          icon="mdi-close"
          variant="tonal"
          color="white"
          class="close-lightbox-btn"
          @click="lightbox.open = false"
        ></v-btn>
        <v-img
          :src="project.images[lightbox.index]"
          max-height="80vh"
          contain
          class="rounded-xl lightbox-image shadow-deep"
        ></v-img>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isLoading = ref(true)
const project = ref({})

onMounted(() => {
  window.scrollTo(0, 0)
  project.value = route.query

  setTimeout(() => {
    isLoading.value = false
  }, 350)
})

const lightbox = reactive({
  open: false,
  index: 0,
})

const openlightbox = (index) => {
  lightbox.index = index
  lightbox.open = true
}

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.project-details-section {
  background-color: transparent;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  position: relative;
}

.top-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #d32f2f 0%, #ef5350 100%);
}

.text-slate-900 {
  color: #0f172a;
}
.text-slate-800 {
  color: #1e293b;
}
.text-slate-600 {
  color: #475569;
}
.gap-2 {
  gap: 8px;
}

.back-btn {
  letter-spacing: 0.3px;
  font-size: 0.9rem;
}
.back-icon {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.back-btn:hover .back-icon {
  transform: translateX(-5px);
  color: #d32f2f;
}
.back-text {
  transition: color 0.3s ease;
}
.back-btn:hover .back-text {
  color: #d32f2f;
}

/* الاستجابة الفائقة للصور والفيديو */
.responsive-image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.responsive-main-img {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
}

.video-hero-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: #0f172a;
  box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.12);
}
.project-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.gallery-decor-line {
  height: 1px;
  background-color: #e2e8f0;
}

.gallery-interactive-card {
  border: 1px solid #e2e8f0;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.project-gallery-img {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.img-overlay-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(211, 47, 47, 0.4);
  opacity: 0;
  backdrop-filter: blur(4px);
  transition: opacity 0.3s ease;
}
.gallery-interactive-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -5px rgba(211, 47, 47, 0.15);
  border-color: rgba(211, 47, 47, 0.3);
}
.gallery-interactive-card:hover .project-gallery-img {
  transform: scale(1.05);
}
.gallery-interactive-card:hover .img-overlay-hover {
  opacity: 1;
}

.premium-details-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04) !important;
}

.akatsuki-dot {
  width: 8px;
  height: 8px;
  background-color: #d32f2f;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 8px rgba(211, 47, 47, 0.5);
}
.project-category-tag {
  color: #ef5350;
  font-size: 0.75rem;
  letter-spacing: 1px;
}
.details-subtitle {
  color: #94a3b8;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
}

.modern-tech-pill {
  background-color: #f8fafc;
  color: #334155;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}
.premium-details-card:hover .modern-tech-pill {
  border-color: #cbd5e1;
  background-color: #f1f5f9;
}

.premium-action-btn {
  border-radius: 12px !important;
  letter-spacing: 0.5px;
  font-size: 0.95rem !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.secondary-btn {
  border-color: #cbd5e1 !important;
  color: #1e293b !important;
}
.secondary-btn:hover {
  background-color: #f8fafc;
  border-color: #94a3b8 !important;
  transform: translateY(-2px);
}

.close-lightbox-btn {
  position: absolute;
  top: -50px;
  right: 0;
  z-index: 99;
}
.shadow-deep {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
}

/* تحسينات الشاشات المتوسطة والصغيرة بالـ Media Queries */
@media (max-width: 1263px) {
  .details-column {
    margin-top: 32px;
    padding-left: 12px !important;
  }
}
@media (max-width: 600px) {
  .project-details-section {
    padding-top: 40px !important;
  }
  .close-lightbox-btn {
    top: -45px;
    right: 10px;
  }
  .text-h4 {
    font-size: 1.5rem !important;
  }
}
</style>
