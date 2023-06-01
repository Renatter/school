<template>
  <div>
    <div class="container pt-[150px] h-[100vh]">
      <div class="flex">
        <img
          class="rounded-[25px] max-h-[350px]"
          :src="teachers.image"
          alt=""
        />
        <div class="InfoTeacher ml-[35px]">
          <p class="pt-[25px] text-[45px] font-bold">{{ teachers.name }}</p>
          <p class="pt-[15px]">{{ teachers.post }}</p>

          <p class="text-[45px] font-bold">Білім деңгейі</p>
          <p class="pt-[15px]">{{ teachers.educationLevel }}</p>
          <p class="pt-[25px] text-[45px] font-bold">Оқытылатын пәндер</p>
          <p class="pt-[15px]">{{ teachers.subject }}</p>
          <p class="pt-[25px] text-[45px] font-bold">Кәсіби жетістіктер</p>
          <p class="pt-[15px]">{{ teachers.professionalAchievements }}</p>
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
      teachers: null,
      seachName: this.$route.params.id,
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
