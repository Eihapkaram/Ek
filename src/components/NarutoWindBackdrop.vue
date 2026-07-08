<template>
  <!-- كانفاس الأكاتسكي والشارينغان السينمائي المتكامل -->
  <canvas ref="canvasRef" class="akatsuki-hyper-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx = null
let animationFrameId = null

const crows = []
const clouds = [] // مصفوفة غيمات الأكاتسكي المضافة
const feathers = []
const amaterasuWinds = []

const maxCrows = 6
const maxClouds = 5 // عدد مثالي من الغيمات للحفاظ على المظهر الاحترافي
const maxFeathers = 12
const maxWindLines = 3

let globalTime = 0

const mouse = {
  x: null,
  y: null,
  radius: 140,
}

const resizeCanvas = () => {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
  }
}

const handleMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

const handleMouseLeave = () => {
  mouse.x = null
  mouse.y = null
}

// =========================================================
// 1. فئة غيمة الأكاتسكي الرسمية (Akatsuki Cloud Class)
// =========================================================
class AkatsukiCloud {
  constructor() {
    this.reset()
    this.y = Math.random() * window.innerHeight
  }

  reset() {
    this.x = Math.random() * (window.innerWidth + 200) - 100
    this.y = -60
    this.scale = Math.random() * 0.25 + 0.35 // حجم هندسي متناسق للغيمة
    this.width = 100 * this.scale
    this.height = 60 * this.scale

    this.speedX = Math.random() * 0.8 + 0.6 // حركة هادئة وفخمة للغيمات
    this.speedY = Math.random() * 0.7 + 0.5

    this.swingSpeed = Math.random() * 0.02 + 0.01
    this.swingAngle = Math.random() * Math.PI * 2

    this.flipSpeed = Math.random() * 0.03 + 0.01
    this.flipTime = Math.random() * 100

    this.rotation = Math.random() * 20 - 10 // دوران خفيف مائل
    this.opacity = Math.random() * 0.25 + 0.35 // شفافية سينمائية ناعمة
  }

  update() {
    this.swingAngle += this.swingSpeed
    this.flipTime += this.flipSpeed

    this.y += this.speedY
    this.x += this.speedX + Math.sin(this.swingAngle) * 0.3

    // تفاعل الغيمة مع تيار الماوس
    if (mouse.x !== null && mouse.y !== null) {
      let dx = this.x - mouse.x
      let dy = this.y - mouse.y
      let distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < mouse.radius) {
        let force = (mouse.radius - distance) / mouse.radius
        this.x += (dx / distance) * force * 5
        this.y += (dy / distance) * force * 3
      }
    }

    if (this.y > window.innerHeight + 60 || this.x > window.innerWidth + 100 || this.x < -100) {
      this.reset()
    }
  }

  draw() {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.translate(this.x, this.y)
    ctx.rotate((this.rotation * Math.PI) / 180)

    // محاكاة تموج وانثناء الغيمة 3D
    ctx.scale(Math.sin(this.flipTime) * 0.3 + 0.8, 1)

    // تفعيل توهج نيون أحمر خلف الغيمة (Mystic Aura)
    ctx.shadowColor = '#ff0000'
    ctx.shadowBlur = 15

    // 1. رسم الحدود البيضاء الخارجية للغيمة الرسمية
    ctx.fillStyle = '#ffffff'
    this.drawCloudPath(ctx, this.scale * 1.08)
    ctx.fill()

    // إيقاف التوهج للطبقة الداخلية للحفاظ على حدة الألوان
    ctx.shadowBlur = 0

    // 2. رسم الغيمة الحمراء الداخلية (Akatsuki Crimson)
    ctx.fillStyle = '#b81414'
    this.drawCloudPath(ctx, this.scale)
    ctx.fill()

    ctx.restore()
  }

  // معادلة رسم منحنيات غيمة الأكاتسكي بدقة رياضية
  drawCloudPath(context, s) {
    context.beginPath()
    context.moveTo(-20 * s, 15 * s)
    context.bezierCurveTo(-40 * s, 15 * s, -50 * s, -5 * s, -30 * s, -15 * s)
    context.bezierCurveTo(-35 * s, -35 * s, -10 * s, -45 * s, 5 * s, -30 * s)
    context.bezierCurveTo(20 * s, -50 * s, 50 * s, -40 * s, 45 * s, -15 * s)
    context.bezierCurveTo(65 * s, -10 * s, 65 * s, 15 * s, 40 * s, 15 * s)
    context.bezierCurveTo(25 * s, 25 * s, -5 * s, 25 * s, -20 * s, 15 * s)
    context.closePath()
  }
}

// =========================================================
// 2. فئة الغراب السينمائي بـ عين الشارينغان المتوهجة
// =========================================================
class SharinganCrow {
  constructor() {
    this.reset()
    this.x = Math.random() * (window.innerWidth + 200) - 100
  }

  reset() {
    this.x = -150 - Math.random() * 150
    this.y = Math.random() * (window.innerHeight * 0.6) + 40
    this.size = Math.random() * 16 + 20

    this.speedX = Math.random() * 1.4 + 1.8
    this.speedY = Math.random() * 0.4 - 0.2

    this.flapSpeed = Math.random() * 0.07 + 0.07
    this.flapTime = Math.random() * 100

    this.angle = Math.random() * 10 - 5
    this.opacity = Math.random() * 0.35 + 0.45
    this.isDissolving = false
  }

  update() {
    this.flapTime += this.flapSpeed
    this.x += this.speedX
    this.y += this.speedY + Math.sin(globalTime * 0.03 + this.x * 0.005) * 0.2

    if (mouse.x !== null && mouse.y !== null) {
      let dx = this.x - mouse.x
      let dy = this.y - mouse.y
      let distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < mouse.radius && !this.isDissolving) {
        this.isDissolving = true
        let burstCount = Math.floor(this.size * 0.4)
        for (let i = 0; i < burstCount; i++) {
          feathers[Math.floor(Math.random() * feathers.length)].reset(this.x, this.y)
        }
      }
    }

    if (this.x > window.innerWidth + 150) this.reset()
    if (this.isDissolving) {
      this.opacity -= 0.06
      if (this.opacity <= 0) this.reset()
    }
  }

  draw() {
    if (this.opacity <= 0) return

    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.translate(this.x, this.y)
    ctx.rotate((this.angle * Math.PI) / 180)

    ctx.fillStyle = '#050507'
    let wingY = Math.sin(this.flapTime)

    // رسم هيكل الأجنحة الانسيابي التفصيلي
    for (let j = -1; j <= 1; j += 2) {
      ctx.save()
      ctx.scale(1, j * wingY)
      ctx.beginPath()
      ctx.moveTo(-this.size * 0.1, 0)
      ctx.bezierCurveTo(
        -this.size * 0.5,
        -this.size * 1.2,
        this.size * 0.4,
        -this.size * 1.3,
        this.size * 0.2,
        -this.size * 0.1,
      )
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    // جسم الغراب
    ctx.beginPath()
    ctx.moveTo(-this.size * 0.7, this.size * 0.1)
    ctx.quadraticCurveTo(0, this.size * 0.3, this.size * 0.4, 0)
    ctx.lineTo(this.size * 0.6, -this.size * 0.05)
    ctx.quadraticCurveTo(this.size * 0.3, -this.size * 0.2, -this.size * 0.5, -this.size * 0.1)
    ctx.closePath()
    ctx.fill()

    // ─── توهج عين الشارينغان النيونية الحمراء ───
    ctx.save()
    ctx.shadowColor = '#ff0000'
    ctx.shadowBlur = 7
    ctx.fillStyle = '#ff1e1e'
    ctx.beginPath()
    ctx.arc(this.size * 0.35, -this.size * 0.04, 1.8, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    ctx.restore()
  }
}

// =========================================================
// 3. فئات الريش وتيارات أماتيراسو الضبابية المتفوقة
// =========================================================
class RealisticFeather {
  constructor(burstX = null, burstY = null) {
    this.reset(burstX, burstY)
    if (burstX === null) this.y = Math.random() * window.innerHeight
  }
  reset(burstX = null, burstY = null) {
    this.x = burstX !== null ? burstX : Math.random() * window.innerWidth
    this.y = burstY !== null ? burstY : -40
    this.length = Math.random() * 6 + 10
    this.width = this.length * 0.35
    this.speedX = burstX !== null ? Math.random() * 4 - 2 + 1 : Math.random() * 0.8 + 0.6
    this.speedY = burstX !== null ? Math.random() * 3 - 1 + 1.5 : Math.random() * 0.8 + 0.6
    this.swingSpeed = Math.random() * 0.03 + 0.02
    this.swingAngle = Math.random() * Math.PI * 2
    this.rotation = Math.random() * 360
    this.opacity = Math.random() * 0.3 + 0.35
    this.color = ['#0a0b0f', '#1c0303', '#020203'][Math.floor(Math.random() * 3)]
  }
  update() {
    this.swingAngle += this.swingSpeed
    this.y += this.speedY
    this.x += this.speedX + Math.sin(this.swingAngle) * 0.4
    if (this.y > window.innerHeight + 30 || this.x > window.innerWidth + 30) this.reset(null, null)
  }
  draw() {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.translate(this.x, this.y)
    ctx.rotate((this.rotation * Math.PI) / 180)
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.moveTo(0, -this.length / 2)
    ctx.bezierCurveTo(this.width, -this.length / 3, this.width, this.length / 3, 0, this.length / 2)
    ctx.bezierCurveTo(
      -this.width,
      this.length / 3,
      -this.width,
      -this.length / 3,
      0,
      -this.length / 2,
    )
    ctx.fill()
    ctx.restore()
  }
}

class AmaterasuWind {
  constructor() {
    this.reset()
    this.x = Math.random() * window.innerWidth
  }
  reset() {
    this.x = -400
    this.y = Math.random() * window.innerHeight
    this.length = Math.random() * 350 + 300
    this.speed = Math.random() * 2 + 4
    this.thickness = Math.random() * 20 + 15
  }
  update() {
    this.x += this.speed
    if (this.x > window.innerWidth) this.reset()
  }
  draw() {
    ctx.save()
    let gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.length, this.y)
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
    gradient.addColorStop(0.4, 'rgba(120, 10, 10, 0.04)')
    gradient.addColorStop(0.7, 'rgba(10, 2, 2, 0.05)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.strokeStyle = gradient
    ctx.lineWidth = this.thickness
    ctx.globalCompositeOperation = 'screen'
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.bezierCurveTo(
      this.x + this.length * 0.33,
      this.y - 25,
      this.x + this.length * 0.66,
      this.y + 25,
      this.x + this.length,
      this.y,
    )
    ctx.stroke()
    ctx.restore()
  }
}

// =========================================================
// 4. حلقة التحكم والمحرك (Engine Control)
// =========================================================
const animate = () => {
  globalTime += 1
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  // الرصد بالطبقات لتوفير أبهى مظهر سينمائي منظم
  amaterasuWinds.forEach((wind) => {
    wind.update()
    wind.draw()
  })
  feathers.forEach((feather) => {
    feather.update()
    feather.draw()
  })
  clouds.forEach((cloud) => {
    cloud.update()
    cloud.draw()
  })
  crows.forEach((crow) => {
    crow.update()
    crow.draw()
  })

  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  resizeCanvas()

  for (let i = 0; i < maxCrows; i++) crows.push(new SharinganCrow())
  for (let i = 0; i < maxClouds; i++) clouds.push(new AkatsukiCloud())
  for (let i = 0; i < maxFeathers; i++) feathers.push(new RealisticFeather())
  for (let i = 0; i < maxWindLines; i++) amaterasuWinds.push(new AmaterasuWind())

  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)

  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
.akatsuki-hyper-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0; /* خلف جميع محتويات الـ Vue Router والمكونات وأمام سواد الموقع المعتم */
  pointer-events: none; /* تضمن حماية تامة لقابلية ضغط وتصفح روابط موقعك بالكامل */
  display: block;
  background: transparent;
}
</style>
