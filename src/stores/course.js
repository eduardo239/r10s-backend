import axios from 'axios';
import { defineStore } from 'pinia';
const URL = 'http://localhost:8082/';
const ENDPOINT = 'courses';
const MONGODB_URI = 'http://localhost:3000/api/';
const MONGODB_ENDPOINT = 'challenges';

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [],
    course: null,
    error: '',
  }),
  getters: {
    allCourses(state) {
      return state.courses;
    },
    courseById(state) {
      return state.course;
    },
  },
  actions: {
    async add(data) {
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
    // mongodb
    async addToMongoDB(data) {
      try {
        const response = await axios.post(
          `${MONGODB_URI}${MONGODB_ENDPOINT}`,
          data
        );
        this.course = response.data;
        const status = response.status;

        if (status === 200) {
          this.getChallengesMDB();
        }
      } catch (error) {
        this.error = error.message;
      }
    },
    // get all challenges
    async getChallengesMDB() {
      try {
        const response = await axios.get(`${MONGODB_URI}${MONGODB_ENDPOINT}`);
        this.courses = response.data;
      } catch (error) {
        this.error = error.message;
      }
    },
    // get by id
    async getChallengeByIdMDB(uid) {
      try {
        const response = await axios.get(
          `${MONGODB_URI}${MONGODB_ENDPOINT}/${uid}`
        );
        this.course = response.data;
      } catch (error) {
        this.error = error.message;
      }
    },
    // reset
    resetCourse() {
      this.course = null;
    },
  },
});
