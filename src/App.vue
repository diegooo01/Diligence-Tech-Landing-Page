<script>
import {defineComponent} from "vue";
import ToolbarContent from "./public/components/toolbar-content.component.vue";
import HeroContent from "./hero/hero-content.component.vue";
import AboutUsContent from "./about-us/about-us-content.component.vue";
import BenefitsContent from "./benefits/benefits-content.component.vue";
import PlansContent from "./plans/plans-content.component.vue";
import ContactUsContent from "./contact-us/contact-us-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";

export default defineComponent({
    name: "App",
    components: {
      FooterContent,
      ContactUsContent,
      PlansContent,
      BenefitsContent,
      AboutUsContent,
      HeroContent,
      ToolbarContent

    }
});

</script>

<template>
  <div id="app">
    <toolbar-content></toolbar-content>
    <div id="hero">
      <HeroContent></HeroContent>
    </div>
    <div id="about-us" class="section">
      <AboutUsContent></AboutUsContent>
    </div>
    <div id="benefits" class="section">
      <BenefitsContent></BenefitsContent>
    </div>
    <div id="plans" class="section">
      <PlansContent></PlansContent>
    </div>
    <div id="contact-us" class="section">
      <ContactUsContent></ContactUsContent>
    </div>
    <footer-content></footer-content>
  </div>
</template>

<style scoped>

.section {
  scroll-margin-top: 50px;
}

</style>
