<template>
<div class="catalog">
    <section  v-for="product in this.catalog" class="product-list">
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
import axios from "axios";
export default {
  data() {
    return {
      catalog: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get("https://jurapro.bhuser.ru/api-shop/products");
      this.catalog = response.data.data;
      console.log(this.catalog);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
};
</script>

<style>
.catalog{
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.btn-add-basket{
  width: 150px;
  height: 40px;
  border-radius: 30px;
  color: white;
  background-color: #5e5296;
  border: 2px solid #333;
}

.product-list {
  flex-basis: calc(33.33% - 20px);
  background-color: #d5baff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 50px;
  max-width: 400px;
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
  color: #666;
  
}
</style>