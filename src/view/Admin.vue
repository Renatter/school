<template>
  <div class="pt-[105px] h-full pb-[25px] container">
    <!-- Вкладки -->
    <ul
      class="pl-[405px] flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center"
    >
      <li class="mr-2">
        <!-- Вкладка "Жаңалықтар" -->
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
        <!-- Вкладка "Мұғалімдер" -->
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
        <!-- Вкладка "Жетістіктер" -->
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
        <!-- Вкладка "Үйірмелер" -->
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

    <!-- Компоненты для каждой вкладки -->
    <AddNews v-if="activeTab == 1" />
    <!-- Компонент "AddNews" для вкладки "Жаңалықтар" -->
    <AddTeacher v-if="activeTab == 2" />
    <!-- Компонент "AddTeacher" для вкладки "Мұғалімдер" -->
    <AddProgress v-if="activeTab == 3" />
    <!-- Компонент "AddProgress" для вкладки "Жетістіктер" -->
    <AddCircle v-if="activeTab == 4" />
    <!-- Компонент "AddCircle" для вкладки "Үйірмелер" -->
  </div>
</template>

<script>
import AddNews from "./AddNews.vue";
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
      activeTab: 1, // Активная вкладка по умолчанию
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab; // Изменение активной вкладки при клике
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
