<script>
import PlanList from "./components/plan-list.component.vue";
import FaqsList from "./components/faqs-list.component.vue";

export default {
  name: "plans-content",
  components: {FaqsList, PlanList},
}
</script>

<template>
  <div class="plans-content">
    <div class="plans-text">
      <h1>PLANES</h1>
      <p>
        Contamos con 3 tipos de opción del pago de suscripción <span class="orange-marker">Diligence Tech</span>, con un descuento especial de acuerdo al tipo de plan elegido.
      </p>
      <p>
        Todos nuestros planes cuentan con la posibilidad de un reembolso dentro de los primeros 15 días.
      </p>
      <p>
        *Disponible  <span class="orange-marker">todos los medios de pago</span>  digitales
      </p>
    </div>
    <div class="plans-list">
      <plan-list></plan-list>
    </div>
  </div>
  <div class="faqs-content">
    <div class="faqs-list">
      <faqs-list></faqs-list>
    </div>
    <div class="faqs-text">
      <h1>PREGUNTAS FRECUENTES</h1>
      <p>
        Con <span class="orange-marker">Diligence Tech</span>  estamos comprometidos por <span class="orange-marker">darle confianza y seguridad</span> a nuestros usuarios, es por ello que planteamos respuestas a las preguntas más comunes que puedan hacerse nuestros futuros clientes.
      </p>
    </div>
  </div>

</template>

<style scoped>

.plans-list{
  width: 60%;
  align-content: center;
}

.orange-marker{
  color:#D6773D;
}

.plans-content, .faqs-content{
  background-color: #000;
  padding: 5rem 8rem 5rem 8rem;
  display: flex;
  gap: 2rem;
}

.plans-text{
  width: 40%;
  align-content: center;
}

.plans-text h1, .faqs-text h1{
  color: #D6773D;
  font-size: 3rem;
  padding-bottom: 3rem;
}

.plans-text p, .faqs-text p{
  font-size: 1.25rem;
  padding-bottom: 1.15rem;
}

.faqs-text{
  width: 45%;
  align-content: center;
}

.faqs-list{
  width: 55%;
  align-content: center;
}

@media screen and (max-width: 1150px){
  .plans-content{
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
  }

  .plans-text{
    width: 100%;
  }

  .plans-text h1{
    font-size: 2.2rem;
  }

  .plans-list {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

}

@media screen and (max-width: 950px){
  .faqs-content{
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
  }
  .faqs-text{
    width: 100%;
    order: 1;
  }
  .faqs-text h1{
    font-size: 2.2rem;
  }

  .faqs-list {
    order: 2;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  }

}

</style>