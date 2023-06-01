<template>
  <div class="bg-[#EFEDEB] h-[100vh]">
    <div class="container pt-[150px] flex flex-wrap gap-7 justify-evenly">
      <router-link to="/CircleSportCard">
        <div
          class="itemCARD border-[3px] w-[500px] h-[400px] border-[#F9B53D] rounded-[25px] p-[55px] flex items-center justify-between"
          :style="hoverStyle[0]"
          @mouseenter="onMouseEnter(0)"
          @mouseleave="onMouseLeave(0)"
        >
          <div>
            <h1 class="text-[43px] font-bold">Спорт</h1>
            <p class="pt-[8px] text-[20px]" v-for="sport in sports">
              {{ sport.name }}
            </p>
          </div>
          <img
            class="w-[200px]"
            src="../assets/free-icon-sport-3229786.png"
            alt=""
          />
        </div>
      </router-link>
      <router-link to="/CircleArtCard">
        <div
          class="itemCARD border-[3px] w-[500px] h-[400px] border-[#F88FA4] rounded-[25px] p-[55px] flex items-center justify-between"
          :style="hoverStyle[1]"
          @mouseenter="onMouseEnter(1)"
          @mouseleave="onMouseLeave(1)"
        >
          <div>
            <h1 class="text-[43px] font-bold">Өнер</h1>
            <p class="pt-[8px] text-[20px]" v-for="art in atrs">
              {{ art.name }}
            </p>
          </div>
          <img
            class="w-[200px]"
            src="../assets/free-icon-emotional-3655695.png"
            alt=""
          />
        </div>
      </router-link>
      <router-link to="/CircleItCard">
        <div
          class="itemCARD border-[3px] w-[500px] h-[400px] border-[#72C2E9] rounded-[25px] p-[55px] flex items-center justify-between"
          :style="hoverStyle[2]"
          @mouseenter="onMouseEnter(2)"
          @mouseleave="onMouseLeave(2)"
        >
          <div>
            <h1 class="text-[25px] font-bold">Информатика</h1>
            <p class="pt-[8px] text-[20px]" v-for="item in it">
              {{ item.name }}
            </p>
          </div>
          <img
            class="w-[200px]"
            src="../assets/free-icon-computer-science-5044590.png"
            alt=""
          />
        </div>
      </router-link>

      <router-link to="/CircleScienceCard">
        <div
          class="itemCARD border-[3px] w-[500px] h-[400px] border-[#9BE69D] rounded-[25px] p-[55px] flex items-center justify-between"
          :style="hoverStyle[3]"
          @mouseenter="onMouseEnter(3)"
          @mouseleave="onMouseLeave(3)"
        >
          <div>
            <h1 class="text-[43px] font-bold">Ғылым</h1>
            <p class="pt-[8px] text-[20px]" v-for="item in science">
              {{ item.name }}
            </p>
          </div>
          <img
            class="w-[200px]"
            src="../assets/free-icon-natural-5332623.png"
            alt=""
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import TeachersCard from "../components/TeachersCard.vue";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
export default {
  name: "NewsComponent",
  data() {
    return {
      sports: [],
      atrs: [],
      it: [],
      science: [],
      hoverStyle: ["", "", "", ""],
    };
  },
  methods: {
    onMouseEnter(index) {
      const gradientColors = [
        "#FFC371, #FF5F6D",
        "#FFB7D5, #FF628D",
        "#98E2F9, #25B7E9",
        "#A9F0A9, #52CC52",
      ];
      this.hoverStyle[
        index
      ] = `background-image: linear-gradient(to bottom right, ${gradientColors[index]});`;
    },
    onMouseLeave(index) {
      this.hoverStyle[index] = "";
    },
  },
  async mounted() {
    // Получение данных новостей из Firestore
    const querySnapshot = await getDocs(collection(db, "sport"));
    // Заполнение массива новостей
    querySnapshot.forEach((doc) => {
      const sportItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.sports.push(sportItem);
    });

    const querySnapshot2 = await getDocs(collection(db, "science"));
    // Заполнение массива новостей
    querySnapshot2.forEach((doc) => {
      const sportItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.science.push(sportItem);
    });

    const querySnapshot3 = await getDocs(collection(db, "IT"));
    // Заполнение массива новостей
    querySnapshot3.forEach((doc) => {
      const sportItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.it.push(sportItem);
    });

    const querySnapshot4 = await getDocs(collection(db, "art"));
    // Заполнение массива новостей
    querySnapshot4.forEach((doc) => {
      const sportItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.atrs.push(sportItem);
    });
  },
};
</script>
<style>
h1 {
  font-family: "Merriweather", serif;
}
.itemCARD {
  cursor: pointer;
  transition: background-image 8s ease;
}
</style>
