<script setup>

</script>

<template>
  <div class="proyectos">
    <div class="titulo-con-icono">
      <svg class="icono-proyectos" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
      <h1>Proyectos...</h1>
    </div>
    <h3>STUDIO GHIBLI API</h3>
    <div class="cardProject">
      <div class="imageContainer">
        <img src="/public/image/proyecto1.jpeg" alt="Proyecto 1" />
        <div class="overlay">
          <a href="https://github.com/JoseMartinez98/BACK-STUDIO_GHIBLI_API" target="_blank" rel="noopener noreferrer">
            <svg class="arrowIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="tags">
        <span class="springBoot">Spring Boot</span>
        <span class="java">Java</span>
        <span class="vue">VueJs</span>
        <span class="javascript">JavaScript</span>
        <span class="html">HTML</span>
        <span class="css">CSS</span>
        <span class="mysql">MySQL</span>
      </div>
    </div>
    <h3>STAR WARS API</h3>
    <div class="cardProject">
      <div class="imageContainer">
        <img src="/public/image/proyecto2.png" alt="Proyecto 1" />
        <div class="overlay">
          <a href="https://github.com/JoseMartinez98/BACK-SWAPI" target="_blank" rel="noopener noreferrer">
            <svg class="arrowIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="tags">
        <span class="laravel">Laravel</span>
        <span class="php">PHP</span>
        <span class="vue">VueJs</span>
        <span class="javascript">JavaScript</span>
        <span class="html">HTML</span>
        <span class="css">CSS</span>
        <span class="mysql">MySQL</span>
      </div>
    </div>
    <h3> CINEMA PROJECT </h3>
    <div class="cardProject">
      <div class="imageContainer">
        <img src="/public/image/proyecto3.jpeg" alt="Proyecto 1" />
        <div class="overlay">
          <a href="https://github.com/JoseMartinez98/ProyectoFP" target="_blank" rel="noopener noreferrer">
            <svg class="arrowIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="tags">
        <span class="php">PHP</span>
        <span class="javascript">JavaScript</span>
        <span class="html">HTML</span>
        <span class="css">CSS</span>
        <span class="mysql">MySQL</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proyectos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: margin-bottom 0.3s ease;
  gap: 40px;
}
h1 {
  width: 100%;
  color: rgba(255, 255, 255, 0.585);
  font-size: 40px;
  margin-left: 2%;
  margin-bottom: 40px;
}
h3{
  color: rgb(255, 255, 0);
}
.titulo-con-icono {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 40px;
}

.icono-proyectos {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
}

.cardProject {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 400px;
  background-color: #1a1a1a9c;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.2);
}
.info{
  padding: 10px;
  color: white;

}
.imageContainer {
  position: relative;
  width: 100%;
  height: 80%;
}
.imageContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 2px solid rgb(255, 255, 255);
  border-radius: 30px 30px 0 0;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px 30px 0 0;
}
.imageContainer:hover .overlay {
  opacity: 1;
}
.arrowIcon {
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.arrowIcon:hover {
  transform: scale(1.2);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}
.tags span {
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  white-space: nowrap;
}
.springBoot {
  background-color: #6DB33F;
}
.java {
  background-color: #007396;
}
.vue {
  background-color: #42b883;
}
.javascript {
  background-color: #d0bd43;
  color: #323330;
}
.html {
  background-color: #e44d26;
}
.css {
  background-color: #264de4;
}
.mysql{
  background-color: #007396;
}
.laravel{
background-color: #e3755a;
}
.php{
background-color: #8a11ac;
}
@media (max-width: 1024px) {
  h1 {
    font-size: 32px;
    margin-left: 5%;
  }

  .titulo-con-icono {
    margin-left: 20px;
  }

  .cardProject {
    width: 80%;
    height: auto;
  }

  .imageContainer {
    height: 250px;
  }

  .arrowIcon {
    width: 40px;
    height: 40px;
  }

  .tags span {
    font-size: 13px;
    padding: 5px 10px;
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

  .icono-proyectos {
    width: 50px;
    height: 50px;
    margin: 0 0 10px 0;
  }

  .cardProject {
    width: 90%;
    height: auto;
  }

  .imageContainer {
    height: 200px;
  }

  .tags {
    flex-direction: column;
    align-items: center;
  }

  .tags span {
    font-size: 12px;
    padding: 4px 8px;
  }

  h3 {
    text-align: center;
    font-size: 20px;
  }
}


</style>
