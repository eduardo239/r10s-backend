<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center" style="margin-bottom: 3rem">
        <n-space vertical>
          <n-h2 class="text-center"> Start your free r10s account </n-h2>
          <n-form
            class="form-container"
            ref="formRef"
            :model="model"
            size="medium"
            label-placement="top"
          >
            <n-grid x-gap="12" :cols="1">
              <n-form-item-gi label="Nome" path="name">
                <n-input
                  v-model:value="model.name"
                  placeholder="Input"
                  type="text"
                />
              </n-form-item-gi>

              <n-form-item-gi label="Email" path="email">
                <n-input
                  v-model:value="model.email"
                  placeholder="Input"
                  type="text"
                />
              </n-form-item-gi>

              <n-form-item-gi label="Senha" path="password">
                <n-input v-model:value="model.password" type="password" />
              </n-form-item-gi>

              <n-form-item-gi label="Confirmar Senha" path="password2">
                <n-input v-model:value="model.password2" type="password" />
              </n-form-item-gi>

              <n-form-item-gi>
                <n-switch
                  size="small"
                  v-model:value="model.terms"
                  style="padding: 0 1rem 0 0"
                />
                <n-text depth="3"
                  >By signing up, you confirm that you've read and accepted our
                  Terms of Service and Privacy Policy.
                </n-text>
              </n-form-item-gi>

              <n-gi>
                <n-button
                  :disabled="user.loading"
                  :loading="user.loading"
                  type="primary"
                  block
                  secondary
                  strong
                  @click="signUpFirebase(model)"
                >
                  Register
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
import {
  NForm,
  NButton,
  NGi,
  NGrid,
  NSpace,
  NText,
  NSwitch,
  NH2,
} from 'naive-ui';

export default defineComponent({
  components: { NForm, NButton, NGi, NGrid, NSpace, NText, NSwitch, NH2 },
  setup() {
    const formRef = ref({ answers: [] });
    const user = useUserStore();

    return {
      user,
      formRef,
      model: ref({
        name: 'aaa',
        email: 'a@a.com',
        password: '123123',
        password2: '123123',
        terms: false,
      }),
    };
  },
  methods: {
    ...mapActions(useUserStore, ['signUpFirebase']),
  },
  computed: {},
});
</script>
