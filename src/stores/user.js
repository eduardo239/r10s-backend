import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async signIn(data) {
      console.log('sign-in', data);
    },
    async signUp(data) {
      console.log('sign-up', data);
    },
  },
});
