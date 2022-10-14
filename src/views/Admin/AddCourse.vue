<template>
  <div>
    <h1>adicionar curso</h1>

    <form @submit.prevent="add(formRef)">
      <input type="text" placeholder="question" v-model="formRef.question" />
      <input type="text" placeholder="linguagem" v-model="formRef.language" />
      <textarea placeholder="code" v-model="formRef.code" />

      <input type="text" placeholder="alternativas" v-model="answerRef" />
      <button @click.prevent="() => addToAnwers(answerRef)">
        adicionar alternativa
      </button>

      <button>adicionar</button>
    </form>

    {{ answerRef }}
    <br />
    <br />
    <br />
    <p>curso</p>
    {{ course.course }}
  </div>
</template>

<script>
import { useCourseStore } from '@/stores/course';
import { useUserStore } from '@/stores/user';
import { mapActions } from 'pinia';
import { ref } from 'vue';

export default {
  setup() {
    const formRef = ref({ answers: [] });
    const answerRef = ref(null);
    const course = useCourseStore();
    const user = useUserStore();

    return { user, formRef, answerRef, course };
  },
  methods: {
    ...mapActions(useCourseStore, ['add']),
    addToAnwers(data) {
      let id = this.formRef.answers.length;
      let content = { id, content: data };
      this.formRef.answers.push(content);
    },
  },
  computed: {},
};
</script>
