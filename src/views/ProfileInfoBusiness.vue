<template>
<section class="section-login">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="box">
                <div class="imagen-login">
                    <img src="../assets/inicio-sesion.svg" alt="">
                </div>
                <form class="input" @submit.prevent="UpdateProfile">
                    <input type="text" v-model="BusinessName" placeholder="Nombre de empresa">
                        <textarea type="text" v-model="BusinessBio" class="BusinessInfo" placeholder="Información empresa" cols="30" rows="10"></textarea>
                    <input type="text" v-model="BusinessLink" class="password" placeholder="Linkedin Empresa">
                         <div class="boton-login">
                    <button type="submit" class="text-center">Actualizar info</button>
                </div>
                </form>
            </div>
            
        </div>
    </div>
</div>
</section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            BusinessName: '',
            BusinessBio: '',
            BusinessLink: '',
        }
    },
     methods:{
         
          UpdateProfile(e){
        let axiosConfig = {
        headers: {
      'Content-Type': 'application/json',
  }
};
            const data ={
                businessName:this.BusinessName,
                BusinessBio:this.BusinessBio,
                businessLink:this.BusinessLink,
            }
            axios.post('/api/v1/Profile/',data,axiosConfig)
            .then(response =>{
                console.log(response.data.url)
            }).catch(error =>{
                console.log(error)
            })
        }

    }
}
</script>

<style >
.section-login{
height:100vh;
background: linear-gradient(to bottom, #838EF3, #101B67);
}
.box{
    background: #CACEEE;
    height: auto;
    width: 50%;
    margin: auto;
    margin-top: 6rem;
    padding: 1.9rem;
    border-radius: 1.9rem;
}
.imagen-login{
    text-align: center;
}
.imagen-login img{
    width: 10rem;
}
.input input{
    padding: 0.9rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    width: 100%;
}
.input input:last-child{
    margin-top: 1rem;
}
.boton-login{
    width: 11rem;
    padding: 0.7rem;
    text-align: center;
    margin: auto;
    margin-top: 0.5rem;
}
.boton-login button{
    background: #FF1E72;
    color: #ffff;
    padding: 0.8rem;
    border: none;
    border-radius: 0.5rem;
    width: 10rem;
}
.links-registro{
    color:#1B2675;
    font-weight: 700;
    text-decoration: none;
}
.password{
    margin-top: 1rem;
}
.BusinessInfo{
    width: 100%;
    height: 6rem;
    margin-top: 1rem;
    outline: none;
    border: none;
}
</style>