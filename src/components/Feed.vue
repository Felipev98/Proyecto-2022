<template>
  <div class="col-6 job-feed">
        <div class="container">
            <div class="boton-bootcamp">
            <template v-if="$store.state.Business">
            <b-nav-item>
           <router-link to="agregarJobOffer"><button>Agregar Bootcamp</button></router-link> 
            </b-nav-item>
          </template>
            </div>
            <div class="filter-front">
                <div class="front">
                <input type="radio" v-model="filter" value="Front-end">
                <span class="tech-text">Front-End</span>
                </div>
              
                <div class="back">
                <input type="radio" v-model="filter" value="Back-end">
                <span class="tech-text">Back-End</span>
                </div>
                 <div class="back">
                <input type="radio" v-model="filter" value="Todos">
                <span class="tech-text">Todos</span>
                </div>
            </div>         
            <div v-for="bootcamp in filteredPeople" :key="bootcamp.id" class="card-joboffer">
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
            bootcamps:[],
            filter:'Todos',
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
    },
    	computed: {
		filteredPeople: function() {
			var vm = this;
			var stack = vm.filter;
			
			if(stack === "Todos") {
				return this.bootcamps;
			} else {
                    return vm.bootcamps.filter(function(bootcamp) {
					return bootcamp.TechStack === stack;
				});
			}
		}
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
.tech-text {
    margin-left: 0.5rem;
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