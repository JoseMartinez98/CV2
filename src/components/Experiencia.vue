<script setup>
// Podrías pasar esto a un array si quieres hacerlo dinámico en el futuro
const experiencias = [
    {
    fecha: "4/2026 - Actualidad",
    puesto: "Desarollo Web",
    empresa: "Coexphal – Almería, España | Jornada completa",
    descripcion: "Desarollo Full Stack y bases de datos"
  },
    {
    fecha: "3/2026 - 4/2026",
    puesto: "Global IT services",
    empresa: "Cosentino – Almería, España | Prácticas",
    descripcion: "Apoyo al departamento de IT de Cosentino en la gestión integral de activos tecnológicos y soporte al usuario globalmente, incluyendo la administración de sistemas, resolución de incidencias y mantenimiento de infraestructuras tecnológicas."
  },
  {
    fecha: "11/2025 - 12/2025",
    puesto: "Seguridad informática",
    empresa: "Almerimatik Formación – España | Prácticas",
    descripcion: "Diferentes actividades relacionadas con la seguridad, scripts de comfiguración etc."
  },
  {
    fecha: "1/2025 - 3/2025",
    puesto: "Desarrollo Web",
    empresa: "Alborada IT – Almería, España | Prácticas",
    descripcion: "Desarollo Full Stack y bases de datos"
  }
];
</script>

<template>
  <div class="experiencia-seccion">
    <div class="titulo-con-icono">
      <svg class="icono-info" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <h1>Experiencia...</h1>
    </div>

    <div class="cards-container">
      <div v-for="(exp, index) in experiencias" :key="index" class="exp-card">
        <div class="exp-sidebar">
          <span class="dot"></span>
          <div class="line"></div>
        </div>
        <div class="exp-content">
          <span class="fecha">{{ exp.fecha }}</span>
          <h3>{{ exp.puesto }}</h3>
          <h4 class="empresa">{{ exp.empresa }}</h4>
          <p class="descripcion">{{ exp.descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experiencia-seccion {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 20px;
}

h1 {
  width: 100%;
  color: rgba(255, 255, 255, 0.585);
  font-size: 40px;
  margin-bottom: 40px;
  margin-left: 2%;
}

.titulo-con-icono {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 40px;
}

.icono-info {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  color: rgba(255, 255, 255, 0.7);
}

/* Contenedor de Tarjetas */
.cards-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 800px;
}

.exp-card {
  display: flex;
  background-color: #1f1f1f;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.exp-card:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 25px rgba(0, 255, 0, 0.1); /* Destello verde sutil */
  border-color: rgba(0, 255, 0, 0.3);
}

/* Sidebar decorativo dentro de la card */
.exp-sidebar {
  width: 12px;
  background: linear-gradient(180deg, #4caf50 0%, #2e7d32 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.exp-content {
  padding: 25px;
  flex: 1;
}

.fecha {
  display: inline-block;
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.exp-content h3 {
  margin: 0;
  color: #fff;
  font-size: 1.4rem;
}

.empresa {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  margin: 5px 0 15px 0;
  font-weight: 400;
}

.descripcion {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* Responsivo */
@media (max-width: 768px) {
  h1 { font-size: 28px; text-align: center; }
  .titulo-con-icono { flex-direction: column; align-items: center; }
  .exp-content h3 { font-size: 1.2rem; }
  .exp-card:hover { transform: translateY(-5px); }
}
</style>