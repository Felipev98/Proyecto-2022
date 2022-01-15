<template>
  <h2>{{$route.params.id}}</h2>
  <div>
    <p>{{empresa.businessName}}</p>
    <p>{{empresa.BusinessBio}}</p>
    <p>{{empresa.businessLink}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        id: '',
        empresa:[],
      }
    },
      created() {
        this.getInfoProfile();
    },
    methods: {
     async getInfoProfile(){
      await axios
      .get(`/api/v1/Profile/${this.$route.params.id}/`)
      .then(response =>{
        console.log(response)
        this.empresa = response.data
      }).catch(error =>{
        console.log(error)
      })
     }
    },

}
</script>

<style>

</style>