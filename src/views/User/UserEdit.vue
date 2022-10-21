<template>
  <n-space vertical>
    {{ user.user.email }}
    {{ user.user.uid }}

    <n-card>
      <n-form ref="formRef" :model="model" size="medium" label-placement="top">
        <n-grid x-gap="12" :cols="1">
          <n-form-item-gi label="Upload Avatar" path="avatar">
            <upload-image></upload-image>
          </n-form-item-gi>

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
              @click="updateUserFirebase(model)"
            >
              Registrar
            </n-button>
          </n-gi>
        </n-grid>
      </n-form>
    </n-card>
  </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { NForm, NButton, NGi, NGrid, NSpace } from 'naive-ui';
import UploadImage from '@/components/ui/UploadImage';

export default defineComponent({
  components: { UploadImage, NForm, NButton, NGi, NGrid, NSpace },
  setup() {
    const formRef = ref({ answers: [] });
    const user = useUserStore();

    return {
      user,
      formRef,
      model: ref({
        name: '',
        email: '',
        password: '',
        password2: '',
      }),
    };
  },
  methods: {
    ...mapActions(useUserStore, ['updateUserFirebase']),
  },
  computed: {},
  mounted() {},
});
</script>
<style></style>
