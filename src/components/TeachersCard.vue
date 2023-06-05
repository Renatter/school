<template>
  <div class="flex items-center justify-center">
    <div
      class="mt-[20px] mb-[20px] bg-white font-semibold text-center rounded-3xl border-[2px] border-purple-600 shadow-lg p-10 max-w-[250px] h-[300px]"
    >
      <img
        class="mb-3 w-[110px] h-[110px] rounded-full first-letter:rounded-full shadow-lg mx-auto"
        src="https://mihschool-1.gosuslugi.ru/netcat_files/8/168/grigor.jpg"
        alt="product designer"
      />
      <!-- Изображение директора -->
      <h1 class="text-lg text-[#4F4849]">Аманов Ермахан</h1>
      <!-- Имя директора -->
      <h3 class="text-sm text-[#FCB33D]">Директор</h3>
      <!-- Должность директора -->
      <p class="text-[15px] text-purple-600 mt-4">Информатика</p>
      <!-- Предмет директора -->
    </div>
  </div>

  <div class="flex items-center justify-center flex-wrap gap-[30px]">
    <div v-for="teacher in teachers">
      <div
        class="mt-[20px] bg-white font-semibold text-center rounded-3xl border-[2px] border-[#FCB43F] shadow-lg p-10 max-w-[250px] h-[330px]"
      >
        <img
          class="mb-3 w-[110px] h-[110px] rounded-full first-letter:rounded-full shadow-lg mx-auto"
          :src="teacher.image"
          alt="product designer"
        />
        <!-- Изображение учителя -->
        <h1 class="text-lg text-[#4F4849]">{{ teacher.name }}</h1>
        <!-- Имя учителя -->
        <h3 class="text-sm text-[#FCB33D]">{{ teacher.post }}</h3>
        <!-- Должность учителя -->
        <p class="text-[15px] text-purple-600 mt-4">{{ teacher.subject }}</p>
        <!-- Предмет учителя -->
        <router-link :to="{ path: '/TeacherBlock/' + teacher.name }">
          <!-- Переход на страницу учителя при клике на ссылку -->
          <button
            class="bg-[#FCB43F] px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
          >
            Толығырақ
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["teachers"],
};
</script>

<style lang="scss" scoped></style>
