import { auth } from '@/firebaseConfig';
import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import axios from 'axios';

const URL = 'http://localhost:8082/';
const ENDPOINT = 'users';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    users: [],
    //
    loggedIn: false,
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    allUsers(state) {
      return state.users.reverse();
    },
  },
  actions: {
    async signIn(data) {
      const response = await axios.get(`${URL}${ENDPOINT}`, data);
      const _user = response.data.filter((user) => user.email === data.email);

      if (_user.length > 0) {
        this.user = _user[0];
        this.loggedIn = true;
      } else {
        this.user = null;
      }
    },
    async signUp(data) {
      try {
        await axios.post(`${URL}users`, data);
      } catch (error) {
        console.log(error);
      }
    },
    // signup firebase
    async signUpFirebase({ email, password }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        this.user = response.user;
      } else {
        throw new Error('Unable to register user');
      }
    },
    // signin firebase
    async signInFirebase({ email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        this.user = response.user;
        response.user.displayName = email;
      } else {
        throw new Error('Login failed');
      }
    },
    // logout firebase
    async logOutFirebase() {
      await signOut(auth);
      this.user = null;
      this.loggedIn = false;
    },
    // fetch user firebase
    async fetchUserFirebase(user) {
      this.loggedIn = user !== null;
      if (user) {
        this.user = { ...user };
      } else {
        this.user = null;
      }
    },
    // googleSignIn
    async googleSignIn() {
      // let provider = new firebase.auth.GoogleAuthProvider();
      // firebase
      //   .auth()
      //   .signInWithPopup(provider)
      //   .then((result) => {
      //     let token = result.credential.accessToken;
      //     let user = result.user;
      //     console.log(token); // Token
      //     console.log(user); // User that was authenticated
      //   })
      //   .catch((err) => {
      //     console.log(err); // This will give you all the information needed to further debug any errors
      //   });
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
      this.loggedIn = false;
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
