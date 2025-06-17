<script setup>
import Menu from './Menu.vue';
</script>
<template>
    <div class="contacto">
        <div class="titulo-con-icono">
            <svg class="icono-info" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          <h1>Sobre mí...</h1>
        </div>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-mart%C3%ADnez-gonz%C3%A1lez-0a7837215/" target="_blank" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/JoseMartinez98" target="_blank" title="GitHub">
            <i class="fab fa-github"></i>
            </a>
            <a href="tel:+34691797404" title="Llamar al móvil">
            <i class="fas fa-phone"></i>
            </a>
            <a href="mailto:josesw98@gmail.com" title="Enviar correo">
            <i class="fas fa-envelope"></i>
            </a>
        </div>
       <div class="descripcion">
        <span> Sobre mi decir que soy una persona a 
            la que le gusta estar en <span class="nombre">formación continua</span> y aprender cosas nuevas, 
            no tengo problemas en cuanto a <span class="nombre">cambios y adaptación</span>. Además me gusta la 
            <span class="nombre">colaboración </span> con otras personas y la 
            <span class="nombre">interacción</span> en cualquier ambito.
        </span>
       </div> 
       <div class="descripcion">
        <span> Como bien digo, soy <span class="nombre"> junior </span>, lo cual quiere decir que tengo <span class="nombre">nociones </span>y 
          <span class="nombre">habilidades</span> para poder<span class="nombre"> realiar tareas</span>, algunas de manera independiente y otras 
          bajo guía. Durante la realización del ciclo superior de <span class="nombre">Desarrollo de Aplicaciones
          Web</span>, las<span class="nombre"> prácticas de empresa</span> y mis <span class="nombre"> proyectos personales </span>he desarrollado una 
          serie de conocimientos y aptitudes en <span class="nombre">diferentes tecnologías</span>. Esto no me hace experto,
          pero si funcional para trabajar con ellas y seguir perfeccionándolas.
        </span>
       </div> 
       <div class="descripcion">
        <span> Actualmente, realizo tareas de <span class="nombre">FullStack</span> pero no me cierro a especializarme
        y profesionalizarme en un entorno de <span class="nombre">Back-end</span> o <span class="nombre">Front-end</span>
        ya que ambos campos me llaman la atención. 
        </span>
       </div> 
       <div class="tech-icons">
         <i class="fab fa-vuejs" title="Vue.js"></i>
         <i class="fab fa-laravel" title="Laravel"></i>
         <i class="fab fa-php" title="PHP"></i>
         <i class="fab fa-java" title="Java"></i>
         <i class="fas fa-database" title="MySQL"></i>
         <i class="fab fa-html5" title="HTML5"></i>
         <i class="fab fa-css3-alt" title="CSS3"></i>
         <i class="fab fa-js-square" title="JavaScript"></i>
         <i class="fab fa-git-alt" title="Git"></i>
        <img src="/icons/springboot.svg" alt="Spring Boot" class="icon-svg" title="Spring Boot" />
      </div>
    </div>
</template>
<style scoped>
.contacto{
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

 .social-icons {
      display: flex;
      justify-content: center;
      font-size: 2rem;
      width: 80%;
      margin: 0 auto;
      gap: 100px;
}
.social-icons a {
    color: white;      
    text-decoration: none;
    transition: all 0.2s ease;
}
.social-icons a:hover {
    color: yellow; 
    transform: scale(1.2);}
.descripcion{
    width: 60%;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nombre{
color: yellow;
}
span{
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
}

.icon-svg {
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease, filter 0.3s ease;
  vertical-align: middle;
  display: inline-block;
  object-fit: contain;
  width: 2.0rem;
  height: 2.0rem;

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