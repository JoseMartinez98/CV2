<script setup>
</script>
<template>
<div class="encabezado">
    <div class="fotoPerfil">
        <img class="perfil" src="/public/image/titulo.jpg">
    </div>
    <div class="infoPersonal">
        <h1> Hey, soy <span class="nombre"> Jose</span>!
        </h1>
        <h2 class="nombre">JUNIOR FULL STACK DEVELOPER</h2>
        <h2>Disponible para trabajar 
            <a href="documents/CvJamg2025.pdf" download="CV_JAMG" class="btn-cv">
            <i class="fas fa-file-download" style="margin-right: 8px;"></i> Descargar CV</a>
            <br><span class="ubicacion">
                Almería, España 🇪🇸
            </span>
        </h2>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-mart%C3%ADnez-gonz%C3%A1lez-0a7837215/" target="_blank" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/JoseMartinez98" target="_blank" title="GitHub">
            <i class="fab fa-github"></i>
            </a>
            <a href="mailto:josesw98@gmail.com" title="Enviar correo">
            <i class="fas fa-envelope"></i>
            </a>
          </div>
    </div>
    
</div>
</template>
<style scoped>

.encabezado{
    margin: 40px;
    margin-top: 150px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    gap: 80px;
}
.fotoPerfil{
    width: 40%;
    display:flex;
    align-items: right;
    justify-content: end;
}
.infoPersonal{
    width: 60%;
}
.perfil{
    height: 320px;
    width: 250px;
    border-radius: 960px;
    box-shadow: 0px 0px 10px white;
}
h1{
    color: white;
    font-size: 70px;
}
h2{
    color: rgba(255, 255, 255, 0.676);
    font-size: 30px;
}
.nombre{
    color: yellow;
}
.ubicacion{
    width: 100%;
    font-size: 20px;
}
span{
    color: white;
    width: 100%;
}
.btn-cv {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, #FFD700, #FFA500); 
  color: #222; 
  padding: 12px 24px;
  font-weight: 600;
  font-size: 15px;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(255, 165, 0, 0.4);
  transition: background 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  user-select: none;
  margin-left: 20px;
}

.btn-cv:hover {
  background: linear-gradient(90deg, #FFA500, #FFD700);
  box-shadow: 0 6px 14px rgba(255, 165, 0, 0.6);
  color: #000;
}

.btn-cv i {
  margin-right: 8px;
  font-size: 20px;
}
 .social-icons {
      display: flex;
      font-size: 2rem;
      width: 80%;
      margin: 0 auto;
      margin-top: 40px;
      gap: 100px;
      
}
.social-icons a {
    color: white;      
    text-decoration: none;
    transition: all 0.2s ease;
}
.social-icons a:hover {
    color: yellow; 
    transform: scale(1.2);
  }
@media (max-width: 1024px) {
  .encabezado {
    flex-direction: column;
    gap: 40px;
    margin-top: 100px;
  }

  .fotoPerfil,
  .infoPersonal {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .perfil {
    height: 260px;
    width: 200px;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 24px;
  }

  .btn-cv {
    margin-left: 0;
    margin-top: 10px;
  }

  .ubicacion {
    display: block;
    margin-top: 10px;
    font-size: 18px;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
  }

  .perfil {
    height: 220px;
    width: 180px;
  }

  .btn-cv {
    font-size: 14px;
    padding: 10px 20px;
  }

  .ubicacion {
    font-size: 16px;
  }
}
</style>