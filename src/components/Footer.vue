<template>
  <section class="footer">
      <div class="container">
          <div class="col-12">
              <div class="footer-texto">
                  <h2>{{derechos}}</h2>
                  <p>{{realizado}}</p>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            derechos:'Todos los derechos reservados',
            realizado:'Realizado por Vargas Felipe'
        }
    },

}
</script>

<style>
.footer{
    height: 6rem;
    background-color: #010B53;
}
.footer-texto{
    text-align: center;
    color: #D8D6D6;
    padding-top:1.5rem;
}
.footer-texto h2{
    font-size: 0.9rem;
}
.footer-texto p{
    font-size: 0.7rem;
}
</style>