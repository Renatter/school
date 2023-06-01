<template>
  <div class="bg-white">
    <div class="container pt-[85px]">
      <h1 class="text-[45px] font-bold">Кiтаптар жинағы</h1>
      <div>
        <ul
          :key="index"
          class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"
        >
          <li v-for="(classItem, index) in books" class="mr-2">
            <a
              href="#"
              class="inline-block px-4 py-3 text-white bg-[#A69781] rounded-lg active"
              aria-current="page"
              @click="showBooks(index)"
              >{{ classItem.name }}</a
            >
          </li>
        </ul>
      </div>
      <div v-if="selectedClass !== null">
        <h2>Сынып: {{ books[selectedClass].name }}</h2>
        <div class="flex flex-wrap gap-[15px] justify-between font-bold">
          <div
            class="border-[3px] w-[350px] border-[#A69781] bg-[#F5F5F3] p-[15px] rounded-[15px]"
            v-for="book in books[selectedClass].books"
            :key="book.id"
          >
            <img class="w-[250px]" :src="book.img" alt="Кітап сүресі" />
            <h3>Кітап атауы: {{ book.bookName }}</h3>
            <p>Автор: {{ book.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  name: "NewsComponent",
  methods: {
    showBooks(index) {
      this.selectedClass = index;
    },
  },
  data() {
    return {
      selectedClass: null,
      books: [],
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "books"));

    querySnapshot.forEach((doc) => {
      const booksItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.books.push(booksItem);
    });
  },
};
</script>
