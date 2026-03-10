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
    isMenuOpen.value = false; 
  }, 100);
}

function handleScroll() {

  const isMobile = window.innerWidth <= 768

  if (isMobile) {
    isMenuOpen.value = false
    return
  }

  isScrolled.value = window.scrollY > 50
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
/* --- BASE PC --- */
.nav-container {
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(12px);
  padding: 0.8rem 2.5rem;
  z-index: 2000;
  border-radius: 50px;
  border: 1px solid rgba(76, 175, 80, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.mini-menu {
  width: 60px;
  height: 60px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
}

.mini-menu .menu-lista { display: none; }

.mini-menu:hover {
  width: 900px; /* Ancho extra para que no corte palabras */
  max-width: 95vw;
  padding: 0.8rem 2rem;
}

.mini-menu:hover .menu-lista {
  display: flex;
  gap: 2rem;
  animation: fadeIn 0.4s ease forwards;
}

.mini-menu:hover .indicador-hover { display: none; }

.menu-lista {
  list-style: none;
  display: flex;
  gap: 1.8rem;
  margin: 0;
  padding: 0;
}

.menu-lista a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  white-space: nowrap;
}

.menu-lista a:hover { color: #4caf50; }

.indicador-hover { color: #4caf50; }

/* --- ANIMACIONES --- */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- MOBILE --- */
.hamburguesa-movil {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.hamburguesa-movil span {
  width: 25px;
  height: 2px;
  background: #4caf50;
  transition: 0.3s;
}

/* Animación de X */
.hamburguesa-movil span.abierto:nth-child(1) { transform: rotate(45deg) translateY(11.5px); }
.hamburguesa-movil span.abierto:nth-child(2) { opacity: 0; }
.hamburguesa-movil span.abierto:nth-child(3) { transform: rotate(-45deg) translateY(-11.5px); }

@media (max-width: 768px) {
.nav-container {
    position: fixed;
    top: 15px;
    left: 15px;        /* lo pegamos al lado */
    transform: none;   /* quitamos el centrado */
    width: auto;       
    max-width: none;
    justify-content: flex-start;
    padding: 0.6rem 0.8rem;
    border-radius: 12px;
  }

  /* Desactivar el efecto hover de PC en móvil */
  .mini-menu:hover {
    width: 90%;
    max-width: 400px;
    padding: 0.6rem 1.2rem;
  }

  .mini-menu .indicador-hover { display: none; }

  .hamburguesa-movil { display: flex; }

  .menu-lista {
    display: none; /* Oculto por defecto */
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 220px;
    flex-direction: column;
    background: rgba(15, 15, 15, 0.98);
    margin-top: 10px;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(76, 175, 80, 0.4);
    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
    gap: 1.5rem;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.25s;
  }
  .mini-menu {
    width: auto;
    height: auto;
    overflow: visible;
  }

  .mini-menu .menu-lista {
    display: none;
  }
  .menu-lista.activo {
    display: flex;
    animation: fadeIn 0.3s ease;
    opacity: 1;
    pointer-events: auto;
  }

  /* En móvil, las letras un poco más grandes para que sean fáciles de pulsar */
  .menu-lista a {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
}
</style>