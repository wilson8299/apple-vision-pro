<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  bgColor: {
    type: String,
    default: '#FF5A00'
  },
  hoverBgColor: {
    type: String,
    default: '#FF5A0095'
  },
  fontColor: {
    type: String,
    default: '#ffffff'
  },
  hoverFontColor: {
    type: String,
    default: '#ffffff'
  }
})
</script>

<template>
  <button class="button"><fa-icon icon="fa-plus" class="button__icon" /><slot></slot></button>
</template>

<style scoped lang="scss">
.button {
  font-size: 19px;
  line-height: 1.2;
  font-weight: 600;
  padding: 17px 27px;
  color: v-bind(fontColor);
  background-color: v-bind(bgColor);
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: v-bind(hoverBgColor);
  }

  &__icon {
    margin-right: 10px;
  }
}
</style>
