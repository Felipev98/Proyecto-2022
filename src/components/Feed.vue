<template>
  <div class="col-4 job-feed">
        <div class="container">
            <div class="boton-bootcamp">
            <button>Agregar Bootcamp</button>
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
                <span>{{bootcamp.title}}</span>
            </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            bootcamps:null
        }
    },
    created() {
        this.getBootcamp()
        
    },
    methods:{
       async getBootcamp(){
           let getBootcamp = await axios.get('api/v1/JobOffer/')
           this.bootcamps = getBootcamp.data
           console.log(data)
        }
    }

}
</script>

<style>
.job-feed{
    background-color:#F7F6FB;
    height:90vh;
    width: 28rem;
}
.boton-bootcamp{
    text-align:center;
}
.boton-bootcamp button{
    width:100%;
    padding: 1.1rem;
    margin-top: 2rem;
    background-color: blue;
    border: none;
    color:#ffff;
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
    height: 9rem;
    margin-top: 1rem;
}
</style>