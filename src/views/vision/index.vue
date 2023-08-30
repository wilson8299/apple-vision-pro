<script setup lang="ts">
import { getLocalVideo } from '@/utils/getResources'
import VisionHeader from './components/VisionHeader.vue'
import VisionFigure from './components/VisionFigure.vue'
import VisionFoundation from './components/VisionFoundation.vue'
import VisionIntro from './components/VisionIntro.vue'
import VisionExperiences from './components/VisionExperiences.vue'
import VisionDesign from './components/VisionDesign.vue'
import VisionEnvironment from './components/VisionEnvironment.vue'
import VisionTechnology from './components/VisionTechnology.vue'
import VisionSpeaker from './components/VisionSpeaker.vue'
import VisionFeatures from './components/VisionFeatures.vue'
import VisionSecurity from './components/VisionSecurity.vue'
import VisionRouters from './components/VisionRouters.vue'
</script>

<template>
  <vision-header />
  <vision-figure />
  <section>
    <vision-foundation :videoSrc="getLocalVideo('foundation/spatial_computing.webm')"
      >Welcome to the era of spatial computing.</vision-foundation
    >
    <vision-foundation :videoSrc="getLocalVideo('foundation/digital_canvas.webm')"
      >Apple Vision Pro seamlessly blends digital content with your physical
      space.</vision-foundation
    >
    <vision-foundation :videoSrc="getLocalVideo('foundation/inputs.webm')"
      >You navigate simply by using your eyes, hands, and voice.</vision-foundation
    >
    <vision-foundation :videoSrc="getLocalVideo('foundation/entertainment.webm')"
      >So you can do the things you love in ways never before possible.</vision-foundation
    >
  </section>
  <vision-intro />
  <section>
    <vision-experiences :videoSrc="getLocalVideo('experiences/apps.webm')">
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
    </vision-experiences>
    <vision-experiences :videoSrc="getLocalVideo('experiences/entertainment.webm')">
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
    </vision-experiences>
    <vision-experiences :videoSrc="getLocalVideo('experiences/photos_videos.webm')">
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
    </vision-experiences>
    <vision-experiences :videoSrc="getLocalVideo('experiences/connection.webm')">
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
    </vision-experiences>
  </section>
  <vision-design />
  <vision-environment />
  <vision-technology />
  <vision-speaker />
  <vision-features />
  <vision-security />
  <vision-routers />
</template>

<style scoped lang="scss"></style>
