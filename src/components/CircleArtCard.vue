<template>
  <!-- Компоненты и функции комментарии -->
  <div class="bg-white">
    <div class="container h-[100vh] pt-[115px]">
      <div class="flex justify-between">
        <!-- Заголовок -->
        <h1 class="text-[45px] text-[#AD3AB0] font-bold">Өнер үйірмесі</h1>
        <!-- Параграф -->
        <p class="w-[500px]">
          Өнер балаларға дайын үлгілерге емес, өз бетінше ойлауға көмектеседі.
          Өнерге ену арқылы бала стандартты емес шешімдер қабылдауға үйренеді
          және эмоционалды интеллектті дамытады.
        </p>
      </div>
      <hr class="border-[#AD3AB0] mt-[25px]" />
      <div class="flex flex-wrap gap-4 pt-[35px]">
        <div v-for="item in arts" :key="item.id">
          <div
            class="circleCard border-[2px] border-[#AD3AB0] rounded-[35px] w-[578px] h-full p-[25px]"
          >
            <div class="flex items-center justify-between">
              <!-- Название элемента -->
              <h2 class="text-[35px] text-[#AD3AB0] font-bold">
                {{ item.name }}
              </h2>
              <!-- Возраст -->
              <p>
                Жас <span class="text-[35px] font-bold">{{ item.age }}</span>
              </p>
            </div>
            <hr class="border-[#AD3AB0] mt-[25px]" />
            <!-- Метка "Мұғалім" -->
            <p class="font-bold">Мұғалім:</p>
            <!-- Имя учителя -->
            <p>{{ item.teacher }}</p>
            <hr class="border-[#AD3AB0] mt-[25px]" />
            <!-- Изображение -->
            <img
              class="rounded-[25px] w-[550px] h-[350px] mt-[15px]"
              :src="item.img"
              :alt="item.name"
            />
            <!-- Информация -->
            <p class="mt-[20px]">{{ item.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebase";
import {
  collection,
  query,
  where,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

export default {
  data() {
    return {
      arts: [],
    };
  },
  async created() {
    // Получение данных из коллекции "art"
    const querySnapshot = await getDocs(collection(db, "art"));
    // Заполнение массива arts данными
    querySnapshot.forEach((doc) => {
      const artItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.arts.push(artItem);
    });
  },
};
</script>

<style lang="scss" scoped>
span {
  font-family: "Russo One", sans-serif;
}
.circleCard:hover {
  background-color: #fee5ff;
}
</style>
