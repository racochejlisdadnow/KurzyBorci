import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://racochejlisdadnow.github.io",
  base: "/KurzyBorci",
  vite: {
    plugins: [tailwindcss()],
  },
});
