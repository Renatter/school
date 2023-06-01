vb
<template>
  <div class="pt-[55px] h-screen">
    <!-- Форма для добавления новой новости -->
    <a
      role="button"
      @click="showAdd = !showAdd"
      href="#"
      class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
      >Үйірме қосу</a
    >
    <form
      v-if="showAdd"
      @submit.prevent="addNews"
      class="flex flex-col items-center justify-center"
    >
      <label class="mt-[15px]">
        Үйірме атауы:
        <div>
          <input
            type="text"
            v-model="newNews.name"
            required
            class="w-[325px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </label>
      <label class="mt-[15px]">
        Сурет:
        <div>
          <input
            type="text"
            v-model="newNews.img"
            required
            class="w-[325px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </label>
      <label class="mt-[15px]">
        Жас:
        <div>
          <input
            type="text"
            v-model="newNews.age"
            required
            class="w-[325px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </label>
      <label class="mt-[15px]">
        Мұғалім:
        <div>
          <input
            type="text"
            v-model="newNews.teacher"
            required
            class="w-[325px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </label>
      <label class="mt-[15px]">
        Ақпарат:
        <div>
          <textarea
            v-model="newNews.info"
            required
            class="block p-2.5 w-[325px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
      </label>
      <button
        type="submit"
        class="mt-[25px] focus:outline-none text-white bg-[#4ade80] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        қосу
      </button>
    </form>

    <div v-if="showAdd == false" class="flex pt-[50px] flex-wrap">
      <div
        v-for="newsItem in news"
        :key="newsItem.id"
        class="w-60 cursor-pointer p-2 bg-[#EFEDEB] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ml-[25px] mt-[15px] border-[2px] border-[#A69781]"
      >
        <!-- Image -->
        <img class="h-40 object-cover rounded-xl" :src="newsItem.img" alt="" />
        <div class="p-2">
          <!-- Heading -->
          <h2 class="font-bold text-lg mb-2">{{ newsItem.name }}</h2>
          <p><span class="font-bold">Жас</span> {{ newsItem.age }}</p>
          <p><span class="font-bold">Мұғалім</span>: {{ newsItem.teacher }}</p>
          <!-- Description -->
          <p class="text-sm text-gray-600">
            {{ newsItem.info.substring(0, 20) + "..." }}
          </p>
        </div>
        <!-- CTA -->
        <div class="">
          <router-link
            to="/CircleArtCard"
            role="button"
            href="#"
            class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >Толығырақ</router-link
          >
          <a
            @click="deleteNews(newsItem.id)"
            role="button"
            href="#"
            class="text-white bg-[#dc2626] ml-[15px] px-3 py-1 rounded-md hover:bg-[#991b1b]"
            >Жою</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase"; // Подключение вашего модуля Firebase Firestore

export default {
  name: "NewsComponent",
  data() {
    return {
      news: [],
      showAdd: false,
      newNews: {
        name: "",
        img: "",
        age: "",
        teacher: "",
        info: "",
      },
    };
  },
  async mounted() {
    await this.subscribeToNews();
  },
  methods: {
    subscribeToNews() {
      const newsRef = collection(db, "art");

      onSnapshot(newsRef, (snapshot) => {
        this.news = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    async deleteNews(newsId) {
      // Удаление новости из Firestore
      try {
        const docRef = doc(collection(db, "art"), newsId);
        await deleteDoc(docRef);
        console.log("Новость успешно удалена:", newsId);
        await this.subscribeToNews(); // Обновление массива новостей
      } catch (error) {
        console.error("Ошибка при удалении новости:", error);
      }
    },
    async addNews() {
      // Добавление новости в Firestore
      try {
        const docRef = await addDoc(collection(db, "art"), this.newNews);
        console.log("Новость успешно добавлена:", docRef.id);
        this.newNews = {
          // Сброс полей формы
          name: "",
          img: "",
          age: "",
          teacher: "",
          info: "",
        };
        this.showAdd = false;
        await this.subscribeToNews(); // Обновление массива новостей
      } catch (error) {
        console.error("Ошибка при добавлении новости:", error);
      }
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
