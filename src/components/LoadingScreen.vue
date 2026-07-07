<template>
  <div class="loading-overlay">
    <!-- تأثير جزيئات الرماد والشرر المتطاير في الخلفية -->
    <div class="ash-particles">
      <div v-for="n in 25" :key="'ash' + n" class="particle"></div>
    </div>

    <!-- حاوية الغربان الواقعية المتناثرة -->
    <div class="crows-container">
      <div v-for="crow in crows" :key="crow.id" class="crow-realistic" :style="crow.style">
        <!-- صورة ظلية تحاكي حركة حقيقية لجناح الغراب -->
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path
            d="M50,30 C35,10 15,15 0,35 C15,40 30,35 45,42 C40,55 35,70 48,65 C52,70 58,55 53,42 C68,35 83,40 98,35 C83,15 63,10 50,30 Z"
          />
        </svg>
      </div>
    </div>

    <!-- المحرك المركزي: هالة الأماتيراسو السينمائية والعين الواقعية -->
    <div class="amaterasu-core">
      <!-- طبقات النيران السوداء الدخانية الحجمية -->
      <div class="smoke-layer layer-1"></div>
      <div class="smoke-layer layer-2"></div>
      <div class="smoke-layer layer-3"></div>

      <!-- حاوية العين ثلاثية الأبعاد -->
      <div class="realistic-eye-container">
        <!-- طبقة القزحية الحمراء العميقة ذات الملمس العضوي -->
        <div class="iris-texture">
          <!-- نمط الشارينغان المنجيكيو الأسود الحاد -->
          <div class="mangekyou-pattern"></div>
        </div>
        <!-- تأثير انعكاس الضوء الزجاجي على العين (Glossy Lens) -->
        <div class="lens-flare"></div>
      </div>

      <!-- سيلان الدم الواقعي (تأثير سائل لزوجي) -->
      <div class="realistic-bleed"></div>
    </div>

    <!-- النص السينمائي المهتز -->
    <h1 class="cinematic-text">天照 <span class="sub-text">AMATERASU</span></h1>

    <!-- فلتر SVG مدمج لتوليد تأثير النيران الدخانية والدم السائل العضوي (Liquid & Turbulence Filter) -->
    <svg style="position: absolute; width: 0; height: 0">
      <filter id="amaterasu-distortion">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="25"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <filter id="liquid-bleed">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
      </filter>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const crows = ref([])

onMounted(() => {
  // توليد 45 غراباً بمسارات حركية معقدة وعشوائية بالكامل
  for (let i = 0; i < 45; i++) {
    const angle = Math.random() * Math.PI * 2
    const distance = 80 + Math.random() * 140

    const tx = Math.cos(angle) * distance
    const ty = Math.sin(angle) * distance

    const scale = 0.5 + Math.random() * 3.5
    const delay = Math.random() * 2.5
    const duration = 1.5 + Math.random() * 2
    // زاوية الالتفاف مع إضافة انحراف طفيف ليظهر الطيران طبيعياً وليس خطاً مستقيماً هندسياً
    const rotation = (angle * 180) / Math.PI + 90 + (Math.random() * 20 - 10)

    crows.value.push({
      id: i,
      style: {
        '--tx': `${tx}vw`,
        '--ty': `${ty}vh`,
        '--scale': scale,
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
        '--rotation': `${rotation}deg`,
      },
    })
  }
})
</script>

<style scoped>
/* شاشة العرض السينمائية المظلمة */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, #0a0202 0%, #020000 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  perspective: 1000px;
}

/* حاوية المحرك المركزي للعين والنيران */
.amaterasu-core {
  position: relative;
  width: 180px;
  height: 180px;
  margin-bottom: 50px;
  transform-style: preserve-3d;
}

/* تكنولوجيا العين الواقعية العميقة */
.realistic-eye-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #000;
  border: 4px solid #000;
  box-shadow:
    inset 0 0 20px #000,
    0 0 30px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: 5;
}

/* القزحية الحمراء ذات الملمس والعمق اللوني العضوي */
.iris-texture {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #ff0000 0%, #990000 40%, #4a0000 75%, #000000 100%);
  box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  /* انيميشن تركيز التشاكرا السريع والمفاجئ */
  animation: eye-focus-cinematic 4s cubic-bezier(0.19, 1, 0.22, 1) infinite;
}

/* نمط المنجيكيو إيتاشي المدمج بدقة بالغة */
.mangekyou-pattern {
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g fill="black"><circle cx="100" cy="100" r="16"/><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z M100,15 C138,52 112,88 100,82 C108,68 108,42 100,15 Z"/><g transform="rotate(120 100 100)"><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z M100,15 C138,52 112,88 100,82 C108,68 108,42 100,15 Z"/></g><g transform="rotate(240 100 100)"><path d="M100,15 C122,45 122,75 100,82 C82,75 82,45 100,15 Z M100,15 C138,52 112,88 100,82 C108,68 108,42 100,15 Z"/></g></g></svg>');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

/* طبقة زجاجية عاكسة (Lens Effect) لتبدو كعين حقيقية */
.lens-flare {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  pointer-events: none;
}

/* طبقات النيران الدخانية المتصاعدة والمهتزة بفعل فلتر SVG */
.smoke-layer {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, #000000 20%, rgba(20, 5, 5, 0.9) 50%, rgba(0, 0, 0, 0) 70%);
  border-radius: 50%;
  filter: url(#amaterasu-distortion); /* استدعاء فلتر التشويه الواقعي */
  z-index: 2;
  mix-blend-mode: multiply;
}

.layer-1 {
  animation: smoke-burn 2s linear infinite;
  opacity: 0.9;
}
.layer-2 {
  animation: smoke-burn 3s linear infinite reverse;
  opacity: 0.7;
  transform: scale(1.1);
}
.layer-3 {
  background: radial-gradient(circle, #210202 10%, rgba(0, 0, 0, 1) 40%, transparent 60%);
  animation: smoke-burn 1.5s ease-in-out infinite alternate;
  z-index: 1;
}

/* نزيف الدم العضوي اللزج */
.realistic-bleed {
  position: absolute;
  top: 75%;
  left: 46%;
  width: 14px;
  height: 120px;
  background: linear-gradient(to bottom, #500 0%, #200 70%, transparent 100%);
  border-radius: 7px;
  filter: url(#liquid-bleed); /* فلتر تسييل السوائل */
  opacity: 0;
  z-index: 4;
  animation: true-bleed 4s ease-in-out infinite;
}

/* الغربان الواقعية الجانبية وسرعة رفرفة الجناح */
.crows-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  z-index: 10;
}
.crow-realistic {
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  color: #030305;
  opacity: 0;
  transform-origin: center;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.9));
  animation: fly-out-realistic var(--duration) cubic-bezier(0.25, 1, 0.5, 1) var(--delay) infinite;
}
.crow-realistic svg {
  width: 100%;
  height: 100%;
  animation: wing-flap 0.2s linear infinite alternate; /* رفرفة أجنحة فائقة السرعة */
}

/* جزيئات الرماد المتطاير (Ambient Ash Particles) */
.ash-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #111;
  box-shadow: 0 0 4px #ff3300; /* جمر أحمر خافت جداً وسط الرماد الأسود */
  bottom: -10px;
  opacity: 0;
  animation: ash-float 6s linear infinite;
}
/* توزيع عشوائي للرماد بالـ CSS المتتابع */
.particle:nth-child(odd) {
  width: 4px;
  height: 2px;
  animation-duration: 8s;
}
.particle:style-rules {
  /* توليد عشوائي داخلي تلقائي */
}
.particle:each {
  left: calc(Math.random() * 100%);
}

/* نصوص يابانية هوليودية حادة مع اهتزاز ميكروسكوبي */
.cinematic-text {
  color: #d6d6d6;
  font-family: 'Georgia', serif;
  font-size: 2.8rem;
  letter-spacing: 12px;
  margin: 0;
  z-index: 20;
  text-shadow:
    0 0 15px #000,
    0 0 30px #440000;
  animation: cinematic-shake 0.5s infinite alternate;
  text-align: center;
}
.sub-text {
  display: block;
  font-size: 1rem;
  letter-spacing: 8px;
  color: #660000;
  margin-top: 5px;
}

/* --- السيناريو الحركي الواقعي (Animations) --- */

@keyframes smoke-burn {
  0% {
    transform: rotate(0deg) scale(1);
    filter: hue-rotate(0deg) url(#amaterasu-distortion);
  }
  50% {
    transform: rotate(180deg) scale(1.08);
  }
  100% {
    transform: rotate(360deg) scale(1);
    filter: hue-rotate(10deg) url(#amaterasu-distortion);
  }
}

@keyframes eye-focus-cinematic {
  0% {
    transform: rotate(0deg) scale(0.95);
  }
  8% {
    transform: rotate(720deg) scale(1.1);
  } /* تركيز تشاكرا فوري صاعق */
  12% {
    transform: rotate(720deg) scale(1.05);
  }
  40% {
    transform: rotate(740deg) scale(1.05);
  } /* اهتزاز طفيف أثناء إطلاق النيران */
  100% {
    transform: rotate(1080deg) scale(0.95);
  }
}

@keyframes true-bleed {
  0%,
  8% {
    transform: scaleY(0);
    opacity: 0;
    transform-origin: top;
  }
  35% {
    transform: scaleY(1);
    opacity: 0.95;
    transform-origin: top;
  }
  70%,
  100% {
    transform: scaleY(1.4) translateY(20px);
    opacity: 0;
    transform-origin: top;
  }
}

@keyframes fly-out-realistic {
  0% {
    transform: translate(-50%, -50%) scale(0) rotate(var(--rotation));
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(var(--rotation));
    opacity: 0;
  }
}

@keyframes wing-flap {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0.3) scaleY(1.2);
  }
}

@keyframes ash-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-105vh) translateX(50px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes cinematic-shake {
  0% {
    transform: translate(0.5px, 0.5px) rotate(0deg);
  }
  100% {
    transform: translate(-0.5px, -0.5px) rotate(0.5deg);
    color: #880000;
  }
}
</style>
