<script setup lang="ts">
import { getLocalImg } from '@/utils/getResources'
</script>

<template>
  <section class="routers">
    <div class="routers__reality">
      <div class="routers__reality-container">
        <img :src="getLocalImg('routers/ar_logo.webp')" alt="icon" />
        <h2 class="routers__headline">Use AR to view Apple Vision Pro.</h2>
        <p class="routers__content">Open this page using Safari on your iPhone or iPad.</p>
      </div>
      <div class="routers__reality-imgcontainer">
        <img
          class="routers__reality-img"
          :src="getLocalImg('routers/ar_tile.webp')"
          alt="ar_tile"
        />
      </div>
    </div>
    <div class="routers__developer">
      <img
        class="routers__developer-img"
        :src="getLocalImg('routers/developers.webp')"
        alt="developers"
      />
      <h2 class="routers__headline">An all‑new platform. An all‑new world for developers.</h2>
      <p class="routers__content">
        The possibilities for what developers can dream up and build for Vision Pro are endless. And
        with familiar tools and frameworks like Xcode, SwiftUI, RealityKit, and ARKit, as well as
        support for Unity and the new 3D-content preparation app Reality Composer Pro, developers
        have everything they need to create amazing spatial experiences.
      </p>
      <a class="routers__developer-link" href="javascript::void(0);"
        ><span>Learn more about developing for Apple Vision Pro</span> <span>></span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.routers {
  padding: 6%;

  @include breakpoint(sm) {
    padding: 6% 0 0 0;
  }

  &__reality {
    display: flex;
    padding: 0 10%;
    background-color: #f5f5f7;

    @include breakpoint(sm) {
      flex-direction: column;
      padding-top: 10%;
    }

    &-container {
      flex-basis: 40%;
      margin: auto 0;
    }

    &-imgcontainer {
      flex-basis: 50%;
      padding-top: 10%;
      margin-top: auto;
      margin-left: 10%;

      @include breakpoint(sm) {
        flex-direction: column;
        margin-top: 6%;
        margin-left: 0;
      }
    }

    &-img {
      width: 100%;
      align-items: end;
    }
  }

  &__developer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    padding: 10%;
    text-align: center;
    background-color: #f5f5f7;

    &-img {
      width: 155px;
      height: 155px;
    }

    &-link {
      font-size: 24px;
      line-height: 1.3;
      font-weight: 400;
      color: #06c;

      span:nth-child(1) {
        &:hover {
          text-decoration: underline;
        }
      }

      span:nth-child(2) {
        text-decoration: none;
      }
    }
  }

  &__headline {
    font-size: 56px;
    line-height: 1.1;
    font-weight: 600;

    @include breakpoint(sm) {
      font-size: 24px;
    }
  }

  &__content {
    font-size: 24px;
    line-height: 1.3;
    font-weight: 600;
    color: #86868b;

    @include breakpoint(sm) {
      font-size: 16px;
    }
  }
}
</style>
