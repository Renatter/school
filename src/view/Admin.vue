<template>
  <div class="pt-[105px] h-full pb-[25px] container">
    <ul
      class="pl-[405px] flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center"
    >
      <li class="mr-2">
        <a
          href="#"
          :class="{
            'inline-block px-4 py-3 text-white bg-[#A69781] rounded-lg active':
              activeTab === 1,
          }"
          @click="changeTab(1)"
          aria-current="page"
          >Жаңалықтар</a
        >
      </li>
      <li class="mr-2">
        <a
          href="#"
          :class="{
            'inline-block px-4 py-3 text-white  bg-[#A69781] rounded-lg active':
              activeTab === 2,
          }"
          @click="changeTab(2)"
          >Мұғалімдер</a
        >
      </li>
      <li class="mr-2">
        <a
          href="#"
          :class="{
            'inline-block px-4 py-3 text-white  bg-[#A69781] rounded-lg active':
              activeTab === 3,
          }"
          @click="changeTab(3)"
          >Жетістіктер</a
        >
      </li>
      <li class="mr-2">
        <a
          href="#"
          :class="{
            'inline-block px-4 py-3 text-white  bg-[#A69781] rounded-lg active':
              activeTab === 4,
          }"
          @click="changeTab(4)"
          >Үйірмелер</a
        >
      </li>
    </ul>
    <AddNews v-if="activeTab == 1" />
    <AddTeacher v-if="activeTab == 2" />
    <AddProgress v-if="activeTab == 3" />
    <AddCircle v-if="activeTab == 4" />
  </div>
</template>

<script>
import AddNews from "./AddNews.vue"; // Подключение вашего модуля Firebase Firestore
import AddTeacher from "./AddTeacher.vue";
import AddProgress from "./AddProgress.vue";
import AddCircle from "./AddCircle.vue";
export default {
  components: {
    AddNews,
    AddTeacher,
    AddProgress,
    AddCircle,
  },
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
