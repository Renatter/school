<template>
  <div class="bg-white">
    <div class="container h-[100vh] pt-[115px]">
      <div class="flex justify-between">
        <h1 class="text-[45px] text-[#63D363] font-bold">Ғылым үйірмесі</h1>
        <p class="w-[500px]">
          Ғылым-бұл зерттеу арқылы әлемді танудың тәсілі. Біздің балалар табиғи
          түрде жас зерттеушілер. Біз баланың айналасындағы әлемді зерттеуге
          деген табиғианиеыласын қолдаймыз және оның ғылыми әлеуетін ашуға
          көмектесеміз.
        </p>
      </div>
      <hr class="border-[#63D363] mt-[25px]" />
      <div class="flex flex-wrap gap-4 pt-[35px]">
        <div v-for="item in sciences" :key="item.id">
          <div
            class="circleCard border-[2px] border-[#63D363] rounded-[35px] w-[578px] h-full p-[25px]"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-[35px] text-[#63D363] font-bold">
                {{ item.name }}
              </h2>
              <p>
                Жас <span class="text-[35px] font-bold">{{ item.age }}</span>
              </p>
            </div>
            <hr class="border-[#63D363] mt-[25px]" />
            <p class="font-bold">Мұғалім:</p>
            <p>{{ item.teacher }}</p>
            <hr class="border-[#63D363] mt-[25px]" />
            <img
              class="rounded-[25px] w-[550px] h-[350px] mt-[15px]"
              :src="item.img"
              :alt="item.name"
            />
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
      sciences: [],
    };
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "science"));
    // Заполнение массива новостей
    querySnapshot.forEach((doc) => {
      const scienceItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.sciences.push(scienceItem);
    });
  },
};
</script>

<style lang="scss" scoped>
span {
  font-family: "Russo One", sans-serif;
}
.circleCard:hover {
  background-color: #e5fde5;
}
</style>
