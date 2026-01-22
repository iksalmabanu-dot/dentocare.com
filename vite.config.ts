import { defineConfig } from “vite”;
import react from “@vitejs/plugin-react”;

export default defineConfig({
  base: “/dentocare/“,
  plugins: [react()],
  build: {
    outDir: “dist”,
  },
});
