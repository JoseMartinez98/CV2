<script setup></script>

<template>
  <div class="formacion">
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
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l3-3m-3 3l-3-3"
        />
      </svg>
      <h1>Formación...</h1>
    </div>

    <div class="titulos">
      <ul class="timeline">
        <li>
          <span class="fecha">10/2025 - 08/2026</span>
          <h3>MÁSTER EN CIBERSEGURIDAD</h3>
          <p>Campus Interncional de Ciberseguridad & UCAM – España</p>
        </li>
        <li>
          <span class="fecha">2/09/2025 - 15/12/2025</span>
          <h3>SEGURIDAD INFORMÁTICA</h3>
          <p>Grupo ATU – España</p>
        </li>
        <li>
          <span class="fecha">1/06/2025 - 1/07/2025</span>
          <h3>
            CIBERSEGURIDAD AVANZADA EN ENTORNOS DE LAS TECNOLOGÍAS DE LA
            OPERACIÓN
          </h3>
          <p>Aprendea.com – España</p>
        </li>
        <li>
          <span class="fecha">15/02/2023 – 7/04/2025</span>
          <h3>Desarrollo de Aplicaciones Web</h3>
          <p>ILERNA – España</p>
        </li>
        <li>
          <span class="fecha">06/2021</span>
          <h3>Integrated Skills in Englsih - B1</h3>
          <p>Trinity College London</p>
        </li>
        <li>
          <span class="fecha">07/2020</span>
          <h3>LIDERAZGO PARA JÓVENES</h3>
          <p>Diputación de Almería</p>
        </li>
      </ul>
      <ul class="timeline">
        <li>
          <span class="fecha">Fecha de expedición 10/2025</span>
          <h3>Master Backend Spring Core - Spring Boot 2025</h3>
          <p>ID de la credecencial: UC-7ac85384-7f46-46ae-ae95-8702b3415d1a</p>
          <p>Udemy</p>
        </li>
        <li>
          <span class="fecha">Fecha de expedición 9/2025</span>
          <h3>Endpoint Security</h3>
          <p>ID de la credecencial: 14dcd09e-1fa6-409a-9c93-7d531f99bd72</p>
          <p>CISCO</p>
        </li>
        <li>
          <span class="fecha">Fecha de expedición 9/2025</span>
          <h3>Introduction to Cybersecurity</h3>
          <p>ID de la credecencial: f9589d92-43e8-4764-a9b7-2def5b2407bb</p>
          <p>CISCO</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
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

.titulos {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.timeline {
  list-style: none;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  padding-left: 30px;
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.timeline li {
  margin-bottom: 30px;
  position: relative;
  padding-left: 20px;
}

.timeline li::before {
  content: "";
  position: absolute;
  left: -17px;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  border: 2px solid white;
}

.timeline h3 {
  margin: 0;
  color: white;
  font-size: 18px;
}

.timeline p {
  margin: 5px 0 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.fecha {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 5px;
  display: block;
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

  .timeline {
    padding-left: 20px;
    border-left: 1.5px solid rgba(255, 255, 255, 0.3);
  }

  .timeline h3 {
    font-size: 16px;
  }

  .timeline p {
    font-size: 13px;
  }

  .fecha {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.6rem;
  }

  .icono-info {
    width: 40px;
    height: 40px;
  }
  .titulos {
    flex-direction: column;
    align-items: center; /* opcional, para centrar los ul */
  }
  .timeline {
    padding-left: 15px;
    margin-bottom: 40px;
  }

  .timeline h3 {
    font-size: 15px;
  }

  .timeline p {
    font-size: 12px;
  }

  .fecha {
    font-size: 12px;
  }
}
</style>
