<template>
    <div>
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th style="width: 10%">#</th>
                    <th style="width: 30%">Name</th>
                    <th style="width: 10%">Price</th>
                    <th style="width: 10%">Quantity</th>
                    <th style="width: 10%">SubTotal</th>
                    <th style="width: 10%">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in cart" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ product.title }}</td>
                    <td>${{ product.price }}</td>
                    <td>
                        <input type="number" class="form-control" min="1" :value="product.quantity"
                            @change="updateQuantity(product.id, $event)" />
                    </td>
                    <td>${{ product.price * product.quantity }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeItem(index)">Romove</button>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" class="text-end fs-5"><strong>Grand Total</strong></td>
                    <td colspan="2" class="text-start fs-5">
                        <strong>{{ "$" + totalPrice }}</strong>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6" class="text-end">
                        <button class="btn btn-primary" @click="goToCart()">Cart Page</button>
                        <button class="btn btn-success ms-1" @click="goToCheckout()">
                            Checkout Page
                        </button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
export default {
    name: "NavbarCart",

    computed: {
        cartCount() {
            return this.$store.getters.storeCart.length;
        },

        totalPrice() {
            return this.$store.getters.totalAmount;
        },

        cart() {
            return this.$store.getters.storeCart.map((cartItems) => {
                return this.$store.getters.storeCart.find((itemForSale) => {
                    return cartItems.id === itemForSale.id;
                });
            });
        },
    },

    methods: {
        removeItem(index) {
            this.$store.dispatch("removeItem", index);
        },

        goToCart() {
            this.$router.push("/cart");
        },

        goToCheckout() {
            this.$router.push("/checkout");
        },

        updateQuantity(id, event) {
            let quantity = Number(event.target.value);
            this.$store.dispatch("updateQuantity", { id, quantity });
        },
    },
};
</script>
