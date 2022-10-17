<template>
  <n-space class="main-menu" justify="center">
    <router-link class="main-menu__button" to="/">
      <n-button text type="primary"> Home </n-button>
    </router-link>

    <router-link class="main-menu__button" :to="`/courses`">
      <n-button text type="primary"> Courses</n-button>
    </router-link>

    <router-link
      class="main-menu__button"
      v-if="user.loggedIn"
      :to="`/profile`"
    >
      <n-button text type="primary"> Profile </n-button>
    </router-link>

    <router-link class="main-menu__button" v-if="!user.loggedIn" :to="`/auth`">
      <n-button text type="primary"> Sign In </n-button>
    </router-link>

    <router-link v-if="user.loggedIn" class="main-menu__button-exit" to="/">
      <n-button text type="primary" @click="logOutFirebase"> Exit </n-button>
    </router-link>

    <router-link
      v-if="user.loggedIn"
      class="main-menu__button"
      :to="`/admin/all`"
    >
      <n-button text type="error"> Admin </n-button>
    </router-link>
  </n-space>
</template>

<script>
import { NButton, NSpace } from 'naive-ui';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { defineComponent } from 'vue';

export default defineComponent({
  component: { NButton, NSpace },
  setup() {
    const user = useUserStore();

    return { user };
  },
  methods: {
    ...mapActions(useUserStore, ['logOutFirebase']),
  },
});
</script>
<style></style>
