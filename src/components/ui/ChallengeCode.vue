<template>
  <n-space class="code-container">
    <n-code class="code" :code="code" :language="language" />
  </n-space>
</template>
<script>
import { defineComponent } from 'vue';
import { NCode, NSpace } from 'naive-ui';

export default defineComponent({
  props: ['code', 'language'],
  components: { NCode, NSpace },
  setup() {
    return {};
  },
});
</script>
<style></style>
