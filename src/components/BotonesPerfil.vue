<template>
  <div class="boton-profile">
      <button>{{contenidoBoton}}</button>
  </div>
</template>

<script>
export default {
          props:{
        contenidoBoton:{
            type:String,
            default:'Mi perfil'
        }
    },
    name:'BotonesPerfil',

}
</script>

<style>
.boton-profile{
  margin-top: 1rem;
}
.boton-profile button{
  width: 70%;
  padding: 0.6rem;
  border-radius: 0.9rem;
}
</style>