<script setup>
import Menu from "./Menu.vue";
</script>
<template>
  <div class="contacto">
    <div class="titulo-con-icono">
      <svg
        class="icono-info"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
      <h1>Sobre mí...</h1>
    </div>

    <div class="descripcion">
      <span>
        <span class="nombre">Desarrollador Web</span> con enfoque en <span class="nombre">ciberseguridad</span>. Formado en Desarrollo
        de Aplicaciones Web y con especialización en <span class="nombre">Seguridad Informática
        IFCT-0109</span> y <span class="nombre">Ciberseguridad en Campus Internacional de Ciberseguridad</span>.
        Experiencia en proyectos full stack utilizando tecnologías como Spring
        Boot, Java, Laravel, Vue.js, MySQL y APIs REST.
      </span>
    </div>
    <div class="descripcion">
      <span>
        Mi objetivo principal es <span class="nombre">desarrollar aplicaciones seguras</span> de principio a
        fin, aplicando buenas prácticas de arquitectura y protección de datos,
        integración de JWT para control de acceso, test unitarios,
        microservicios y diseño responsive orientado a una experiencia de
        usuario fluida. Formación específica en auditoría de sistemas, análisis
        de vulnerabilidades, gestión de incidentes y seguridad en redes.
        Interesado en roles como <span class="nombre">Backend Developer, Full Stack Developer o
        perfiles híbridos de desarrollo y ciberseguridad</span>, con motivación por
        seguir creciendo en entornos profesionales colaborativos y ágiles. Me
        definen la proactividad, la capacidad de aprendizaje y el compromiso por
        aportar soluciones de calidad.
      </span>
    </div>
    <div class="descripcion">
      <span>
        <span class="nombre">Actualmente</span> desempeño funciones como
        desarrollador <span class="nombre"> Full Stack</span>, aunque estoy
        <span class="nombre">abierto a</span> especializarme y profesionalizarme
        tanto en el área de <span class="nombre">Back-end</span> como en la de
        <span class="nombre">Front-end</span>, ya que ambas me resultan
        <span class="nombre">atractivas</span>.
      </span>
    </div>
    <div class="tech-carousel">
      <div class="tech-track">
        <i class="fab fa-vuejs" title="Vue.js"></i>
        <i class="fab fa-laravel" title="Laravel"></i>
        <i class="fab fa-php" title="PHP"></i>
        <i class="fab fa-java" title="Java"></i>
        <i class="fas fa-database" title="MySQL"></i>
        <i class="fab fa-html5" title="HTML5"></i>
        <i class="fab fa-css3-alt" title="CSS3"></i>
        <i class="fab fa-js-square" title="JavaScript"></i>
        <i class="fab fa-git-alt" title="Git"></i>
        <img
          src="/icons/springboot.svg"
          alt="Spring Boot"
          class="icon-svg"
          title="Spring Boot"
        />
        <!-- Duplicamos los íconos para que la cinta sea infinita -->
        <i class="fab fa-vuejs"></i>
        <i class="fab fa-laravel"></i>
        <i class="fab fa-php"></i>
        <i class="fab fa-java"></i>
        <i class="fas fa-database"></i>
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js-square"></i>
        <i class="fab fa-git-alt"></i>
        <img src="/icons/springboot.svg" class="icon-svg" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.contacto {
  margin-top: 80px;
}
h1 {
  width: 100%;
  color: rgba(255, 255, 255, 0.585);
  font-size: 40px;
  margin-left: 2%;
  margin-bottom: 40px;
}
.titulo-con-icono {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 40px;
}

.icono-info {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
}
.descripcion {
  width: 60%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nombre {
  color: yellow;
}
span {
  color: white;
  width: 100%;
  font-size: 20px;
}
.tech-icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  width: 80%;
  margin: 80px auto 0 auto;
  font-size: 3rem;
  color: white;
}

.tech-icons i {
  transition: transform 0.3s ease, color 0.3s ease;
  cursor: default;
  border: 2px solid white;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.192);
}

.icon-svg {
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease, filter 0.3s ease;
  vertical-align: middle;
  display: inline-block;
  object-fit: contain;
  width: 3rem;
  height: 3rem;
  border: 2px solid yellow;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.192);
}
.tech-carousel {
  overflow: hidden;
  width: 100%;
  margin: 80px auto 0 auto;

  /* Gradiente para que los bordes desvanezcan los íconos */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    transparent
  );
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    transparent
  );
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

.tech-track {
  display: flex;
  gap: 60px;
  width: max-content;
  animation: scroll 20s linear infinite;
}

.tech-track i,
.tech-track .icon-svg {
  font-size: 3rem;
  color: white;
  border: 2px solid white;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.192);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes fadeInOut {
  0%,
  10% {
    opacity: 0;
  }
  20%,
  80% {
    opacity: 1;
  }
  90%,
  100% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 28px;
    text-align: center;
    margin-left: 0;
  }

  .titulo-con-icono {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }

  .icono-info {
    width: 50px;
    height: 50px;
    margin: 0 0 10px 0;
  }

  .social-icons {
    gap: 30px;
    font-size: 1.5rem;
  }

  .descripcion {
    width: 100%;
    margin-top: 40px;
    padding: 0 10px;
  }

  span {
    font-size: 1rem;
  }
}
.tech-icons {
  gap: 30px;
  font-size: 2rem;
}

@media (max-width: 480px) {
  .social-icons {
    flex-direction: row;
    gap: 20px;
  }

  .descripcion {
    margin-top: 30px;
  }

  h1 {
    font-size: 1.6rem;
  }

  .icono-info {
    width: 40px;
    height: 40px;
  }

  span {
    font-size: 0.95rem;
  }
}
</style>
