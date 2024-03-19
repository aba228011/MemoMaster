import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from "./router/router.js";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import store from "./store/store.js";
import Dialog from "primevue/dialog"; /* Deprecated */

const app = createApp(App);
app.component('Card', Card);
app.component('Button', Button);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('InputText', InputText);
app.component('Dialog', Dialog);

app.use(store)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
