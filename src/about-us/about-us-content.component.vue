<script>
import { onMounted } from "vue";

export default {
  name: "about-us-content",
  setup() {
    onMounted(() => {
      const aboutUsSection = document.querySelector(".about-us");

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            // Detiene la observación después de que el efecto se aplique
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(aboutUsSection);
    });
  }
};
</script>

<template>
  <div class="about-us-content">
    <div class="about-us">
      <div class="about-us-text">
        <h1>NOSOTROS</h1>
        <p>
          Somos <span class="orange-marker">MobilLoom</span>, una startup en crecimiento que mediante <span class="orange-marker">Diligence Tech</span> promovemos una mejoría en los procesos financieros ya existentes.
        </p>
        <p>
          Contamos con un equipo altamente capacitado en <span class="orange-marker">tecnología financiera</span> y desarrollo móvil que harán de esta iniciativa una <span class="orange-marker">verdadera revolución</span> para la industria financiera.
        </p>
      </div>
      <div class="iframe-wrapper">
        <iframe width="600" height="335" src="https://www.youtube.com/embed/MTmMTcVibNw?si=yKZCu_ycrFt-CkAI&amp;start=01"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>

.iframe-wrapper {
  position: relative;
  width: 50%;  /* Ancho máximo */
  height: 350px; /* Alto específico */
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


.about-us {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  gap: 1rem;
}

.about-us.fade-in {
  opacity: 1;
  transform: translateY(0);
}


.orange-marker {
  color: #fff;
}

.about-us-content {
  background-color: #D6773D;
  padding: 4rem 8rem 4rem 8rem;
}

.about-us-text {
  width: 50%;
  align-content: center;
}

.about-us-text h1 {
  color: #000;
  font-size: 3rem;
  padding-bottom: 3rem;
}

.about-us-text p {
  font-size: 1.25rem;
  padding-bottom: 1.15rem;
  color: #000;
}

.about-us {
  display: flex;
}

.about-us-image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.us-img {
  width: 90%;
}

@media screen and (max-width: 950px) {
  .about-us-content {
    padding: 4rem 3rem;
  }

  .about-us {
    display: flex;
    flex-direction: column;
  }

  .about-us-text {
    width: 100%;
  }

  .about-us-image {
    width: 100%;
  }

  .us-img {
    width: 75%;
  }

  .about-us-text h1 {
    font-size: 2.2rem;
  }

  .iframe-wrapper {
    width: 100%;
    height: 180px; /* Alto específico */
  }
}
</style>