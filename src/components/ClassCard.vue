<template>
  <div>
    <div class="container pt-[155px] h-full pb-[35px]">
      <div>
        <div>
          <h1 class="clas text-[55px]">Сынып {{ classs.number }}</h1>
        </div>

        <div class="flex items-end justify-between">
          <div>
            <p class="text-[25px] mb-[65px]">Cынып жетекші</p>
            <div
              class="w-[230px] border-[3px] p-[15px] h-[300px] rounded-[20px] border-[#A69781]"
            >
              <img class="rounded-[25px]" :src="classs.teacherImg" />

              <p class="text-[20px] mt-[25px] font-bold">
                {{ classs.teacher }}
              </p>
            </div>
          </div>
          <div>
            <p class="mb-[15px] text-[22px]">Сынып фотосы</p>
            <img
              class="w-[560px] rounded-[25px]"
              :src="classs.classImg"
              alt=""
            />
          </div>
        </div>
        <h1 class="text-[55px] font-bold py-[25px]">Оқушылар</h1>
        <div class="flex flex-wrap gap-[48px]">
          <div
            v-for="student in classs.students"
            class="border-[#A69781] rounded-[15px] border w-[200px] h-[150px] p-[25px]"
          >
            <p>{{ student.id }}</p>
            <p>{{ student.firstName }}</p>
            <p>{{ student.lastName }}</p>
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
      classs: "", // Переменная для хранения данных о классе
      classNumber: this.$route.params.id, // Значение параметра id из маршрута
    };
  },
  async created() {
    const q = query(
      collection(db, "classes"),
      where("teacher", "==", this.classNumber)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.classs = doc.data(); // Присваиваем данные класса переменной classs
    });
  },
};
</script>

<style lang="scss" scoped>
.clas {
  font-family: "Russo One", sans-serif;
}
</style>
