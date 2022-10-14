import { defineStore } from 'pinia';
import axios from 'axios';
const URL = 'http://localhost:8082/';
const ENDPOINT = 'users';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    users: [],
  }),
  getters: {
    allUsers(state) {
      return state.users.reverse();
    },
    totalUserAnswers(state) {
      if (state.user !== null) return state.user.answers.length;
    },
  },
  actions: {
    async signIn(data) {
      const response = await axios.get(`${URL}${ENDPOINT}`, data);
      const _user = response.data.filter((user) => user.email === data.email);

      if (_user.length > 0) {
        this.user = _user[0];
        // TODO: localStorage
      } else {
        this.user = null;
        // TODO: localStorage
      }
    },
    async signUp(data) {
      try {
        await axios.post(`${URL}users`, data);
      } catch (error) {
        console.log(error);
      }
    },
    async getUsers() {
      try {
        const response = await axios.get(`${URL}users`);
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserById(id) {
      const response = await axios.get(`${URL}${ENDPOINT}`);
      const _user = response.data.filter((user) => user.id === id);

      if (_user.length > 0) {
        this.user = _user[0];

        try {
          const response = await axios.get(`${URL}${ENDPOINT}`);
          this.users = response.data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async updateUserById(id, data) {
      await this.getUserById(id);

      try {
        const response = await axios.put(`${URL}${ENDPOINT}/${id}`, data);
        const status = response.status;

        if (status === 200) {
          this.getUsers();
          this.user = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.user = null;
      // TODO: remove localStorage
    },
    // atividade
    answer(question, answer) {
      const _user = this.user;
      const data = { question, answer };
      console.log(this.user);
      _user.answers.push(data);

      this.updateUserById(this.user.id, _user);
    },
  },
});
