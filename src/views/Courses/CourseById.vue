<template>
  <div>
    <h1>course by id {{ $route.params.courseId }}</h1>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRouter();
    return { route };
  },
};
</script>
