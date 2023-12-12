import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-fast-marquee"], // Tambahkan modul yang ingin di-externalize di sini
    },
  },
});
