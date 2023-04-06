<template>
    <section style="background-color: #eee;">
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>Productos</strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" v-for="caja in productos" :key="caja.id">
        <div class="card" >
          <button :id=caja.id @click="enviarProducto(caja.id)">Agregar</button>
          <!-- <p> La id de este producto es {{ caja.id }}</p> -->
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img :src="caja.imagen"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">{{caja.nombre}}</h5>
            </a>
            <a>
              <p>{{caja.descripcion}}</p>
            </a>
            <h6 class="mb-3">${{caja.precio}}</h6>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
</template>


<script>
import {ProductService} from "../services/ProductService"

export default {
  name: 'ProductosAll',
  data: function(){
    return{
        productos:[],
        errorMessage: 'mal'
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
    enviarProducto(id){
      let busca = this.productos.find(element => element.id == id);
      localStorage.setItem("recibe", JSON.stringify(busca));
    }
  },
};
</script>

<style scoped>

</style>