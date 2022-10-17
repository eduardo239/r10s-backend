<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <title-center type="success" title="Login or Register"></title-center>

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
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { NTabs, NCard, NTabPane, NGi, NGrid } from 'naive-ui';

import TitleCenter from '@/components/ui/TitleCenter';
import SignIn from '@/views/Auth/SignInView.vue';
import SignUp from '@/views/Auth/SignUpView.vue';

export default defineComponent({
  components: {
    TitleCenter,
    SignIn,
    SignUp,
    NTabs,
    NCard,
    NTabPane,
    NGi,
    NGrid,
  },
  setup() {
    const formRef = ref(null);
    const user = useUserStore();
    return {
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
  computed: {},
});
</script>

<!--   
  <n-grid x-gap='12' cols='1'>
    <n-gi>
      <n-space justify='center'>
        
      </n-space>
    </n-gi>
  </n-grid>
 -->
