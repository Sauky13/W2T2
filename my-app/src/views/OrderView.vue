<script>
import store from "@/store";

export default {
    computed: {
        store() {
            return store
        }
    },
    methods: {
        calculateTotalPrice(order) {
            let totalPrice = 0;
            for (let i = 0; i < order.length; i++) {
                totalPrice += order[i].price * order[i].quantity;
            }
            return totalPrice;
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
            <h2>На данный момент у вас нет заказов!</h2>
        </div>
        <div class="order" v-for="(order, index) in store.state.Orders" :key="order.id" v-if="store.state.Orders">
            <p>Заказ №: {{ order.id }}</p>
            <div class="products" v-for="product in order.products" :key="product">
                <p>Товар ID: {{ product }}</p>
                <p>{{ order.order_price }} руб</p>
            </div>
            <p>Цена заказа: {{ order.order_price }} руб</p>
        </div>
    </div>
</template>




<style>
</style>