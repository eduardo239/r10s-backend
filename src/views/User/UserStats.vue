<template>
  <n-space vertical>
    <n-list hoverable>
      <n-list-item>
        <n-statistic
          label="Number of Site Challenges"
          :value="getTotalChallenges"
        >
        </n-statistic>
      </n-list-item>
      <n-list-item>
        <n-statistic
          label="Completed Challenges"
          :value="getTotalCompletedChallenges"
        >
        </n-statistic>
      </n-list-item>
      <n-list-item>
        <n-statistic
          label="Correct Challenges"
          :value="getTotalCorrectChallenges"
        >
        </n-statistic
      ></n-list-item>
      <n-list-item>
        <n-statistic
          :class="handleColorPercentage"
          label="Percentage of Correct Challenges"
          :value="getPercentCorrectChallenges"
        >
        </n-statistic>
      </n-list-item>
    </n-list>
  </n-space>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { defineComponent } from 'vue';
import { NSpace, NStatistic, NList, NListItem } from 'naive-ui';
// import { useCourseStore } from '@/stores/course';

export default defineComponent({
  components: { NSpace, NStatistic, NList, NListItem },
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
    ...mapState(useCourseStore, ['getTotalChallenges']),
    handleColorPercentage() {
      const result = parseInt(
        this.getPercentCorrectChallenges.replace('%', '')
      );

      if (result <= 20) return 'text-error';
      else if (result <= 60) return 'text-warning';
      else return 'text-success';
    },
  },
});
</script>
