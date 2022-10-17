<template>
  <n-space vertical>
    <n-alert v-if="type === 'info'" title="Info" type="info" closable>
      {{ message }}
    </n-alert>

    <n-alert v-if="type === 'success'" title="Success" type="success" closable>
      {{ message }}
    </n-alert>

    <n-alert
      v-if="type === 'warning'"
      title="Warning"
      type="warning"
      closable
      :on-close="() => closeErrorMessage()"
    >
      {{ message }}
    </n-alert>
    <n-alert
      v-if="type === 'error'"
      title="Error"
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
