<script>

import BenefitGroup from "../benefits/components/benefit-group.component.vue";

export default {
  name: 'about-product-content',
  components: {BenefitGroup}
}

</script>

<template>
  <div class="about-product-content">
    <h1>Conoce más sobre nuestra propuesta...</h1>
    <div class="about-product-video">
      <div class="iframe-wrapper">
        <iframe width="600" height="335" src="https://www.youtube.com/embed/MTmMTcVibNw?si=yKZCu_ycrFt-CkAI&amp;start=01"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-product-content {
  background-color: #D6773D;
  padding: 4rem 8rem 3rem 8rem;
  text-align: center;
}

.about-product-content h1 {
  color: #000;
  font-size: 2.3rem;
  padding-bottom: 3.5rem;
}

.iframe-wrapper {
  position: relative;
  width: 60%;  /* Ancho máximo */
  height: 400px; /* Alto específico */
  margin: auto; /* Centrado */
  overflow: hidden;
  background: #000;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 950px) {
  .about-product-content {
    padding: 4rem 3rem;
  }
  .about-product-content h1 {
    font-size: 2rem;
  }

  .iframe-wrapper {
    width: 100%;
    height: 180px; /* Alto específico */
  }
}
</style>
