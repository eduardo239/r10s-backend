<template>
  <n-space vertical>
    <n-layout>
      <n-card v-if="course.course" title="Challenge">
        <n-text depth="3" class="challenge__id"
          >ID # {{ this.$route.params.courseId }}</n-text
        >

        <n-space style="padding: 2rem" align="start" justify="center" vertical>
          <n-text depth="3"
            >Programming language # {{ course.course.language }} - Difficulty #
            {{ course.course?.difficulty ?? 0 }}</n-text
          >
          <n-space v-if="course.course" style="margin: 0">
            <n-h3>
              <n-text type="success"
                >#{{ course.course.id }} {{ course.course.question }}</n-text
              >
            </n-h3>
          </n-space>

          <n-space v-if="course.course" class="code-container">
            <n-code
              class="code"
              :code="course.course.code"
              :language="course.course.language"
            />
          </n-space>

          <n-space
            style="margin-top: 2rem"
            justify="center"
            v-if="!!user.userChallengeAlreadyFinished"
          >
            <alert-message
              message="This challenge has already been accomplished"
              type="error"
            ></alert-message>
          </n-space>

          <n-space v-if="course.course" justify="center">
            <n-h1 style="margin-bottom: 0">
              <n-text type="error">{{ timer }}</n-text>
            </n-h1>
          </n-space>

          <n-form
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
      </n-card>
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import AlertMessage from '@/components/ui/AlertMessage';
import {
  NText,
  NCode,
  NSpace,
  NLayout,
  NForm,
  NRadioGroup,
  NCard,
  NRadio,
  NH3,
} from 'naive-ui';

export default defineComponent({
  components: {
    AlertMessage,

    NText,
    NCode,
    NSpace,
    NLayout,
    NForm,
    NRadioGroup,
    NCard,
    NRadio,
    NH3,
  },
  setup() {
    const route = useRouter();
    const timer = ref(10);
    const error = ref('');
    const difficulty = ref(3);
    const disableSaveButton = ref(false);
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
      //verifica se o usuario ja fez este teste
      if (this.user && this.user.user) {
        const uid = this.user.user.uid;
        const cid = this.$route.params.courseId;
        if ((uid, cid)) {
          this.user.getChallengesByUIDAndCID(uid, cid);
        }
      }

      if (
        this.timer > 0 &&
        this.isPlaying &&
        !this.user.userChallengeAlreadyFinished
      ) {
        setTimeout(() => {
          this.timer--;
          this.countDowntimer();
        }, 1000);
      } else {
        this.disableSaveButton = true;
        this.isPlaying = false;
        return;
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
        const points = correct ? timeLeft * difficulty : 0;
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
  unmounted() {
    this.disableSaveButton = true;
    this.isPlaying = false;
  },
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
