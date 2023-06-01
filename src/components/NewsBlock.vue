<template>
  <div class="h-[100vh]">
    <div class="container pt-[150px]">
      <h1 class="text-[55px]">{{ news.name }}</h1>
      <hr />
      <div class="">
        <img
          class="mt-[25px] w-[900px] rounded-[15px]"
          :src="news.image"
          alt=""
        />
        <hr class="mt-[15px]" />
        <p class="text-[20px] mt-[25px]">{{ news.text }}</p>
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
      news: null,
      seachName: this.$route.params.id,
    };
  },
  async created() {
    const q = query(
      collection(db, "news"),
      where("name", "==", this.seachName)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.news = doc.data();
    });
  },
};
</script>

<style lang="scss" scoped></style>
