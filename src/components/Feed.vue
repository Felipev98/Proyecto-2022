<template>
  <div class="col-6 job-feed">
        <div class="container">
                <div class="logout-button">
                    <button @click="logout">Cerrar Sesión</button>
                </div>
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
<div class="text-center">
<div class="spinner-border text-success" v-if="$store.state.isLoading" role="status">
</div>
</div>
<div >
  <BootcampCard v-for="bootcamp in filteredPeople" :key="bootcamp.id" :bootcamp="bootcamp" />
</div>         
        </div>
      </div>
</template>

<script>
import axios from 'axios'
import EventService from '../helpers/EventService'
import BootcampCard from '../components/BootcampCard'
export default {
    name:'Feed',
    components:{
        BootcampCard
    },
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
           try{
           let getBootcamp = await EventService.getProposals()
           this.bootcamps = getBootcamp.data
           }catch(error){
               console.log(error)
           }
        this.$store.commit('setIsLoading',false)
        }, 
         logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("access")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.$store.commit('removeAccess')
            this.$router.push('/')
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
.logout-button{
    text-align: right;
    margin-top: 1rem;
}
.logout-button button{
    padding: 0.8rem;
    width: 30%;
    border: none;
    background: #FF1E72;
    border-radius: 1rem;
    color: #ffff;
}
@media screen and (max-width:700px){
    .profile-feed{
        display:none;
}
.job-feed{
    width: 100%;
}
.logout-button button{
    width: 100%;
}
}
</style>