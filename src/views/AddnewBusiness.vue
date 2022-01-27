<template>
<section class="nuevaoferta">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="box-new">
                <form class="input-agregar" @submit.prevent="newOffer">
                    <input type="text" v-model="companyName" placeholder="Nombre de su empresa">
                    <textarea type="text" v-model="BusinessBio" class="Título del Bootcamp" placeholder="Información empresa">
                    </textarea>
                    <input type="text" v-model="businessLink" class="Título del Bootcamp" placeholder="Link Contacto">
                     <label for="logo">Cargue Logo de su Bootcamp o Empresa</label>
                    <input type="file" name="logo" aria-label="Logo" @change="uploadFile" ref="file">
                     <label for="logo">Banner para perfil</label>
                    <input type="file" name="logo" aria-label="Logo" @change="uploadFilee" ref="file">
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
            logo:'',
            companyName:'',
            title:'',
            description:'',
            TechStack:''
        }
    },
     methods:{
        uploadFile() {
        this.logo = this.$refs.file.files[0];
        console.log(this.logo)
      },
              uploadFilee() {
        this.logo = this.$refs.file.files[0];
        console.log(this.logo)
      },
        newOffer(e){
                const formData = new FormData();
                formData.append('companyName', this.companyName);
                formData.append('title', this.title);
                formData.append('description', this.description);
                formData.append('logo', this.logo);
                formData.append('TechStack', this.TechStack);
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
</style>