<template>
  <NavBar />
  <router-view />
  <h2>Bienvenidos</h2>
  <!-- poner el router-view? -->
  <CartDetail/>
  <HomePage/>

</template>

<script>
import HomePage from "@/Home.vue"
import CartDetail from "./components/CartDetail.vue"
import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    HomePage,
    CartDetail,
    NavBar
  },
  methods:{
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
