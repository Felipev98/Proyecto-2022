<template>
  <div class="col-6 job-feed">
        <div class="container">
            <div class="boton-bootcamp">
           <router-link to="agregarJobOffer"><button>Agregar Bootcamp</button></router-link> 
            </div>
            <div class="filter-front">
                <div class="front">
                    <span>Front-End</span>
                </div>
                <div class="back">
                    <span>Back-End</span>
                </div>
            </div>         
            <div v-for="bootcamp in bootcamps" :key="bootcamp.id" class="card-joboffer">
                    <div class="bootcamp-image">
                        <img :src="bootcamp.logo" alt="">
                        <span class="company-name">{{bootcamp.companyName}}</span>
                </div>
                <span>{{bootcamp.title}}</span>
                <p>{{bootcamp.description}}</p>
                <p>{{bootcamp.TechStack}}</p>
            </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            bootcamps:null,
        }
    },
    created() {
        this.getBootcamp()
        
    },
    methods:{
       async getBootcamp(){
           let getBootcamp = await axios.get('api/v1/JobOffer/')
           this.bootcamps = getBootcamp.data
        },

        
    }

}
</script>

<style>
.job-feed{
    background-color:#F7F6FB;
    height:90vh;
    overflow: hidden;
    overflow-y: auto;
}
.boton-bootcamp{
    text-align:center;
}
.boton-bootcamp button{
    width:100%;
    padding: 1.1rem;
    margin-top: 2rem;
    background-color: #101B67;
    border: none;
    color:#ffff;
    border-radius: 1rem;
}
.filter-front{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    background: #ffff;
    padding: 1.1rem;
    border-radius: 1.1rem;
}

/* Estilos para componente */
.card-joboffer{
    background-color: #ffff;
    border-radius: 1.1rem;
    height: auto;
    margin-top: 1rem;
    padding: 1rem;
}
.bootcamp-image img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}
span.company-name{
    margin-left:1rem;
}
</style>