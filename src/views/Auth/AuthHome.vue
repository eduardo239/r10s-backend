<template>
  <n-space vertical>
    <n-layout>
      <n-card>
        <n-tabs
          class="card-tabs"
          default-value="signin"
          size="large"
          animated
          type="line"
        >
          <n-tab-pane name="signin" tab="Sign in">
            <sign-in></sign-in>
          </n-tab-pane>

          <n-tab-pane name="signup" tab="Sign up">
            <sign-up></sign-up>
          </n-tab-pane>
        </n-tabs>

        <alert-message
          :error="user.error"
          :message="user.error"
          type="warning"
        ></alert-message>
      </n-card>
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/user';
import { NTabs, NCard, NTabPane, NLayout, NSpace } from 'naive-ui';
import { useRouter } from 'vue-router';
import AlertMessage from '@/components/ui/AlertMessage';

import SignIn from '@/views/Auth/SignInView.vue';
import SignUp from '@/views/Auth/SignUpView.vue';

export default defineComponent({
  components: {
    AlertMessage,
    SignIn,
    SignUp,
    NTabs,
    NCard,
    NTabPane,
    NLayout,
    NSpace,
  },
  setup() {
    const formRef = ref(null);
    const user = useUserStore();
    const router = useRouter();

    return {
      router,
      user,
      formRef,
      model: ref({
        email: '1@2.com',
        password: '123123',
      }),
    };
  },
  methods: {
    // remover sign depois
    ...mapActions(useUserStore, ['signIn', 'signInFirebase']),
  },
  computed: {
    ...mapState(useUserStore, ['isUserLoggedIn']),
  },
  mounted() {
    this.user.resetError();
  },
  watch: {
    isUserLoggedIn(newValue) {
      if (newValue) this.router.push('/');
    },
  },
});
</script>
