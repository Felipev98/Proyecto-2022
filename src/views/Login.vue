<template>
<section class="section-login">
a
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="box">
                <div class="imagen-login">
                    <img src="../assets/inicio-sesion.svg" alt="">
                </div>
                <form class="input" @submit.prevent="submitForm">
                    <input type="text" v-model="username" placeholder="Nombre de usuario o Email">
                    <input type="password" v-model="password" class="password" placeholder="Contraseña">
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
            username: '',
            password: ''
        }
    },
     methods:{
        submitForm(e){
            const data ={
                username:this.username,
                password:this.password,
            }
            axios.post('/api/v1/token/login',data)
            .then(response =>{
                const access = response.data.access
                const refresh = response.data.refresh
                this.$store.commit('setAccess',access)
                this.$store.commit('setRefresh',refresh)
                axios.defaults.headers.common['Authorization'] = 'JWT' + access
                localStorage.setItem('access',access)
                localStorage.setItem('refresh',refresh)
                console.log(access)
                if(this.$store.state.Business){
                    this.$router.push('/empresa')
                }else{
                this.$router.push('/profileinfo')
                }
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
    height: 28rem;
    width: 50%;
    margin: auto;
    margin-top: 7rem;
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