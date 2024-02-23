<script>
import store from "@/store";

export default {
    computed: {
        store() {
            return store
        }
    },
    created() {
        this.$store.commit('loadOrder');
    },
}
</script>

<template>
    <div>
        <router-link to="/">Вернуться на главную</router-link>
    </div>
    <h2 v-show="store.state.Orders && store.state.Orders.length !== 0">Оформленные заказы:</h2>
    <div class="orders">
        <div v-show="store.state.Orders && store.state.Orders.length === 0">
            <h2>У вас нет заказов!</h2>
        </div>
        <div class="order" v-for="(order, index) in store.state.Orders" :key="order.id" v-if="store.state.Orders">
            <p>Заказ №: {{ order.id }}</p>
            <div class="products" v-for="product in order.products" :key="product">
                <p>Товар ID: {{ product }}</p>
            </div>
            <p>Цена заказа: {{ order.order_price }} руб</p>
        </div>
    </div>
</template>


<style>
.orders {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
    max-width: 800px;
}

.order {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 55px;
    background-color: #f9f9f9;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.order:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
}

.order p {
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-weight: 600;
}

.order p {
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    margin: 20px 0;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.products p {
    flex: 0 0 calc(33.33% - 20px);
    margin: 10px 0;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    color: #6dbb8d;
}

@keyframes blink {
    0% {opacity: 1;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
}

</style>