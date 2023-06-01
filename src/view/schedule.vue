<template>
  <div class="container pt-[150px] h-[100vh]">
    <div>
      <button
        id="dropdownDelayButton"
        @click="toggleDropdown"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Сыныпты таңдаңыз
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <!-- Dropdown menu -->
      <div
        id="dropdownDelay"
        :class="{ hidden: !showDropdown }"
        class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDelayButton"
        >
          <li>
            <a
              href="#"
              @click="selectMenuItem(1)"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >1б</a
            >
          </li>
          <li>
            <a
              href="#"
              @click="selectMenuItem(2)"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >2в</a
            >
          </li>
          <li>
            <a
              href="#"
              @click="selectMenuItem(7)"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >7a</a
            >
          </li>
          <li>
            <a
              href="#"
              @click="selectMenuItem(11)"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >11д</a
            >
          </li>
        </ul>
      </div>
    </div>

    <Table v-if="classS == 1" :schedule="schedule" />

    <Table v-if="classS == 2" :schedule="schedule2b" />
    <Table v-if="classS == 7" :schedule="schedule7a" />
    <Table v-if="classS == 11" :schedule="schedule11d" />
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Table from "../components/Table.vue";
export default {
  components: {
    Table,
  },
  data() {
    return {
      schedule: [],
      schedule2b: [],
      schedule7a: [],
      schedule11d: [],
      showDropdown: false,
      classS: 1,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectMenuItem(item) {
      this.showDropdown = false;
      this.classS = item; // Закрываем выпадающий список при выборе пункта меню
    },
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "schedule"));
    querySnapshot.forEach((doc) => {
      const scheduleItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.schedule.push(scheduleItem);
    });

    const querySnapshot1 = await getDocs(collection(db, "schedule2b"));
    querySnapshot.forEach((doc) => {
      const scheduleItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.schedule2b.push(scheduleItem);
    });

    const querySnapshot2 = await getDocs(collection(db, "schedule7a"));
    querySnapshot.forEach((doc) => {
      const scheduleItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.schedule7a.push(scheduleItem);
    });

    const querySnapshot3 = await getDocs(collection(db, "schedule11d"));
    querySnapshot.forEach((doc) => {
      const scheduleItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.schedule11d.push(scheduleItem);
    });
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

td > div {
  margin-bottom: 10px;
}
</style>
