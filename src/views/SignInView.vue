<template>
  <div>
    <h1>login</h1>

    <!--  -->
    <form @submit.prevent="() => user.signIn(formRef)">
      <input type="text" placeholder="email" v-model="formRef.email" />
      <input type="password" placeholder="pass" v-model="formRef.password" />
      <button type="submit">entrar</button>
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
