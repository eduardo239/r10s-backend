import { auth } from '@/firebaseConfig';
import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import axios from 'axios';

const MONGODB_URI = 'http://localhost:3000/api/';
const LOCALDB_URI = 'http://localhost:8082/';
const ENDPOINT = 'users';
const ENDPOINT_UC = 'user-challenges';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    users: [],
    error: '',
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
      const response = await axios.get(`${LOCALDB_URI}${ENDPOINT}`, data);
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
        await axios.post(`${LOCALDB_URI}users`, data);
      } catch (error) {
        console.log(error);
      }
    },
    // signup firebase
    async signUpFirebase({ email, password, name }) {
      try {
        const responseFB = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const uid = responseFB.user.uid;

        try {
          const _user = {
            email,
            name,
            uid,
          };
          const reponseMDB = await this.postNewUserMongoDB(_user);
          console.log(reponseMDB);
        } catch (error) {
          console.error(error);
        }
        if (responseFB) {
          this.user = responseFB.user;
        } else {
          throw new Error('Unable to register user');
        }
      } catch (error) {
        this.error = error.message;
      }
    },
    // signin firebase
    async signInFirebase({ email, password }) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (response) {
          this.user = response.user;
          response.user.displayName = email;
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        this.error = error.message;
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
    // mongodb user post
    async postNewUserMongoDB(data) {
      try {
        await axios.post(`${MONGODB_URI}${ENDPOINT}`, data);
      } catch (error) {
        console.log(error);
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
        const response = await axios.get(`${LOCALDB_URI}users`);
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserById(id) {
      const response = await axios.get(`${LOCALDB_URI}${ENDPOINT}`);
      const _user = response.data.filter((user) => user.id === id);

      if (_user.length > 0) {
        this.user = _user[0];

        try {
          const response = await axios.get(`${LOCALDB_URI}${ENDPOINT}`);
          this.users = response.data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async updateUserById(id, data) {
      await this.getUserById(id);

      try {
        const response = await axios.put(
          `${LOCALDB_URI}${ENDPOINT}/${id}`,
          data
        );
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
    // error message
    closeErrorMessage() {
      this.error = '';
    },
    // atividade
    async postNewAnswer(data) {
      console.log(data);
      // post new user challenge http://localhost:3000/api/user-challenges
      try {
        await axios.post(`${MONGODB_URI}${ENDPOINT_UC}`, data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
