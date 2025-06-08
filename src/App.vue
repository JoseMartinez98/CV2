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
     <div id="section1">
      <Encabezado />
    </div>
    <hr>
    <div id="section2">
      <Contacto />
    </div>
    <hr>
    <div id="section3">
      <Proyectos />
    </div>
    <hr>
    <div id="section4">
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

</style>