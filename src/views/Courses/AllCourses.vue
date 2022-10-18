<template>
  <n-space vertical align="center">
    <n-layout>
      <n-card title="All Challenges">
        <n-space justify="center" v-if="course.allCourses.length !== 0">
          <n-list
            hoverable
            v-for="course in course.allCourses"
            :key="course._id"
          >
            <course-item :course="course"></course-item>
          </n-list>
        </n-space>
        <n-space justify="center" v-if="course.allCourses.length === 0">
          <n-spin size="large" />
        </n-space>
      </n-card>
    </n-layout>

    <n-pagination
      style="margin-top: 1rem"
      v-model:page="page"
      :page-count="100"
    />
  </n-space>
</template>

<script>
import CourseItem from '@/components/card/CourseItem';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { NList, NCard, NPagination, NSpace, NSpin, NLayout } from 'naive-ui';

export default defineComponent({
  components: { CourseItem, NList, NCard, NPagination, NSpace, NSpin, NLayout },
  setup() {
    const formRef = ref({});
    const course = useCourseStore();
    const user = useUserStore();
    const page = ref(2);

    return { formRef, course, user, page };
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
