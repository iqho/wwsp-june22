<template>
    <div>
        <div class="row g-0">
            <div class="col-12 text-end p-2">
                <router-link to="/products" class="btn btn-success">Back to All Products</router-link>
            </div>
        </div>
        <div class="card h-100" v-if="product">
            <div class="card-body">
                <div class="row g-0">
                    <div class="col-4">
                        <img :src="product.images[0]" class="card-img-top" :alt="product.title" style="height:200px" />
                    </div>
                    <div class="col-8 px-3 py-1">
                        <h3 class="card-title">{{ product.title.substring(0, 50) }}</h3>

                        <div class="row g-0">
                            <div class="col-12">
                                <div class="text-primary fs-5">Price: ${{ product.price }}</div>
                                <button class="btn btn-outline-danger" v-on:click="addToCart(product.id)">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                                <p class="card-text fs-6">{{ product.description.substring(0, 80) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ProductDetails',
    props: {
        id: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            product: '',
        }
    },

    mounted() {
        this.$store.dispatch("fetchProducts");
        axios.get('https://dummyjson.com/products/' + this.id).then(response => (this.product = response.data));
    },

    methods: {
        addToCart(id) {
            this.$store.dispatch("addItem", id);
            //console.log(id);
        }
    },
}
</script>