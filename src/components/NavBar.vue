<template> 
    <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- <div class="container">
            <a class="navbar-brand" href="#">
              <img src=""./assets/logo2.png"" alt="" width="80" height="48">
            </a>
          </div> -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/HomePage" class="nav-link active" aria-current="page">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/ProductsPage" class="nav-link active">Productos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/LoginPage" class="nav-link active">Login</router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
              <button class="btn btn-outline-dark" type="submit">Carrito</button>
            </form>
          </div>
      </nav>
    </template>
    
    <script>
    import { RouterLink } from 'vue-router'
    export default {
      components: {
        RouterLink,
      },
    }
    </script>