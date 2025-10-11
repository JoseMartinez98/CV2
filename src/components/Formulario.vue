<script setup>
</script>

<template>
  <div class="container">
    <div>
      <h2>¿Tienes una idea? ¡Hablemos!</h2>
      <form
        action="mailto:josesw98@gmail.com"
        method="POST"
        enctype="text/plain"
        class="formulario"
      >
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label for="correo">Correo:</label>
        <input type="email" id="correo" name="correo" required />

        <label for="idea">Tu idea:</label>
        <textarea id="idea" name="idea" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
}

h2 {
  font-size: 40px;
  margin: 5px;
  line-height: 40px;
  color: white;
  text-shadow: 2px 2px 2px #ffcc00;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  color: #ffcc00;
}

.formulario input,
.formulario textarea {
  padding: 10px;
  border: 1px solid #ffcc00;
  border-radius: 8px;
}

.formulario button {
  background-color: #ffcc00;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.formulario button:hover {
  background-color:#c5a113;
  color: black;
}
</style>