import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";

createApp(App)
  .use(VueGtag, {
    config: { id: import.meta.env.PROD && import.meta.env.Vite_GOOGLE_ANALYTICS_ID },
  })
  .mount("#app");
