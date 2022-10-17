<template>
  <n-space vertical>
    <n-layout>
      <n-card title="Home"> </n-card>
    </n-layout>
  </n-space>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { NCard, NLayout, NSpace } from 'naive-ui';

export default {
  components: { NCard, NLayout, NSpace },
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
