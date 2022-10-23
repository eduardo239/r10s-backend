<template>
  <n-space>
    <n-button @click="save" type="success" size="large" :disabled="disabled"
      >Salvar</n-button
    >
    <n-button @click="route.go(-1)" type="all" size="large">Voltar</n-button>
  </n-space>
</template>
<script>
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import { NSpace, NButton } from 'naive-ui';

export default defineComponent({
  props: ['disabled', 'save'],
  components: { NSpace, NButton },
  setup() {
    const route = useRouter();

    return { route };
  },
});
</script>
<style></style>
