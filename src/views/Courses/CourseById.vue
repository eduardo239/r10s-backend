<template>
  <div v-if="!!course.course">
    <h6>course by id {{ $route.params.courseId }}</h6>
    <h2>{{ course.course.question }}</h2>
    <p>{{ course.course.code }}</p>
    <p>{{ course.course.language }}</p>
  </div>

  <div>
    <!-- resposta -->
    <div v-if="!!user.user">
      <form @submit.prevent="answer(formRef, answerRef)">
        <div v-if="!!course.course">
          <div v-for="answer in course.course.answers" :key="answer.id">
            <input
              type="radio"
              :id="answer.id"
              name="answer"
              v-model="answerRef"
              :value="answer.id"
            />
            <label :for="answer.id"
              >{{ answer.id }} - {{ answer.content }}</label
            >
          </div>
        </div>

        <button type="submit">salvar</button>
      </form>
    </div>
  </div>
  {{ formRef }}
  <br />
  <br />
  <br />
</template>
<script>
import { useRouter } from 'vue-router';
import { useCourseStore } from '@/stores/course';
import { mapActions } from 'pinia';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';

export default {
  setup() {
    const route = useRouter();
    const formRef = ref();
    const answerRef = ref();
    const course = useCourseStore();
    const user = useUserStore();
    return { route, course, user, formRef, answerRef };
  },
  methods: {
    ...mapActions(useCourseStore, ['courseById']),
    ...mapActions(useUserStore, ['answer']),
  },
  computed: {},
  mounted() {},
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        if (this.$route.params.courseId) {
          this.course.getCourseById(this.$route.params.courseId);
          this.formRef = { course: this.course.course };
        }
      },
      { immediate: true }
    );
  },
};
</script>
