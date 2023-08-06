<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLocalImg } from '@/utils/getResources'

gsap.registerPlugin(ScrollTrigger)

const designRef = ref()
const canvasRef = ref()
let ctx: gsap.Context
let resizeEvent: () => void

const frameCount = 200
const images: HTMLImageElement[] = []
const vision = {
  frame: 0
}

for (let i = 0; i < frameCount; i++) {
  const img = new Image()
  img.src = getLocalImg(`design/design_${i.toString().padStart(3, '0')}.webp`)
  images.push(img)
}

function render(context: any) {
  let canvas = context.canvas
  let hRatio = canvas.width / images[vision.frame].width
  let vRatio = canvas.height / images[vision.frame].height
  let ratio = Math.min(hRatio, vRatio)
  let centerShift_x = (canvas.width - images[vision.frame].width * ratio) / 2
  let centerShift_y = (canvas.height - images[vision.frame].height * ratio) / 2

  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(
    images[vision.frame],
    0,
    0,
    images[vision.frame].width,
    images[vision.frame].height,
    centerShift_x,
    centerShift_y,
    images[vision.frame].width * ratio,
    images[vision.frame].height * ratio
  )
}

onMounted(() => {
  const context = canvasRef.value.getContext('2d')
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight

  resizeEvent = () => {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
    render(context)
  }
  window.addEventListener('resize', resizeEvent)

  ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: canvasRef.value,
      pin: true,
      start: 'top top',
      end: '600% top'
    })

    gsap.to(vision, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: canvasRef.value,
        start: 'top top',
        end: '600% top',
        scrub: 0.5
      },
      onUpdate: () => {
        render(context)
      }
    })

    images[0].onload = () => {
      render(context)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeEvent)
  ctx.revert()
})
</script>

<template>
  <section class="design" ref="designRef">
    <div class="design__content">
      <h2 class="design__headline">Design</h2>
      <h3 class="design__subheadline">Designed by Apple.</h3>
      <p class="design__paragraph">
        Apple Vision Pro is the result of decades of experience designing high‑performance, mobile,
        and wearable devices — culminating in the most ambitious product Apple has ever created.
        Vision Pro integrates incredibly advanced technology into an elegant, compact form,
        resulting in an amazing experience every time you put it on.
      </p>
    </div>
    <canvas class="design__canvas" ref="canvasRef"></canvas>
    <div class="design__scroll-content">
      <h3>Enclosure</h3>
      <span>
        A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy
        frame that curves to wrap around your face.</span
      >
    </div>
    <div class="design__scroll-content">
      <h3>Light Seal.</h3>
      <span>
        The Light Seal gently flexes to conform to your face, delivering a precise fit while
        blocking out stray light.</span
      >
    </div>
    <div class="design__scroll-content">
      <h3>Head Band.</h3>
      <span>
        The Head Band provides cushioning, breathability, and stretch. The Fit Dial lets you adjust
        Vision Pro precisely to your head.
      </span>
    </div>
    <div class="design__scroll-content">
      <h3>Power.</h3>
      <span>
        The external battery supports up to 2 hours of use, and all‑day use when plugged in.1</span
      >
    </div>

    <div class="design__scroll-content">
      <h3>Sound.</h3>
      <span>
        Speakers positioned close to your ears deliver rich Spatial Audio while keeping you aware of
        your surroundings.</span
      >
    </div>
    <div class="design__scroll-content">
      <h3>EyeSight.</h3>
      <span>
        An outward display reveals your eyes while wearing Vision Pro, letting others know when you
        are using apps or fully immersed.</span
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.design {
  position: relative;
  padding: 180px 0;
  background-color: #f5f5f7;

  &__content {
    flex-direction: column;
    align-items: center;
    text-align: center;

    @include container;
  }

  &__headline {
    font-size: 24px;
    line-height: 1.12;
    font-weight: 700;
    letter-spacing: 0.009em;
  }

  &__subheadline {
    margin-top: 13px;
    margin-bottom: 0;
    font-size: 80px;
    line-height: 1.05;
    font-weight: 700;
    letter-spacing: -0.015em;

    @include breakpoint(sm) {
      font-size: 24px;
    }
  }

  &__paragraph {
    margin-top: 60px;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 600;
    color: #86868b;

    @include breakpoint(sm) {
      font-size: 16px;
    }
  }

  &__canvas {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  &__scroll-content {
    position: absolute;
    width: 20%;

    &:nth-child(even) {
      left: 10%;
    }

    &:nth-child(odd) {
      right: 10%;
    }

    @for $i from 3 through 8 {
      &:nth-child(#{$i}) {
        top: 15% * ($i - 2);
      }
    }

    @include breakpoint(sm) {
      position: relative;
      padding: 0 6% 10px 6%;
      width: 100%;
      &:nth-child(n) {
        left: 0;
      }
    }
  }
}
</style>
