<script setup>
import Encabezado from "./components/Encabezado.vue";
import Menu from "./components/Menu.vue";
import Contacto from "./components/Contacto.vue";
import Proyectos from "./components/Proyectos.vue";
import Formacion from "./components/Formacion.vue";
import PiePagina from "./components/PiePagina.vue";
import Formulario from "./components/Formulario.vue";
import Experiencia from "./components/Experiencia.vue";
</script>

<template>
  <Menu />
  
  <div id="section1" class="section" v-observe-animate="'animate-slide-up'">
    <Encabezado />
  </div>
  <hr />

  <div id="section2" class="section" v-observe-animate="'animate-fade-in'">
    <Contacto />
  </div>
  <hr />

  <div id="section3" class="section" v-observe-animate="'animate-zoom-in'">
    <Proyectos />
  </div>
  <hr />

  <div id="section4" class="section" v-observe-animate="'animate-slide-up'">
    <Formacion />
  </div>
  <hr />    
  <div id="section5" class="section" v-observe-animate="'animate-slide-up'">
    <Experiencia />
  </div>
  <hr />
  <div id="section6" class="section" v-observe-animate="'animate-slide-up'">
    <Formulario />
  </div>
  <hr />


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
  scroll-margin-top: 140px;
}
.before-view {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.animate-fade-in.in-view {
  opacity: 1;
  transform: translateY(0);
}

.animate-slide-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

.animate-zoom-in.before-view {
  opacity: 0;
  transform: translateY(40px);
}

.animate-zoom-in.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
