<template>
  <!-- Шаблон компонента -->
  <div class="bg-white">
    <div class="container pt-[85px]">
      <h1 class="text-[45px] font-bold">Біздің сыныптар</h1>
      <div class="flex flex-wrap gap-[15px] justify-evenly">
        <div
          v-for="classItem in sortedClasses"
          :key="classItem.number"
          :class="[
            'clasCard',
            'w-[370px]',
            'h-[200px]',
            'rounded-[15px]',
            getRandomBackground(),
          ]"
        >
          <router-link :to="{ path: '/ClassCard/' + classItem.teacher }">
            <h2 class="text-[35px] font-bold">Cынып {{ classItem.number }}</h2>
            <p class="pt-[55px]">Сынып жетекшісі:</p>
            <p>{{ classItem.teacher }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      classes: [],
    };
  },
  computed: {
    sortedClasses() {
      // Сортировка классов по номеру в порядке возрастания
      return this.classes.sort((a, b) => a.number - b.number);
    },
  },
  mounted() {
    const classRef = collection(db, "classes");

    // Получение данных о классах из Firestore
    onSnapshot(classRef, (snapshot) => {
      this.classes = [];
      snapshot.forEach((doc) => {
        const classItem = doc.data();
        this.classes.push(classItem);
      });
    });
  },
  methods: {
    getRandomBackground() {
      const colors = [
        "bg-[#cdb4db]",
        "bg-[#ffc8dd]",
        "bg-[#ffafcc]",
        "bg-[#bde0fe]",
        "bg-[#a2d2ff]",
        "bg-[#d3f8e2]",
        "bg-[#ede7b1]",
        "bg-[#f694c1]",
        "bg-[#a9def9]",
        "bg-[#ffcf99]",
      ];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    },
  },
};
</script>


<style lang="scss" scoped>
h1 {
  font-family: "Merriweather", serif;
}

.clasCard {
  padding: 15px;
  cursor: pointer;
}

.clasCard:hover {
  transform: scale(1);
}

h2 {
  font-family: "Russo One", sans-serif;
}
</style>
