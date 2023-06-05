<template>
  <div class="pt-[10px] h-[100vh]">
    <!-- Вкладки -->
    <ul
      class="pl-[405px] flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center"
    >
      <li class="mr-2">
        <!-- Вкладка "Спорт" -->
        <a
          href="#"
          class="button-sport"
          :class="{
            'inline-block px-4 py-3 text-white rounded-lg active':
              activeTab === 1,
          }"
          @click="changeTab(1)"
          aria-current="page"
          >Спорт</a
        >
      </li>
      <li class="mr-2">
        <!-- Вкладка "Өнер" -->
        <a
          href="#"
          class="button-art"
          :class="{
            'inline-block px-4 py-3 text-white rounded-lg active':
              activeTab === 2,
          }"
          @click="changeTab(2)"
          >Өнер</a
        >
      </li>
      <li class="mr-2">
        <!-- Вкладка "Информатика" -->
        <a
          href="#"
          class="button-it"
          :class="{
            'inline-block px-4 py-3 text-white rounded-lg active':
              activeTab === 3,
          }"
          @click="changeTab(3)"
          >Информатика</a
        >
      </li>
      <li class="mr-2">
        <!-- Вкладка "Ғылым" -->
        <a
          href="#"
          class="button-science"
          :class="{
            'inline-block px-4 py-3 text-white rounded-lg active':
              activeTab === 4,
          }"
          @click="changeTab(4)"
          >Ғылым</a
        >
      </li>
    </ul>

    <!-- Компоненты для каждой вкладки -->
    <AddSport v-if="activeTab == 1" />
    <!-- Компонент "AddSport" для вкладки "Спорт" -->
    <AddArt v-if="activeTab == 2" />
    <!-- Компонент "AddArt" для вкладки "Өнер" -->
    <AddIt v-if="activeTab == 3" />
    <!-- Компонент "AddIt" для вкладки "Информатика" -->
    <AddScience v-if="activeTab == 4" />
    <!-- Компонент "AddScience" для вкладки "Ғылым" -->
  </div>
</template>

<script>
import AddSport from "../components/AddSport.vue";
import AddArt from "../components/AddArt.vue";
import AddScience from "../components/AddScience.vue";
import AddIt from "../components/AddIt.vue";
export default {
  components: {
    AddSport,
    AddScience,
    AddArt,
    AddIt,
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

<style lang="scss" scoped>
.button-sport.active {
  background-image: linear-gradient(to right, #ffbd71, #ff646d);
}

.button-art.active {
  background-image: linear-gradient(to right, #ffb3d2, #ff6791);
}

.button-it.active {
  background-image: linear-gradient(to right, #95e1f9, #31bceb);
}

.button-science.active {
  background-image: linear-gradient(to right, #a6efa6, #58cf58);
}
</style>
