<script>

export default {
    name: "toolbar-content",
    components: {

    },
    data() {
        return {
            scrolled: false,
            menuOpen: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0;
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};

</script>

<template>
  <div>
    <pv-toolbar :class="['toolbar-content', { 'scrolled-toolbar': scrolled }]">
      <template #start>
        <a href="#">
          <img src="/public/brand-logo/brand-white-logo.png" alt="Diligence Tech Logo" width="200">
        </a>
      </template>
      <template #center>
        <div v-if="!menuOpen" class="nav-links">
          <a href="#about-us" class="link-to">Nosotros</a>
          <a href="#benefits" class="link-to">Beneficios</a>
          <a href="#plans" class="link-to">Planes</a>
          <a href="#contact-us" class="link-to">Contáctanos</a>
        </div>
      </template>
      <template #end>
        <div v-if="!menuOpen" class="nav-links">
          <button class="download-button">
            Empieza ya!
          </button>
        </div>
        <div class="burger" @click="toggleMenu">
          <div :class="['line', { 'active': menuOpen }]"></div>
          <div :class="['line', { 'active': menuOpen }]"></div>
          <div :class="['line', { 'active': menuOpen }]"></div>
        </div>
      </template>
    </pv-toolbar>
    <div v-if="menuOpen" class="dropdown-menu">
      <a href="#about-us" class="dropdown-link" @click="toggleMenu">Nosotros</a>
      <a href="#benefits" class="dropdown-link" @click="toggleMenu">Beneficios</a>
      <a href="#plans" class="dropdown-link" @click="toggleMenu">Planes</a>
      <a href="#contact-us" class="dropdown-link" @click="toggleMenu">Contáctanos</a>
      <button class="dropdown-download-button" @click="toggleMenu">
        Empieza ya!
      </button>
    </div>
  </div>
</template>

<style scoped>

.download-button{
  background-color: #D6773D;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.43s;
  font-weight: bolder;
  font-size: 1rem;
}

.download-button:hover{
  background-color: #fff;
  color: #D6773D;
}

.toolbar-content {
  background-color: #000;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s, box-shadow 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: #fff;
}

a{
  text-decoration: none;
}

.link-to {
  color: #fff;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s;
}

.link-to:hover {
  color: #D6773D;
}

.scrolled-toolbar {
  background-color: rgba(16, 16, 16, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: transform 0.3s, opacity 0.3s;
}

.line.active:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.line.active:nth-child(2) {
  opacity: 0;
}

.line.active:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 75px;
  right: 0;
  left: 0;
  background-color: #0c0c0c;
  z-index: 999;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(23, 23, 23, 0.8);
}

.dropdown-link {
  color: #fff;
  text-decoration: none;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;
}

.dropdown-link:hover {
  color: #D6773D;
}

.dropdown-download-button {
  background-color: #D6773D;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 1rem;
  transition: 0.43s;
  width: 150px;
  font-weight: bolder;
  font-size: 1rem;
}

.dropdown-download-button:hover {
  background-color: #fff;
  color: #D6773D;
}

@media (max-width: 1050px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: flex;
  }

  .nav-links.open {
    display: flex;
    flex-direction: column;
  }
}

</style>