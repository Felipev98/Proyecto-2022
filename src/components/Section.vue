<template>
<section class="section">
<div class="container">
      <div class="titulo text-center">
          <h2>{{titulo}}</h2>
      </div>
      <div class="row">
          <div class="col-xl-6">
              <div class="imagen">
                  <img :src="require(`@/assets/${image}`)"> 
              </div>
          </div>
          <div class="col-xl-6" id="columna-texto">
              <div class="texto-nosotros">
                  <p>{{texto}}</p>
              </div>
          </div>
      </div>
  </div>
</section>
</template>

<script>
export default {
    props:{
        titulo:{
            type:String,
        },
        texto:{
            type:String,
        },
        image:{
            type:String,
        }
    },
    data() {
        return {
        }
    },

}
</script>

<style>
.section{
    height: 40rem;
}
.imagen img{
    width: -webkit-fill-available;
    border-radius: 1.2rem;
}
#columna-texto{
    display: flex;
    align-items: center;
}
.titulo{
    margin-top: 4rem;
    margin-bottom: 4rem;
}
.titulo h2{
    font-size: 2.8rem;
    font-weight: 700;
    color: #010B53;
}
.texto-nosotros p{
    color:#010B53;
}
</style>