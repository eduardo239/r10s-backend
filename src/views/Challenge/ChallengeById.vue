<template>
  <n-space vertical>
    <n-card title="Challenge" v-if="course.course">
      <!-- header -->
      <challenge-header
        :id="course.course._id"
        :question="course.course.question"
        :difficulty="course.course.difficulty"
        :timer="timer"
      ></challenge-header>
      <!-- code -->
      <challenge-code
        :language="course.course.language"
        :code="course.course.code"
      ></challenge-code>
      <!-- form -->
      <challenge-form
        @save-form.once="save2"
        :alternatives="course.course.answers"
      >
      </challenge-form>
    </n-card>

    <!-- not found -->
    <n-card title="Challenge not found!" v-else></n-card>
  </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/challenges';
import ChallengeHeader from '@/components/ui/ChallengeHeader';
import ChallengeCode from '@/components/ui/ChallengeCode';
import ChallengeForm from '@/components/ui/ChallengeForm';
import { NSpace, NCard } from 'naive-ui';
// TODO: remover timer e options

export default defineComponent({
  components: {
    ChallengeForm,
    ChallengeHeader,
    ChallengeCode,
    NSpace,
    NCard,
  },
  setup() {
    const user = useUserStore();
    const course = useCourseStore();

    const timer = ref(1000);
    const error = ref('');
    const difficulty = ref(3);
    const isPlaying = ref(true);
    const answerRef = ref();
    const title = ref('');

    return {
      title,
      error,
      course,
      user,
      answerRef,
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
        }, 10);
      } else if (this.timer <= 0) {
        this.disableSaveButton = true;
        this.isPlaying = false;
        alert('Game Over!');
        return;
      } else {
        this.disableSaveButton = true;
        this.isPlaying = false;
      }
      // TODO: encerrar desafio por falta de tempo
    },

    save2(x) {
      this.error = '';
      // constoi o model
      this.isPlaying = false;
      if (this.user) {
        const uid = this.user.getUser.uid;
        const cid = this.$route.params.challengeId;
        const correct = x.alternative === this.course.course.correct;
        const answer = x.alternative;
        const difficulty = this.course.course.difficulty || 1;
        const time = this.timer;
        const points = correct ? time * difficulty : 0;
        const data = { uid, cid, correct, answer, points, difficulty, time };

        this.user.postNewAnswer(data);
      }
    },
  },
  computed: {},
  mounted() {
    this.countDowntimer();
  },
  unmounted() {
    this.disableSaveButton = true;
    this.isPlaying = false;
  },
  created() {
    this.$watch(
      () => this.$route.params?.challengeId,
      () => {
        if (this.$route.params.challengeId) {
          const cid = this.$route.params.challengeId;
          this.course.getChallengeByIdMDB(cid);
        }
      },
      { immediate: true }
    );
  },
});
</script>
