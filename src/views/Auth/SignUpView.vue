<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center" style="margin-bottom: 3rem">
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

            <n-gi>
              <n-button
                type="primary"
                block
                secondary
                strong
                @click="signUpFirebase(model)"
              >
                Registrar
              </n-button>
            </n-gi>
          </n-grid>
        </n-form>
      </n-space>

      <n-space style="margin-top: 2rem" justify="center" v-if="!!user.error">
        <alert-message :message="user.error" type="warning"></alert-message>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { NForm, NButton, NGi, NGrid, NSpace } from 'naive-ui';
import AlertMessage from '@/components/ui/AlertMessage';

export default defineComponent({
  components: { AlertMessage, NForm, NButton, NGi, NGrid, NSpace },
  setup() {
    const formRef = ref({ answers: [] });
    const user = useUserStore();

    return {
      user,
      formRef,
      model: ref({
        name: 'nome',
        email: '1@2.com',
        password: '123123',
        password2: '123123',
      }),
    };
  },
  methods: {
    // remover signUp depois
    ...mapActions(useUserStore, ['signUp', 'signUpFirebase']),
  },
  computed: {},
});
</script>
