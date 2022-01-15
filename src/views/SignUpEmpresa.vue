<template>
<section class="section-login">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="box">
                <div class="imagen-login">
                    <img src="../assets/inicio-sesion.svg" alt="">
                </div>
                <form class="input" @submit.prevent="submitForm">
                    <input v-model="username" class="password" type="text" placeholder="Nombre de usuario">
                    <input v-model="email" type="text" class="password" placeholder="Email">
                    <input v-model="password" type="password" class="password" placeholder="Contraseña">
                      <div class="boton-login">
                        <button type="submit">Registrarse</button>
                </div>
                </form>
                <div class="registro-texto text-center">
                    <p>¿Ya tienes una cuenta?<router-link class="links-registro" to="/">Iniciar Sesión</router-link></p>
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
            email:'',
            password:'',
            username:'',
        }
    },

    methods:{
        submitForm(e){
            const data ={
                username:this.username,
                email:this.email,
                password:this.password,
            }
            axios.post('/api/v1/users/',data)
            .then(response =>{
                this.$router.push('/login')
               this.$store.commit('setBusiness',true)
            localStorage.setItem('Business','Business')
                console.log(response)

            }).catch(error =>{
                console.log(error)
            })
        },
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
    margin-top: 5rem;
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
</style>