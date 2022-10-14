<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="min-height: 100vh">
      <n-h3>
        <n-text type="success"> return10seconds </n-text>
      </n-h3>
      <!--  -->
      <n-menu :options="menuOptions" mode="horizontal" />
      <!--  -->
      <router-view />
    </n-layout>
  </n-config-provider>
</template>

<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { defineComponent, h } from 'vue';
import {
  Home,
  Login,
  Catalog,
  Warning,
  User,
  CloudLogging,
} from '@vicons/carbon';
import { darkTheme, NIcon, NLayout, NH3, NText } from 'naive-ui';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/',
          },
        },
        { default: () => 'Home' }
      ),
    key: 'go-back-home',
    icon: renderIcon(Home),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/courses',
          },
        },
        { default: () => 'Cursos' }
      ),
    key: 'go-courses',
    icon: renderIcon(CloudLogging),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/sign-in',
          },
        },
        { default: () => 'Entrar' }
      ),
    key: 'go-to-sign-in',
    icon: renderIcon(Login),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/sign-up',
          },
        },
        { default: () => 'Registrar' }
      ),
    key: 'go-to-sign-up',
    icon: renderIcon(Catalog),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/profile',
          },
        },
        { default: () => 'Perfil' }
      ),
    key: 'go-to-profile',
    icon: renderIcon(User),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/admin/add-course',
          },
        },
        { default: () => 'A.Add Curso' }
      ),
    key: 'go-to-admin-add',
    icon: renderIcon(Warning),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/admin/all-courses',
          },
        },
        { default: () => 'A.All Courses' }
      ),
    key: 'go-to-admin-add',
    icon: renderIcon(Warning),
  },
];

export default defineComponent({
  components: { NLayout, NH3, NText },
  setup() {
    const formRef = ref({});
    const user = useUserStore();
    const course = useCourseStore();

    return { menuOptions, user, course, formRef, darkTheme };
  },
  methods: {},
  computed: {},
  mounted() {
    this.user.getUsers();
    this.course.getCourses();
  },
});
</script>

<style></style>
