<template>
  <div>
    <h1>todos os cursos</h1>

    <table v-if='!!course.courses'>
      <th>
        <td>id</td>
        <td>id</td>
        <td>id</td>
        <td>del</td>
      </th>
      <tr v-for='course in course.courses' :key='course.id'>
        <td>{{course.id}}</td>
        <td>{{course.question}}</td>
        <td>{{course.language}}</td>
        <td><button @click='()=>remove(course.id)'>remove</button></td>
      </tr>
    </table>

    <br />
    <br />
    <br />
    <p>curso</p>
    {{ course.courses }}
  </div>
</template>

<script>
import { useCourseStore } from '@/stores/course';
import { mapActions } from 'pinia';
import { ref } from 'vue';

export default {
  setup() {
    const formRef = ref({ answers: [] });
    const answerRef = ref(null);
    const course = useCourseStore();

    return { formRef, answerRef, course };
  },
  methods: {
    ...mapActions(useCourseStore, ['remove']),
  },
  computed: {},
};
</script>
