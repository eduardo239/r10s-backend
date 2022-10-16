<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text style="padding: 1rem 1rem 0">
          <n-text>Test</n-text>
        </n-h2>
      </n-space>
      <n-space v-if="course.course" style="margin: 0; padding: 0 1rem">
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

      <n-space v-if="course.course" justify="center">
        <n-h1>
          <n-text type="error">{{ timer }}</n-text>
        </n-h1>
      </n-space>

      <n-space v-if="course.course">
        <n-radio-group
          :disabled="!isPlaying"
          class="alternatives"
          v-if="!!course.course"
          v-model:value="answerRef"
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
        <n-button @click="save" type="success" :disabled="disableSaveButton"
          >Salvar</n-button
        >
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
import {
  NGrid,
  NGi,
  NText,
  NCode,
  NSpace,
  NRadioGroup,
  NRadio,
  NH2,
  NH3,
} from 'naive-ui';

export default defineComponent({
  components: {
    NGrid,
    NGi,
    NText,
    NCode,
    NSpace,
    NRadioGroup,
    NRadio,
    NH2,
    NH3,
  },
  setup() {
    const route = useRouter();
    const timer = ref(10);
    const disableSaveButton = ref();
    const isPlaying = ref(true);
    const answerRef = ref();
    const course = useCourseStore();
    const user = useUserStore();
    return {
      route,
      course,
      user,
      answerRef,
      disableSaveButton,
      timer,
      isPlaying,
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
      console.log('saved');
      this.disableSaveButton = true;
      this.isPlaying = false;
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
