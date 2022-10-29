<template>
  <n-config-provider :theme="ui.userTheme" :hljs="hljs" :class="userTheme">
    <n-layout class="body-wrapper">
      <main-menu></main-menu>
      <router-view />
    </n-layout>
  </n-config-provider>
</template>

<script>
import { auth } from './firebaseConfig';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/challenges';
import { useUiStore } from '@/stores/ui';
import { defineComponent } from 'vue';
import { NLayout } from 'naive-ui';
import MainMenu from '@/components/menu/MainMenu';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);

export default defineComponent({
  components: { MainMenu, NLayout },
  setup() {
    const user = useUserStore();
    const course = useCourseStore();
    const ui = useUiStore();

    return { user, course, hljs, ui };
  },
  methods: {
    ...mapActions(useUserStore, ['fetchUserFirebase']),
  },
  computed: {
    userTheme() {
      return this.ui.userTheme.name === 'light' ? 'light-bg' : 'dark-bg';
    },
  },
  mounted() {
    // carrega o usuario ao iniciar
    auth.onAuthStateChanged((user) => {
      if (this?.user) {
        this.fetchUserFirebase(user);
      }
    });
    // busca a quantidade de desafios
    this.course.getTotalOfChallenges();
    // carrega o tema do usuario
    this.ui.loadLocalStorageTheme();
  },
});
</script>
