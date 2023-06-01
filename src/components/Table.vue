<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>День</th>
          <th>Урок 1</th>
          <th>Урок 2</th>
          <th>Урок 3</th>
          <th>Урок 4</th>
          <th>Урок 5</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in schedule" :key="day.day">
          <td>{{ day.day }}</td>
          <td v-for="lesson in day.lessons" :key="lesson.id">
            <div>
              <p>{{ lesson.name }}</p>
              <p>{{ lesson.startTime }} - {{ lesson.endTime }}</p>
              <p>Кабинет: {{ lesson.classroom }}</p>
              <p>Учитель: {{ lesson.teacher }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["schedule"],
};
</script>

<style lang="scss" scoped></style>
