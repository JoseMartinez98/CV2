<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isScrolled = ref(false)

function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  event?.target?.blur(); 
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="['menu-fijo', { 'fondo-solido': isScrolled }]">      
    <ul>
      <li><a href="#section1" @click.prevent="(e) => scrollTo('section1', e)">Inicio</a></li>
      <li><a href="#section1" @click.prevent="(e) => scrollTo('section2', e)">Sobre mí</a></li>
      <li><a href="#section2" @click.prevent="(e) => scrollTo('section3', e)">Proyectos</a></li>
      <li><a href="#section3" @click.prevent="(e) => scrollTo('section4', e)">Formación</a></li>
    </ul>
  </nav>
</template>
<style scoped>
.menu-fijo {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background: #333333ab;
  padding: 20px;
  z-index: 1000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.menu-fijo ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 120px;
  margin: 0 auto;
  padding: 0;
}

.menu-fijo li {
  margin: 0;
  transition: 0.2s;
}
.menu-fijo li:hover {
  color: yellow;
  transform: scale(1.2);
  transition: transform 0.2s ease, color 0.2s ease;
}

.menu-fijo a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.menu-fijo a:hover{
    color:yellow
}
.menu-fijo a:focus {
  outline: none;
  color: white; 
}

.fondo-solido {
  background: #333333; 
  transition: background 0.3s ease-in-out;
}
@media (max-width: 1080px) {
  .menu-fijo{
    width: 100%;
  }
  .menu-fijo ul {
    width: 100%;
    gap: 60px;
    padding: 0;
    align-items: center;
  }
  
  .menu-fijo li {
    margin: 0;
  }
}
@media (max-width: 768px) {
  .menu-fijo{
    display: flex;
    width: 100%;
  }
  .menu-fijo ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 40px;
    padding: 8px;
    align-items: center;
    font-size: 14px;
  }
  
  .menu-fijo li {
    margin: 0;
  }
}

</style>