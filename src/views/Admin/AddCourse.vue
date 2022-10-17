<template>
  <n-grid :x-gap="12" :cols="2">
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text type="success" style="padding: 1rem 1rem 0">
          <n-text type="success">Course</n-text>
        </n-h2>
      </n-space>

      <n-space justify="center" span="0 400:1 600:2 800:3">
        <n-form
          class="form-container"
          ref="formRef"
          :model="model"
          size="medium"
          label-placement="top"
        >
          <n-grid :x-gap="12" :cols="1">
            <n-form-item-gi label="Question" path="question">
              <n-input
                v-model:value="model.question"
                placeholder="Question ..."
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 20,
                }"
              />
            </n-form-item-gi>

            <n-form-item-gi label="Select the language" path="language">
              <n-select
                v-model:value="model.language"
                placeholder="Select the Language"
                :options="
                  languageOptions.map((v) => ({
                    label: v.name,
                    value: v.name,
                  }))
                "
              />
            </n-form-item-gi>

            <n-form-item-gi label="Insert the code here" path="code">
              <n-input
                v-model:value="model.code"
                placeholder="Code ..."
                type="textarea"
                :autosize="{
                  minRows: 10,
                  maxRows: 1000,
                }"
              />
            </n-form-item-gi>

            <n-form-item-gi label="Insert the answer here" path="answers">
              <n-dynamic-input
                v-model:value="model.answers"
                placeholder="Please type here"
                :min="3"
                :max="6"
              />
            </n-form-item-gi>

            <n-form-item-gi label="Select the right answer" path="correct">
              <n-select
                v-model:value="model.correct"
                placeholder="Select the Language"
                :options="
                  model.answers.map((v) => ({
                    label: v,
                    value: v,
                  }))
                "
              />
            </n-form-item-gi>

            <n-gi>
              <n-button type="primary" @click="addToMongoDB(model)">
                Salvar
              </n-button>
            </n-gi>
          </n-grid>
        </n-form>
      </n-space>
    </n-gi>
    <!--  -->
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text type="success" style="padding: 1rem 1rem 0">
          <n-text type="success"> Code </n-text>
        </n-h2>
      </n-space>
      <div style="overflow: auto">
        <n-space>
          <n-code class="code" :code="model.code" :language="model.language" />
        </n-space>
      </div>
    </n-gi>
  </n-grid>
</template>

<script>
import { LANGS } from '@/helpers/constants';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
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

    return {
      user,
      formRef,
      languageOptions: LANGS,
      model: ref({
        question: '',
        answers: ['1', '2', '3'],
      }),
    };
  },
  methods: {
    // remover add
    ...mapActions(useCourseStore, ['add', 'addToMongoDB']),
  },
  computed: {},
});
</script>
