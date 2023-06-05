<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <!-- Слайды Swiper -->
    <swiper-slide v-for="item in achievements">
      <div class="flex pt-[50px] justify-between gap-[25px]">
        <!-- Контент достижения -->
        <div class="bg-[#F1F1EE] h-[600px] w-[600px] rounded-[25px] p-[50px]">
          <h1 class="font-bold text-[40px] text-[#4F4849]">{{ item.title }}</h1>
          <p class="text-[20px]">{{ item.fullInfo }}</p>
          <p class="mt-[55px] text-[#FCB43F]">{{ item.date }}</p>
        </div>
        <!-- Изображение достижения -->
        <div class="">
          <img
            class="rounded-[25px] h-[600px] w-[600px]"
            :src="item.image"
            alt=""
          />
        </div>
      </div>
    </swiper-slide>
    <!-- ... -->
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Импорт стилей Swiper
import "swiper/css";

export default {
  props: ["achievements"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Обработчики событий Swiper
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("Изменение слайда");
    };

    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
