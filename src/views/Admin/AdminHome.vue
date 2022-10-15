<template>
  <admin-menu></admin-menu>
  <router-view></router-view>
</template>
<script>
import { defineComponent } from 'vue';
import AdminMenu from '@/components/menu/AdminMenu';

export default defineComponent({
  components: { AdminMenu },
});
</script>
<style></style>
