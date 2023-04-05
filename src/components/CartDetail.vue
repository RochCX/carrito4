<template>
<!-- <div class="container">
    <div class="row d-flex justify-content-end">
  <div class="accordion-item col-3">
      <button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">	
        &#x1F6D2;</button>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
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
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </tbody>

            </table>
        </div>
    </div>
    </div>
</div>
</div> -->

<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Carrito</button>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Mi Carrito</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
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
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
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

  </template>
  
  <script>
  export default {

  }
  </script>
  

  <style scoped>
  .summary{
    text-align: left;
  }
  </style>