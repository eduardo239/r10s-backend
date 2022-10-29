import { ERROR, SUCCESS } from '@/helpers/constants';
import axios from 'axios';
import { defineStore } from 'pinia';

const uri = {
  API_CHALLENGES:
    process.env.NODE_ENV !== 'production'
      ? process.env.VUE_APP_NOT_MONGODB_URI_CHALLENGES
      : process.env.VUE_APP_NOT_LOCAL_URI_CHALLENGES,
};

export const useCourseStore = defineStore('challenges', {
  state: () => ({
    challenges: [],
    challengesTotalPages: 1,
    courses: [],
    course: null,
    error: { status: false, message: '', type: '' },
    loading: false,
    totalChallenges: 0,
  }),
  getters: {
    // remover
    allCourses(state) {
      return state.courses.length === 0 ? [] : state.courses;
    },
    allChallenges(state) {
      return state.courses.length === 0 ? [] : state.courses;
    },
    courseById(state) {
      return state.course;
    },
    getTotalChallenges(state) {
      return state.totalChallenges;
    },
    getChallenge(state) {
      return state.course;
    },
  },
  actions: {
    async add(data) {
      try {
        const response = await axios.post(`${uri.API_CHALLENGES}`, data);
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
        const response = await axios.delete(`${uri.API_CHALLENGES}/${id}`);
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
        const response = await axios.get(`${uri.API_CHALLENGES}`);
        this.courses = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getCourseById(id) {
      try {
        const response = await axios.get(`${uri.API_CHALLENGES}/${id}`);
        this.course = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    // mongodb
    async addToMongoDB(data) {
      this.loading = true;
      this.resetError();
      try {
        const response = await axios.post(`${uri.API_CHALLENGES}`, data);
        this.course = response.data;
        const status = response.status;

        if (status === 200) {
          this.getChallengesMDB();
          this.error = {
            message: 'Challenge added successfully',
            type: SUCCESS,
            status: true,
          };
        }
      } catch (error) {
        this.error = {
          message: error.message,
          type: ERROR,
          status: true,
        };
      } finally {
        this.loading = false;
      }
    },
    // get all challenges
    async getChallengesMDB() {
      try {
        const response = await axios.get(`${uri.API_CHALLENGES}`);
        if (response.status === 200) {
          this.courses = response.data.challenges;
        } else {
          this.courses = [];
        }
      } catch (error) {
        this.error = {
          message: error.message,
          type: ERROR,
          status: true,
        };
      }
    },
    // http://localhost:3000/api/challenges?page=1&?limit=1
    // eslint-disable-next-line no-unused-vars
    async getAllChallengesByPageMDB({ page, _limit }) {
      this.loading = true;
      this.resetError();
      try {
        const response = await axios.get(
          `${uri.API_CHALLENGES}?page=${page}&limit=${_limit}`
        );
        if (response.status === 200) {
          this.courses = response.data.challenges;
          this.challengesTotalPages = response.data.totalPages;
        } else {
          this.courses = [];
          this.challengesTotalPages = 1;
        }
      } catch (error) {
        this.error = {
          message: error.message,
          type: ERROR,
          status: true,
        };
      } finally {
        this.loading = false;
      }
    },
    // get by id
    async getChallengeByIdMDB(uid) {
      this.resetError();
      try {
        const response = await axios.get(`${uri.API_CHALLENGES}/${uid}`);

        this.course = response.data;
      } catch (error) {
        this.error = {
          message: error.message,
          type: ERROR,
          status: true,
        };
      }
    },
    async removeChallengeyByIdMDB(id) {
      this.loading = true;
      this.resetError();
      try {
        const response = await axios.delete(`${uri.API_CHALLENGES}/${id}`);
        const status = response.status;

        if (status === 200) {
          this.getChallengesMDB();
        }
      } catch (error) {
        this.error = {
          message: error.message,
          type: ERROR,
          status: true,
        };
      } finally {
        this.loading = false;
      }
    },
    async getTotalOfChallenges() {
      // http://localhost:3000/api/challenges/count
      this.loading = true;
      this.resetError();
      try {
        const response = await axios.get(`${uri.API_CHALLENGES}/count`);
        const status = response.status;

        if (status === 200) {
          this.totalChallenges = response.data.count;
        } else {
          this.totalChallenges = 0;
        }
      } catch (error) {
        this.error = {
          message: error.message,
          type: ERROR,
          status: true,
        };
      } finally {
        this.loading = false;
      }
    },
    // reset
    resetCourse() {
      this.course = null;
    },
    resetError() {
      this.error = { status: false, message: '', type: '' };
    },
  },
});
