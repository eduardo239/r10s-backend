<template>
  <n-card title="Admin Page" style="margin-bottom: 16px">
    <n-tabs type="line" animated>
      <n-tab-pane name="add-challenge" tab="Add Challenge">
        <add-challenge></add-challenge>
      </n-tab-pane>
      <n-tab-pane name="all-challenge" tab="All Challenges">
        <all-challenges></all-challenges>
      </n-tab-pane>
      <n-tab-pane name="all-users" tab="All Users"> Qilixiang </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script>
import { defineComponent } from 'vue';
import { NCard, NTabs, NTabPane } from 'naive-ui';
import AddChallenge from '@/views/Admin/AddChallenge.vue';
import AllChallenges from '@/views/Admin/AllChallenges.vue';

export default defineComponent({
  components: { AddChallenge, AllChallenges, NCard, NTabs, NTabPane },
});
</script>
<style></style>
