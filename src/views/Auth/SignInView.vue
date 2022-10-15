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
            <n-form-item-gi label="Email" path="email">
              <n-input v-model:value="model.email" placeholder="Input" />
            </n-form-item-gi>

            <n-form-item-gi label="Senha" path="password">
              <n-input v-model:value="model.password" placeholder="Input" />
            </n-form-item-gi>

            <n-gi>
              <n-button type="primary" @click="signInFirebase(model)">
                Entrar
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
};
</script>

<!--   
  <n-grid x-gap='12' cols='1'>
    <n-gi>
      <n-space justify='center'>
        
      </n-space>
    </n-gi>
  </n-grid>
 -->
