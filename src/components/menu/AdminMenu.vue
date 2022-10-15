<template>
  <n-space justify="center" style="gap: 1px">
    <router-link to="/admin/all">
      <n-button type="primary"> All </n-button>
    </router-link>

    <router-link :to="`/admin/add`">
      <n-button type="primary"> Add</n-button>
    </router-link>
  </n-space>
</template>

<script>
import { NButton, NSpace } from 'naive-ui';
import { useUserStore } from '@/stores/user';
import { defineComponent } from 'vue';

export default defineComponent({
  component: { NButton, NSpace },
  setup() {
    const user = useUserStore();

    return { user };
  },
  methods: {},
});
</script>
<style></style>
