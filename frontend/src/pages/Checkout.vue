<template>
  <div>
    <h3>Checkout ( {{ $store.getters.cartCount }} )</h3>
    <div class="row g-0">
        <div class="col-md-8">
            <CartItem/>
        </div>
        <div class="col-md-4">
            <div class="container ms-2">

                <div class="card">
                    <div class="card-header">
                        Shipping Information
                    </div>
                    <div class="card-body">

                        <div class="form-group mb-2">
                            <label for="fullName">Full Name</label>
                            <input type="text" class="form-control" placeholder="Full Name" id="fullName" v-model="fullName" autofocus required>
                        </div>

                        <div class="form-group mb-2">
                            <label for="userEmail" class="form-label">Email Address</label>
                            <input type="email" class="form-control" placeholder="Email Address" id="userEmail" v-model="userEmail" required>
                        </div>

                        <div class="form-group mb-2">
                            <label for="userAddress" class="form-label">Full Address</label>
                            <textarea class="form-control" placeholder="Full Address" v-model="userAddress" required></textarea>
                        </div>

                    </div>   
                </div>

                <div class="card">
                    <div class="card-header">
                        Payment Method
                    </div>
                    <div class="card-body">
                        <div class="form-group mb-2">
                            <label for="userPaymentMethod" class="form-label">Payment Method</label>
                            <select class="form-control" id="userPaymentMethod" v-model="userPaymentMethod" required>
                                <option value="">Select Payment Method</option>
                                <option value="mobile-banking">Mobile Banking</option>
                                <option value="credit">Bank Deposit</option>
                                <option value="credit">Credit Card</option>
                                <option value="debit">Debit Card</option>
                                <option value="paypal">Paypal</option>
                            </select>
                        </div>
                    </div>   
                </div>

                <!-- <div class="card">
                    <div class="card-header">
                        User Information
                    </div>
                    <div class="card-body">
                        <h6>User Details</h6>
                    </div>   
                </div> -->

                <div class="row g-0 mt-3">
                    <div class="col-md-12 text-center">
                        <button class="btn btn-lg btn-primary">Confirm Order</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';
export default {
    name: 'Checkout',
    data() {
        return {
            cartCount: 0,
            fullName: '',
            userEmail: '',
            userAddress: '',
            userPaymentMethod: '',
        }
    },

    components: {
        CartItem
    },

    // computed: {
    //     // cartCount(){
    //     //         return this.$store.getters.storeCart.length;
    //     // }
    // }

}
</script>

<style>

</style>