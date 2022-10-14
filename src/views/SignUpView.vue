<template>
  <div>
    <h1>registrar</h1>
    <!--  -->
    <form @submit.prevent="signUp(formRef)">
      <input type="text" placeholder="name" v-model="formRef.name" />
      <input type="text" placeholder="email" v-model="formRef.email" />
      <input type="password" placeholder="pass" v-model="formRef.password" />
      <button type="submit">registrar</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { mapActions } from 'pinia';
import { ref } from 'vue';

export default {
  setup() {
    const formRef = ref({ answers: [] });
    const user = useUserStore();

    return { user, formRef };
  },
  methods: {
    ...mapActions(useUserStore, ['signUp']),
  },
  computed: {},
};
</script>
