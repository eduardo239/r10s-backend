<template>
  <n-space vertical>
    <n-list hoverable clickable>
      <n-list-item> total challenges</n-list-item>
      <n-list-item> my completed challenges</n-list-item>
      <n-list-item> correct challenges</n-list-item>
      <n-list-item> % completed challenges</n-list-item>
    </n-list>
  </n-space>
</template>

<script>
import { defineComponent } from 'vue';
import { NSpace, NList, NListItem } from 'naive-ui';

export default defineComponent({
  components: { NSpace, NList, NListItem },
});
</script>
<style></style>
