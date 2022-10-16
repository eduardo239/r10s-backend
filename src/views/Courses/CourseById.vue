<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text style="padding: 1rem 1rem 0">
          <n-text>Test</n-text>
        </n-h2>
      </n-space>

      <n-space style="padding: 2rem" align="start" justify="center" vertical>
        <n-space v-if="course.course" style="margin: 0">
          <n-h3>
            <n-text type="success"
              >#{{ course.course.id }} {{ course.course.question }}</n-text
            >
          </n-h3>
        </n-space>

        <n-space v-if="course.course">
          <n-code
            class="code"
            :code="course.course.code"
            :language="course.course.language"
          />
        </n-space>

        <n-space
          v-if="course.course"
          justify="center"
          style="
            padding: 2rem;
            margin: 2rem 0;
            width: 2rem;
            background-color: red;
          "
        >
          <n-h1 style="margin-bottom: 0">
            <n-text type="error">{{ timer }}</n-text>
          </n-h1>
        </n-space>

        <n-form
          class="form-container"
          ref="formRef"
          :model="model"
          size="medium"
          label-placement="top"
        >
          <n-space v-if="course.course">
            <n-radio-group
              :disabled="!isPlaying"
              class="alternatives"
              v-if="!!course.course"
              v-model:value="model.userAnswer"
              name="userAnswer"
            >
              <n-radio
                v-for="(course, i) in course.course.answers"
                :key="i"
                :value="course"
                :label="course"
              />
            </n-radio-group>
          </n-space>

          <n-space>
            <n-button
              @click="save"
              type="success"
              size="large"
              :disabled="disableSaveButton"
              >Salvar</n-button
            >
          </n-space>
        </n-form>

        <n-space style="margin-top: 2rem" justify="center" v-if="!!error">
          <alert-message :message="error" type="warning"></alert-message>
        </n-space>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import AlertMessage from '@/components/ui/AlertMessage';
import {
  NGrid,
  NGi,
  NText,
  NCode,
  NSpace,
  NForm,
  NRadioGroup,
  NRadio,
  NH2,
  NH3,
} from 'naive-ui';

export default defineComponent({
  components: {
    AlertMessage,
    NGrid,
    NGi,
    NText,
    NCode,
    NSpace,
    NForm,
    NRadioGroup,
    NRadio,
    NH2,
    NH3,
  },
  setup() {
    const route = useRouter();
    const timer = ref(10);
    const error = ref('');
    const difficulty = ref(3);
    const disableSaveButton = ref();
    const isPlaying = ref(true);
    const answerRef = ref();
    const course = useCourseStore();
    const user = useUserStore();
    return {
      route,
      error,
      course,
      user,
      answerRef,
      disableSaveButton,
      timer,
      difficulty,
      isPlaying,
      model: ref({
        userAnswer: null,
      }),
    };
  },
  methods: {
    ...mapActions(useCourseStore, ['courseById']),
    ...mapActions(useUserStore, ['answer']),
    countDowntimer() {
      if (this.timer > 0 && this.isPlaying) {
        setTimeout(() => {
          this.timer--;
          this.countDowntimer();
        }, 1000);
      } else {
        this.disableSaveButton = true;
      }
    },
    save() {
      this.error = '';
      if (this.model.userAnswer) {
        this.disableSaveButton = true;
        this.isPlaying = false;
        // salvar a resposta do usuario
        const uid = this.user.getUser.uid;
        const cid = this.$route.params.courseId;
        const correct = this.course.course.correct === this.model.userAnswer;
        const answer = this.model.userAnswer;
        const timeLeft = this.timer;
        const difficulty = this.difficulty;
        const points = timeLeft * difficulty;
        const data = {
          uid,
          cid,
          correct,
          answer,
          time: timeLeft,
          difficulty,
          points,
        };
        this.user.postNewAnswer(data);
        return;
      } else {
        this.error = 'Please select an alternative';
      }
    },
  },
  computed: {},
  mounted() {},
  created() {
    this.$watch(
      () => this.$route.params.courseId,
      () => {
        if (this.$route.params.courseId) {
          this.course.getChallengeByIdMDB(this.$route.params.courseId);
        }
      },
      { immediate: true }
    );

    // timer
    this.countDowntimer();
  },
});
</script>
