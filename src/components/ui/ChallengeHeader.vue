<template>
  <n-space style="padding: 2rem 0">
    <n-text depth="3" class="challenge__id">ID # {{ id }}</n-text>
    <n-text depth="3">Difficulty # {{ difficulty ?? 0 }}</n-text>
    <n-text type="error">Timer # {{ timer ? timer : 100 }} seconds</n-text>
  </n-space>

  <n-space style="margin: 0">
    <n-h3>
      <n-text type="success"># {{ question }}</n-text>
    </n-h3>
  </n-space>
</template>

<script>
import { defineComponent } from 'vue';
import { NText, NSpace, NH3 } from 'naive-ui';

export default defineComponent({
  props: ['id', 'question', 'difficulty', 'language', 'timer'],
  components: {
    NText,
    NSpace,
    NH3,
  },
  setup() {},
});
</script>
<style></style>
