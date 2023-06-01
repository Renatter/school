<template>
  <div class="container pb-[55px]">
    <h1 class="text-[30px] text-[#4F4849] font-black pt-[50px]">
      Оқушылардың жетістіктері
    </h1>
    <ProgressCard :achievements="achievements" />
  </div>
</template>

<script>
import ProgressCard from "../components/ProgressCard.vue";

import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Подключение вашего модуля Firebase Firestore

export default {
  name: "NewsComponent",
  components: {
    ProgressCard,
  },
  data() {
    return {
      achievements: [],
    };
  },
  async mounted() {
    // Получение данных новостей из Firestore
    const querySnapshot = await getDocs(collection(db, "achievements"));

    // Заполнение массива новостей
    querySnapshot.forEach((doc) => {
      const achievementsItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.achievements.push(achievementsItem);
    });
  },
};
</script>
