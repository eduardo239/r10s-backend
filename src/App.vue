<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="min-height: 100vh">
      <n-h3>
        <n-text type="success"> return10seconds </n-text>
      </n-h3>
      <!--  -->
      <n-menu :options="menuOptions" mode="horizontal" />
      <!--  -->
      <nav style="display: flex; gap: 12px">
        <router-link to="/admin/add-course">add</router-link>
        <router-link to="/admin/all-courses">all</router-link>

        <router-link to="/">home</router-link>
        <div v-if="!user.user" style="display: flex; gap: 12px">
          <router-link to="/sign-in">login</router-link>
          <router-link to="/sign-up">registrar</router-link>
        </div>
        <router-link to="/courses">cursos</router-link>
        <div v-if="!!user.user" style="display: flex; gap: 12px">
          <router-link to="/profile"
            >profile : @{{ user.user.name }}</router-link
          >
          <router-link @click="user.logout" to="/">sair</router-link>
        </div>
      </nav>
      <router-view /> </n-layout
  ></n-config-provider>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course';
import { defineComponent, h } from 'vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { darkTheme, NIcon, NLayout, NH3, NText } from 'naive-ui';
import { Home, Login, Catalog, Warning, User } from '@vicons/carbon';

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
        { default: () => 'Adm Add Curso' }
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
        { default: () => 'Adm All Courses' }
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
