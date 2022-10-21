<template>
  <n-space vertical>
    <n-layout>
      <n-card
        v-if="course.course"
        :title="`Challenge ${
          !!user.userChallengeAlreadyFinished
            ? '#DONE: This challenge has already been accomplished'
            : ''
        }`"
      >
        <challenge-header
          :id="course.course._id.toUpperCase()"
          :language="course.course.language"
          :question="course.course.question"
          :difficulty="course.course.difficulty"
        ></challenge-header>

        <challenge-code
          :language="course.course.language"
          :code="course.course.code"
        />

        <challenge-timer :timer="timer"></challenge-timer>

        <challenge-form :id="course.course.id"></challenge-form>

        <!-- TODO: erros -->
        <!-- <alert-message
          :error="error"
          :message="error"
          type="warning"
        ></alert-message> -->
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
import ChallengeHeader from '@/components/ui/ChallengeHeader';
import ChallengeTimer from '@/components/ui/ChallengeTimer';
import ChallengeCode from '@/components/ui/ChallengeCode';
import ChallengeForm from '@/components/ui/ChallengeForm';
// import AlertMessage from '@/components/ui/AlertMessage';
import { NSpace, NLayout, NCard } from 'naive-ui';

export default defineComponent({
  components: {
    // AlertMessage,
    ChallengeForm,
    ChallengeHeader,
    ChallengeTimer,
    ChallengeCode,
    NSpace,
    NLayout,
    NCard,
  },
  setup() {
    const route = useRouter();
    const timer = ref(10);
    const error = ref('');
    const difficulty = ref(3);
    const disabled = ref(false);
    const isPlaying = ref(true);
    const answerRef = ref();
    const course = useCourseStore();
    const user = useUserStore();
    const title = ref('');
    const changeTitle = (newTitle) => {
      console.log('fire');
      title.value = newTitle;
    };

    return {
      title,
      changeTitle,
      route,
      error,
      course,
      user,
      answerRef,
      disabled,
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

    checkCompletedChallenge() {
      //verifica se o usuario ja fez este teste
      if (this.user && this.user.user) {
        const uid = this.user.user.uid;
        const cid = this.$route.params.courseId;
        if ((uid, cid)) {
          this.user.getChallengesByUIDAndCID(uid, cid);
        }
      }
    },
    countDowntimer() {
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
      // TODO: encerrar desafio por falta de tempo
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
    this.checkCompletedChallenge();

    this.countDowntimer();
  },
});
</script>
