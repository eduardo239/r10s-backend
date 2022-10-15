<template>
  <n-list-item style="margin-bottom: 1px">
    <template #prefix>#{{ course.id }}</template>

    <template #suffix>
      <router-link :to="`/course/${course.id}`">
        <n-button type="primary">Start Test</n-button>
      </router-link>
    </template>

    <n-thing :title="course.question" :description="'empty'"></n-thing>
  </n-list-item>
</template>

<script>
import { defineComponent } from 'vue';
import { NListItem, NButton, NThing } from 'naive-ui';

export default defineComponent({
  components: { NListItem, NButton, NThing },
  props: ['course'],
});
</script>
<style></style>
