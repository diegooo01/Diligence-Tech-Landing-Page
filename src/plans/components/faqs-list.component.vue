<script>
export default {
  name: "faqs-list",
};
</script>

<template>
  <div class="accordion-wrapper">
    <Accordion class="accordion-content" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
      <AccordionTab header="¿Diligence Tech se mantendrá actualizada respecto a los cambios del mercado?" class="accordion-text">
        <p class="m-0">
          En DiligenceTech, actualizamos constantemente nuestra plataforma integrando las últimas innovaciones y colaborando con expertos del sector financiero.
        </p>
      </AccordionTab>
    </Accordion>
    <Accordion class="accordion-content" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
      <AccordionTab header="¿Cómo Diligence Tech garantiza la confidencialidad?" class="accordion-text">
        <p class="m-0">
          Garantizamos la confidencialidad a través de encriptación avanzada de datos, estricto control de acceso con autenticación multifactor y auditorías de seguridad periódicas.
        </p>
      </AccordionTab>
    </Accordion>
    <Accordion class="accordion-content" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
      <AccordionTab header="¿Qué tipo de soporte brinda Diligence Tech si hay inconvenientes?" class="accordion-text">
        <p class="m-0">
          DiligenceTech ofrece asistencia al cliente por correo electrónico y teléfono. Nuestro equipo de expertos está siempre disponible para resolver problemas y responder preguntas.
        </p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style scoped>
.accordion-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
}

.accordion-content {
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  transition: 0.43s;
}

.accordion-wrapper .accordion-content:nth-of-type(1) {
  background-color: #9B4A18;
}

.accordion-wrapper .accordion-content:nth-of-type(2) {
  background-color: #dc7433;
}

.accordion-wrapper .accordion-content:nth-of-type(3) {
  background-color: #da814a;
}

.accordion-wrapper .accordion-content:nth-of-type(1):hover {
  background-color: #7B3C14;
}

.accordion-wrapper .accordion-content:nth-of-type(2):hover {
  background-color: #c35f25;
}

.accordion-wrapper .accordion-content:nth-of-type(3):hover {
  background-color: #bf6d39;
}

.accordion-text .p-accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.accordion-text .p-accordion-header .p-accordion-toggle-icon {
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
}

.accordion-content .p-accordion-header.p-highlight .p-accordion-toggle-icon:before {
  content: '-';
}

p {
  padding-top: 1rem;
  font-weight: 400;
}

@media (max-width: 768px) {
  .accordion-content {
    padding: 1.5rem;
  }

  .accordion-wrapper {
    gap: 0.8rem;
  }

  .accordion-text .p-accordion-header {
    font-size: 1rem;
  }
}
</style>
