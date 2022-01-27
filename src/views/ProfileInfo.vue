<template>
<section class="profile-section">
  <div>
    <div class="container">
    <div class="row">
        <div class="col-12">
            <div class="box-profile">
              <div class="profile-images">
    <img :src="empresa.banner_pic" alt="">
    <img :src="empresa.profile_pic" alt="">
              </div>
      <div class="info-profile">
    <p>{{empresa.businessName}}</p>
    <p>Acerca de la empresa</p>
    <p>{{empresa.BusinessBio}}</p>
    <p>Contacto empresa</p>
    <p>{{empresa.businessLink}}</p>
      </div>

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
.profile-section{
background: linear-gradient(to bottom, #838EF3, #101B67);
height:100vh;
}
.box-profile{
  background-color: #ffff;
  height: 100vh;
  width: 60%;
  margin: auto;
}
.profile-images img:first-child{
  width: 100%;
  height: 18rem;
}
.profile-images img:last-child{
  width:7rem;
  height: 7rem;
  border-radius: 50%;
  position:relative;
  top:-4rem;
}
.profile-images{
  text-align: center;
}
.info-profile{
  margin-top: -3rem;
  padding:1rem;
}
.info-profile p:first-child{
  text-align: center;
  font-size: 2rem;
}
.info-profile p:nth-child(2){
  font-size: 1.3rem;
  border-bottom: 1px solid gray;
  padding-bottom: 1rem;
}
.info-profile p:nth-child(4){
    font-size: 1.3rem;
  border-bottom: 1px solid gray;
  padding-bottom: 1rem;
}
</style>