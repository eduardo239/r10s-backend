<template>
  <n-list-item style="margin-bottom: 1px" class="item-container">
    <n-thing>
      <template #description>
        <n-space size="small" style="margin-top: 4px">
          <n-tag
            :bordered="false"
            type="info"
            size="small"
            :class="[
              course.language === JAVA ? 'tag-red' : '',
              course.language === JAVASCRIPT ? 'tag-yellow' : '',
              course.language === CPP ? 'tag-blue' : '',
              course.language === PYTHON ? 'tag-green' : '',
              'tag',
            ]"
          >
            {{ course.language }}</n-tag
          >

          <router-link :to="`/challenge-description/${course._id}`">
            <n-button type="primary">Start Test</n-button>
          </router-link>
        </n-space>
      </template>
      {{ sliceWord }}
    </n-thing>
  </n-list-item>
</template>

<script>
import { defineComponent } from 'vue';
import { NListItem, NSpace, NTag, NButton, NThing } from 'naive-ui';
import { JAVA, PYTHON, JAVASCRIPT, CPP } from '@/helpers/constants';

export default defineComponent({
  components: { NListItem, NSpace, NTag, NButton, NThing },
  setup() {
    return { JAVA, PYTHON, JAVASCRIPT, CPP };
  },
  props: ['course'],
  computed: {
    sliceWord() {
      let s = 37;
      let q = this.course.question;
      if (q.length > s) return q.slice(0, s) + ' ...';
      return this.course.question;
    },
  },
});
</script>
<style></style>
