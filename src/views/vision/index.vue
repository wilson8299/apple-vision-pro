<script setup lang="ts">
import { getLocalVideo } from '@/utils/getResources'
import Header from './components/Header.vue'
import Figure from './components/Figure.vue'
import Foundation from './components/Foundation.vue'
import Intro from './components/Intro.vue'
import Experiences from './components/Experiences.vue'
import Design from './components/Design.vue'
import Environment from './components/Environment.vue'
import Technology from './components/Technology.vue'
import Speaker from './components/Speaker.vue'
import Features from './components/Features.vue'
import Security from './components/Security.vue'
import Routers from './components/Routers.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <Figure />
  <section>
    <Foundation :videoSrc="getLocalVideo('foundation/spatial_computing.webm')"
      >Welcome to the era of spatial computing.</Foundation
    >
    <Foundation :videoSrc="getLocalVideo('foundation/digital_canvas.webm')"
      >Apple Vision Pro seamlessly blends digital content with your physical space.</Foundation
    >
    <Foundation :videoSrc="getLocalVideo('foundation/inputs.webm')"
      >You navigate simply by using your eyes, hands, and voice.</Foundation
    >
    <Foundation :videoSrc="getLocalVideo('foundation/entertainment.webm')"
      >So you can do the things you love in ways never before possible.</Foundation
    >
  </section>
  <Intro />
  <section>
    <Experiences :videoSrc="getLocalVideo('experiences/apps.webm')">
      <template v-slot:eyebrow>Apps</template>
      <template v-slot:headline>Free your desktop.<br />And your apps will follow.</template>
      <template v-slot:subheadline>Your apps live in your space.</template>
      <template v-slot:paragraph
        >With Vision Pro, you have an infinite canvas that transforms how you use the apps you love.
        Arrange apps anywhere and scale them to the perfect size, making the workspace of your
        dreams a reality — all while staying present in the world around you. Browse the web in
        Safari, create a to-do list in Notes, chat in Messages, and seamlessly move between them
        with a glance.</template
      >
      <template v-slot:more>Learn more about apps</template>
    </Experiences>
    <Experiences :videoSrc="getLocalVideo('experiences/entertainment.webm')">
      <template v-slot:eyebrow>Entertainment</template>
      <template v-slot:headline>The ultimate theater.<br />Wherever you are.</template>
      <template v-slot:subheadline>An immersive way to experience entertainment.</template>
      <template v-slot:paragraph
        >Vision Pro can transform any room into your own personal theater. Expand your movies,
        shows, and games up to the perfect size while feeling like you’re part of the action with
        Spatial Audio. And with more pixels than a 4K TV for each eye, you can enjoy stunning
        content wherever you are — whether that’s a long flight or the couch at home.</template
      >
      <template v-slot:more>Learn more about entertainment</template>
    </Experiences>
    <Experiences :videoSrc="getLocalVideo('experiences/photos_videos.webm')">
      <template v-slot:eyebrow>Photos and Videos</template>
      <template v-slot:headline>Be in the moment.<br />All over again.</template>
      <template v-slot:subheadline>Your memories come alive.</template>
      <template v-slot:paragraph
        >Vision Pro is Apple’s first 3D camera. You can capture magical spatial photos and spatial
        videos in 3D, then relive those cherished moments like never before with immersive Spatial
        Audio. Your existing library of photos and videos looks incredible at remarkable scale. And
        panoramas wrap around you — making you feel like you’re standing right where you took
        them.</template
      >
      <template v-slot:more>Learn more about photos and videos</template>
    </Experiences>
    <Experiences :videoSrc="getLocalVideo('experiences/connection.webm')">
      <template v-slot:eyebrow>Connection</template>
      <template v-slot:headline>Get on the same page.<br />In the same space.</template>
      <template v-slot:subheadline>Make meetings more meaningful.</template>
      <template v-slot:paragraph
        >Vision Pro makes it easy to collaborate and connect wherever you are. FaceTime video tiles
        are life-size, and as new people join, the call simply expands in your room. Within
        FaceTime, you can also use apps to collaborate with colleagues on the same documents
        simultaneously.</template
      >
      <template v-slot:more>Learn more about connection</template>
    </Experiences>
  </section>
  <Design />
  <Environment />
  <Technology />
  <Speaker />
  <Features />
  <Security />
  <Routers />
</template>

<style scoped lang="scss"></style>
