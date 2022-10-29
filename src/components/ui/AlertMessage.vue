<template>
  <n-space
    v-if="error.status"
    vertical
    style="margin-top: 2rem"
    justify="center"
  >
    <n-alert
      v-if="error.type === INFO"
      title="Info"
      :type="INFO"
      closable
      :on-close="() => resetErrors()"
    >
      {{ error.message }}
    </n-alert>

    <n-alert
      v-if="error.type === SUCCESS"
      title="Success"
      :type="SUCCESS"
      closable
      :on-close="() => resetErrors()"
    >
      {{ error.message }}
    </n-alert>

    <n-alert
      v-if="error.type === WARNING"
      title="Warning"
      :type="WARNING"
      closable
      :on-close="() => resetErrors()"
    >
      {{ error.message }}
    </n-alert>

    <n-alert
      v-if="error.type === ERROR"
      title="Error"
      :type="ERROR"
      closable
      :on-close="() => resetErrors()"
    >
      {{ error.message }}
    </n-alert>
  </n-space>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/challenges';
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';
import { ERROR, WARNING, INFO, SUCCESS } from '@/helpers/constants';

export default defineComponent({
  components: {},
  props: ['error'],
  methods: {
    ...mapActions(useUserStore, ['closeErrorMessage']),
    ...mapActions(useCourseStore, ['resetError']),
    resetErrors() {
      this.resetError();
      this.closeErrorMessage();
    },
  },
  setup() {
    return { ERROR, WARNING, INFO, SUCCESS };
  },
});
</script>
