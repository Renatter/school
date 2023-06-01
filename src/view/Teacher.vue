<template>
  <div class="container h-full pb-[55px]">
    <h1 class="text-[30px] text-[#4F4849] font-black pt-[50px]">Мұғалімдер</h1>

    <TeachersCard :teachers="teachers" />
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
  components: {
    TeachersCard,
  },
  data() {
    return {
      teachers: [], // Массив новостей
    };
  },
  async mounted() {
    // Получение данных новостей из Firestore
    const querySnapshot = await getDocs(collection(db, "teachers"));

    // Заполнение массива новостей
    querySnapshot.forEach((doc) => {
      const teachersItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.teachers.push(teachersItem);
    });
  },
};
</script>

<style lang="scss" scoped></style>
