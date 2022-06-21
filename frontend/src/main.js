import { createApp } from 'vue'
import App from './App.vue'

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import router from './router';

import store from './store';

//import { createPinia } from 'pinia'
//const pinia = createPinia();


  createApp(App)
  .use(router)
  .use(store)
  //.use(pinia)
  .mount('#app')
