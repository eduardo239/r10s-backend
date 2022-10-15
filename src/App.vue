<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="min-height: 100vh">
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
import MainMenu from '@/components/menu/MainMenu';
import { defineComponent } from 'vue';
import { darkTheme, NLayout } from 'naive-ui';

export default defineComponent({
  components: { MainMenu, NLayout },
  setup() {
    const formRef = ref({});
    const user = useUserStore();
    const course = useCourseStore();

    return { user, course, formRef, darkTheme };
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
    this.course.getCourses();
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
