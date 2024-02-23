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
    basketCart: [],
    Orders: [],

  },
  getters: {

  },
  mutations: {


    async createOrder(state,) {
      try {
        // Создаем новый заказ из текущей корзины
        let newOrders = state.basketCart.map(item => ({ ...item }));
        state.Orders.push(newOrders);
        state.basketCart.splice(0, state.basketCart.length);
        console.log(state.Orders);

        // Отправляем запрос на сервер
        const response = await axios.post(`https://jurapro.bhuser.ru/api-shop/order`, state.Orders, {
          headers: {
            'Authorization': `Bearer ${state.user_token}`
          }
        });
        if (response.status === 201) {
          console.log('Order is processed:', response.data.data);
        } else {
          console.error('Unexpected response status:', response.status);
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          console.error('Cart is empty:', error.response.data.error);
        } else {
          console.error('Error creating order:', error.message);
        }
      }
    },
    // получение заказов с сервера 
    async loadOrder(state) {
      try {
        const response = await axios.get('https://jurapro.bhuser.ru/api-shop/order', {
          headers: {
            'Authorization': `Bearer ${state.user_token}`
          }
        });
        console.log('Data received from server:', response.data);
        state.Orders = response.data.data;
        console.log(state.Orders);

      } catch (error) {
        console.error('Ошибка при получении заказов:', error.response);
      }
    },


    // получение товаров из корзины
    async loadBasketCart(state) {
      try {
        const response = await axios.get('https://jurapro.bhuser.ru/api-shop/cart', {
          headers: {
            'Authorization': `Bearer ${state.user_token}`
          }
        });
        if (Array.isArray(response.data.data)) {
          state.basketCart = response.data.data.map(item => ({ ...item, quantity: item.quantity || 1 }));
        } else {
          console.error('Полученные данные не являются массивом:', response.data.data);
        }
      } catch (error) {
        console.error('Ошибка при получении товаров из корзины:', error.response);
      }
    },

    // добавление товара в корзину
    async addProductToBasket(state, product) {
      try {
        const response = await axios.post(`https://jurapro.bhuser.ru/api-shop/cart/${product.id}`, {}, {
          headers: {
            'Authorization': `Bearer ${state.user_token}`
          }
        });
        if (response.status === 201) {
          console.log('Товар добавлен в корзину на сервере');
        } else {
          console.error('Не удалось добавить товар в корзину на сервере.');
        }
      } catch (error) {
        console.error('Ошибка отправки запроса на сервер:', error.response);
      }
    },


    // удаление товара из корзины  
    async deleteProductFromBasket(state, product) {
      let productInCart = state.basketCart.find(item => item.id === product.id);
      if (productInCart) {
        if (productInCart.quantity > 1) {
          productInCart.quantity--;
        } else {
          state.basketCart = state.basketCart.filter(item => item.id !== product.id);
        }
      }
      try {
        const response = await axios.delete(`https://jurapro.bhuser.ru/api-shop/cart/${product.id}`, {
          headers: {
            'Authorization': `Bearer ${state.user_token}`
          }
        });
        if (response.status === 200) {
          console.log('Товар удален из корзины на сервере');
        } else {
          console.error('Не удалось удалить товар из корзины на сервере.');
        }
      } catch (error) {
        console.error('Ошибка отправки запроса на сервер:', error.response);
      }
    },

    // получение каталога
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

    // регистрация
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

    // авторизация
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

    // выход из аккаунта
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
