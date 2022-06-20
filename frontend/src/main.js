import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import './assets/tailwind.css'
const app = createApp(App);
app.use(router).mount("#app");
app.config.globalProperties.$api = "http://localhost:8000";
