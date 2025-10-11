<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function scrollTo(id, event) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    event?.target?.blur();
    isMenuOpen.value = false; // cerrar el menú tras click
  }, 100);
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="['menu-fijo', { 'fondo-solido': isScrolled, 'menu-abierto': isMenuOpen }]">      
    <!-- Botón hamburguesa -->
    <button class="hamburguesa" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Abrir menú">
      <span :class="{ 'abierto': isMenuOpen }"></span>
      <span :class="{ 'abierto': isMenuOpen }"></span>
      <span :class="{ 'abierto': isMenuOpen }"></span>
    </button>

    <!-- Menú -->
    <ul :class="['menu-lista', { 'activo': isMenuOpen }]">
      <li><a href="#section1" @click.prevent="(e) => scrollTo('section1', e)">Inicio</a></li>
      <li><a href="#section2" @click.prevent="(e) => scrollTo('section2', e)">Sobre mí</a></li>
      <li><a href="#section3" @click.prevent="(e) => scrollTo('section3', e)">Proyectos</a></li>
      <li><a href="#section4" @click.prevent="(e) => scrollTo('section4', e)">Formación</a></li>
      <li><a href="#section5" @click.prevent="(e) => scrollTo('section5', e)">Contacto</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.seccion {
  scroll-margin-top: 200px;
}

.menu-fijo {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #00000083;
  padding: 1rem;
  z-index: 1000;
  border-radius: 50px;
  border: 0.1px solid white;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fondo-solido {
  background: #000000; 
  transition: background 0.3s ease-in-out;
}

/* ====== UL base ====== */
.menu-lista {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.menu-lista li {
  margin: 0;
  transition: 0.2s;
}

.menu-lista li:hover {
  color: yellow;
  transform: scale(1.1);
  transition: transform 0.2s ease, color 0.2s ease;
}

.menu-lista a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.menu-lista a:hover {
  color: yellow;
}

.menu-lista a:focus {
  outline: none;
  color: white;
}

/* ====== Hamburguesa ====== */
.hamburguesa {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.hamburguesa span {
  display: block;
  height: 3px;
  background: white;
  border-radius: 5px;
  transition: 0.3s ease;
}

/* Animación al abrir */
.hamburguesa span.abierto:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}
.hamburguesa span.abierto:nth-child(2) {
  opacity: 0;
}
.hamburguesa span.abierto:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

/* ====== Estilos responsivos ====== */
@media (max-width: 768px) {
  .menu-fijo {
    justify-content: flex-start;
    left: 20px;
    right: auto;
    transform: none;
    width: auto;
    padding: 0.7rem 1rem;
    border-radius: 12px;
  }

  /* Cuando el menú está abierto: ocupa todo el ancho */
  .menu-fijo.menu-abierto {
    width: 80%;

    border-radius: 0;
    top: 0;
    padding: 1rem;
    background: #000000e8;
  }

  .hamburguesa {
    display: flex;
  }

  .menu-lista {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    background: #000000f0;
    gap: 1.5rem;
    padding: 1.5rem 0;
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .menu-lista.activo {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
