<template>
    <div>
        <div class="row p-2 mb-2">
            <div class="col-12 text-center border-bottom border-gray">
                <h3> List of All Products</h3>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div v-for="(product, index) in products" :key="index">
                <div class="card h-100">
                    <router-link :to="`/product/${product.id}`" :id="product.id">
                        <img :src="product.images[0]" class="card-img-top" :alt="product.title" style="height:200px">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title"><router-link :to="`/product/${product.id}`" :id="product.id" class="router-link">{{ product.title.substring(0, 50) }}</router-link></h5>
                        <p class="card-text fs-6">{{ product.description.substring(0, 80) }}</p>
                    </div>
                    <div class="card-footer text-center fs-5 p-1">
                        <small class="text-primary float-start ms-2">Price: ${{ product.price }}</small>
                        <button class="btn btn-outline-danger btn-sm float-end" v-on:click="addToCart(product.id)">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    mounted() {
        this.$store.dispatch("fetchProducts");
    },

    computed: {
        products() {
            return this.$store.getters.products;
        }
    },

    methods: {
        addToCart(id) {
            this.$store.dispatch("addItem", id);
        }
    },

}
</script>

<style scoped>
.router-link {
    text-decoration: none;
}
</style>