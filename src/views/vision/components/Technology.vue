<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLocalVideo, getLocalImg } from '@/utils/getResources'

gsap.registerPlugin(ScrollTrigger)

const technologyRef = ref()
const scrollRef = ref()
const videoRef = ref()

let ctx: gsap.Context
let t1: gsap.core.Timeline

const handleLoadedmetadata = () => {
  t1.addLabel('loaded')
    .to(videoRef.value, { currentTime: videoRef.value.duration })
    .to('.technology__img-part01', { transform: 'matrix(1,0,0,1,0,-490)' }, 'loaded')
    .to('.technology__img-part02', { transform: 'matrix(1,0,0,1,0,-640)' }, 'loaded')
    .to('.technology__img-part03', { transform: 'matrix(1,0,0,1,0,-640)' }, 'loaded')
    .to('.technology__img-part04', { transform: 'matrix(1,0,0,1,0,-640)' }, 'loaded')
    .to('.technology__img-part05', { transform: 'matrix(1,0,0,1,0,-790)' }, 'loaded')
}

onMounted(() => {
  ctx = gsap.context(() => {
    t1 = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.value,
        start: 'top 66%',
        end: '250% top',
        pin: true,
        scrub: 0.5,
        toggleActions: 'play none none reverse'
      }
    })

    t1.to('.technology__img-part01', { transform: 'matrix(1,0,0,1,0,-200)' }, 0)
      .to('.technology__img-part02', { transform: 'matrix(1,0,0,1,0,-350)' }, 0)
      .to('.technology__img-part03', { transform: 'matrix(1,0,0,1,0,-350)' }, 0)
      .to('.technology__img-part04', { transform: 'matrix(1,0,0,1,0,-350)' }, 0)
      .to('.technology__img-part05', { transform: 'matrix(1,0,0,1,0,-500)' }, 0)
      .to('.technology__img-part06', { transform: 'matrix(1,0,0,1,0,-225)' }, 0)
      .set('.technology__img-part06', { opacity: 0 }, '>')
  }, scrollRef.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section class="technology" ref="technologyRef">
    <div class="technology__content">
      <h2 class="technology__headline">Technology</h2>
      <h3 class="technology__paragraph-1">Innovation you can see, hear, and feel.</h3>
      <p class="technology__paragraph-2">
        <span style="color: #fff">Pushing boundaries from the inside out.</span>
        Spatial experiences on Vision Pro are only possible through groundbreaking Apple technology.
        Displays the size of a postage stamp that deliver more pixels than a 4K TV to each eye.
        Incredible advances in Spatial Audio. A revolutionary dual‑chip design featuring custom
        Apple silicon. A sophisticated array of cameras and sensors. All the elements work together
        to create an unprecedented experience you have to see to believe.
      </p>
    </div>
    <div class="technology__scroll" ref="scrollRef">
      <video
        ref="videoRef"
        @loadedmetadata="handleLoadedmetadata"
        class="technology__video"
        :src="getLocalVideo('technology/displays.mp4')"
      />
      <img
        class="technology__img technology__img-part01"
        :src="getLocalImg('technology/part1.webp')"
      />
      <img
        class="technology__img technology__img-part02"
        :src="getLocalImg('technology/part2.webp')"
      />
      <img
        class="technology__img technology__img-part03"
        :src="getLocalImg('technology/part3.webp')"
      />
      <img
        class="technology__img technology__img-part04"
        :src="getLocalImg('technology/part4.webp')"
      />
      <img
        class="technology__img technology__img-part05"
        :src="getLocalImg('technology/part3.webp')"
      />
      <img
        class="technology__img technology__img-part06"
        :src="getLocalImg('technology/part5.webp')"
        alt=""
      />
    </div>
    <div class="technology__content">
      <h3 class="technology__subheadline">More pixels than a 4K TV. For each eye.</h3>
      <p class="technology__paragraph-2">
        The custom micro‑OLED display system features 23 million pixels, delivering stunning
        resolution and colors. And a specially designed three‑element lens creates the feeling of a
        display that’s everywhere you look.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.technology {
  position: relative;
  padding-top: 100px;
  background-color: #000;
  overflow-x: hidden;

  &__content {
    flex-direction: column;
    align-items: center;
    text-align: center;

    @include container;
  }

  &__headline {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
    color: #fff;
  }

  &__subheadline {
    font-size: 32px;
    line-height: 1.1;
    font-weight: 700;
    color: #fff;

    @include breakpoint(sm) {
      font-size: 16px;
    }
  }

  &__paragraph {
    &-1 {
      margin-top: 13px;
      margin-bottom: 0;
      font-size: 80px;
      line-height: 1.1;
      font-weight: 700;
      color: #fff;

      @include breakpoint(sm) {
        font-size: 24px;
      }
    }
    &-2 {
      margin-top: 40px;
      font-size: 24px;
      font-weight: 600;
      color: #86868b;
      z-index: 999;

      @include breakpoint(sm) {
        font-size: 16px;
      }
    }
  }

  &__scroll {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    justify-items: center;
    margin-top: 100px;
  }

  &__img {
    grid-area: 1/1;
    width: 860px;

    &-part06 {
      transform: matrix(1, 0, 0, 1, 0, -225);
    }
  }

  &__video {
    grid-area: 1/1;
    width: 860px;
    transform: matrix(1, 0, 0, 1, 0, -225);
  }
}
</style>
