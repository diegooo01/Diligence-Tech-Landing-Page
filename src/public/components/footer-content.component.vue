<script>
export default {
  name: 'footer-content'
}
</script>

<template>

  <footer>
    <div class="brand-section">
      <img src="/public/brand-logo/brand-orange-logo.png" width="200">
    </div>
    <div class="info-section">
      <h1>Información de contacto</h1>
      <p>
        Número de contacto: 923 123 345
      </p>
      <p>
        Dirección: Los Helechos 123, Surco
      </p>
      <p>
        diligence@mobiloom.pe
      </p>
    </div>
    <div class="social-media-section">
      <div class="social-media-icon">
        <a href="https://x.com/" target="_blank">
          <img src="/public/social-media-icons/x-icon.png" alt="X icon" width="30">
        </a>
      </div>
      <div class="social-media-icon">
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/public/social-media-icons/instagram-icon.png" alt="Instagram icon" width="40">
        </a>
      </div>
      <div class="social-media-icon">
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <img src="/public/social-media-icons/linkedin-icon.png" alt="LinkedIn icon" width="30">
        </a>
      </div>
    </div>
  </footer>
  <div class="rights">
    <p>Todos los derechos reservados. © 2024. MobilLoom</p>
  </div>
</template>

<style scoped>

footer {
  background-color: #101010;
  color: #fff;
  text-align: center;
  padding: 3.5rem 2rem;
  display: flex;
  justify-content: space-around;
}

.rights{
  background-color: #101010;
  color: #fff;
  text-align: center;
  padding: 0.5rem 0rem 3rem 0rem;
}

.info-section{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
}

.info-section h1{
  font-size: 1.2rem;
  color: #D6773D;
  padding-bottom: 1rem;
}

.social-media-section{
  display: flex;
  gap: 0.8rem;
  justify-content: center;
}

.social-media-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #D6773D;
  transition: 0.43s;
}

.social-media-icon:hover{
  box-shadow: 0px 0px 13px 0px #D6773D;
}

.social-media-icon img {
  vertical-align: middle;
}

@media screen and (max-width: 850px) {
  footer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .social-media-section {
    padding-top: 2rem;

  }
}

</style>