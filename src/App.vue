<template>
  <h2>Bienvenidos</h2>
  <!-- poner el router-view? -->
  <HomePage/>

</template>

<script>
import HomePage from "@/Home.vue"

export default {
  name: 'App',
  components: {
    HomePage
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
