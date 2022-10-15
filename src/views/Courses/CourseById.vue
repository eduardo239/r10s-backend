<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center" v-if="!!course.course">
        <n-h2 align-text type="success" style="padding: 1rem 1rem 0">
          <n-text type="success">{{ course.course.question }}</n-text>
        </n-h2>
      </n-space>
    </n-gi>
  </n-grid>
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
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { NGrid, NGi, NText, NSpace, NH2 } from 'naive-ui';

export default defineComponent({
  components: { NGrid, NGi, NText, NSpace, NH2 },
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
});
</script>
