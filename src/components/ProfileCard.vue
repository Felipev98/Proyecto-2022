<template>
   <div class="box-feed-business">
          <div class="logo">
              <img :src="profiles.profile_pic" alt="">
              {{profiles.businessName}}
                {{profiles.DevName}}
            <router-link  :to="{ name: 'ProfileInfo', params: { id: profiles.id }}"  >
                <div class="profile-detail-business">Ver Perfil</div>
            </router-link>
          </div>
      </div>
</template>
<script>
export default {
name:'ProfileCard',
props:{
    profiles:{
        type:Object,
        required:true
    }
}
}
</script>

<style>

</style>