import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"],
  format: ["esm"],
  platform: "node",
  target: "node20",
  outDir: "api",
  external: ["pg-native", "@prisma/client", ".prisma/client"],
  bundle: true, // Bundles all dependencies into a single file
  skipNodeModulesBundle: true, // Prevents bundling node_modules
  shims: true, // Fixes __dirname and other ESM compatibility issues
  outExtension() {
    return { js: ".mjs" }; // Outputs server.mjs
  },
  clean: true, // Clears the api/ folder before every build
});
