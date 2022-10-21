<template>
  <n-form ref="formRef" :model="model" size="medium" label-placement="top">
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
          size="large"
          class="radio-item"
        />
      </n-radio-group>
    </n-space>

    <challenge-options :save="save" :disabled="disabled"></challenge-options>
  </n-form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import ChallengeOptions from '@/components/ui/ChallengeOptions';

import { NSpace, NForm, NRadioGroup, NRadio } from 'naive-ui';

export default defineComponent({
  props: ['id'],
  components: {
    ChallengeOptions,
    NSpace,
    NForm,
    NRadioGroup,
    NRadio,
  },
  setup() {
    const course = useCourseStore();
    const user = useUserStore();

    const timer = ref(10);
    const difficulty = ref(3);
    const disabled = ref(false);
    const isPlaying = ref(true);
    const answerRef = ref();
    const title = ref('');
    const changeTitle = (newTitle) => {
      console.log('fire');
      title.value = newTitle;
    };

    return {
      title,
      timer,
      difficulty,
      changeTitle,
      course,
      user,
      answerRef,
      disabled,
      isPlaying,
      model: ref({
        userAnswer: null,
      }),
    };
  },
  methods: {
    ...mapActions(useCourseStore, ['courseById']),
    ...mapActions(useUserStore, ['answer']),

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
  unmounted() {
    this.disableSaveButton = true;
    this.isPlaying = false;
  },
  created() {
    // FIXME:
    this.$watch(
      () => this.id,
      () => {
        if (this.id) {
          this.course.getChallengeByIdMDB(this.id);
        }
      },
      { immediate: true }
    );
  },
});
</script>
<style></style>
