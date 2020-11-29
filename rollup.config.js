import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

const createConfig = (input, output, additionnalPlugins = []) => ({
  input,
  output: {
    file: output,
    format: "cjs",
  },
  plugins: [
    nodeResolve({
      jsnext: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      exclude: "node_modules/**",
    }),
    ...additionnalPlugins,
  ],
});

export default [
  createConfig("src/array.js", "lib/array.js", [uglify()]),
  createConfig("src/fn.js", "lib/fn.js", [uglify()]),
  createConfig("src/is.js", "lib/is.js", [uglify()]),
  createConfig("src/number.js", "lib/number.js", [uglify()]),
  createConfig("src/string.js", "lib/string.js", [uglify()]),
  createConfig("src/transform.js", "lib/transform.js", [uglify()]),
  createConfig("src/url.js", "lib/url.js", [uglify()]),
  createConfig("src/index.js", "lib/index.js", [uglify()]),
];
