<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Footer from '@/components/Footer.vue'
import Loading from '@/components/Loading.vue'
import Vision from '@/views/vision/index.vue'

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
  <Loading :is-loading="isLoading" />
  <main>
    <Vision />
  </main>
  <Footer />
</template>

<style scoped></style>
