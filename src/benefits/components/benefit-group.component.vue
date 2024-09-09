<script>
export default {
  name: "benefit-group",
  props: {
    icon: String,
  }
}
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