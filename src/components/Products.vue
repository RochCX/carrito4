<template>
<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Mi Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <button class="actualizar" @click="escribirProducto()"></button>
        <table class="table table-bordered">
                <thead class=" table-success">
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Valor Total</th>
                    <th scope="col">Modificar</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="carro in carrito" :key="carro.nombre">
                        <td>{{carro.nombre}}</td>
                        <td>{{ carro.cantidad }}</td>
                        <td>{{carro.precio}}</td>
                        <td>mod</td>
                    </tr>
                </tbody>
                </table>
                <div class="summary">
                    <p>Subtotal:</p>
                    <p>Envío:</p>
                    <p>Total:</p>
                </div>
                <div class="d-grid gap-2 col-10 mx-auto">
                    <button class="btn btn-success" type="button">Finalizar mi compra</button>
                </div>
      </div>
    </div>


    <section style="background-color: #eee;">
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>Productos</strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" v-for="caja in productos" :key="caja.id">
        <div class="card" >
          <button :id=caja.id @click="agregarProducto(caja.id)">Agregar</button>
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
        errorMessage: 'mal',
       
    };
  },
  created: async function() {
    try {
      let response = await ProductService.ProductAll();
      console.log(response)
      this.productos = response;
  
    } catch (error) {
      this.errorMessage = error;
    }
  },
  methods:{

    agregarProducto: function (producto){
      let newProductos= [];
      console.log(producto)
      let fila = this.productos.map(e => e.id).indexOf(producto);
      let product ={
                id: this.productos[fila].id,
                name: this.productos[fila].nombre,
                description: this.productos[fila].descripcion,
                price: this.productos[fila].precio,
                // image: producto.image,
                cantidad: 1,
            }
      newProductos.push(product); 
      console.log(newProductos)
 
    }




    }
  }

</script>

<style scoped>
</style>