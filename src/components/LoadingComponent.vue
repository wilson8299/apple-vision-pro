<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
})
</script>
<template>
  <div :class="{ loading__out: !isLoading }" class="loading">
    <div
      class="loading__container"
      :style="[isLoading ? { visibility: 'visible' } : { visibility: 'hidden' }]"
    >
      <div class="loading__dot"></div>
      <div class="loading__dot"></div>
      <div class="loading__dot"></div>
    </div>
    <p
      :style="[isLoading ? { visibility: 'visible' } : { visibility: 'hidden' }]"
      class="loading__content"
    >
      Loading
    </p>
  </div>
</template>
<style scoped lang="scss">
.loading {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #161617;
  z-index: 9999;

  &__out {
    animation: out 1.2s forwards;
  }

  &__container {
    display: flex;
  }

  &__dot {
    width: 24px;
    height: 24px;
    margin-right: 18px;
    background: #fff;
    border-radius: 50%;
    animation: 0.6s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  &__content {
    margin-top: 30px;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 12px;
    color: #fff;
    opacity: 0.8;
  }
}

@keyframes bounce {
  to {
    opacity: 0.6;
    transform: translateY(-30px);
  }
}

@keyframes out {
  to {
    transform: translateY(-110vh);
    display: none;
  }
}
</style>
