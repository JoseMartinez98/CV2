<script setup>
import Encabezado from './components/Encabezado.vue';
import Menu from './components/Menu.vue';
import Contacto from './components/Contacto.vue';
import Proyectos from './components/Proyectos.vue';
import Formacion from './components/Formacion.vue';
import PiePagina from './components/PiePagina.vue';
</script>

<template>
    <Menu />
     <div id="section1" class="section">
      <Encabezado />
    </div>
    <hr>
    <div id="section2" class="section">
      <Contacto />
    </div>
    <hr>
    <div id="section3" class="section">
      <Proyectos />
    </div>
    <hr>
    <div id="section4" class="section">
      <Formacion /> 
    </div>
    <hr>
     <PiePagina />


</template>

<style scoped>
hr {
  border: none;
  border-top: 2px solid rgba(255, 255, 255, 0.511);
  margin: 40px 0;
  margin-top: 80px;
  margin-bottom: 80px;
}
.section {
  scroll-margin-top: 100px;
}


</style>