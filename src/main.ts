import { createApp } from "vue";
import App from "./App.vue";
import Home from "./views//Home/index.vue";
import Share from "./views/Share/index.vue";
import PrivacyPolicy from "./views/PrivacyPolicy/index.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createGtag } from "vue-gtag";

const routes = [
  { path: "/", component: Home },
  { path: "/privacy", component: PrivacyPolicy },
  { path: "/share", component: Share },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

createGtag({
  tagId: import.meta.env.VITE_GA_MEASURMENT_ID,
  pageTracker: {
    router, // <----- add your router here
  },
});
createApp(App).use(router).mount("#app");
