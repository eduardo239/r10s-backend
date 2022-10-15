import axios from 'axios';
import { defineStore } from 'pinia';
const URL = 'http://localhost:8082/';
const ENDPOINT = 'courses';

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [],
    course: null,
  }),
  getters: {
    allCourses(state) {
      return state.courses.reverse();
    },
    courseById(state) {
      return state.course;
    },
  },
  actions: {
    async add(data) {
      console.log(data);
      try {
        const response = await axios.post(`${URL}${ENDPOINT}`, data);
        this.course = response.data;
        const status = response.status;

        if (status === 200) {
          this.getCourses();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async remove(id) {
      try {
        const response = await axios.delete(`${URL}${ENDPOINT}/${id}`);
        const status = response.status;

        if (status === 200) {
          this.getCourses();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCourses() {
      try {
        const response = await axios.get(`${URL}${ENDPOINT}`);
        this.courses = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getCourseById(id) {
      try {
        const response = await axios.get(`${URL}${ENDPOINT}/${id}`);
        this.course = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
