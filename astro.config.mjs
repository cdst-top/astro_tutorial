import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://openxw.netlify.app/",
  integrations: [preact()]
});