<template>
  <div class="col-4 profile-feed">
      <div class="imagen-profile-feed"></div>
      <div class="foto-perfil">
          <img src="../assets/daredevil.jpg" alt="">
          <p>Matt Murdock</p>
          <span>Front-End Developer</span>
        <BotonesPerfil contenidoBoton="Mi perfil"/>
        <BotonesPerfil contenidoBoton="Mis aplicaciones"/>
        <BotonesPerfil contenidoBoton="Propuestas"/>
      </div>
      </div>
    
</template>

<script>
import BotonesPerfil from '../components/BotonesPerfil.vue'
export default {
    name:'ProfileSection',
    components:{
        BotonesPerfil
    },
}
</script>

<style>
.profile-feed{
    height:90vh;
    background: #ffff;
    padding-left:0rem;
    padding-right:0rem;
}
.imagen-profile-feed{
    background-image: url('../assets/banner.png');
    height: 20vh;
    background-size: cover;
    background-position: center;
}
.foto-perfil{
    text-align: center;
    position: relative;
    top: -5rem;
}
.foto-perfil img{
    height:9rem;
    width:9rem;
    border-radius:50%;

}
</style>