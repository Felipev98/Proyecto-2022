<template>
<section class="profile-section">
  <div>
    <div class="container">
    <div class="row">
        <div class="col-12">
            <div class="box-profile">
              <div class="profile-images">
    <img :src="developer.banner_pic" alt="">
    <img :src="developer.profile_pic" alt="">
              </div>
      <div class="info-profile">
    <p>{{developer.DevName}}</p>
    <p class="text-center">{{developer.devLastName}}</p>
    <p>Acerca de la empresa</p>
    <span>{{developer.DevBio}}</span>
    <p>Links de contacto</p>
    <p>{{developer.DevLink}}</p>
    <p>{{developer.devPorfolio}}</p>
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
        developer:[],
      }
    },
      created() {
        this.getInfoProfile();
    },
    methods: {
     async getInfoProfile(){
      await axios
      .get(`/api/v1/DevProfile/${this.$route.params.id}/`)
      .then(response =>{
        this.developer = response.data
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
  height: 15rem;
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
.info-profile p:nth-child(3){
    font-size: 1.3rem;
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
}
.info-profile p:nth-child(4){
    font-size: 1.3rem;
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
}
.info-profile p:first-child{
  text-align: center;
  font-size: 2rem;
}
@media screen and (max-width:700px){
  .box-profile{
    width: 100%;
  }
}
</style>