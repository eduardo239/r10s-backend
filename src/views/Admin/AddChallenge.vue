<template>
  <n-grid :x-gap="12" :cols="2">
    <n-gi>
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

            <n-form-item-gi
              label="Select the difficulty (min=1, max=10)"
              path="difficulty"
            >
              <n-input-number
                :default-value="1"
                :min="1"
                :max="10"
                style="width: 100%"
                v-model:value="model.difficulty"
                clearable
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
    <!-- CODE -->
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text style="padding: 1rem 1rem 0">
          <n-text type="warning"> Code </n-text>
        </n-h2>
      </n-space>
      <div style="overflow: auto; padding: 1rem">
        <n-space>
          <n-code class="code" :code="model.code" :language="model.language" />
        </n-space>
      </div>
    </n-gi>

    <n-gi span="2">
      <alert-message
        :error="course.error"
        :message="course.error"
        type="success"
      ></alert-message>
    </n-gi>
  </n-grid>
</template>

<script>
import { LANGS } from '@/helpers/constants';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { defineComponent, ref } from 'vue';
import AlertMessage from '@/components/ui/AlertMessage';
import {
  NGrid,
  NGi,
  NH2,
  NSpace,
  NForm,
  NFormItemGi,
  NInput,
  NInputNumber,
  NDynamicInput,
  NCode,
} from 'naive-ui';

export default defineComponent({
  components: {
    AlertMessage,
    NGrid,
    NGi,
    NH2,
    NSpace,
    NForm,
    NFormItemGi,
    NInput,
    NInputNumber,
    NDynamicInput,
    NCode,
  },
  setup() {
    const formRef = ref(null);
    const user = useUserStore();
    const course = useCourseStore();

    return {
      user,
      course,
      formRef,
      languageOptions: LANGS,
      model: ref({
        question: '',
        answers: ['1', '2', '3'],
        difficulty: 1,
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
