<template>
  <div>
    <h1 class="text-[30px] text-[#4F4849] font-black pt-[50px]">Жаңалықтар</h1>

    <!-- Заголовок "Жаңалықтар" -->
    <NewsCard :news="news" />
    <!-- Компонент NewsCard, отображающий новостные карточки на основе массива новостей -->
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"; // Импорт функций для работы с Firestore из модуля Firebase
import { auth, db } from "../firebase/firebase"; // Подключение вашего модуля Firebase Firestore
import NewsCard from "../components/NewsCard.vue"; // Импорт компонента NewsCard

export default {
  name: "NewsComponent",
  components: {
    NewsCard,
  },
  data() {
    return {
      news: [], // Массив новостей
    };
  },
  async mounted() {
    // Получение данных новостей из Firestore
    const querySnapshot = await getDocs(collection(db, "news"));

    // Заполнение массива новостей
    querySnapshot.forEach((doc) => {
      const newsItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.news.push(newsItem);
    });
  },
};
</script>

<style lang="scss" scoped></style>
