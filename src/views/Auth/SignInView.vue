<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center" style="margin-bottom: 3rem">
        <n-space vertical>
          <n-h2 class="text-center"> Sign in to R10S </n-h2>
          <n-form
            class="form-container"
            ref="formRef"
            :model="model"
            size="medium"
            label-placement="top"
          >
            <n-grid x-gap="12" :cols="1">
              <n-form-item-gi label="Email" path="email">
                <n-input v-model:value="model.email" placeholder="Input" />
              </n-form-item-gi>

              <n-form-item-gi label="Senha" path="password">
                <n-input v-model:value="model.password" type="password" />
              </n-form-item-gi>

              <n-gi>
                <n-button
                  :disabled="user.loading"
                  :loading="user.loading"
                  type="primary"
                  block
                  secondary
                  strong
                  @click="signInFirebase(model)"
                >
                  Login
                </n-button>
              </n-gi>
            </n-grid>
          </n-form>
        </n-space>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { NForm, NH2, NButton, NGi, NGrid, NSpace } from 'naive-ui';

export default defineComponent({
  components: {
    NForm,
    NH2,
    NButton,
    NGi,
    NGrid,
    NSpace,
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
    ...mapActions(useUserStore, ['signInFirebase']),
  },

  computed: {},
});
</script>
