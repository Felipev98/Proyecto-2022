<template>
  <section class="empresas">
      <div class="container">
           <div class="titulo text-center">
                    <h2>{{titulo}}</h2>
                </div>
                <div class="row">
            <div class="col-xl-12" id="empresas-columnass">
               <div v-for="empresass in empresas" :key="empresass.id">
                   <img class="imagen-" :src="require(`../assets/${empresass.imagen}`) ">
                   <h2 class="titulo-empresas text-center">{{empresass.nombre}}</h2>
                   <p class="titulo-empresas text-center">{{empresass.fecha}}</p>
               </div>
            </div>
            </div>     
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            titulo: 'EMPRESAS',
            empresas:{
                empresa1:{
                    nombre:'Capcom',
                    imagen:'capcom.png',
                    fecha:'07/01/2022'
                },
                empresa2:{
                    nombre:'Capcom',
                    imagen:'capcom.png',
                    fecha:'07/01/2022'
                },
                empresa3:{
                    nombre:'Capcom',
                    imagen:'capcom.png',
                    fecha:'07/01/2022'
                },
            }
        }
    },
}
</script>

<style>
.empresas{
    height: 30rem;
}
img.imagen-{
    width: 15rem;
}
h2.titulo-empresas{
    font-size: 1.2rem;
}
p.titulo-empresas{
    font-size: 0.8rem;
}
#empresas-columnass{
    display: flex;
    justify-content: space-between;
}
@media screen and (max-width:700px){
    #empresas-columnass{
        flex-wrap: wrap;
        justify-content: center;
}
.texto-nosotros p{
    text-align: center;
}
.texto p{
    width: 100%;

}
.boton-hero{
    width: 50%;
}
}
</style>