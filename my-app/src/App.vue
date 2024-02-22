<template>
  <nav>
    <div class="navigation">
      <router-link to="/">Home</router-link> 
      <router-link to="/basket">Корзина</router-link>
      <router-link to="/order">Оформленные товары</router-link>
      <div class="navigation-auth">
        <router-link to="/login">Авторизация</router-link> 
        <router-link to="/register">Регистрация</router-link> 
      </div>
    </div>
    
    
  </nav>
  <router-view/>
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
 padding: 0 0px;
 width: auto;
 margin: 0 auto;
}

.navigation{
  display: flex;
  gap: 50px;
  justify-content: center;

}
.navigation-auth{
  display: flex;
  gap: 10px;
}

nav {
  padding: 30px;
  background-color: rgb(236, 236, 236) ;
  margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #525252;
}

nav a.router-link-exact-active {
  color: #6bc272;
}
</style>
