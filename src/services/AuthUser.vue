<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 ">
          <div class="card">
            <div class="card-body ">
              <div v-if="isLoggedIn">
                <p class="h3 fw-bold text-success">Bienvenido:</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic impedit modi nulla
                  placeat quas quo
                  reprehenderit. Architecto corporis cupiditate eaque enim et perspiciatis quasi ut veritatis. Dolores,
                  quo unde?</p>
              </div>
              <div v-if="!isLoggedIn">
                <p class="h3 fw-bold">Inicia sesión:</p>
                <form action="" v-on:submit.prevent="login()"> 
                    <label for="correo" > Correo:
                        <input type="text" v-model="correo" id="correo">
                    </label>    
                    <label for="contrasena"> Contraseña: 
                        <input type="text" v-model="contrasena" id="contrasena">
                    </label>
                    <button v-if="!isLoggedIn" class="btn btn-success btn-sm m-1" type="submit" >Login</button>
                    <button v-if="isLoggedIn" class="btn btn-danger btn-sm m-1" @click="logout()">LogOut</button>
                </form>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AuthUser",
    data: function() {
      return {
        isLoggedIn: false,
        correo: '',
        contrasena: ''
        };
    },
    methods: {
        login() {
            return new Promise((resolve, reject) => {
                if (this.correo === 'usuario1@mitienda.com' && this.contrasena === 'password') {
                    const user = {
                        nombre: 'Telovendo',
                        correo: this.correo,
                    };
                    resolve(user);
                    console.log(user);
                    this.isLoggedIn = true;
                    // window.location.href = '/inicio'
                } else {
                    reject(new Error('Correo electronico o contraseña incorrectos'))
                }
        }
        
        
        
        );         
        },
        
        logout: function() {
            this.isLoggedIn = false;
        },
        
      }
      
    }

  </script>
  
  <style scoped>
    label{
        display: flex;
        justify-content: space-between;
        margin: 1em;
    }

    .btn{
        padding: .5em 2em;
        border-radius: 10px;
    }

    h3{
        color: black;
    }


  </style>