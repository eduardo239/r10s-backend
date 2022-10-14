<template>
  <div>
    <h1>cursos</h1>

    <div
      style="border: 1px dashed #aaa; margin-bottom: 1rem"
      v-for="course in course.allCourses"
      :key="course.id"
    >
      <h3>{{ course.question }}</h3>
      <p>
        <small>{{ course.language }}</small>
      </p>
      <p>
        <code>{{ course.code }}</code>
      </p>
      <br />
      <router-link :to="`/course/${course.id}`">ver mais</router-link>
    </div>
  </div>

  <br />
  <br />
  <br />
  <p>
    {{ course.allCourses }}
  </p>
</template>
<script>
import { useCourseStore } from '@/stores/course';
import { useUserStore } from '@/stores/user';
import { mapActions } from 'pinia';
import { ref } from 'vue';

export default {
  setup() {
    const formRef = ref({});
    const course = useCourseStore();
    const user = useUserStore();

    return { formRef, course, user };
  },
  methods: {
    ...mapActions(useCourseStore, ['allCourses']),
  },
  computed: {},
  mounted() {
    this.course.getCourses();
  },
};
</script>
