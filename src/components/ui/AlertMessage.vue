<template>
  <n-space vertical :size="12">
    <!-- <n-alert title="Info Text" type="info" closable>
      Gee it's good to be back home
    </n-alert> -->
    <!-- <n-alert title="Success Text" type="success" closable>
      Leave it till tomorrow to unpack my case
    </n-alert> -->
    <n-alert
      v-if="type === 'warning'"
      title="Warning Text"
      type="warning"
      closable
      :on-close="() => closeErrorMessage()"
    >
      {{ message }}
    </n-alert>
    <n-alert
      v-if="type === 'error'"
      title="Error Text"
      type="error"
      closable
      :on-close="() => closeErrorMessage()"
    >
      {{ message }}
    </n-alert>
  </n-space>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  props: ['message', 'type'],
  methods: {
    ...mapActions(useUserStore, ['closeErrorMessage']),
  },
});
</script>
