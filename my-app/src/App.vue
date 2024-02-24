<script>
import store from "@/store";
export default {
  computed: {
    store() {
      return store
    },
  },
  methods: {
    logout() {
      store.commit("logout");
    },
  },
  created() {
    this.$store.state.user_token = localStorage.getItem('token');
    this.$store.state.isAuthenticated = !!this.$store.state.user_token;
  }
}
</script>


<template>
  <nav>
    <div class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/basket" v-show="store.state.user_token !== null">Корзина</router-link>
      <router-link to="/order" v-show="store.state.user_token !== null" @click="store.commit('mounted', item)">Оформленные товары</router-link>
      <div class="navigation-auth">
        <router-link to="/login" v-show="store.state.user_token === null">Авторизация</router-link>
        <router-link to="/register" v-show="store.state.user_token === null">Регистрация</router-link>
        <router-link to="/" @click="store.commit('logout')" v-show="store.state.user_token !== null">Выход</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 15px;
}

.navigation-auth {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

nav {
  padding: 15px;
  background-color: rgb(236, 236, 236);
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #525252;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  text-align: left;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #6bc272;
}

@media (min-width: 768px) {
  .navigation {
    gap: 50px;
  }

  nav {
    width: auto;
  }

  nav a {
    width: auto;
    padding: 10px 20px;
  }
}

@media (max-width: 767px) {
  .navigation {
    flex-direction: column;
  }

  nav a {
    padding: 10px;
  }
}
</style>