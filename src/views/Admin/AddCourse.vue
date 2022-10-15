<template>
  <n-grid x-gap="12" cols="2">
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text type="success" style="padding: 1rem 1rem 0">
          <n-text type="success">Course</n-text>
        </n-h2>
      </n-space>
      <n-space justify="center">
        <n-form
          class="form-container"
          ref="formRef"
          :model="model"
          size="medium"
          label-placement="top"
        >
          <n-grid x-gap="12" :cols="1">
            <n-form-item-gi label="Question" path="question">
              <n-input
                v-model:value="model.question"
                placeholder="Textarea"
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 20,
                }"
              />
            </n-form-item-gi>

            <n-form-item-gi
              :span="12"
              label="Select the language"
              path="language"
            >
              <n-select
                v-model:value="model.language"
                placeholder="Select the Language"
                :options="languageOptions"
              />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Insert the code here" path="code">
              <n-input
                v-model:value="model.code"
                placeholder="Textarea"
                type="textarea"
                :autosize="{
                  minRows: 10,
                  maxRows: 1000,
                }"
              />
            </n-form-item-gi>

            <n-form-item-gi
              :span="12"
              label="Insert the answer here"
              path="Answers"
            >
              <n-dynamic-input
                v-model:value="model.answers"
                placeholder="Please type here"
                :min="3"
                :max="6"
              />
            </n-form-item-gi>

            <n-form-item-gi
              :span="12"
              label="Select the right answer"
              path="correct"
            >
              <n-select
                v-model:value="model.correct"
                placeholder="Select the Language"
                :options="
                  model.answers.map((v, i) => ({
                    label: v,
                    value: i,
                  }))
                "
              />
            </n-form-item-gi>

            <n-gi>
              <n-button type="primary" @click="add(model)"> Salvar </n-button>
            </n-gi>
          </n-grid>
        </n-form>
      </n-space>
    </n-gi>
    <!--  -->
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text type="success" style="padding: 1rem 1rem 0">
          <n-text type="success">Code</n-text>
        </n-h2>
      </n-space>
      <div style="overflow: auto">
        <n-space>
          <n-code
            style="font-size: 0.75rem; font-family: `IBM Plex Mono, monospace`"
            :code="model.code"
            :language="null"
          />
        </n-space>
      </div>
    </n-gi>
  </n-grid>
</template>

<script>
import { LANGS } from '@/herlpers/constants';
import { useCourseStore } from '@/stores/course';
import { useUserStore } from '@/stores/user';
import { mapActions } from 'pinia';
import { defineComponent, ref } from 'vue';
import {
  NGrid,
  NGi,
  NH2,
  NSpace,
  NForm,
  NFormItemGi,
  NInput,
  NDynamicInput,
  NCode,
} from 'naive-ui';

export default defineComponent({
  components: {
    NGrid,
    NGi,
    NH2,
    NSpace,
    NForm,
    NFormItemGi,
    NInput,
    NDynamicInput,
    NCode,
  },
  setup() {
    const formRef = ref(null);
    const user = useUserStore();

    // remover
    const answerRef = ref(null);
    const course = useCourseStore();

    return {
      user,
      formRef,
      answerRef,
      course,
      model: ref({
        question: '',
        answers: ['a', 'b', 'c'],
      }),
      languageOptions: LANGS.map((v, i) => ({
        label: v,
        value: i,
      })),
    };
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
});
</script>
