<script setup lang="ts">
import { getLocalVideo } from '@/utils/getResources'
</script>

<template>
  <section class="speaker">
    <video
      class="speaker__video"
      :src="getLocalVideo('speaker/spatial_audio.webm')"
      autoplay
      loop
      muted
    />
    <div class="speaker__content">
      <h3 class="speaker__headline">Our most advanced Spatial Audio system ever.</h3>
      <p class="speaker__paragraph">
        Dual-driver audio pods positioned next to each ear deliver personalized sound while letting
        you hear what’s around you. Ambient <span style="color: #fff">Spatial Audio</span>
        makes sounds feel like they’re coming from your surroundings. And with audio raytracing,
        Vision Pro analyzes your room’s acoustic properties — including the physical materials — to
        adapt and match sound to your space.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.speaker {
  position: relative;
  padding: 160px 10px;
  background-color: #000;

  &__video {
    width: 100%;
  }

  &__content {
    position: absolute;
    max-width: 30%;
    bottom: 100px;
    right: 10%;

    @include breakpoint(sm) {
      position: relative;
      max-width: 100%;
      right: 0;
      padding: 0 20px;
    }
  }

  &__headline {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
    color: #fff;

    @include breakpoint(sm) {
      font-size: 24px;
    }
  }

  &__paragraph {
    font-size: 21px;
    line-height: 1.4;
    font-weight: 600;
    color: #86868b;

    @include breakpoint(sm) {
      font-size: 16px;
    }
  }
}
</style>
