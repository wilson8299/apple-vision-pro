<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import VisionView from '@/views/vision/index.vue'

const isLoading = ref(true)

const onLoad = () => {
  isLoading.value = !isLoading.value
}

onMounted(() => {
  window.addEventListener('load', onLoad)
})

onUnmounted(() => {
  window.removeEventListener('load', onLoad)
})
</script>

<template>
  <loading-component :is-loading="isLoading" />
  <main>
    <vision-view />
  </main>
  <footer-component />
</template>

<style scoped></style>
