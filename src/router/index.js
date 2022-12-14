import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// adm
import AdminHome from '@/views/Admin/AdminHome';
import AllChallenges from '@/views/Admin/AllChallenges';
import AddChallenge from '@/views/Admin/AddChallenge';
// user
import UserProfile from '@/views/User/UserProfile';
import UserEdit from '@/views/User/UserEdit';
import UserStats from '@/views/User/UserStats';
// challenge

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
        component: AddChallenge,
      },
      {
        path: 'all',
        component: AllChallenges,
      },
    ],
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/Challenge/AllChallenges.vue'
      ),
  },
  {
    path: '/challenge-description/:challengeId',
    name: 'challenge-description-by-id',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/Challenge/ChallengeDesc.vue'
      ),
  },
  {
    path: '/challenge/:challengeId',
    name: 'challenge-by-id',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/Challenge/ChallengeById.vue'
      ),
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
    children: [
      {
        path: 'edit',
        component: UserEdit,
      },
      {
        path: ':uid',
        component: UserStats,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
