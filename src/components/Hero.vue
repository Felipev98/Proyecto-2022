 <template>
<div class="container">
    <div class="row">
        <div class="col-12" id="hero">
            <div class="texto text-center">
                <h2>{{titulo}}</h2>
                <p>{{subtitulo}}</p>
             <router-link to="/login" ><button class="boton-hero">{{boton}}</button></router-link>   
            </div>
        </div>
    </div>
</div>

 </template>
 
 <script>
import {ref} from 'vue'
 export default {
     setup(){
            const titulo = ref('IMAGINE A PLACE...')
            const subtitulo = ref('...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.')
            const boton = ref('Quiero entrar')
            return {
                titulo,subtitulo,boton
            }
     }
 
 }
 </script>
 
 <style>
 #hero{
     height: 85vh;
     display: flex;
     align-items:center;
     justify-content: center;
 }
 .texto p{
     width: 40%;
     margin: auto;
     color: #D8D6D6;
 }
 .texto h2{
     color: #ffff;
     font-size: 3.5rem;
 }
 .boton-hero{
         margin-top: 1.2rem;
    border: none;
    padding: 0.8rem;
    width: 18%;
    background: #FF1E72;
    border-radius: 1.8rem;
    color: #ffff;
}
 
 </style>