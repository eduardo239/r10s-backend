<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center">
        <n-card title="Home"> </n-card>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { NGi, NCard, NGrid, NSpace } from 'naive-ui';

export default {
  components: { NGi, NCard, NGrid, NSpace },
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

<!--   
  <n-grid x-gap='12' cols='1'>
    <n-gi>
      <n-space justify='center'>
        
      </n-space>
    </n-gi>
  </n-grid>
 -->
