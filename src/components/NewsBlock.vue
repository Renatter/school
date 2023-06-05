<template>
  <div class="h-[100vh]">
    <div class="container pt-[150px]">
      <h1 class="text-[55px]">{{ news.name }}</h1>
      <!-- Заголовок новости -->
      <hr />
      <!-- Горизонтальная линия -->
      <div class="">
        <img
          class="mt-[25px] w-[900px] rounded-[15px]"
          :src="news.image"
          alt=""
        />
        <!-- Изображение новости -->
        <hr class="mt-[15px]" />
        <!-- Горизонтальная линия -->
        <p class="text-[20px] mt-[25px]">{{ news.text }}</p>
        <!-- Текст новости -->
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebase"; // Подключение вашего модуля Firebase Firestore
import {
  collection,
  query,
  where,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore"; // Импорт функций для работы с Firestore из модуля Firebase

export default {
  data() {
    return {
      news: null, // Новость (объект), начальное значение - null
      seachName: this.$route.params.id, // Значение параметра id из маршрута (имя новости)
    };
  },
  async created() {
    const q = query(
      collection(db, "news"),
      where("name", "==", this.seachName) // Запрос к коллекции "news" с фильтром по имени новости
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.news = doc.data(); // Присваивание данных новости из Firestore объекту news
    });
  },
};
</script>

<style lang="scss" scoped></style>
