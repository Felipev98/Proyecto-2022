<template>
  <div class="col-4 profile-feed">
      <div class="imagen-profile-feed"></div>
      <div class="foto-perfil">
          <img :src="picture" alt="">
          <p>{{ProfileB}}</p>
        <BotonesPerfil contenidoBoton="Mi perfil"/>
        <BotonesPerfil contenidoBoton="Mis aplicaciones"/>
        <BotonesPerfil contenidoBoton="Propuestas"/>
      </div>
      </div>
    
</template>

<script>
import axios from 'axios'
import BotonesPerfil from '../components/BotonesPerfil.vue'
export default {
    name:'ProfileSection',
    components:{
        BotonesPerfil
    },
    data() {
        return {
            ProfileB:null,
            picture:null
        }
    },
    created(){
        this.getProfileB()
    },
    methods:{
            async getProfileB(){
           let getProfileB = await axios.get('api/v1/Profile/1/')
           this.ProfileB = getProfileB.data.businessName
           this.picture = getProfileB.data.profile_pic

        },
    }
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