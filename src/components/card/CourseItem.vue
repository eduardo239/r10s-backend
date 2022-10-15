<template>
  <n-list-item style="margin-bottom: 1px">
    <template #prefix> ID #{{ course.id }} </template>

    <template #suffix>
      <router-link :to="`/course/${course.id}`">
        <n-button type="primary"> Acessar o teste </n-button>
      </router-link>
    </template>
    <n-thing :title="course.language" :description="course.question"></n-thing>
    <!-- <n-thing>
      <template #description>
        {{ course.question }}
      </template>
    </n-thing> -->
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
