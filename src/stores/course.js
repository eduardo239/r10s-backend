import { defineStore } from 'pinia';

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [],
    course: null,
  }),
  getters: {},
  actions: {
    add(data) {
      this.courses.push(data);
    },
  },
});
