<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref()
let ctx: gsap.Context

onMounted(() => {
  nextTick(() => {
    ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.intro',
          start: '-70 top',
          end: '+=70',
          scrub: 0.5
        }
      })

      t1.to('.header', { backgroundColor: 'rgba(251,251,253,0.8)' }, 0)
        .to('.header__link', { color: '#000' }, 0)
        .to('.header__button', { backgroundColor: '#000', color: '#fff' })
    })
  })
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <header class="header" ref="headerRef">
    <div class="header__container">
      <h1 class="header__headline"><a class="header__link" href="javascript:0">Vision Pro</a></h1>
      <button class="header__button">Notify me</button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.header {
  position: sticky;
  top: 0;
  background-color: #161617;
  z-index: 999;

  &__container {
    height: 52px;
    justify-content: space-between;
    align-items: center;

    @include container;
  }

  &__headline {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  &__link {
    font-size: 21px;
    font-weight: 600;
    color: #fff;
    opacity: 0.9;
  }

  &__button {
    padding: 3px 10px;
    font-size: 12px;
    line-height: 1.4;
    font-weight: 400;
    background-color: #f5f5f7;
    cursor: pointer;
    border-radius: 50px;

    &:hover {
      background-color: #fff;
    }
  }
}
</style>
