<template>
  <div class="bg-white">
    <div class="container h-[100vh] pt-[115px]">
      <div class="flex justify-between">
        <h1 class="text-[45px] text-[#386BA0] font-bold">
          Информатика үйірмесі
        </h1>
        <p class="w-[500px]">
          Мектеп оқушылардың жан-жақты дамуына ерекше көңіл бөледі. Сондықтан
          оқу орны аясында "Информатика үйірмесі" ашылды, онда балалар озық
          техникамен жақынырақ таныса алады, сондай-ақ өздерінің қолданбалы және
          шығармашылық қабілеттерін дамыта алады. Сонымен қатар, мұндай
          бірлестіктердегі сабақтар студенттердің қызығушылығы мен мақсаттылығын
          оятады.
        </p>
      </div>
      <hr class="border-[#386BA0] mt-[25px]" />
      <div class="flex flex-wrap gap-4 pt-[35px]">
        <div v-for="item in its" :key="item.id">
          <div
            class="circleCard border-[2px] border-[#386BA0] rounded-[35px] w-[578px] h-full p-[25px]"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-[35px] text-[#386BA0] font-bold">
                {{ item.name }}
              </h2>
              <p>
                Жас <span class="text-[35px] font-bold">{{ item.age }}</span>
              </p>
            </div>
            <hr class="border-[#386BA0] mt-[25px]" />
            <p class="font-bold">Мұғалім:</p>
            <p>{{ item.teacher }}</p>
            <hr class="border-[#386BA0] mt-[25px]" />
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
      its: [],
    };
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "IT"));
    // Заполнение массива новостей
    querySnapshot.forEach((doc) => {
      const ITItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.its.push(ITItem);
    });
  },
};
</script>

<style lang="scss" scoped>
span {
  font-family: "Russo One", sans-serif;
}
.circleCard:hover {
  background-color: #e5f2ff;
}
</style>
