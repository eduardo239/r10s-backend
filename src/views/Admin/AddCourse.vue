<template>
  <div>
    <h1>adicionar curso</h1>

    {{ formRef }}
    <form @submit.prevent="() => course.add(formRef)">
      <input type="text" placeholder="name" v-model="formRef.name" />
      <input type="text" placeholder="linguagem" v-model="formRef.language" />
      <input type="textarea" placeholder="code" v-model="formRef.code" />
      <button type="submit">adicionar</button>
    </form>

    {{ course.courses }}
  </div>
</template>

<script>
import { useCourseStore } from '@/stores/course';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

export default {
  setup() {
    const formRef = ref({});
    const course = useCourseStore();
    const user = useUserStore();
    return { user, formRef, course };
  },
  computed: {},
};
</script>
