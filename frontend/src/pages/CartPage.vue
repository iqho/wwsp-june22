<template>
    <div class="container">
        <h3>Shopping Cart ( {{ cartCount }} )</h3>
        <CartItem />
        <div class="row g-0">
            <div class="col-12 text-center">
                <a class="btn btn-danger" @click="clearCart()">Remove All Cart Item</a>
                <a class="btn btn-success ms-2" @click="goToCheckout()">Checkout</a>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";

export default {
    name: "CartPage",

    components: {
        CartItem,
    },

    computed: {
        cartCount() {
            return this.$store.getters.storeCart.length;
        },
    },

    methods: {
        goToCheckout() {
            this.$router.push("/checkout");
        },

        clearCart() {
            this.$store.dispatch("clearCart");
        },
    },
};
</script>

<style>
</style>
