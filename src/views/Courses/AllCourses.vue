<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text type="success" style="padding: 1rem 1rem 0">
          <n-text type="success">Todos os Desafios</n-text>
        </n-h2>
      </n-space>
      <n-space justify="center">
        <n-list hoverable v-for="course in course.allCourses" :key="course._id">
          <course-item :course="course"></course-item>
        </n-list>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script>
import CourseItem from '@/components/card/CourseItem';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { NList, NH2, NText, NSpace, NGi, NGrid } from 'naive-ui';

export default defineComponent({
  components: { CourseItem, NList, NH2, NText, NSpace, NGi, NGrid },
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
    this.course.getChallengesMDB();
    this.course.resetCourse();
  },
});
</script>
