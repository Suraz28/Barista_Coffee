import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compression";

// Vite configuration
export default defineConfig({
  plugins: [
    react(),
    compress({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false,
    }),
  ],
  build: {
    minify: "esbuild",
    esbuild: {
      minifySyntax: true,
      minifyWhitespace: true,
      minifyIdentifiers: true,
    },
    rollupOptions: {
      plugins: [],
    },
  },
});
