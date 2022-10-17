import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// adm
import AdminHome from '@/views/Admin/AdminHome';
import AddCourse from '@/views/Admin/AddCourse';
import AllCourses from '@/views/Admin/AllCourses';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Auth/AuthHome.vue'),
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Auth/SignUpView.vue'),
  },
  {
    path: '/admin',
    name: 'admin-home',
    component: AdminHome,
    children: [
      {
        path: 'add',
        component: AddCourse,
      },
      {
        path: 'all',
        component: AllCourses,
      },
    ],
  },
  {
    path: '/courses',
    name: 'courses',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Courses/AllCourses.vue'),
  },
  {
    path: '/course/:courseId',
    name: 'course-by-id',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Courses/CourseById.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/User/UserProfile.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
