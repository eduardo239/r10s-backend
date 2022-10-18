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
    loggedIn: false,
    error: '',
    userTotalChallenges: 0,
    userChallengeAlreadyFinished: false,
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    allUsers(state) {
      return state.users.reverse();
    },
    isUserLoggedIn(state) {
      return state.loggedIn;
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
        this.error = error;
      }
    },
    // signup firebase
    async signUpFirebase({ email, password, name }) {
      this.error = '';
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
          await this.postNewUserMongoDB(_user);
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
      this.error = '';
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
    // update user
    async updateUserFirebase() {
      console.log('todo');
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
    // LOG OUT
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
          this.userTotalChallenges = response.data.length;
        }
      } catch (error) {
        this.error = error;
      }
    },
    // http://localhost:3000/api/user-challenges/uid/F88RSMoCYMbpunkfkGmuRTysfHo2/cid/634c68cc3ae49021ed610648
    async getChallengesByUIDAndCID(uid, cid) {
      try {
        const response = await axios.get(
          `${MONGODB_URI}${ENDPOINT_UC}/uid/${uid}/cid/${cid}`
        );
        if (response.status === 200) {
          if (response.data.length > 0) {
            this.userChallengeAlreadyFinished = true;
          } else {
            this.userChallengeAlreadyFinished = false;
          }
        }
      } catch (error) {
        this.error = error;
      }
    },
  },
});
