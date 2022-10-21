<template>
  <n-space justify="center" class="timer">
    <n-h1 style="margin-bottom: 0">
      <n-text type="error">{{ timer }}</n-text>
    </n-h1>
  </n-space>
</template>
<script>
import { defineComponent } from 'vue';
import { NText, NSpace, NLayout, NH1 } from 'naive-ui';

export default defineComponent({
  props: ['timer'],
  component: {
    NText,
    NSpace,
    NLayout,
    NH1,
  },
  setup() {
    return {};
  },
});
</script>
<style></style>
