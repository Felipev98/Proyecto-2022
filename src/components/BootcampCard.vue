<template >
<div class="card-joboffer">
   <div class="bootcamp-image">
                <img :src="bootcamp.logo" alt="">
                <span class="company-name">{{bootcamp.companyName}}</span>
                    </div>
                    <span>{{bootcamp.name}}</span>
                    <p>{{bootcamp.description}}</p>
                    <p>{{bootcamp.TechStack}}</p>
</div>
             
</template>
<script>
export default {
    name:'BootcampCard',
    props:{
        bootcamp:{
            type:Object,
            required:true
        }
    },
}
</script>

<style>

</style>