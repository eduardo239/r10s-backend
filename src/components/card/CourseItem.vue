<template>
  <n-list-item style="margin-bottom: 1px" class="item-container">
    <n-thing>
      <template #header> {{ course.language }} </template>
      {{ slicedQuestion }}
      <template #action>
        <router-link :to="`/challenge-description/${course._id}`">
          <n-button size="small">
            <template #icon>
              <n-icon><arrow-right /></n-icon>
            </template>
            View More
          </n-button>
        </router-link>
      </template>
    </n-thing>
  </n-list-item>
</template>

<script>
import { defineComponent } from 'vue';
import { NListItem, NButton, NThing } from 'naive-ui';
import { JAVA, PYTHON, JAVASCRIPT, CPP } from '@/helpers/constants';
import { ArrowRight } from '@vicons/carbon';

export default defineComponent({
  components: { NListItem, NButton, NThing, ArrowRight },
  setup() {
    return { JAVA, PYTHON, JAVASCRIPT, CPP };
  },
  props: ['course'],
  computed: {
    slicedQuestion() {
      let s = 37;
      let q = this.course.question;
      if (q.length > s) return q.slice(0, s) + ' ...';
      return this.course.question;
    },
  },
});
</script>
<style></style>
