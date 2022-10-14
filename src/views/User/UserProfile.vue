<template>
  <div>
    <h1>perfil</h1>
    <p>Total de cursos: {{ user.totalUserAnswers }}</p>
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
  methods: {},
  computed: {},
};
</script>
