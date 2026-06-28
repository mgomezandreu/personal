import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// Deployed as a GitHub Pages *project* site at
// https://mgomezandreu.github.io/personal/ — `base` must be set so every
// generated link and asset resolves under /personal/.
export default defineConfig({
  site: "https://mgomezandreu.github.io",
  base: "/personal",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap(), tailwind()],
});
