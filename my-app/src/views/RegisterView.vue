<template>
  <section>
    <div v-if="store.state.user_token === null">
      <form class="form" @submit.prevent="store.commit('registration')">
        <input class="input" type="text" placeholder="ФИО" required v-model="store.state.fio">
        <input class="input" type="email" placeholder="Ваш e-mail" required v-model="store.state.email">
        <input class="input" type="password" placeholder="Пароль" required v-model="store.state.password">
        <button class="btn" type="submit">Регистрация</button>
      </form>
    </div>
    <div v-else>
      <p>Вы уже вошли в систему</p>
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