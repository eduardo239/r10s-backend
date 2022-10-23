<template>
  <n-space vertical>
    <n-layout>
      <n-card v-if="!course.loading" title="All Challenges">
        <n-space justify="center" v-if="course.allChallenges.length > 0">
          <n-list
            hoverable
            v-for="course in course.allChallenges"
            :key="course._id"
          >
            <course-item :course="course"></course-item>
          </n-list>
        </n-space>

        <n-space v-else> Challenges not found </n-space>
      </n-card>

      <n-card v-else style="text-align: center"><n-spin size="large" /></n-card>
    </n-layout>

    <n-space justify="center" style="padding: 1rem">
      <n-pagination
        size="large"
        v-model:page="page"
        :page-count="course.challengesTotalPages"
        :prev="prev"
        :next="next"
      />
    </n-space>
  </n-space>

  <!-- http://localhost:3000/api/challenges?page=1&?limit=1 -->
</template>

<script>
import CourseItem from '@/components/card/CourseItem';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { NList, NSpin, NCard, NPagination, NSpace, NLayout } from 'naive-ui';

export default defineComponent({
  components: { CourseItem, NList, NSpin, NCard, NPagination, NSpace, NLayout },
  setup() {
    const formRef = ref({});
    const course = useCourseStore();
    const user = useUserStore();
    const page = ref(1);
    const limit = ref(10);

    return { formRef, course, user, page, limit };
  },
  methods: {
    ...mapActions(useCourseStore, []),
    next(pagination) {
      pagination._limit = this.limit;
      this.course.getAllChallengesByPageMDB(pagination);
    },
    prev(pagination) {
      pagination._limit = this.limit;
      this.course.getAllChallengesByPageMDB(pagination);
    },
  },
  computed: {},
  mounted() {
    const _pagination = { page: this.page, _limit: this.limit };
    this.course.getAllChallengesByPageMDB(_pagination);
    this.course.resetCourse();
  },
});
</script>
