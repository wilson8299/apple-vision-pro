<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLocalImg } from '@/utils/getResources'
import Button from '@/components/Button.vue'

gsap.registerPlugin(ScrollTrigger)

const featuresRef = ref()
const trackImgRef = ref()
const sensorImgRef = ref()
const chipsImgRef = ref()
let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      trackImgRef.value,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: trackImgRef.value,
          start: 'top 70%',
          scrub: 0.5
        }
      }
    )

    gsap.fromTo(
      sensorImgRef.value,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sensorImgRef.value,
          start: 'top 70%',
          scrub: 0.5
        }
      }
    )

    gsap.fromTo(
      chipsImgRef.value,
      { opacity: 0.3 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: chipsImgRef.value,
          start: 'top 70%',
          scrub: 0.5
        }
      }
    )
  }, featuresRef.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section class="features" ref="featuresRef">
    <div class="features__img-wrapper">
      <img
        class="features__img"
        :src="getLocalImg('features/eye_tracking_1.webp')"
        alt="Inside view of Vision Pro highlighting the LED’s and infrared cameras that enable precision eye-tracking 1"
      />
      <img
        ref="trackImgRef"
        class="features__img"
        :src="getLocalImg('features/eye_tracking_2.webp')"
        alt="Inside view of Vision Pro highlighting the LED’s and infrared cameras that enable precision eye-tracking 2"
      />
    </div>
    <div class="features__content">
      <h3 class="features__headline">Our most advanced Spatial Audio system ever.</h3>
      <p class="features__paragraph">
        Dual-driver audio pods positioned next to each ear deliver personalized sound while letting
        you hear what’s around you. Ambient <span style="color: #fff">Spatial Audio</span>
        makes sounds feel like they’re coming from your surroundings. And with audio raytracing,
        Vision Pro analyzes your room’s acoustic properties — including the physical materials — to
        adapt and match sound to your space.
      </p>
    </div>
    <div class="features__img-wrapper">
      <img
        class="features__img"
        :src="getLocalImg('features/sensors_1.webp')"
        alt="Highlighting the M2 and R1 chips in Vision Pro 1"
      />
      <img
        ref="sensorImgRef"
        class="features__img"
        :src="getLocalImg('features/sensors_2.webp')"
        alt="Highlighting the M2 and R1 chips in Vision Pro 2"
      />
    </div>
    <div class="features__content">
      <h3 class="features__headline">A sophisticated sensor array.</h3>
      <p class="features__paragraph">
        A pair of <span style="color: #fff">high-resolution cameras</span> transmit over one billion
        pixels per second to the displays so you can see the world around you clearly. The system
        also helps deliver <span style="color: #fff">precise head and hand tracking</span> and
        <span style="color: #fff"
          >highlight mapping active, all while understanding your hand gestures from a wide range of
          positions.</span
        >
      </p>
    </div>
    <div class="features__img-wrapper">
      <img
        ref="chipsImgRef"
        class="features__img"
        :src="getLocalImg('features/chips.webp')"
        alt="Highlighting the M2 and R1 chips in Vision Pro"
      />
    </div>
    <div class="features__content features__content-offset">
      <h3 class="features__headline">Revolutionary dual‑chip performance.</h3>
      <p class="features__paragraph">
        A unique dual‑chip design enables the spatial experiences on Vision Pro. The powerful
        <span style="color: #fff">M2</span> chip simultaneously runs visionOS, executes advanced
        computer vision algorithms, and delivers stunning graphics, all with incredible efficiency.
        And the brand-new <span style="color: #fff">R1</span> chip is specifically dedicated to
        process input from the cameras, sensors, and microphones, streaming images to the displays
        within 12 milliseconds — for a virtually lag-free, real-time view of the world.
      </p>
    </div>
    <div class="features__more">
      <Button bg-color="#ffffff" hover-bg-color="#d4d4d4" font-color="#000000"
        ><slot name="more" />Learn more about technology</Button
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.features {
  position: relative;
  padding: 160px 10px 80px 10px;
  background-color: #000;

  &__img-wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    justify-items: center;
  }

  &__img {
    grid-area: 1/1;
    width: 52%;

    @include breakpoint(sm) {
      width: 80%;
    }
  }

  &__content {
    @include container;

    margin-top: 50px;
    margin-bottom: 200px;
    justify-content: center;

    &-offset {
      margin-top: -100px;
      margin-bottom: 50px;
      z-index: 999;

      @include breakpoint(sm) {
        margin-top: 50px;
        margin-bottom: 200px;
      }
    }
  }

  &__headline {
    font-size: 32px;
    line-height: 1.1;
    font-weight: 700;
    color: #fff;
    z-index: 999;

    @include breakpoint(sm) {
      font-size: 24px;
    }
  }

  &__paragraph {
    font-size: 21px;
    line-height: 1.3;
    font-weight: 600;
    color: #86868b;

    @include breakpoint(sm) {
      font-size: 16px;
    }
  }

  &__more {
    display: flex;
    justify-content: center;
  }
}
</style>
