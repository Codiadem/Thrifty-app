import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      VITE_API_KEY: "AIzaSyCrwjZJWXsJwjpNsDiCLiAPlkObpVbuwoc",
      VITE_AUTH_DOMAIN: "thriftyapp-8314c.firebaseapp.com",
      VITE_STORAGE_BUCKET: "thriftyapp-8314c.firebaseapp.com",
      VITE_SENDER_ID: "892962570948",
      VITE_APP_ID: "1:892962570948:web:cf31aa3021459d113bff91",
      VITE_MEASUREMENT_ID: "G-JWJ1EJQP3Z",
    },
  },
});
