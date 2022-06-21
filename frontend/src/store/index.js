import { createStore } from "vuex";

import axios from "axios";

export default createStore({
  state: {
    products: [],
    storeCart: JSON.parse(localStorage.getItem("cart")) || [],
  },

  getters: {
    products: (state) => {
      return state.products;
    },

    storeCart: (state) => {
      return state.storeCart;
    },

    cartCount: (state) => {
      return state.storeCart.length;
    },

    totalAmount: (state) => {
      state.total = state.storeCart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      return state.total.toFixed(2);
    },
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    ADD_ITEM(state, id) {
      const record = state.storeCart.find((p) => p.id === id);
      const item = state.products.find((p) => p.id === id);

      if (!record) {
        state.storeCart.push({
          id: id,
          title: item.title,
          price: item.price,
          image: item.images,
          quantity: 1,
        });
      } else {
        record.quantity++;
      }
    },

    REMOVE_ITEM(state, index) {
      state.storeCart.splice(index, 1);
    },

    UPDATE_QUANTITY(state, item) {
      const record = state.storeCart.find((p) => p.id === item.id);
      if (record) {
        record.quantity = item.quantity;
      }
    },

    CLEAR_CART(state) {
      state.storeCart = [];
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        commit("SET_PRODUCTS", response.data.products);
      } catch (error) {
        // console.log(error)
      }
    },

    addItem(context, id) {
      context.commit("ADD_ITEM", id);
      localStorage.setItem("cart", JSON.stringify(context.state.storeCart));
    },

    removeItem(context, index) {
      context.commit("REMOVE_ITEM", index);
      localStorage.setItem("cart", JSON.stringify(context.state.storeCart));
    },

    updateQuantity(context, item) {
      context.commit("UPDATE_QUANTITY", item);
      localStorage.setItem("cart", JSON.stringify(context.state.storeCart));
    },

    clearCart(context) {
      context.commit("CLEAR_CART");
      localStorage.setItem("cart", JSON.stringify(context.state.storeCart));
    },
  },
});
