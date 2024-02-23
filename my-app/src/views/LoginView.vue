<template>
  <section>
    <div>
      <div v-if="store.state.user_token === null">
        <form class="form" @submit.prevent="store.commit('login')">
          <input class="input" type="email" v-model="store.state.email" placeholder="Ваш e-mail">
          <input class="input" type="password" v-model="store.state.password" placeholder="Пароль">
          <button class="btn" type="submit">Войти</button>
        </form>
      </div>
      <div v-else>
        <p>Вы уже вошли в систему</p>
      </div>
      <div v-show="store.state.user_token === null">
        <p>Еще не зарегистрированы?</p>
        <router-link to="/register">Зарегистрироваться</router-link>
      </div>

    </div>

  </section>
</template>


<script>
import store from "@/store";
export default {
  computed: {
    store() {
      return store
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #000;
  background-color: #f8f8f8;
}

* {
  box-sizing: border-box;
}

.form {
  max-width: 320px;
  padding: 15px;
  margin: 20px auto;
  background-color: #fff;
}

.input {
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 10px;

  border: 1px solid #ccc;

  font-family: inherit;
  font-size: 16px;
}

.btn {
  display: block;
  width: 100%;
  padding: 8px 10px;

  border: 0;
  background-color: #1cbc11;
  cursor: pointer;

  font-family: inherit;
  font-size: 16px;
  color: #fff;
}

.btn:hover {
  background-color: #14a20a;
}
</style>