<template>
  <div class="rounded-[55px]">
    <div class="p-6 bg-[#EFEDEB] rounded-[25px]">
      <div>
        <h3 class="mb-5 text-[25px] font-bold text-gray-500 dark:text-gray-400">
          {{ room }}
        </h3>

        <p class="font-bold">
          {{ info }}
        </p>
      </div>
      <div class="mt-[25px]">
        <img class="rounded-[15px]" :src="img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["room", "info", "img"],
};
</script>

<style lang="scss" scoped></style>
