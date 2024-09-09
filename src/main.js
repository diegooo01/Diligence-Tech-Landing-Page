import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab'; // Aquí corriges el import

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Toolbar from "primevue/toolbar";
import Sidebar from "primevue/sidebar";


createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('pv-toolbar', Toolbar)
    .component('pv-sidebar', Sidebar)
    .component('Accordion', Accordion) // Usa el nombre correcto del componente
    .component('AccordionTab', AccordionTab) // Usa el nombre correcto del componente
    .mount('#app')
