import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Ensure IPv6 compatibility is intended
    port: 8080,
  },
  base: "/jashwinsinghportfoliowebsite", // Properly placed base property
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean), // Ensure plugins array is cleaned of falsy values
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
