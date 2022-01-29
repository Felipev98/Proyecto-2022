<template>
  <section class="feed">
<div class="container">
<div class="box-feed">
    <div class="row">
<div v-if="$store.state.Business">
  <ProfileSection/>
</div>
<DevProfile/>
 <Feed/>
    </div>
</div>
</div>

  </section>
</template>

<script>
import DevProfile from '../components/DevProfileSection.vue'
import ProfileSection from '../components/ProfileSection.vue'
import Feed from '../components/Feed.vue'
export default {
    data() {
        return {
            JobOffers:[],
            ProfileB:[]
        }
    },
    components:{
        ProfileSection,Feed,DevProfile
    },

    methods: {

    },
}
</script>

<style>
.feed{
    height:100vh;
    padding-top: 2rem;
background: linear-gradient(to bottom, #838EF3, #101B67);
}
.box-feed{
    background: #CACEEE;
    height: 90vh;
    width: 100%;
    margin: auto;
    border-radius: 1.9rem;

}
</style>