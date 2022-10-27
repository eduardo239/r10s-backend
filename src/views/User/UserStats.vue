<template>
  <n-space vertical>
    <n-list hoverable clickable>
      <!-- <n-list-item> total challenges {{ getTotalChallenges }}</n-list-item> -->
      <n-list-item>
        my completed challenges {{ getTotalCompletedChallenges }}</n-list-item
      >
      <n-list-item>
        correct challenges {{ getTotalCorrectChallenges }}</n-list-item
      >
      <n-list-item>
        % completed challenges {{ getPercentCorrectChallenges }}</n-list-item
      >
    </n-list>
  </n-space>
</template>

<script>
import { NSpace, NList, NListItem } from 'naive-ui';
import { useUserStore } from '@/stores/user';
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
// import { useCourseStore } from '@/stores/course';

export default defineComponent({
  components: { NSpace, NList, NListItem },
  setup() {
    const user = useUserStore();
    return { user };
  },

  computed: {
    // ...mapState(useCourseStore, ['getTotalChallenges']),
    ...mapState(useUserStore, [
      'getTotalCompletedChallenges',
      'getTotalCorrectChallenges',
      'getPercentCorrectChallenges',
    ]),
  },
});
</script>
<style></style>
