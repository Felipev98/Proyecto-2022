<template>
<div class="container">
<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">{{Nosotros}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{Acerca}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{Empresas}}</a>
      </li>
    </ul>
  </div>
</nav>
</div>

</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const Nosotros = ref('NOSOTROS')
        const Acerca = ref('ACERCA')
        const Empresas = ref('EMPRESAS')
        return {
            Nosotros,Acerca,Empresas
        }
    },

}
</script>

<style>
.boton{
    padding:0.7rem;
    background-color: #FF1E72;
    border-radius: 1.6rem;
}
.nosotros{
    color:#ffff;
    text-decoration: none;
}
a.nav-link {
  color: #D8D6D6;
}
</style>