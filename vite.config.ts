import { defineConfig } from "vite";

const id: string = "/mohole-2012/";

const isPROD: boolean = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  base: isPROD ? id : "/",
});
