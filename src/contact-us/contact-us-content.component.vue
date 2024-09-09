<script>
import Swal from "sweetalert2";

export default {
  name: "contact-us-content",
  data() {
    return {
      contactForm: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.contactForm.name && this.contactForm.email && this.contactForm.phone) {
        Swal.fire({
          icon: "success",
          title: "Enviado!",
          text: "Tu formulario ha sido enviado exitosamente.",
          confirmButtonText: "OK",
        });

        this.contactForm.name = "";
        this.contactForm.email = "";
        this.contactForm.phone = "";
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor, completa todos los campos.",
          confirmButtonText: "OK",
        });
      }
    },
  },
};
</script>

<template>
  <div class="contact-us-content">
    <div class="contact-us-text">
      <h1>CONTÁCTANOS</h1>
      <p>
        Estamos <span class="orange-marker">100% dispuestos</span> a resolver cualquier de las dudas de nuestros usuarios en sus primeros pasos con <span class="orange-marker">Diligence Tech.</span>
      </p>
      <p>
        Completa el formulario y nos pondremos en contacto contigo!
      </p>
    </div>
    <div class="contact-us-form">
      <form @submit.prevent="submitForm" class="form-wrapper">
        <input type="text" v-model="contactForm.name" placeholder="Nombre de contacto" />
        <input type="email" v-model="contactForm.email" placeholder="Correo electrónico" />
        <input type="tel" v-model="contactForm.phone" placeholder="Número telefónico" />
        <button type="submit" class="submit-btn">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.orange-marker {
  color: #d6773d;
}

.contact-us-content {
  background-color: #000;
  padding: 7.5rem 8rem 7.5rem 8rem;
  display: flex;
  gap: 1rem;
}

.contact-us-text {
  width: 50%;
  align-content: center;
}

.contact-us-text h1 {
  color: #d6773d;
  font-size: 3rem;
  padding-bottom: 3rem;
}

.contact-us-text p {
  font-size: 1.25rem;
  padding-bottom: 1.15rem;
}

.contact-us-form {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
}

input {
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #151515;
}

input:focus {
  outline: none;
  box-shadow: none;
}

.submit-btn {
  padding: 0.8rem;
  background-color: #d6773d;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.43s;
}

.submit-btn:hover {
  background-color: #7B3C14;
  color: #fff;
}

@media screen and (max-width: 1070px) {
  .contact-us-content {
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
  }

  .contact-us-text {
    width: 100%;
  }

  .contact-us-form {
    width: 100%;
    padding-top: 2rem;
  }

  .contact-us-text h1 {
    font-size: 2.2rem;
  }
}
</style>
