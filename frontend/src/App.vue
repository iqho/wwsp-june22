<template>
  <div class="row g-0">
    <div class="col-12 border-bottom border-gray">
      <Navbar></Navbar>
    </div>
    <div class="col-12 p-3 mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./partials/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
