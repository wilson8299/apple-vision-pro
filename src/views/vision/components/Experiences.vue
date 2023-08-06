<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/Button.vue'

defineProps({
  videoSrc: {
    type: String,
    required: true
  }
})

gsap.registerPlugin(ScrollTrigger)

const videoPlaying = ref(true)
const experiencesRef = ref()
const videoRef = ref()
const overlayRef = ref()
const headwrapperRef = ref()
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
        trigger: experiencesRef.value,
        start: 'top top',
        pin: true,
        scrub: 0.5
      }
    })

    t1.to(overlayRef.value, { opacity: 0 }, '0')
      .to(headwrapperRef.value, { top: '-20%', ease: 'none' }, '0')
      .to(headlineRef.value, { opacity: 1 }, '0')
      .to(experiencesRef.value, { scale: 0.95 })
  }, experiencesRef.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section class="experiences" ref="experiencesRef">
    <div class="experiences__wrapper">
      <video
        @timeupdate="handleTimeUpdate"
        ref="videoRef"
        class="experiences__video"
        :src="videoSrc"
        autoplay
        loop
        muted
      ></video>
      <div class="experiences__overlay" ref="overlayRef"></div>
    </div>
    <div class="experiences__head-wrapper container" ref="headwrapperRef">
      <h2 class="experiences__eyebrow"><slot name="eyebrow" /></h2>
      <p class="experiences__headline" ref="headlineRef"><slot name="headline" /></p>
    </div>
    <div class="experiences__play">
      <button class="experiences__button" @click="handleVideoClick">
        <fa-icon v-if="videoPlaying" icon="fa-pause" style="color: white" />
        <fa-icon v-else icon="fa-play" style="color: white" />
      </button>
      <svg class="experiences__svg" viewBox="0 0 100 100">
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
    <div class="container">
      <div class="experiences__content">
        <h3 class="experiences__subheadline"><slot name="subheadline" /></h3>
        <div class="experiences__description">
          <p class="experiences__paragraph">
            <slot name="paragraph" />
          </p>
          <Button @click="handleVideoClick"><slot name="more" /></Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.container {
  @include container;
}

.experiences {
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
    opacity: 0.5;
  }

  &__head-wrapper {
    display: block;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
  }

  &__eyebrow {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: 0.009em;
    color: #fff;
  }

  &__headline {
    margin-top: 20px;
    font-size: 80px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.003em;
    color: #fff;
    opacity: 1;

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

  &__content {
    display: flex;
    margin-top: 80px;
    margin-bottom: 80px;
    z-index: 999;

    @include breakpoint(sm) {
      flex-direction: column;
      margin-top: 80px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  &__subheadline {
    flex-basis: 33.3%;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0.004em;
    color: #1d1d1f;

    @include breakpoint(sm) {
      flex-basis: 100%;
    }
  }

  &__description {
    flex-basis: 66.6%;
    margin-left: 81px;
    font-size: 21px;
    line-height: 1.381002381;
    font-weight: 600;
    letter-spacing: 0.011em;
    color: #86868b;

    @include breakpoint(sm) {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      margin-left: 0;
    }
  }
}
</style>
