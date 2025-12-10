<script setup>
const projects = [
    {
    title: 'WEBMING',
    image: import.meta.env.BASE_URL + 'image/WEBMING.png',
    tags: ['VueJs', 'JavaScript', 'HTML', 'CSS'],
    links: [
      { text: 'Web', href: 'https://webming.vercel.app/news', type: 'demo' },
    ],
  },
  {
    title: 'PORTFOLIO WEB CB',
    image: import.meta.env.BASE_URL + 'image/proyectoCarmen.png',
    tags: ['VueJs', 'JavaScript', 'HTML', 'CSS'],
    links: [
      { text: 'GitHub', href: 'https://github.com/JoseMartinez98/CV_CarmenBedrule', type: 'github' },
      { text: 'Portfolio', href: 'https://cv-carmen-bedrule.vercel.app//', type: 'demo' },
    ],
  },
  {
    title: 'APP GYM FITNESS CENTER',
    image: import.meta.env.BASE_URL + 'image/proyecto4.png',
    tags: ['Spring Boot', 'Java', 'VueJs', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    links: [
      { text: 'GitHub - Backend', href: 'https://github.com/JoseMartinez98/FitnessCenter-BACK', type: 'github' },
      { text: 'GitHub - Frontend', href: 'https://github.com/JoseMartinez98/FitnessCenter-FRONT', type: 'github' },
      { text: 'Demo', href: 'https://macaelfitnesscenter.vercel.app/', type: 'demo' },
      { text: 'YouTube', href: 'https://youtu.be/WMmpXqFxk8g', type: 'youtube' },
    ],
  },
  {
    title: 'STUDIO GHIBLI API',
    image: import.meta.env.BASE_URL + 'image/proyecto1.jpeg',
    tags: ['Spring Boot', 'Java', 'VueJs', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    links: [
      { text: 'GitHub - Backend', href: 'https://github.com/JoseMartinez98/BACK-STUDIO_GHIBLI_API', type: 'github' },
      { text: 'GitHub - Frontend', href: 'https://github.com/JoseMartinez98/FRONT-STUDIO_GHIBLI_API', type: 'github' },
    ],
  },
  {
    title: 'STAR WARS API',
    image: import.meta.env.BASE_URL + 'image/proyecto2.png',
    tags: ['Laravel', 'PHP', 'VueJs', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    links: [
      { text: 'GitHub - Backend', href: 'https://github.com/JoseMartinez98/BACK-SWAPI', type: 'github' },
      { text: 'GitHub - Frontend', href: 'https://github.com/JoseMartinez98/FRONT-SWAPI', type: 'github' },
      { text: 'YouTube', href: 'https://www.youtube.com/watch?v=jkTsFFLCJc0&t=71s&ab_channel=JoseMartinez98', type: 'youtube' },
    ],
  },
  {
    title: 'CINEMA PROJECT',
    image: import.meta.env.BASE_URL + 'image/proyecto3.jpeg',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    links: [
      { text: 'GitHub', href: 'https://github.com/JoseMartinez98/ProyectoFP', type: 'github' },
    ],
  },
];

// Función auxiliar para mapear el nombre de la tecnología a la clase CSS original
const getTagClass = (tag) => {
    const classNameMap = {
        'Spring Boot': 'springBoot',
        'Java': 'java',
        'VueJs': 'vue',
        'JavaScript': 'javascript',
        'HTML': 'html',
        'CSS': 'css',
        'MySQL': 'mysql',
        'Laravel': 'laravel',
        'PHP': 'php',
    };
    return classNameMap[tag] || '';
};
</script>

<template>
  <div class="proyectos">
    <div class="titulo-con-icono">
      <svg
        class="icono-proyectos"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
        />
      </svg>
      <h1>Proyectos...</h1>
    </div>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.title" class="project-item">
        <h3 class="project-title">{{ project.title }}</h3>
        
        <div class="project-card">
          <div class="card-image-wrapper">
            <img :src="project.image" :alt="project.title" />
          </div>
          
          <div class="card-details">
            <div class="enlaces">
              <a 
                v-for="link in project.links"
                :key="link.text"
                :class="[`${link.type}-btn`]"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}
              </a>
            </div>
            
            <div class="tags">
              <span 
                v-for="tag in project.tags"
                :key="tag"
                :class="getTagClass(tag)"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
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

/* Título de la sección */
h1 {
  width: 100%;
  color: rgba(255, 255, 255, 0.585);
  font-size: 40px;
  margin-left: 2%;
  margin-bottom: 40px;
}

/* Estilo del título individual del proyecto */
.project-title {
  color: #ffcc00; /* Color amarillo/oro para los títulos */
  font-size: 24px;
  margin: 0;
  text-align: center;
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

/* 1. LAYOUT 2x2 - CSS GRID */
.projects-grid {
  width: 90%; 
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 40px; 
  margin-top: 40px;
}

.project-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* 2. DISEÑO DE TARJETA MEJORADO */
.project-card {
  display: flex;
  flex-direction: column; 
  width: 100%;
  max-width: 550px;
  height: 450px;
  background-color: #1f1f1f; 
  border-radius: 12px;
  overflow: hidden; 
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1); /* Sombra elegante */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px); /* Efecto de elevación al pasar el ratón */
  box-shadow: 0 15px 35px rgba(157, 157, 157, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.2);
}

.card-image-wrapper {
  width: 100%;
  height: 220px; 
}

.card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-image-wrapper img {
    transform: scale(1.05); 
}

.card-details {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1; 
}

/* Tags/Tecnologías */
.tags {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  gap: 1rem;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15); /* Separador limpio */
  margin-top: 20px;
  padding-top: 10px;
}
.tags span {
  /* Se respetan los colores originales de las tecnologías */
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 13px;
  white-space: nowrap;
  font-weight: 500;
}

/* Enlaces/Botones */
.enlaces {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.github-btn, .demo-btn, .youtube-btn {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
  white-space: nowrap;
  font-size: 14px;
}

.github-btn { background-color: #24292f; color: white; }
.github-btn:hover { background-color: #444c56; transform: scale(1.03); }

.demo-btn { background-color: #4caf50; color: white; }
.demo-btn:hover { background-color: #388e3c; transform: scale(1.03); }

.youtube-btn { background-color: #ff0000; color: white; }
.youtube-btn:hover { background-color: #cc0000; transform: scale(1.03); }


/* Clases de colores de tecnologías (mantenidas) */
.springBoot { background-color: #6db33f; }
.java { background-color: #007396; }
.vue { background-color: #42b883; }
.javascript { background-color: #d0bd43; }
.html { background-color: #e44d26; }
.css { background-color: #264de4; }
.mysql { background-color: #007396; }
.laravel { background-color: #e3755a; }
.php { background-color: #8a11ac; }


@media (max-width: 1024px) {
  /* En tablets, pasa a una sola columna */
  .projects-grid {
    grid-template-columns: 1fr; 
    width: 95%;
  }
  .project-card {
    min-height: auto; 
  }
  .card-image-wrapper {
    height: 200px;
  }
  h1 {
    font-size: 32px;
    margin-left: 5%;
  }
}

@media (max-width: 768px) {
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
  h1 {
    font-size: 28px;
    text-align: center;
    margin-left: 0;
  }
  .project-card {
    width: 90%;
    height: auto;
  }
  .card-image-wrapper {
    height: 180px;
  }
  .project-title {
    font-size: 20px;
  }
  .enlaces {
    gap: 8px;
  }
  .github-btn, .demo-btn, .youtube-btn {
      font-size: 13px;
      padding: 7px 14px;
  }
}
</style>