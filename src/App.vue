<template>
  <CartDetail/>
</template>

<script>
import CartDetail from './components/CartDetail.vue'

export default {
  name: 'App',
  components: {
    CartDetail
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
