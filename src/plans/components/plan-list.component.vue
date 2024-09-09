<script>
export default {
  name: "plan-list",
}
</script>

<template>
  <div class="list">
    <div class="first-plan">
      <p>1 Mes</p>
      <h1>$10.99</h1>
      <button class="first-button">Comprar</button>
      <p>*Ahorras $0.00</p>
    </div>
    <div class="main-plan">
      <p>4 Meses</p>
      <h1>$35.99</h1>
      <button class="main-button">Comprar</button>
      <p>*Ahorras $7.97</p>
    </div>
    <div class="first-plan">
      <p>1 Año</p>
      <h1>$110.99</h1>
      <button class="first-button">Comprar</button>
      <p>*Ahorras $20.89</p>
    </div>
  </div>

</template>

<style scoped>

.first-button{
  background-color: #fff;
  border: none;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-weight: bolder;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: 0.43s;
}

.first-button:hover{
  background-color: #000;
  color: #fff;
}

.main-button{
  background-color: #000;
  border: none;
  color: #D6773D;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-weight: bolder;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: 0.43s;
}

.main-button:hover{
  background-color: #D6773D;
  color: #fff;
}

.list{
  display: flex;
  gap: 1rem;
  align-content: center;
  align-items:center;
  justify-content: center;
  width: 100%;
}

.first-plan{
  background-color: #D6773D;
  border-radius: 10px;
  color: #fff;
  padding: 2rem 0.2rem;
  text-align: center;
  height: 170px;
  align-content: center;
  font-size: 1.1rem;
  width: 33%;
  transition: 0.43s;
}

.first-plan:hover{
  box-shadow: 0px 0px 20px 0px #D6773D;
  scale: 1.02;
}

.main-plan{
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem 0.2rem;
  text-align: center;
  height: 190px;
  align-content: center;
  font-size: 1.1rem;
  width: 33%;
  transition: 0.43s;
  cursor: pointer;
}

.main-plan:hover{
  box-shadow: 0px 0px 20px 0px #D6773D;
  scale: 1.03;
}

.main-plan h1{
  color: #D6773D;

}

.main-plan p{
  color: #D6773D;
}

/* Media query para diseño responsive */
@media screen and (max-width: 668px) {
  .list {
    flex-direction: column;
    gap: 1.5rem; /* Ajustar el espacio entre los elementos */
  }

  .first-plan, .main-plan {
    width: 80%; /* Ocupa todo el ancho */
  }
}

</style>