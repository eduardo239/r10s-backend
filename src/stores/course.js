import axios from 'axios';
import { defineStore } from 'pinia';
const URL = 'http://localhost:8082/';
const ENDPOINT = 'courses';
const MONGODB_URI = 'http://localhost:3000/api/';
const MONGODB_ENDPOINT = 'challenges';
// db
// import challengesDB from '../../server/fakedb/challenges';

export const useCourseStore = defineStore('course', {
  state: () => ({
    challenges: [],
    challengesTotalPages: 1,
    courses: [],
    course: null,
    error: '',
    loading: false,
  }),
  getters: {
    allCourses(state) {
      return state.courses.length === 0 ? [] : state.courses.reverse();
    },
    allChallenges(state) {
      return state.courses.length === 0 ? [] : state.courses.reverse();
    },
    courseById(state) {
      return state.course;
    },
    totalChallenges(state) {
      return state.courses.length;
    },
    getChallenge(state) {
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
        if (response.status === 200) {
          this.courses = response.data.challenges;
        } else {
          this.courses = [];
        }
      } catch (error) {
        this.error = error.message;
      }
    },
    // http://localhost:3000/api/challenges?page=1&?limit=1
    // eslint-disable-next-line no-unused-vars
    async getAllChallengesByPageMDB({ page, _limit }) {
      this.loading = true;
      try {
        const response = await axios.get(
          `${MONGODB_URI}${MONGODB_ENDPOINT}?page=${page}&limit=${_limit}`
        );
        if (response.status === 200) {
          this.courses = response.data.challenges;
          this.challengesTotalPages = response.data.totalPages;
        } else {
          this.courses = [];
          this.challengesTotalPages = 1;
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    // get by id
    async getChallengeByIdMDB(uid) {
      try {
        const response = await axios.get(
          `${MONGODB_URI}${MONGODB_ENDPOINT}/${uid}`
        );
        console.log(response.data);
        this.course = response.data;
      } catch (error) {
        this.error = error.message;
      }
    },
    async removeChallengeyByIdMDB(id) {
      this.loading = true;
      try {
        const response = await axios.delete(
          `${MONGODB_URI}${MONGODB_ENDPOINT}/${id}`
        );
        const status = response.status;

        if (status === 200) {
          this.getChallengesMDB();
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    // reset
    resetCourse() {
      this.course = null;
    },
  },
});
