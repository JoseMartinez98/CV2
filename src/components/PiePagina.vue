<script setup>
</script>
<template>
     <footer class="footer">
    <p>&copy; 2025 Website José Antonio Martínez González. All rights reserved.</p>
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
  </footer>
</template>
<style scoped>
.footer{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #0000006d;
        border-radius: 10px;
        padding: 10px;
        color: white;
    }
    .social-icons {
      display: flex;
      justify-content: space-between;
      font-size: 2rem;
      width: 30%;
    }
    .social-icons a {
        color: white;      
        text-decoration: none;
    }
    .social-icons a:hover {
      color: yellow; 
    }
    /* Tablets */
@media (max-width: 768px) {
 .footer {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  } 
}
/* Móviles */
@media (max-width: 480px) {
  .footer {
    max-width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}
  .social-icons {
    width: 100%;
    max-width: 300px;
    justify-content: space-around;
    margin: 0;
    padding: 0;
}
}
</style>