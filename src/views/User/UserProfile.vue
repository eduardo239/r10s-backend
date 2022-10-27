<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        v-if="user.loggedIn"
        bordered
        content-style="padding: 24px;"
      >
        <n-space vertical>
          <n-list bordered>
            <n-list-item>{{ getUser.email }}</n-list-item>
          </n-list>
          <router-link :to="`/profile/${user.user.uid}`">
            <n-button strong secondary block type="success"> Profile </n-button>
          </router-link>

          <router-link to="/profile/edit">
            <n-button strong secondary block type="success"> Edit </n-button>
          </router-link>

          <router-link v-if="user.loggedIn" to="/">
            <n-button
              strong
              secondary
              block
              type="error"
              @click="logOutFirebase"
            >
              Exit
            </n-button>
          </router-link>
        </n-space>
      </n-layout-sider>
      <n-layout-content>
        <router-view></router-view>
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
  NSpace,
  NList,
  NListItem,
} from 'naive-ui';
import { mapActions, mapState } from 'pinia';

export default defineComponent({
  components: {
    NLayout,
    NLayoutSider,
    NButton,
    NLayoutContent,
    NSpace,
    NList,
    NListItem,
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
    ...mapState(useUserStore, ['getUser']),
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
