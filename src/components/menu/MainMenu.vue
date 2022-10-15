<template>
  <nav>
    <router-link to="/">
      <n-button type="primary"> Home </n-button>
    </router-link>

    <router-link :to="`/courses`">
      <n-button type="primary"> Courses</n-button>
    </router-link>

    <router-link v-if="user.loggedIn" :to="`/profile`">
      <n-button type="primary"> Profile </n-button>
    </router-link>

    <router-link v-if="!user.loggedIn" :to="`/sign-in`">
      <n-button type="primary"> Sign In </n-button>
    </router-link>

    <router-link v-if="!user.loggedIn" :to="`/sign-up`">
      <n-button type="primary"> Sign Up </n-button>
    </router-link>

    <n-button v-if="user.loggedIn" type="secondary" @click="logOutFirebase">
      Exit
    </n-button>
  </nav>
</template>

<script>
import { NButton } from 'naive-ui';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {
  component: { NButton },
  setup() {
    const user = useUserStore();

    return { user };
  },
  methods: {
    ...mapActions(useUserStore, ['logOutFirebase']),
  },
};
</script>
<style></style>
