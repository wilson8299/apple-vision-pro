<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps({
  videoSrc: {
    type: String,
    required: true
  }
})

gsap.registerPlugin(ScrollTrigger)

const videoPlaying = ref(true)
const foundationRef = ref()
const videoRef = ref()
const overlayRef = ref()
const contentRef = ref()
const headlineRef = ref()
const svgCircleRef = ref()
let ctx: gsap.Context

const handleTimeUpdate = () => {
  const duration = videoRef.value.duration
  const percentage = videoRef.value.currentTime / duration
  const circlePercentage = 300 - percentage * 300
  gsap.to(svgCircleRef.value, { strokeDashoffset: circlePercentage, duration: 0.6 })
}

const handleVideoClick = () => {
  videoPlaying.value = !videoPlaying.value
  videoPlaying.value ? videoRef.value.play() : videoRef.value.pause()
}

onMounted(() => {
  ctx = gsap.context(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: foundationRef.value,
        start: 'top top',
        pin: true,
        scrub: 0.5
      }
    })

    t1.to(overlayRef.value, { opacity: 0 }, '0')
      .to(overlayRef.value, { opacity: 0.7 }, '>')
      .to(contentRef.value, { top: '50%', ease: 'none' }, '0')
      .to(contentRef.value, { top: '20%', ease: 'none' }, '>')
      .to(headlineRef.value, { opacity: 1 }, '0')
      .to(headlineRef.value, { opacity: 0 }, '>')
  }, foundationRef.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section class="foundation" ref="foundationRef">
    <div class="foundation__wrapper">
      <video
        @timeupdate="handleTimeUpdate"
        ref="videoRef"
        class="foundation__video"
        :src="videoSrc"
        autoplay
        loop
        muted
      ></video>
      <div class="foundation__overlay" ref="overlayRef"></div>
    </div>
    <div class="foundation__content" ref="contentRef">
      <h2 class="foundation__headline" ref="headlineRef"><slot /></h2>
    </div>
    <div class="foundation__play">
      <button class="foundation__button" @click="handleVideoClick">
        <fa-icon v-if="videoPlaying" icon="fa-pause" style="color: white" />
        <fa-icon v-else icon="fa-play" style="color: white" />
      </button>
      <svg class="foundation__svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="#86868b" />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke-dasharray="300"
          stroke-dashoffset="300"
          ref="svgCircleRef"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.foundation {
  position: relative;

  &__wrapper {
    height: 100vh;
  }

  &__video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.7;
  }

  &__content {
    position: absolute;
    width: 100%;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    @include container;
  }

  &__headline {
    font-size: 48px;
    line-height: 1.1;
    font-weight: 700;
    color: #fff;
    opacity: 0;

    @include breakpoint(sm) {
      font-size: 30px;
    }
  }

  &__play {
    position: absolute;
    top: 72px;
    right: 20px;
    width: 40px;
    height: 40px;
  }

  &__button {
    position: absolute;
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 999;
  }

  &__svg {
    width: 40px;
    height: 40px;
    fill: transparent;
    stroke: #fff;
    stroke-width: 6px;
    stroke-linecap: round;
    transform: rotate(-90deg);
  }
}
</style>
