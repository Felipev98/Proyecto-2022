<template>
<section class="nuevaoferta">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="box">
                <form class="input" @submit.prevent="newOffer">
                    <input type="text" v-model="CompanyName" placeholder="Nombre de su empresa">
                    <input type="file" @change="uploadFile" ref="file" placeholder="Logo">
                    <input type="text" v-model="title" class="Título del Bootcamp" placeholder="Título Bootcamp">
                    <input type="text" v-model="description" class="Título del Bootcamp" placeholder="Descripción del Bootcamp">
                    <input type="radio" v-model="Tech" value="Front-End" class="Título del Bootcamp"> Front-End
                    <input type="radio" v-model="Tech" value="Back-End" class="Título del Bootcamp"> Back-End
                    <input type="radio" v-model="Tech" value="FullStack" class="Título del Bootcamp"> FullStack
                         <div class="boton-login">
                    <button type="submit" class="text-center">Iniciar Sesión</button>
                </div>
                </form>
                <div v-if="$store.state.Business">
                    <router-link class="links-registro" to="/profileinfo/business">Perfil Empresa</router-link>
                </div>
                <div class="registro-texto">
                    <p>¿Aún no tienes cuenta? Registrate como <router-link class="links-registro" to="/">Desarrollador</router-link> o <router-link class="links-registro" to="/">Empresa</router-link></p>
                </div>
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
            logo:null,
            CompanyName:'',
            title:'',
            description:'',
            Tech:''

        }
    },
     methods:{
        uploadFile() {
        this.logo = this.$refs.file.files[0];
        console.log(this.logo)
      },
      
        newOffer(e){
                // const formData = new FormData();
                // let uploadimage = formData.append('file', this.logo);
            const data ={
                companyName:this.companyName,
                title:this.title,
                description:this.description,
                // Tech:this.Tech,

                logo:this.logo
            }
            axios.post('api/v1/JobOffer/',data)
            .then(response =>{
            this.$router.push('/feed')
            }).catch(error =>{
                console.log(error)
            })
        }
    }
    
}
</script>
<style >
.nuevaoferta{
background: linear-gradient(to bottom, #838EF3, #101B67) ;
height:100vh;
}
</style>