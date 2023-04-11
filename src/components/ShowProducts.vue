<template>
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>Productos</strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" v-for="producto in productos" :key="producto.id">
        <div class="card" >
          <button class = "btn btn-success"  @click="agregarProducto(producto.id)">Agregar</button>
          <img :src="producto.imagen" class="w-100" />
          <div class="card-body">
              <h5 class="card-title mb-3">{{producto.nombre}}</h5>
              <p>{{producto.descripcion}}</p>
            <h6 class="mb-3">${{producto.precio}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script >
import {ProductService} from "../services/ProductService"

export default {
  data: function(){
    return{
        productos: [],
        arrayCarrito:  [],
    };
  },
  created: async function() {
    try {
      let response = await ProductService.ProductAll();
      this.productos = response;
  
    } catch (error) {
      this.errorMessage = error;
    }
  },
  methods:{
    
    agregarProducto(producto){
      // const productosParaCarrito = JSON.parse(JSON.stringify(this.productos));
      // let fila = productosParaCarrito.map(    => e.id).indexOf(producto);
      console.log(producto)


    }
    }
  }

</script>

<style scoped>
</style>