<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

// Función de scroll suave corregida
function scrollTo(id, event) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    event?.target?.blur();
    isMenuOpen.value = false; // cerrar el menú móvil tras click
  }, 100);
}

// Control del scroll para encoger el menú
function handleScroll() {
  isScrolled.value = window.scrollY > 80;
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
  <nav :class="['nav-container', { 'mini-menu': isScrolled, 'menu-abierto': isMenuOpen }]">      
    
    <div class="indicador-hover" v-if="isScrolled && !isMenuOpen">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </div>

    <button class="hamburguesa-movil" @click="toggleMenu" :aria-expanded="isMenuOpen">
      <span :class="{ 'abierto': isMenuOpen }"></span>
      <span :class="{ 'abierto': isMenuOpen }"></span>
      <span :class="{ 'abierto': isMenuOpen }"></span>
    </button>

    <ul :class="['menu-lista', { 'activo': isMenuOpen }]">
      <li><a href="#section1" @click.prevent="(e) => scrollTo('section1', e)">Inicio</a></li>
      <li><a href="#section2" @click.prevent="(e) => scrollTo('section2', e)">Sobre mí</a></li>
      <li><a href="#section3" @click.prevent="(e) => scrollTo('section3', e)">Proyectos</a></li>
      <li><a href="#section4" @click.prevent="(e) => scrollTo('section4', e)">Formación</a></li>
      <li><a href="#section5" @click.prevent="(e) => scrollTo('section5', e)">Experiencia</a></li>
      <li><a href="#section6" @click.prevent="(e) => scrollTo('section6', e)">Contacto</a></li>
    </ul>
  </nav>
</template>

<style scoped>
/* Contenedor Principal */
.nav-container {
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 15, 15, 0.9);
  backdrop-filter: blur(12px);
  padding: 0.8rem 2.5rem;
  z-index: 2000;
  border-radius: 50px;
  border: 1px solid rgba(76, 175, 80, 0.3); /* Verde sutil */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

/* === ESTADO ENCOGIDO (MODO ICONO) === */
.mini-menu {
  width: 60px;
  height: 60px;
  padding: 0;
  cursor: pointer;
  overflow: hidden; 
}

.mini-menu .menu-lista {
  display: none; 
}

/* === EXPANSIÓN AL HACER HOVER === */
.mini-menu:hover {
  width: 850px; 
  max-width: 95vw; 
  height: 60px;
  border-radius: 50px;
  padding: 0.8rem 3rem; 
}

.mini-menu:hover .menu-lista {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem; 
  animation: fadeIn 0.4s ease forwards;
}
.mini-menu:hover .indicador-hover {
  display: none;
}

/* === ESTILOS DE LA LISTA Y LINKS === */
.menu-lista {
  list-style: none;
  display: flex;
  gap: 1.8rem;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}
.menu-lista li {
  white-space: nowrap;
}
.menu-lista a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
}

.menu-lista a:hover {
  color: #4caf50;
}

.menu-lista a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: #4caf50;
  transition: width 0.3s ease;
}

.menu-lista a:hover::after {
  width: 100%;
}

.indicador-hover {
  color: #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(5px) scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
}

/* === MOBILE ESTRATEGIA === */
.hamburguesa-movil {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburguesa-movil span {
  width: 25px;
  height: 2px;
  background: #4caf50;
  transition: 0.3s;
}

/* Hamburguesa animada */
.hamburguesa-movil span.abierto:nth-child(1) { transform: rotate(45deg) translateY(10px); }
.hamburguesa-movil span.abierto:nth-child(2) { opacity: 0; }
.hamburguesa-movil span.abierto:nth-child(3) { transform: rotate(-45deg) translateY(-10px); }

@media (max-width: 768px) {
  .nav-container {
    width: 90%;
    justify-content: space-between;
    padding: 0.8rem 1.5rem;
    border-radius: 15px;
  }

  /* Desactivar modo encogido en móvil para evitar tirones */
  .mini-menu {
    width: 90% !important;
    height: auto !important;
    padding: 0.8rem 1.5rem !important;
  }

  .mini-menu .menu-lista {
    display: none; /* Se controla con la clase .activo */
  }

  .mini-menu .indicador-hover {
    display: none; /* No queremos el icono fijo en móvil */
  }

  .hamburguesa-movil {
    display: flex;
  }

  .menu-lista {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #151515;
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid #4caf50;
    align-items: center;
    gap: 2rem;
  }

  .menu-lista.activo {
    display: flex;
    animation: fadeIn 0.3s ease;
  }
}
</style>