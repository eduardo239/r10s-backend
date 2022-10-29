<template>
  <n-space class="main-menu" justify="space-between" align="center">
    <n-space>
      <router-link to="/">
        <img
          :src="handleLogoColor"
          class="logo"
          alt="challenge your knowledge"
        />
      </router-link>
    </n-space>
    <n-space>
      <router-link to="/">
        <n-button text type="primary"> HOME </n-button>
      </router-link>

      <router-link :to="`/challenges`">
        <n-button text type="primary"> CHALLENGES </n-button>
      </router-link>

      <router-link v-if="!user.loggedIn" :to="`/auth`">
        <n-button text type="primary"> AUTH </n-button>
      </router-link>

      <router-link v-if="user.loggedIn" :to="`/admin/all`">
        <n-button text type="error"> ADMIN </n-button>
      </router-link>
    </n-space>
    <!--  -->
    <n-space>
      <router-link v-if="user.loggedIn" :to="`/profile/${user.user.uid}`">
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
import { useUiStore } from '@/stores/ui';
import { defineComponent } from 'vue';
import R10SLogoC from '@/assets/logo/png/logo-no-background_c.png';
import R10SLogoB from '@/assets/logo/png/logo-no-background_b.png';
import R10SLogoW from '@/assets/logo/png/logo-no-background_w.png';

export default defineComponent({
  component: { NButton, NAvatar, NText, NH1, NSpace },
  setup() {
    const user = useUserStore();
    const ui = useUiStore();

    return { user, ui, R10SLogoC, R10SLogoB, R10SLogoW };
  },
  methods: {
    ...mapActions(useUserStore, ['logOutFirebase']),
  },
  computed: {
    handleLogoColor() {
      return this.ui.userTheme.name === 'light' ? R10SLogoB : R10SLogoC;
    },
  },
});
</script>
<style></style>
