import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    resolve: {
      alias: {
        "@": "./src",
      }
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
});

// export default {
//   plugins: [vue()],
// };
