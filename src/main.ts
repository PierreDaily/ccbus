import { createApp } from "vue";
import App from "./App.vue";
import Home from "./views//Home/index.vue";
import Share from "./views/Share/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import VueGtag from "vue-gtag";

const routes = [
  { path: "/", component: Home },
  { path: "/share", component: Share },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App)
  .use(router)
  .use(VueGtag, {
    config: {
      id: import.meta.env.PROD && import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
    },
  })
  .mount("#app");
