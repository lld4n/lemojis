import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: ["./lib/!(index).ts?(x)"],
  esbuildPlugins: [cssModulesPlugin()],
  format: ["cjs", "esm"],
  outDir: "dist/",
  injectStyle: true,
  dts: true,
  bundle: true,
  clean: true,
  splitting: true,
  minify: true,
  external: ["react"],
});
