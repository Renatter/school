<template>
  <div class="">
    <nav class="border-gray-200 fixed w-full z-10 bg-[#F5F5F3] border-b-2">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Flowbite</span
          >
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="text-black font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <router-link
                to="/Home"
                class="font-bold block text-black py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-blue-500"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/schedule"
                href="#"
                class="font-bold block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                >Кесте</router-link
              >
            </li>
            <li>
              <router-link
                to="/Maps"
                href="#"
                class="font-bold block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                >Карта</router-link
              >
            </li>
            <li>
              <router-link
                to="/Circle"
                class="font-bold block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                >Үйірме</router-link
              >
            </li>
            <li>
              <router-link
                to="/Classs"
                href="#"
                class="font-bold block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                >Біздің сыныптар</router-link
              >
            </li>
            <li>
              <router-link
                to="/Book"
                href="#"
                class="font-bold block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                >Кітаптар</router-link
              >
            </li>
            <li>
              <router-link
                v-if="isAuthenticated"
                to="/Admin"
                class="font-bold block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                >Admin
              </router-link>
              <router-link
                v-else
                to="/Reg"
                class="font-bold block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                >Войти
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
export default {
  data() {
    return {
      isAuthenticated: false,
      itemsLength: null,
    };
  },
  methods: {
    logout() {
      auth.signOut();
      this.$router.push("/");
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        const docRef = doc(db, "users", user.uid);
        onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.itemsLength = docSnap.data().cart.length;
            console.log(this.itemsLength);
          } else {
            console.log("No such document!");
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
