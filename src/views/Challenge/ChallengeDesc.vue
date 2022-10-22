<template>
  <n-space vertical>
    <n-layout>
      <n-card v-if="course && getChallenge" :title="course.question">
        <n-h1> {{ getChallenge.question }} </n-h1>
        <n-space vertical>
          <n-p> Difficulty: {{ getChallenge.difficulty }} </n-p>
          <n-p> Language: {{ getChallenge.language }} </n-p>
          <n-p> ID: {{ getChallenge._id }} </n-p>
          <n-p> Updated: {{ getChallenge.updated_at }} </n-p>
          <n-p> Finished: {{ user.userChallengeAlreadyFinished }} </n-p>
        </n-space>
      </n-card>

      <br />
      <n-button-group>
        <router-link :to="`/challenges`">
          <n-button>back</n-button>
        </router-link>
        <router-link
          v-if="user.loggedIn && !user.userChallengeAlreadyFinished"
          :to="`/challenge/${this.$route.params.challengeId}`"
        >
          <n-button type="success">Start</n-button>
        </router-link>
      </n-button-group>
    </n-layout>
  </n-space>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { defineComponent, ref } from 'vue';
import {
  NCard,
  NH1,
  NP,
  NSpace,
  NLayout,
  NButtonGroup,
  NButton,
} from 'naive-ui';

export default defineComponent({
  components: { NCard, NH1, NP, NSpace, NLayout, NButtonGroup, NButton },
  setup() {
    const course = useCourseStore();
    const user = useUserStore();
    const loading = ref(true);

    return { loading, course, user };
  },
  watch: {},
  methods: {
    // ...mapActions(useUserStore, ['getChallengesByUIDAndCID']),
  },
  computed: {
    ...mapState(useCourseStore, ['getChallenge']),
  },
  created() {
    this.$watch(
      () => this.user?.user,
      () => {
        // '5a3HYRFgFsUZXlZW6PxiAwAnEDL2'
        if (
          this.$route.params.challengeId &&
          this.user !== null &&
          this.user.user !== null &&
          this.loading
        ) {
          const uid = this.user.user.uid;
          const cid = this.$route.params.challengeId;

          this.user.getChallengesByUIDAndCID(uid, cid);
          this.course.getChallengeByIdMDB(cid);

          this.loading = false;
        }
      },
      { immediate: true }
    );
  },
  mounted() {},
});
</script>
