<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLocalImg } from '@/utils/getResources'
import ButtonComponent from '@/components/ButtonComponent.vue'

gsap.registerPlugin(ScrollTrigger)

const securityRef = ref()
const iconRef = ref()
let ctx: gsap.Context

const lockImg = computed(() => {
  return `url(${getLocalImg('security/lock.webp')})`
})

onMounted(() => {
  ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: securityRef.value,
      start: 'top 70%',
      onEnter: () => {
        iconRef.value.classList.add('active')
      }
    })
  }, securityRef.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section class="security" ref="securityRef">
    <figure class="security__icon" ref="iconRef" />
    <h2 class="security__headline">Privacy and Security</h2>
    <p class="security__paragraph-1">When it comes to privacy, we don’t blink.</p>
    <p class="security__paragraph-2">
      <span style="color: #1d1d1f">Privacy and security built in.</span> Like every Apple product
      and service, Vision Pro was designed to help protect your privacy and keep you in control of
      your data. It builds on the foundation of existing Apple privacy and security features with
      new technologies like Optic ID, a secure authentication system that uses the uniqueness of
      your iris.
    </p>
    <button-component>Learn more about privacy and security</button-component>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;
@use 'sass:math';

.active {
  animation: apple-logo-lock 1.6s steps(1) forwards;
}

.security {
  @include container;

  padding: 180px 0;
  flex-direction: column;
  align-items: center;
  color: #1d1d1f;
  text-align: center;

  &__icon {
    margin-bottom: 44px;
    width: 58px;
    height: 80px;
    background-image: v-bind(lockImg);
    background-position: 0 0;
    background-size: 464px 480px;
  }

  &__headline {
    margin: 0;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
  }

  &__paragraph-1 {
    margin-top: 13px;
    margin-bottom: 0;
    font-size: 80px;
    line-height: 1.1;
    font-weight: 700;

    @include breakpoint(sm) {
      font-size: 24px;
    }
  }

  &__paragraph-2 {
    margin-top: 48px;
    padding-bottom: 65px;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 600;
    color: #86868b;

    @include breakpoint(sm) {
      font-size: 16px;
    }
  }

  &__button {
    font-size: 19px;
    line-height: 1.2;
    font-weight: 600;
    padding: 17px 27px;
    color: #fff;
    background-color: rgba(255, 90, 0, 1);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgba(255, 90, 0, 0.9);
    }
  }
}

@keyframes apple-logo-lock {
  $total-frames: 48;
  $frame-step: math.div(100, $total-frames);
  $x-frame-shift: -58;
  $y-frame-shift: -80;

  @for $i from 0 through $total-frames {
    $x-frame-position: $x-frame-shift * ($i % 8);
    $y-frame-position: $y-frame-shift * (floor(math.div($i, 8)));
    #{$i * $frame-step * 1%} {
      background-position: $x-frame-position * 1px $y-frame-position * 1px;
    }
  }

  100% {
    background-position: -406px -400px;
  }
}
</style>
