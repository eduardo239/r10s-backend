<template>
  <n-space vertical style="margin: 1rem 0">
    <n-radio-group
      v-for="(alternative, i) in alternatives"
      :key="i"
      :disabled="false"
      v-model:value="model.alternative"
      class="form-radio-container"
    >
      <n-radio
        class="form-radio"
        :checked="checkedValueRef === alternative"
        :value="alternative"
        name="form-alternatives"
        @change="handleChange"
      >
        {{ alternative }}
      </n-radio>
    </n-radio-group>

    <n-button-group
      style="display: flex; justify-content: space-between; margin-top: 1rem"
    >
      <n-button
        size="large"
        :disabled="disabled"
        type="primary"
        @click="submit(model)"
      >
        SAVE
      </n-button>

      <n-button :disabled="!disabled" size="large" @click="() => router.go(-1)"
        >Back</n-button
      >
    </n-button-group>
  </n-space>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { NSpace, NButton, NButtonGroup, NRadioGroup, NRadio } from 'naive-ui';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: ['alternatives'],
  components: { NSpace, NButton, NButtonGroup, NRadioGroup, NRadio },
  setup() {
    const router = useRouter();

    const disabled = ref(false);
    const answer = ref(null);
    const checkedValueRef = ref(null);
    return {
      router,
      answer,
      disabled,
      checkedValueRef,
      handleChange(e) {
        checkedValueRef.value = e.target.value;
      },
      model: ref({
        alternative: '',
        done: false,
      }),
    };
  },
  methods: {
    submit(data) {
      this.disabled = true;
      this.$emit('saveForm', data);
    },
  },
});
</script>
<style></style>
