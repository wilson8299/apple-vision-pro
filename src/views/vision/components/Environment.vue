<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper'
import { getLocalImg } from '@/utils/getResources'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const swiperRef = ref()

const modules = [Pagination, Navigation]
const pagination = {
  clickable: true
}

const onSwiper = (swiperInstance: any) => {
  swiperRef.value = swiperInstance
}
</script>

<template>
  <section class="environment">
    <swiper
      @swiper="onSwiper"
      :modules="modules"
      :pagination="pagination"
      :loop="true"
      :slidesPerView="1.2"
      :centeredSlides="true"
      :spaceBetween="20"
      :speed="1200"
      :watchSlidesProgress="true"
      :updateOnWindowResize="true"
    >
      <swiper-slide>
        <div class="environment__content">
          <img
            class="environment__img"
            :src="getLocalImg('environment/mt_hood.webp')"
            alt="environment_mt_hood"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="environment__content">
          <img
            class="environment__img"
            :src="getLocalImg('environment/white_sand.webp')"
            alt="environment_white_sand"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="environment__content">
          <img
            class="environment__img"
            :src="getLocalImg('environment/moon.webp')"
            alt="environment_moon"
          />
        </div>
      </swiper-slide>
    </swiper>
    <button class="environment__prev" @click="() => swiperRef.slidePrev()">
      <fa-icon icon="fa-chevron-left" />
    </button>
    <button class="environment__next" @click="() => swiperRef.slideNext()">
      <fa-icon icon="fa-chevron-right" />
    </button>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

.swiper {
  > :deep(.swiper-pagination) {
    position: absolute;
    width: fit-content;
    bottom: 30px;
    left: 50%;
    padding: 4px 12px;
    background-color: #000;
    border-radius: 100px;
    transform: translateX(-50%);

    .swiper-pagination-bullet {
      opacity: 1;
      background-color: #757675;
    }

    .swiper-pagination-bullet-active {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  .swiper-slide {
    .environment__img {
      transition: opacity 0.8s ease-in-out;
      opacity: 0.4;
    }

    &-active {
      .environment__img {
        opacity: 1;
      }
    }
  }
}
.environment {
  position: relative;
  margin-bottom: 180px;

  &__content {
    height: 90vh;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__prev,
  &__next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 60px;
    color: #fff;
    opacity: 0.9;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 999;
  }

  &__prev {
    left: 10%;
  }

  &__next {
    right: 10%;
  }
}
</style>
