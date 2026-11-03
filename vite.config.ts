// @lovable.dev/vite-tanstack-config provides the shared TanStack Start,
// React, Tailwind, path-alias, and Lovable preview plugins.
// Keep this wrapper so the existing Lovable project continues to work.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Preserve the project's SSR error wrapper.
    server: { entry: "server" },
  },
  // Override the wrapper's default Cloudflare Nitro target for Netlify.
  // This packages SSR and server routes as Netlify Functions.
  nitro: { preset: "netlify" },
});
