<template>
  <admin-menu></admin-menu>
  <router-view></router-view>
</template>
<script>
import AdminMenu from '@/components/menu/AdminMenu';
export default {
  components: { AdminMenu },
};
</script>
<style></style>
