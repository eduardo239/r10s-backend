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
const ENDPOINT_U = 'users';

const uri = {
  API_USERS:
    process.env.NODE_ENV !== 'production'
      ? process.env.VUE_APP_NOT_MONGODB_URI_USERS
      : process.env.VUE_APP_NOT_LOCAL_URI_USERS,
};

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    users: [],
    loggedIn: false,
    isAdmin: false,
    error: { status: false, message: '', type: '' },
    loading: false,
    userCompletedChallenges: [],
    alreadyFinished: false,
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    getAllUsers(state) {
      return state.users.reverse();
    },
    isUserLoggedIn(state) {
      return state.loggedIn;
    },
    isUserAdmin(state) {
      console.log(state);
      console.log(state.user);
      return true;
    },
    getTotalCompletedChallenges(state) {
      return state.userCompletedChallenges.length || 0;
    },
    getTotalCorrectChallenges(state) {
      const total = state.userCompletedChallenges.filter(
        (v) => v.correct === 'true'
      );
      return total.length;
    },
    getPercentCorrectChallenges() {
      if (
        this.getTotalCompletedChallenges === 0 &&
        this.getTotalCompletedChallenges === 0
      )
        return '0%';
      const result = Math.floor(
        (this.getTotalCorrectChallenges / this.getTotalCompletedChallenges) *
          100
      );
      return result + '%';
    },
  },
  actions: {
    async signIn(data) {
      this.error = '';
      this.loading = true;

      const response = await axios.get(`${uri.API_USERS}`, data);
      const _user = response.data.filter((user) => user.email === data.email);

      if (_user.length > 0) {
        this.user = _user[0];
        this.loggedIn = true;
      } else {
        this.user = null;
        this.error = 'Failed to login';
      }
      this.loading = false;
    },
    async signUp(data) {
      this.error = '';
      this.loading = true;
      try {
        await axios.post(`${LOCALDB_URI}users`, data);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    // signup firebase
    async signUpFirebase({ email, password, name, terms }) {
      this.error = '';
      this.loading = true;
      if (!terms) {
        this.error = 'You must accept the terms';
        this.loading = false;
        return;
      }

      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const uid = response.user.uid;

        try {
          const _user = {
            email,
            name,
            uid,
          };
          await this.postNewUserMongoDB(_user);
        } catch (error) {
          console.error(error);
        }
        if (response) {
          this.user = response.user;
        } else {
          throw new Error('Failed to register');
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    // signin firebase
    async signInFirebase({ email, password }) {
      this.error = '';
      this.loading = true;
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
      } finally {
        this.loading = false;
      }
    },
    // logout firebase
    async logOutFirebase() {
      await signOut(auth);
      this.user = null;
      this.loggedIn = false;
      this.error = '';
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

    // async getUsers() {
    //   try {
    //     const response = await axios.get(`${LOCALDB_URI}users`);
    //     this.users = response.data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async getUserById(id) {
    //   const response = await axios.get(`${LOCALDB_URI}${ENDPOINT}`);
    //   const _user = response.data.filter((user) => user.id === id);

    //   if (_user.length > 0) {
    //     this.user = _user[0];

    //     try {
    //       const response = await axios.get(`${LOCALDB_URI}${ENDPOINT}`);
    //       this.users = response.data;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // },
    // async updateUserById(id, data) {
    //   await this.getUserById(id);

    //   try {
    //     const response = await axios.put(
    //       `${LOCALDB_URI}${ENDPOINT}/${id}`,
    //       data
    //     );
    //     const status = response.status;

    //     if (status === 200) {
    //       this.getUsers();
    //       this.user = response.data;
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // LOG OUT
    logout() {
      this.user = null;
      this.loggedIn = false;
      this.error = '';
    },

    // atividade
    async postNewAnswer(data) {
      try {
        await axios.post(`${MONGODB_URI}${ENDPOINT_UC}`, data);
      } catch (error) {
        this.error = error;
      }
    },
    // get total users challenges
    // http://localhost:3000/api/user-challenges/uid/F88RSMoCYMbpunkfkGmuRTysfHo2
    async getChallengesByUID(uid) {
      try {
        const response = await axios.get(
          `${MONGODB_URI}${ENDPOINT_UC}/uid/${uid}`
        );
        if (response.status === 200) {
          this.userCompletedChallenges = response.data;
        }
      } catch (error) {
        this.error = error;
      }
    },
    // http://localhost:3000/api/user-challenges/uid/F88RSMoCYMbpunkfkGmuRTysfHo2/cid/634c68cc3ae49021ed610648
    /**
     *
     * @param {String} uid from Firebase
     * @param {String} cid from MongoDB
     */
    async getChallengesByUIDAndCID(uid, cid) {
      try {
        const response = await axios.get(
          `${MONGODB_URI}${ENDPOINT_UC}/uid/${uid}/cid/${cid}`
        );
        if (response.status === 200) {
          if (response.data.length > 0) {
            this.alreadyFinished = true;
          } else {
            this.alreadyFinished = false;
          }
        }
      } catch (error) {
        this.error = error;
      }
    },
    // http://localhost:3000/api/users
    async getAllUsersMDB() {
      try {
        const response = await axios.get(`${MONGODB_URI}${ENDPOINT_U}`);
        if (response.status === 200) {
          this.users = response.data;
        } else {
          this.users = [];
        }
      } catch (error) {
        this.error = error;
      }
    },
    resetError() {
      this.error = '';
    },

    closeErrorMessage() {
      this.resetError();
    },
  },
});
