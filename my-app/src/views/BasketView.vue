<script>
import store from "@/store";

export default {
    computed: {
        store() {
            return store
        }
    },
    created() {
        this.$store.commit('loadBasketCart');
    },
}
</script>

<template>
    <div>
        <router-link to="/">Вернуться на главную</router-link>
    </div>
    <h2 v-show="store.state.basketCart && store.state.basketCart.length !== 0">Товары в корзине:</h2>
    <div class="cart">
        <div v-show="store.state.basketCart && store.state.basketCart.length === 0">
            <h2 class="msg">На данный момент товары в корзине отсутствуют</h2>
        </div>
        <div class="item" v-for="(item, index) in store.state.basketCart" :key="item.id" v-if="store.state.basketCart">
            <p>{{ item }}</p>
            <p>{{ item.name }}</p>
            <p>{{ item.description }}</p>
            <p>{{ item.price }} руб</p>
            <div class="quantityItem">
                <button @click="store.commit('deleteProductFromBasket', item)" >-</button>
                <button @click="store.commit('addProductToBasket', item)">+</button>
                <p>Количество: {{ item.quantity }}</p>
            </div>
            <button class="deleteButton" @click="store.commit('deleteProductFromBasket', item)">Удалить товар</button>
        </div>
    </div>
    <div class="cart-header">
        <a href="#" class="cartButton" v-show="store.state.basketCart && store.state.basketCart.length > 0">Оформить
            заказ</a>
    </div>
</template>


<style>
.cart {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
}

.deleteButton {
    width: 250px;
    height: 30px;
    border-radius: 20px;
    color: #6dbb8d;
    border: 2px solid #6dbb8d;
    font-weight: 600;
    transition: transform 0.3s ease;
}

.deleteButton:active {
    transform: scale(0.95);
}

.item {
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

.item:hover {
    border-color: #6dbb8d;
}

.quantityItem {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.cartButton {
    border-radius: 20px;
    color: #6dbb8d;
    border: 3px solid #6dbb8d;
    font-weight: 600;
    transition: transform 0.3s ease;
    text-decoration: none;
    padding: 10px 20px;
}

.cartButton:active {
    transform: scale(0.95);
}
</style>