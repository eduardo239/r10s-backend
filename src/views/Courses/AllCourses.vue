<template>
  <div>
    <h1>cursos</h1>

    <div v-for="(course, i) in course.courses" :key="i">
      {{ course }}
      <router-link :to="`/course/${i}`">
        <button>ver mais</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { useCourseStore } from '@/stores/course';
import { ref } from 'vue';

export default {
  setup() {
    const formRef = ref({});
    const course = useCourseStore();

    return { formRef, course };
  },
  computed: {},
};
</script>
