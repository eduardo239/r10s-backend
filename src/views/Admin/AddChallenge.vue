<template>
  <n-grid cols="2" item-responsive>
    <n-gi span="2 700:1">
      <n-space class="form-add-challenge">
        <n-form
          ref="formRef"
          :model="model"
          size="medium"
          label-placement="top"
        >
          <n-grid :x-gap="1" :cols="1">
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

            <n-form-item-gi
              label="How long will the challenge last"
              path="duration"
            >
              <n-space :min="10" :max="100" vertical style="width: 100%">
                <n-slider v-model:value="model.duration" :step="1" />

                <n-input-number
                  :default-value="10"
                  :min="10"
                  :max="100"
                  v-model:value="model.duration"
                />
              </n-space>
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
    <n-gi span="400:2 800:1">
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
  </n-grid>
</template>

<script>
import { LANGS } from '@/helpers/constants';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/challenges';
import { defineComponent, ref } from 'vue';
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
    const challenge = useCourseStore();

    return {
      user,
      challenge,
      formRef,
      languageOptions: LANGS,
      model: ref({
        question: '',
        answers: ['1', '2', '3'],
        difficulty: 1,
        duration: 10,
      }),
    };
  },
  methods: {
    ...mapActions(useCourseStore, ['addToMongoDB']),
  },
  computed: {},
});
</script>
