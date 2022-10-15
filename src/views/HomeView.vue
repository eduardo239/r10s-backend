<template>
  <h1>home</h1>
</template>

<script>
import { useUserStore } from '@/stores/user';
// import { NForm, NButton, NH2, NGi, NGrid, NSpace } from 'naive-ui';

export default {
  components: {},
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
