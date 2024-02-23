<template>
  <div class="catalog">
    <section v-for="product in this.$store.state.catalog" :key="product.id" class="product-list">
      <div class="product-item">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-info">{{ product.price }} руб</p>
        <p class="product-info">{{ product.description }}</p>
        <button class="btn-add-basket">Добавить в корзину</button>
      </div>
    </section>
  </div>
</template>

<script>
import store from "@/store";
export default {
  computed: {
    store() {
      return store
    }
  },
  mounted() {
    this.$store.commit('mounted');
  },
}
</script>

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