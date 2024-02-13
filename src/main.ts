import { createApp } from "vue";
import { createPinia } from "pinia";
import globalComponents from "@/components/global-components";
import "@/assets/scss/global.scss";

import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { maska } from 'maska'


const app = createApp(App);
app.directive('mask', maska)
app.use(globalComponents);
app.use(ElementPlus)    
app.use(createPinia());
app.use(router);


app.mount("#app");
