<template>
  <n-space justify="center">
    <n-h2 align-text :type="type" style="padding: 1rem 1rem 0">
      <n-text :type="type">{{ title }}</n-text>
    </n-h2>
  </n-space>
</template>
<script>
import { NSpace, NH2, NText } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['title', 'type'],
  components: { NSpace, NH2, NText },
});
</script>
<style></style>
