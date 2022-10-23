<template>
  <n-space class="main-menu" justify="space-between" align="center">
    <n-space>
      <router-link to="/">
        <img :src="R10SLogo" class="logo" alt="challenge your knowledge" />
      </router-link>
    </n-space>
    <n-space>
      <router-link class="main-menu__button" to="/">
        <n-button text type="primary"> Home </n-button>
      </router-link>

      <router-link class="main-menu__button" :to="`/challenges`">
        <n-button text type="primary"> Challenges </n-button>
      </router-link>

      <router-link
        class="main-menu__button"
        v-if="!user.loggedIn"
        :to="`/auth`"
      >
        <n-button text type="primary"> Sign In </n-button>
      </router-link>

      <router-link
        v-if="user.loggedIn"
        class="main-menu__button"
        :to="`/admin/all`"
      >
        <n-button text type="error"> Admin </n-button>
      </router-link>
    </n-space>
    <!--  -->
    <n-space>
      <router-link
        class="main-menu__button"
        v-if="user.loggedIn"
        :to="`/profile/${user.user.uid}`"
      >
        <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </router-link>
    </n-space>
  </n-space>
</template>

<script>
import { NButton, NAvatar, NText, NH1, NSpace } from 'naive-ui';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { defineComponent } from 'vue';
import R10SLogo from '@/assets/logo/png/logo-no-background.png';

export default defineComponent({
  component: { NButton, NAvatar, NText, NH1, NSpace },
  setup() {
    const user = useUserStore();

    return { user, R10SLogo };
  },
  methods: {
    ...mapActions(useUserStore, ['logOutFirebase']),
  },
});
</script>
<style></style>
