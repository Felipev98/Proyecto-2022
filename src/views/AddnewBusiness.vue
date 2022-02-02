<template>
<section class="nuevaoferta">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="box-new">
                <h2 class="text-center">Cargar Nuevo Perfil Empresa</h2>
                <form class="input-agregar" @submit.prevent="newBusiness">
                    <input type="text" v-model="businessName" placeholder="Nombre de su empresa">
                    <textarea type="text" v-model="BusinessBio" class="Título del Bootcamp" placeholder="Información empresa">
                    </textarea>
                    <input type="text" v-model="businessLink" class="Título del Bootcamp" placeholder="Link Contacto">
                     <label for="logo">Cargue Logo de su Bootcamp o Empresa</label>
                    <input type="file" name="profile_pic" aria-label="profile_pic" @change="uploadFile" ref="file">
                     <label for="logo">Banner para perfil</label>
                    <input type="file" name="banner_pic" aria-label="Logo" @change="uploadFilee" ref="files">
                         <div class="boton-login">
                    <button type="submit" class="text-center">Cargar perfil empresa</button>
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
            profile_pic:'',
            businessName:'',
            businessLink:'',
            BusinessBio:'',
            banner_pic:''
        }
    },
     methods:{
        uploadFile() {
        this.profile_pic = this.$refs.file.files[0];
        console.log(this.profile_pic)
      },
              uploadFilee() {
        this.banner_pic = this.$refs.files.files[0];
        console.log(this.banner_pic)
      },
        newBusiness(e){
                const formData = new FormData();
                formData.append('businessName', this.businessName);
                formData.append('BusinessBio', this.BusinessBio);
                formData.append('businessLink', this.businessLink);
                formData.append('profile_pic', this.profile_pic);
                formData.append('banner_pic', this.banner_pic);
            // const data ={
            //     companyName:this.companyName,
            //     title:this.title,
            //     description:this.description,
            //     // Tech:this.Tech,
            // }
            axios.post('api/v1/Profile/',formData)
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
.box-new{
    height: auto;
    background: #CACEEE;
    margin-top: 2rem;
    padding: 1rem;
}
.input-agregar{
    display: flex;
    flex-direction: column;
}
.input-agregar input{
    margin-top: 1rem;
    padding: 1rem;
    outline: none;
    border: none;
}
.input-agregar textarea{
    margin-top: 1rem;
    border: none;
    outline: none;
    height: 6rem;
}
.boton-login{
    text-align: center;
}
.boton-login button{
    background:#101B67;
    color: #ffff;
    width: 40%;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
}
@media screen and (max-width:700px){
    .boton-login button{
        width: 60%;
    }
}
</style>