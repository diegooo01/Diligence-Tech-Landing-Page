<script>

export default {
  name: 'hero-content'
}

</script>

<template>

  <div class="hero-content">
    <div class="hero-image">
      <img src="/public/hero-section/hero-image.png" alt="Hero image" class="hero-img">
    </div>
    <div class="hero-text-content">
      <div class="hero-text">
        <h1>REVOLUCIONA LA DILIGENCIA <br> DEBIDA CON <br> <span class="orange-marker">DILIGENCE TECH</span> </h1>
        <p>No dudes en ser parte de la revolución digital!</p>
        <a href="https://play.google.com/store/games?hl=es_419" target="_blank">
          <img src="/public/hero-section/playstore-image.png" alt="PlayStore image" width="200">
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped>

.orange-marker{
  color:#D6773D;
}

.hero-content{
  background-color: #000;
  display: flex;
  padding: 5.5rem 3rem 3.5rem 3rem;

}

.hero-image{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.hero-img{
  width: 50%;
}

.hero-img {
  width: 62%;
}

.hero-text-content{
  width: 50%;
  align-content: center;
}

.hero-text h1{
  font-size: 3rem;
}

.hero-text p{
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

@media screen and (max-width: 850px) {
  .hero-content {
    display: flex;
    flex-direction: column;
  }

  .hero-text-content {
    order: 1;
    width: 100%;
    padding: 1.5rem 0rem 2rem 0rem;
  }

  .hero-text h1 {
    font-size: 2.2rem;

  }

  .hero-image {
    order: 2;
    width: 100%;
  }

  .hero-img {
    width: 55%;
  }
}

</style>