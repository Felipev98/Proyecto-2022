<template>
  <div class="col-6 profile-feed">
      <div class="titulo-feed text-center">
          <h2>EMPRESAS DISPONIBLES</h2>        
      </div>
      <div class="text-center">
<div class="spinner-border text-success" v-if="$store.state.isLoading" role="status">
</div>
</div>  
     <ProfileCard v-for="profiles in BusinessProfiles" :key="profiles.id"  :profiles="profiles"/>
      </div>
</template>
<script>
import EventService from '../helpers/EventService'
import ProfileCard from '../components/ProfileCard'
export default {
    name:'ProfileSection',
    components:{
        ProfileCard
    },
    data() {
        return {
            BusinessProfiles:null
        }
    },
    created(){
        this.getBusinessProfiles()
    },
    methods:{
        async getBusinessProfiles(){
        try {
        let BusinessProfiles = await EventService.getBusinessProfiles()
        this.BusinessProfiles = BusinessProfiles.data
        } catch (error) {
            console.log(error)
        }
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

</style>