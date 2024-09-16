<script>
import { onMounted } from "vue";

export default {
  name: "benefit-group",
  props: {
    icon: String,
  },
  setup() {
    onMounted(() => {
      // Selecciona todos los elementos con la clase 'benefit-group-content'
      const benefitGroups = document.querySelectorAll(".benefit-group-content");

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            // Detiene la observación después de que el efecto se aplique
            observer.unobserve(entry.target);
          }
        });
      });

      // Observa todos los elementos seleccionados
      benefitGroups.forEach((element) => {
        observer.observe(element);
      });
    });
  }
};
</script>

<template>
  <div class="benefit-group-content">
    <div class="benefit-group-icon">
      <img :src="icon" alt="Benefit icon" class="img-benefit">
    </div>
    <div class="benefit-group-text">
      <h1><slot></slot></h1>
    </div>
  </div>
</template>

<style scoped>
.benefit-group-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.benefit-group-content.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.benefit-group-icon {
  background-color: #D6773D;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  transition: 0.43s;
  cursor: pointer;
}

.benefit-group-icon:hover {
  box-shadow: 0px 0px 20px 0px #D6773D;
}

.img-benefit {
  width: 90px;
}

.benefit-group-text h1 {
  font-size: 1.25rem;
  margin: 0;
  padding-bottom: 2rem;
}
</style>
