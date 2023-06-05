<template>
  <div>
    <div class="container pt-[150px] h-[100vh]">
      <div class="flex">
        <img
          class="rounded-[25px] max-h-[350px]"
          :src="teachers.image"
          alt=""
        />
        <!-- Изображение учителя -->
        <div class="InfoTeacher ml-[35px]">
          <p class="pt-[25px] text-[45px] font-bold">{{ teachers.name }}</p>
          <!-- Имя учителя -->
          <p class="pt-[15px]">{{ teachers.post }}</p>
          <!-- Должность учителя -->

          <p class="text-[45px] font-bold">Білім деңгейі</p>
          <!-- Заголовок уровня образования -->
          <p class="pt-[15px]">{{ teachers.educationLevel }}</p>
          <!-- Уровень образования учителя -->
          <p class="pt-[25px] text-[45px] font-bold">Оқытылатын пәндер</p>
          <!-- Заголовок преподаваемых предметов -->
          <p class="pt-[15px]">{{ teachers.subject }}</p>
          <!-- Преподаваемые предметы учителя -->
          <p class="pt-[25px] text-[45px] font-bold">Кәсіби жетістіктер</p>
          <!-- Заголовок профессиональных достижений -->
          <p class="pt-[15px]">{{ teachers.professionalAchievements }}</p>
          <!-- Профессиональные достижения учителя -->
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
      teachers: null, // Информация об учителе
      seachName: this.$route.params.id, // Получение имени учителя из параметров маршрута
    };
  },
  async created() {
    const q = query(
      collection(db, "teachers"),
      where("name", "==", this.seachName)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.teachers = doc.data();
    });
  },
};
</script>

<style lang="scss" scoped></style>
