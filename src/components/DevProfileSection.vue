<template>
  <div class="col-6 profile-feed">
      <div class="titulo-feed text-center">
          <router-link to="/agregarBusinessProfile"  ><i class="fas fa-plus"></i></router-link>
      
          <h2>Desarrolladores disponibles</h2>
      </div>
        <div class="text-center">
    <div class="spinner-border text-success" v-if="$store.state.isLoading" role="status">
    </div>
    </div>   
     <ProfileCard  v-for="profiles in DevProfiles" :key="profiles.id"  :profiles="profiles" />
      </div>
</template>
<script>
import EventService from '../helpers/EventService'
export default {
    name:'ProfileSection',
    components:{
    },
    data() {
        return {
            DevProfiles:null
        }
    },
    created(){
        this.getDevProfiles()
    },
    methods:{
        async getDevProfiles(){
           let DevProfiles = await EventService.getDevProfiles();
           this.DevProfiles = DevProfiles.data
    }
}
}
</script>

<style>
.profile-feed{
    height:90vh;
    background: #ffff;
    padding-left:0rem;
    padding-right:0rem;
    padding: 1rem;
    overflow: hidden;
    overflow-y: auto;
}
.box-feed-business{
    background: gray;
    height: auto;
    border-radius: 1.1rem;
    width: 50%;
    margin: auto;
    margin-top: 1rem;
    padding: 1rem;
}
.logo{
    text-align: center;
}
.logo img{
    width:3rem;
    height:3rem;
    border-radius: 50%;
    display: block;
    margin: auto;
}
.profile-button{
        padding: 0.6rem;
    background: red;
    width: 71%;
    margin: auto;
    border-radius: 0.5rem;
}
.profile-detail-business{
        display: block;
    padding: 0.8rem;
    background: red;
    border-radius: 1.1rem;
    text-decoration: none;
}
a{
    color: #ffff;
    text-decoration: none;
}
.fas.fa-plus{
    padding: 1rem;
    background: #FF1E72;
    border-radius: 50%;
}
</style>