<script>

import BenefitGroup from "./components/benefit-group.component.vue";

export default {
  name: "benefits-content",
  components: {BenefitGroup}
}

</script>

<template>
  <div class="benefits-content">
    <h1>BENEFICIOS</h1>
    <p>
      Con <span class="orange-marker">Diligence Tech</span> tenemos planeado facilitar <br> la mayoría de tus obligaciones financieras.
    </p>
    <div class="benefits-information">
      <benefit-group icon="/benefits-icons/org-icon.png">
        Organización <br> de proyectos
      </benefit-group>
      <benefit-group icon="/benefits-icons/insert-icon.png">
        Fácil inserción <br> de datos
      </benefit-group>
      <benefit-group icon="/benefits-icons/diligence-icon.png">
        Diligencia rápida <br> y eficiente
      </benefit-group>
      <benefit-group icon="/benefits-icons/chat-icon.png">
        Interacción <br> profesional
      </benefit-group>
    </div>
  </div>
</template>

<style scoped>

.orange-marker{
  color:#D6773D;
}

.benefits-content{
  background-color: #000;
  padding: 4rem 8rem 3rem 8rem;
  text-align: center;
}

.benefits-content h1{
  color: #D6773D;
  font-size: 3rem;
  padding-bottom: 3.5rem;
}

.benefits-content p{
  font-size: 1.25rem;
}

.benefits-information {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 4rem;
}

@media screen and (max-width: 950px) {
  .benefits-information {
    grid-template-columns: repeat(2, 1fr);
  }

  .benefits-content {
    padding: 4rem 3rem;
  }

  .benefits-content h1 {
    font-size: 2.2rem;
  }
}

@media screen and (max-width: 600px) {
  .benefits-information {
    grid-template-columns: 1fr;
  }
}
</style>
