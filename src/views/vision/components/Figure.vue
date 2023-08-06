<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLocalVideo, getLocalImg } from '@/utils/getResources'

gsap.registerPlugin(ScrollTrigger)

const figureRef = ref()
const figureSpacerRef = ref()
const videoRef = ref()
const contentRef = ref()
let ctx: gsap.Context
let played = false

onMounted(() => {
  ctx = gsap.context(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: figureSpacerRef.value,
        start: '1px top',
        pin: true,
        scrub: 0.5
      },
      onStart: () => {
        if (!played) {
          videoRef.value.play()
          played = true
        }
      }
    })

    t1.to(videoRef.value, { scale: 0.85 }, '0')

    gsap.to(contentRef.value, {
      opacity: 0,
      scrollTrigger: {
        trigger: figureSpacerRef.value,
        start: 'top top'
      }
    })
  }, figureSpacerRef.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section class="figure" ref="figureRef">
    <div class="figure__spacer" ref="figureSpacerRef">
      <video
        ref="videoRef"
        class="figure__video"
        :src="getLocalVideo('figure/hero_large_2x.webm')"
        muted
      />
      <div class="figure__content" ref="contentRef">
        <h3 class="figure__headline">Introducing</h3>
        <img
          class="figure__logo"
          :src="getLocalImg('figure/apple_vision_pro_logo_large.webp')"
          alt="vision pro logo"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;
.figure {
  background-color: #000;

  &__spacer {
    position: relative;
    height: 100vh;
    background-color: #000;
    margin-top: -52px;
    overflow: hidden;
  }

  &__video {
    position: absolute;
    top: 0;
    left: 50%;
    height: 170%;
    transform: translate(-50%, -20%);
    object-fit: cover;

    @include breakpoint(sm) {
      width: 100%;
      height: 100%;
      transform: translate(-50%, 0);
    }
  }

  &__content {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
  }

  &__headline {
    text-align: center;
    font-size: 24px;
    color: #6e6e73;
  }
}
</style>
