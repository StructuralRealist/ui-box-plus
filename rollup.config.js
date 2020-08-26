import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const customResolver = resolve({
  extensions,
});
const projectRootDir = path.resolve(__dirname);

export default {
  input: "./src/index.ts",

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ["react", "styled-components", "ui-box"],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      babelHelpers: "bundled",
      include: ["src/**/*"],
    }),
  ],

  output: [
    {
      file: "lib/ui-box-plus.es.js",
      format: "es",
    },
    {
      file: "lib/ui-box-plus.umd.js",
      name: "Element",
      format: "umd",
    },
    {
      file: "lib/ui-box-plus.min.js",
      name: "Element",
      format: "umd",
      plugins: [terser()],
    },
  ],
};
