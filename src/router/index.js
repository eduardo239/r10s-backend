import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SignInView.vue'),
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SignUpView.vue'),
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
  {
    path: '/admin/add-course',
    name: 'add-course',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Admin/AddCourse.vue'),
  },
  {
    path: '/admin/all-courses',
    name: 'all-courses',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Admin/AllCourses.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
