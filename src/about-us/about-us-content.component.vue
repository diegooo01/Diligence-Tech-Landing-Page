<script>

export default {
  name: "about-us-content"
}
</script>

<template>
  <div class="about-us-content">
    <div class="about-us">
      <div class="about-us-text">
        <h1>NOSOTROS</h1>
        <p>
          Somos <span class="orange-marker">MobilLoom</span> una startup en crecimiento que mediante <span class="orange-marker">Diligence Tech</span> promovemos una mejoría en los procesos financieros ya existentes.
        </p>
        <p>
          Contamos con un equipo altamente capacitado en <span class="orange-marker">tecnología financiera</span> y desarrollo móvil que harán de esta iniciativa una <span class="orange-marker">verdadera revolución</span> para la industria financiera.
        </p>
      </div>
      <div class="about-us-image">
        <img src="/public/hero-section/us-image.png" alt="Us Image" class="us-img">
      </div>
    </div>
  </div>

</template>

<style scoped>

.orange-marker{
  color:#D6773D;
}

.about-us-content{
  background-color: #000;
  padding: 2rem 8rem 3rem 8rem;
}

.about-us-text{
  width: 50%;
  align-content: center;
}

.about-us-text h1{
  color: #D6773D;
  font-size: 3rem;
  padding-bottom: 3rem;
}

.about-us-text p{
  font-size: 1.25rem;
  padding-bottom: 1.15rem;
}

.about-us{
  display: flex;
}

.about-us-image{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.us-img{
  width: 90%;
}

@media screen and (max-width: 950px){
  .about-us-content{
    padding: 4rem 3rem;
  }

  .about-us{
    display: flex;
    flex-direction: column;
  }

  .about-us-text{
    width: 100%;
  }

  .about-us-image{
    width: 100%;
  }

  .us-img{
    width: 75%;
  }

  .about-us-text h1{
    font-size: 2.2rem;
  }

}

</style>