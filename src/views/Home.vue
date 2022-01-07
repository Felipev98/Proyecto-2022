<template>
<div class="hero">
 <Navbar/>
 <Hero/>
</div>
<Section titulo="NOSOTROS" image="Nosotros.jpg" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor enim et elementum tempor. Maecenas eu efficitur sem. Nullam semper pretium augue eu pulvinar."/>
<Section titulo="ACERCA" image="Chica.jpg" texto="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam placerat at arcu a consectetur. Proin sapien dolor, tristique suscipit tincidunt a, imperdiet nec sapien. Aliquam sodales tortor ut magna lobortis lobortis."/>
<Empresas/>
<Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'    
import Section from '@/components/Section.vue'
import Empresas from '@/components/Empresas.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,Hero,Section,Empresas,Footer
  }
}
</script>

<style>
.hero{
  background-image: url('../assets/Imagen-Hero.png');
  height: 100vh;
  background-image: cover;
  background-position: center;
}
</style>