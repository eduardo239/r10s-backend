<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider bordered content-style="padding: 24px;">
        <n-space vertical>
          <router-link class="main-menu__button" to="/">
            <n-button text type="primary"> Profile </n-button>
          </router-link>

          <router-link class="main-menu__button" to="/">
            <n-button text type="primary"> Challenges </n-button>
          </router-link>

          <router-link class="main-menu__button" to="/">
            <n-button text type="primary"> Edit </n-button>
          </router-link>

          <router-link
            v-if="user.loggedIn"
            class="main-menu__button-exit"
            to="/"
          >
            <n-button text type="primary" @click="logOutFirebase">
              Exit
            </n-button>
          </router-link>
        </n-space>
      </n-layout-sider>
      <n-layout-content content-style="padding: 12px;">
        <n-page-header subtitle="Statistics">
          <n-grid :cols="2">
            <n-gi>
              <n-statistic
                label="User Completed Challenges"
                :value="user.userTotalChallenges"
              />
            </n-gi>
            <n-gi>
              <n-statistic
                label="Total R.10.S Challenges"
                :value="totalChallenges"
              />
            </n-gi>
            <n-gi>
              <n-statistic
                label="Total Correct Challenges"
                :value="totalChallenges"
              />
            </n-gi>
            <n-gi>
              <n-statistic
                label="Challenges completed"
                :value="
                  ((user.userTotalChallenges / totalChallenges) * 100).toFixed(
                    3
                  ) + '%'
                "
              />
            </n-gi>
            <n-gi>
              <n-statistic label="Percentage" :value="1" />
            </n-gi>
          </n-grid>
        </n-page-header>
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { defineComponent, ref } from 'vue';
import {
  NLayout,
  NLayoutSider,
  NButton,
  NLayoutContent,
  NPageHeader,
  NGrid,
  NGi,
  NSpace,
} from 'naive-ui';
import { mapActions, mapState } from 'pinia';

export default defineComponent({
  components: {
    NLayout,
    NLayoutSider,
    NButton,
    NLayoutContent,
    NPageHeader,
    NGrid,
    NGi,
    NSpace,
  },
  setup() {
    const formRef = ref({});
    const course = useCourseStore();
    const user = useUserStore();

    return { user, course, formRef };
  },
  methods: {
    ...mapActions(useUserStore, ['getChallengesByUID', 'logOutFirebase']),
  },
  computed: {
    ...mapState(useCourseStore, ['totalChallenges']),
  },
  mounted() {
    this.course.getChallengesMDB();
  },
  created() {
    this.$watch(
      () => this.user.loggedIn,
      () => {
        if (this.user.loggedIn) {
          this.user.getChallengesByUID(this.user.user.uid);
        }
      },
      { immediate: true }
    );
  },
});
</script>
