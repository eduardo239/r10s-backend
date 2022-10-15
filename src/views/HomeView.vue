<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center">
        <n-h2>home</n-h2>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { NH2, NGi, NGrid, NSpace } from 'naive-ui';

export default {
  components: { NH2, NGi, NGrid, NSpace },
  setup() {
    const user = useUserStore();
    return {
      user,
    };
  },
  methods: {
    // remover sign depois
  },
  computed: {},
};
</script>
