<template>
  <div class="h-[100vh] container">
    <!-- Кнопка для отображения формы добавления нового учителя -->
    <a
      role="button"
      @click="showAdd = !showAdd"
      href="#"
      class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
      >Мұғалім қосу</a
    >

    <!-- Форма добавления нового учителя -->
    <form
      v-if="showAdd"
      @submit.prevent="addNews"
      class="flex flex-col items-center justify-center"
    >
      <!-- Поле ввода имени учителя -->
      <label class="mt-[15px]">
        Мұғалім қосу
        <div>
          <input
            v-model="newTeacher.name"
            type="text"
            required
            class="w-[325px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </label>

      <!-- Поле ввода ссылки на изображение -->
      <label class="mt-[15px]">
        Сурет:
        <div>
          <input
            v-model="newTeacher.image"
            type="text"
            required
            class="w-[325px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </label>

      <!-- Поле ввода уровня образования -->
      <label class="mt-[15px]">
        Білім деңгейі:
        <div>
          <input
            v-model="newTeacher.educationLevel"
            type="text"
            required
            class="w-[325px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </label>

      <!-- Поле ввода предмета преподавания -->
      <label class="mt-[15px]">
        Оқытылатын пән:
        <div>
          <input
            v-model="newTeacher.subject"
            type="text"
            required
            class="w-[325px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </label>

      <!-- Поле ввода профессиональных достижений -->
      <label class="mt-[15px]">
        Кәсіби жетістіктер
        <div>
          <textarea
            v-model="newTeacher.professionalAchievements"
            required
            class="block p-2.5 w-[325px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
      </label>

      <!-- Кнопка отправки формы -->
      <button
        type="submit"
        class="mt-[25px] focus:outline-none text-white bg-[#4ade80] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        қосу
      </button>
    </form>

    <!-- Отображение списка учителей -->
    <div v-if="showAdd == false" class="flex flex-wrap justify-between">
      <div
        v-for="newsItem in teachers"
        :key="newsItem.id"
        class="w-60 cursor-pointer p-2 bg-[#EFEDEB] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ml-[25px] mt-[15px] border-[2px] border-[#A69781]"
      >
        <!-- Изображение -->
        <img
          class="h-40 object-cover rounded-xl"
          :src="newsItem.image"
          alt=""
        />

        <div class="p-2">
          <!-- Заголовок -->
          <h2 class="font-bold text-lg mb-2">{{ newsItem.name }}</h2>
          <!-- Описание -->
          <p class="text-sm text-gray-600">{{ newsItem.subject }}</p>
        </div>

        <!-- Действия -->
        <div class="">
          <router-link
            :to="{ path: '/TeacherBlock/' + newsItem.name }"
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
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      showAdd: false, // Флаг для отображения/скрытия формы добавления нового учителя
      teachers: [], // Массив с информацией об учителях
      newTeacher: {
        name: "", // Имя учителя
        subject: "", // Относится к какому предмету
        image: "", // Ссылка на изображение учителя
        professionalAchievements: "", // Профессиональные достижения учителя
        achive: "", // (Поле лишнее и не используется)
      },
    };
  },
  async mounted() {
    await this.fetchTeachers(); // Загрузка информации об учителях при инициализации компонента
  },
  methods: {
    async fetchTeachers() {
      try {
        const newsRef = collection(db, "teachers"); // Получение ссылки на коллекцию "teachers" из Firebase Firestore

        onSnapshot(newsRef, (snapshot) => {
          // Подписка на изменения в коллекции "teachers"
          this.teachers = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        });
      } catch (error) {
        console.error("Ошибка при получении учителей из Firestore:", error);
      }
    },
    async addNews() {
      // Добавление новости в Firestore
      try {
        const docRef = await addDoc(
          collection(db, "teachers"),
          this.newTeacher
        );
        console.log("Новость успешно добавлена:", docRef.id);
        (this.newTeacher = {
          name: "",
          subject: "",
          image: "",
          professionalAchievements: "",
          achive: "",
        }),
          (this.showAdd = false);
        await this.fetchTeachers(); // Обновление массива новостей
      } catch (error) {
        console.error("Ошибка при добавлении новости:", error);
      }
    },
    async deleteNews(newsId) {
      // Удаление новости из Firestore
      try {
        const docRef = doc(collection(db, "teachers"), newsId);
        await deleteDoc(docRef);
        console.log("Новость успешно удалена:", newsId);
        await this.fetchTeachers(); // Обновление массива новостей
      } catch (error) {
        console.error("Ошибка при удалении новости:", error);
      }
    },
  },
};
</script>
