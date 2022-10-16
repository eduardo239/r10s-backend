<template>
  <n-config-provider :theme="darkTheme" :hljs="hljs">
    <n-layout style="min-height: 100vh; max-width: 1000px; margin: 0 auto">
      <main-menu></main-menu>

      <router-view />
    </n-layout>
  </n-config-provider>
</template>

<script>
import { ref } from 'vue';
import { auth } from './firebaseConfig';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { defineComponent } from 'vue';
import { darkTheme, NLayout } from 'naive-ui';
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
    const formRef = ref({});
    const user = useUserStore();
    const course = useCourseStore();

    return { user, course, formRef, darkTheme, hljs };
  },
  methods: {
    ...mapActions(useUserStore, ['logOutFirebase', 'fetchUserFirebase']),
  },
  computed: {
    _user() {
      return this.user;
    },
  },
  mounted() {
    // this.course.getCourses();
    auth.onAuthStateChanged((user) => {
      if (this?.user) {
        this.fetchUserFirebase(user);
      } else {
        console.log(2);
      }
    });
  },
});
</script>

<style></style>
