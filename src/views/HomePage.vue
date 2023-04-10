<template>
  <!-- poner el router-view? -->
  <NavBar></NavBar>
  <CartDetail></CartDetail>
  <Products/>
</template>

<script>
import Products from "@/components/Products.vue"
import NavBar from "@/components/NavBar.vue"
import CartDetail from "@/components/CartDetail.vue"

export default {
  name: 'HomePage',
  components: {
    NavBar,
    CartDetail,
    Products
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>