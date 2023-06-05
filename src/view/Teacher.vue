<template>
  <div class="container h-full pb-[55px]">
    <h1 class="text-[30px] text-[#4F4849] font-black pt-[50px]">Мұғалімдер</h1>

    <!-- Заголовок "Мұғалімдер" -->
    <TeachersCard :teachers="teachers" />
    <!-- Компонент TeachersCard с передачей массива учителей -->
  </div>
</template>

<script>
import TeachersCard from "../components/TeachersCard.vue"; // Импорт компонента TeachersCard
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  setDoc,
  doc,
} from "firebase/firestore"; // Импорт функций для работы с Firestore из модуля Firebase
import { db } from "../firebase/firebase"; // Подключение вашего модуля Firebase Firestore

export default {
  components: {
    TeachersCard,
  },
  data() {
    return {
      teachers: [], // Массив учителей
    };
  },
  async mounted() {
    // Получение данных учителей из Firestore
    const querySnapshot = await getDocs(collection(db, "teachers"));

    // Заполнение массива учителей
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
