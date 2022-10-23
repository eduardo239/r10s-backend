<template>
  <n-space vertical>
    <n-layout>
      <n-card v-if="course && getChallenge" :title="course.question">
        <n-h2>
          <n-text type="warning">{{ getChallenge.question }} </n-text>
        </n-h2>
        <n-space vertical>
          <n-list>
            <n-list-item
              ><n-p> Difficulty: {{ getChallenge.difficulty }} </n-p>
            </n-list-item>
            <n-list-item
              ><n-p> Language: {{ getChallenge.language }} </n-p>
            </n-list-item>
            <n-list-item
              ><n-p> ID: {{ getChallenge._id }} </n-p>
            </n-list-item>
            <n-list-item
              ><n-p> Updated: {{ getChallenge.updated_at }} </n-p>
            </n-list-item>

            <n-p> Finished: {{ user.alreadyFinished }} </n-p>
          </n-list>
        </n-space>

        <n-space vertical style="margin-top: 2rem">
          <n-button-group>
            <router-link :to="`/challenges`">
              <n-button>back</n-button>
            </router-link>
            <n-button
              @click="() => goToChallenge()"
              type="success"
              :disabled="user.alreadyFinished"
            >
              {{
                user.alreadyFinished ? 'Challenge Already Finished' : 'Start'
              }}
            </n-button>
          </n-button-group>
        </n-space>
      </n-card>
    </n-layout>
  </n-space>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  NCard,
  NH2,
  NText,
  NListItem,
  NList,
  NP,
  NSpace,
  NLayout,
  NButtonGroup,
  NButton,
} from 'naive-ui';

export default defineComponent({
  components: {
    NCard,
    NH2,
    NText,
    NListItem,
    NList,
    NP,
    NSpace,
    NLayout,
    NButtonGroup,
    NButton,
  },
  setup() {
    const router = useRouter();
    const course = useCourseStore();
    const user = useUserStore();
    const loading = ref(true);

    return { router, loading, course, user };
  },
  watch: {},
  methods: {
    // ...mapActions(useUserStore, ['getChallengesByUIDAndCID']),
    goToChallenge() {
      this.router.push(`/challenge/${this.$route.params.challengeId}`);
    },
  },
  computed: {
    ...mapState(useCourseStore, ['getChallenge']),
    ...mapState(useUserStore, ['getUser']),
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
