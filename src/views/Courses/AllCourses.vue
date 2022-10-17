<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
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
    </n-gi>
  </n-grid>
</template>

<script>
import CourseItem from '@/components/card/CourseItem';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { NList, NCard, NSpace, NSpin, NGi, NGrid } from 'naive-ui';

export default defineComponent({
  components: { CourseItem, NList, NCard, NSpace, NSpin, NGi, NGrid },
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
