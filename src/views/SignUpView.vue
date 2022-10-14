<template>
  <div>
    <h1>registrar</h1>
    <!--  -->
    <form @submit.prevent="() => user.signUp(formRef)">
      <input type="text" placeholder="name" v-model="formRef.name" />
      <input type="text" placeholder="email" v-model="formRef.email" />
      <input type="password" placeholder="pass" v-model="formRef.password" />
      <input type="password" placeholder="pass2" v-model="formRef.password2" />
      <button type="submit">registrar</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

export default {
  setup() {
    const formRef = ref({});
    const user = useUserStore();
    return { user, formRef };
  },
  computed: {},
};
</script>
