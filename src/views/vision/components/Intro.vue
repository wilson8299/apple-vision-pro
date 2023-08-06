<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLocalVideo, getLocalImg } from '@/utils/getResources'

gsap.registerPlugin(ScrollTrigger)

const introRef = ref()
const videoRef = ref()
let ctx: gsap.Context
let t1: gsap.core.Timeline

const logoImg = computed(() => {
  return `url(${getLocalImg('intro/logo.webp')})`
})

const handleLoadedmetadata = () => {
  t1.to(videoRef.value, { currentTime: videoRef.value.duration })
}

onMounted(() => {
  ctx = gsap.context(() => {
    t1 = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.value,
        start: 'top bottom',
        scrub: true
      }
    })
  }, introRef.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section class="intro" ref="introRef">
    <h2 class="intro__headline">Vision Pro</h2>
    <div class="intro__links">
      <a class="intro__link">Watch the film</a>
      <a class="intro__link">Watch the event</a>
    </div>
    <p class="intro__description">Available early next year in the U.S.</p>
    <video
      @loadedmetadata="handleLoadedmetadata"
      ref="videoRef"
      class="intro__video"
      :src="getLocalVideo('intro/intro_spin.webm')"
    ></video>
    <button class="intro__button">Take a closer look at Vision Pro</button>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.intro {
  @include container;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 70px;

  &__headline {
    margin-bottom: 60px;
    width: 462px;
    height: 76px;
    background-image: v-bind(logoImg);
    background-repeat: no-repeat;
    background-size: 462px 76px;
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;

    @include breakpoint(sm) {
      width: 232px;
      height: 40px;
      background-size: 232px 40px;
    }
  }

  &__links {
    margin-bottom: 20px;
  }

  &__link {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
    color: #ff5a00;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &:first-child {
      margin-right: 15.2px;
    }

    &:last-child {
      margin-left: 15.2px;
    }

    @include breakpoint(sm) {
      display: block;

      &:first-child {
        margin-right: 0;
      }

      &:last-child {
        margin-top: 7.6px;
        margin-left: 0;
      }
    }
  }

  &__description {
    margin-bottom: 80px;
    font-size: 21px;
    line-height: 1.2;
    font-weight: 600;
    color: #86868b;
  }

  &__video {
    width: 100%;
  }

  &__button {
    padding: 15px 27px;
    color: #1d1d1f;
    border: 3px solid #1d1d1f;
    background-color: transparent;
    border-radius: 100px;
    font-size: 19px;
    line-height: 1.2;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #fff;
      background-color: #1d1d1f;
    }
  }
}
</style>
