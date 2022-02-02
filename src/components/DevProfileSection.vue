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
      <div class="box-feed-business" v-for="profiles in DevProfiles" :key="profiles.id">
          <div class="logo">
              <img :src="profiles.profile_pic" alt="">
              {{profiles.DevName}}
            <router-link  :to="{ name: 'DevProfile', params: { id: profiles.id }}"  >
                <div class="profile-detail-business">Ver Perfil</div>
            </router-link>
          </div>
      </div>
      
      </div>
</template>
<script>
import axios from 'axios'
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
        this.getBusinessProfiles()
    },
    methods:{
        async getBusinessProfiles(){
           let DevProfiles = await axios.get('api/v1/DevProfile/')
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