<template>
  <div class="flex flex-wrap">
    <div
      v-for="newsItem in news"
      class="mt-[25px] mr-[35px] w-60 cursor-pointer p-2 bg-[#EFEDEB] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ml-[15px] border-[2px] border-[#A69781]"
    >
      <!-- Image -->
      <img class="h-40 object-cover rounded-xl" :src="newsItem.image" alt="" />
      <div class="p-2">
        <!-- Heading -->
        <h2 class="font-bold text-lg mb-2">{{ newsItem.name }}</h2>
        <!-- Description -->
        <p class="text-sm text-gray-600">
          {{ newsItem.text.substring(0, 20) + "..." }}
        </p>
      </div>
      <!-- CTA -->
      <div class="m-2">
        <router-link
          :to="{ path: '/NewsBlock/' + newsItem.name }"
          role="button"
          href="#"
          class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
          >Learn More</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>

<style lang="scss" scoped></style>
