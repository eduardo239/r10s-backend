<!-- <template>
  <div>
    <h1>registrar</h1>
 
    <form @submit.prevent="signUp(formRef)">
      <input type="text" placeholder="name" v-model="formRef.name" />
      <input type="text" placeholder="email" v-model="formRef.email" />
      <input type="password" placeholder="pass" v-model="formRef.password" />
      <button type="submit">registrar</button>
    </form>
  </div>
</template> -->

<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-h2>login</n-h2>
      <n-space justify="center">
        <n-form
          class="form-container"
          ref="formRef"
          :model="model"
          size="medium"
          label-placement="top"
        >
          <n-grid x-gap="12" :cols="1">
            <n-form-item-gi label="Nome" path="name">
              <n-input v-model:value="model.name" placeholder="Input" />
            </n-form-item-gi>

            <n-form-item-gi label="Email" path="email">
              <n-input v-model:value="model.email" placeholder="Input" />
            </n-form-item-gi>

            <n-form-item-gi label="Senha" path="password">
              <n-input v-model:value="model.password" placeholder="Input" />
            </n-form-item-gi>

            <n-form-item-gi label="Confirmar Senha" path="password2">
              <n-input v-model:value="model.password2" placeholder="Input" />
            </n-form-item-gi>

            <n-gi>
              <n-button type="primary" @click="signUp(model)">
                Registrar
              </n-button>
            </n-gi>
          </n-grid>
        </n-form>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script>
import { ref } from 'vue';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { NForm, NButton, NH2, NGi, NGrid, NSpace } from 'naive-ui';

export default {
  components: { NForm, NButton, NH2, NGi, NGrid, NSpace },
  setup() {
    const formRef = ref({ answers: [] });
    const user = useUserStore();

    return {
      user,
      formRef,
      model: ref({
        name: '1',
        email: '1@2.com',
        password: '1',
        password2: '1',
      }),
    };
  },
  methods: {
    ...mapActions(useUserStore, ['signUp']),
  },
  computed: {},
};
</script>
