<template>
    <div class="container">
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th style="width: 10%">#</th>
                    <th style="width: 30%">Name</th>
                    <th style="width: 20%">Image</th>
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
                    <td>
                        <img :src="product.image[0]" height="40" width="50" />
                    </td>
                    <td>{{ "$" + product.price }}</td>
                    <td>
                        <input type="number" class="form-control" min="1" :value="product.quantity"
                            @change="updateQuantity(product.id, $event)" />
                    </td>
                    <td>{{ "$" + (product.price * product.quantity).toFixed(2) }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeItem(index)">Remove</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="text-end fs-5">
                        <strong>Grand Total</strong>
                    </td>
                    <td colspan="2" class="text-start fs-5">
                        <strong>{{ "$" + totalPrice }}</strong>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    name: "CartItem",

    data() {
        return {
            cartItem: this.$store.state.cartItem,
        };
    },

    computed: {
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

        updateQuantity(id, event) {
            let quantity = Number(event.target.value);
            this.$store.dispatch("updateQuantity", { id, quantity });
        },
    },
};
</script>
