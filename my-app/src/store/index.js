import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    catalog: [],
    fio: '',
    email: '',
    password: '',
    user_token: null,
    isAuthenticated: false,
  },
  getters: {
  },
  mutations: {

    async mounted(state) {
      try {
        const response = await axios.get('https://jurapro.bhuser.ru/api-shop/products');
        state.catalog = response.data.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      console.log(state);

    },


    async registration(state) {
      let UserState = {
        fio: state.fio,
        email: state.email,
        password: state.password
      }

      const data = await axios.post('https://jurapro.bhuser.ru/api-shop/signup', UserState)
        .then(function (response) {
          state.user_token = response.data.data.user_token;
          localStorage.token = state.user_token;
          alert('Вы успешно зарегистрировались');
          if (localStorage.token !== null && localStorage.token !== undefined) {
            window.location.href = "/login";
          }
        })
        .catch(error => {
          console.log(error)
          alert('Не получилось зарегистрироваться. Попробуйте еще раз!');
        })
    },


    async login(state) {

      let UserState = {
        email: state.email,
        password: state.password
      }
      const data = await axios.post('https://jurapro.bhuser.ru/api-shop/login', UserState)
        .then(function (response) {
          state.user_token = response.data.data.user_token;
          localStorage.token = state.user_token;
          state.isAuthenticated = true;
          alert('Вы успешно авторизовались');
        })
        .catch(error => {
          console.log(error)
          alert('Не получилось авторизоваться. Попробуйте еще раз!');
        })
      if (localStorage.token !== undefined && localStorage.token !== null) {
        window.location.href = "/";
      }
    },


    logout(state) {
      state.user_token = null;
      localStorage.removeItem('token');
    },

  },
  actions: {

  },
  modules: {

  }
}) 
