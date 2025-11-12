<script setup>
</script>

<template>
  <div class="formacion">
    <div class="titulo-con-icono">
      <svg class="icono-info" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l3-3m-3 3l-3-3" />
      </svg>
      <h1>Experiencia...</h1>
    </div>

    <div class="titulos">
      <ul class="timeline">
        <li>
            <span class="fecha">11/2025 - 12/2025</span>
            <h3>Seguridad informática</h3>
            <p>Almerimatik Formación – España</p>
            <p>Diferentes actividades relacionadas con la seguridad, configurción ISO segura, configuración red camaras de seguridad etc</p>
        </li>
        <li>
            <span class="fecha">1/2025 - 3/2025</span>
            <h3>Desarrollo Web</h3>
            <p>Alborada IT – España</p>
            <p>Desarrollo Full Stack Aplicación Web Laravel - Vue - MySQL</p>
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
  content: '';
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

  .timeline {
    padding-left: 15px;
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
