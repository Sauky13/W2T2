<script>
import store from "@/store";
export default {
  computed: {
    store() {
      return store
    }
  },
  methods: {
    addProductToBasket(product) {
      this.$store.commit('addProductToBasket', product);
    }
  },
  mounted() {
    this.$store.commit('mounted');
  },
}
</script>

<template>
  <section>
    <div class="catalog">
    <div v-for="product in $store.state.catalog" :key="product.id" class="product-list">
      <div class="product-item">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-info">{{ product.description }}</p>
        <p class="product-info">{{ product.price }} руб</p>
        <button class="btn-add-basket" @click="addProductToBasket(product)"
          v-show="$store.state.user_token !== null" :class="{ 'added': product.added }"
          @animationend="product.added = false">Добавить в корзину</button>
      </div>
    </div>
  </div>
  </section>
</template>

<style>
.catalog {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.btn-add-basket {
  width: 250px;
  height: 30px;
  border-radius: 20px;
  color: #6dbb8d;
  border: 2px solid #6dbb8d;
  font-weight: 600;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-add-basket:active {
  transform: scale(1.30);
}

.btn-add-basket.added {
  animation: pulse 0.3s ease-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    background-color: #6dbb8d;
    color: #ffffff;
  }
  100% {
    transform: scale(1.05);
    background-color: #ffffff;
    color: #6dbb8d;
  }
}

.product-list {
  flex-basis: calc(33.33% - 20px);
  background-color: #ffffff;
  border: 3px solid #e2e2e2;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 50px;
  max-width: 300px;
  transition: border 0.3s ease;
}

.product-list:hover {
  border-color: #6dbb8d;
}

.product-item {
  text-align: center;
}

.product-name {
  font-size: 20px;
  color: #333;
}

.product-info {
  font-size: 16px;
  color: #818181;
}
</style>