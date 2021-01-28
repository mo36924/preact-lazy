import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "commonjs",
        sourcemap: true,
        preferConst: true,
        exports: "auto",
      },
      {
        file: "dist/index.mjs",
        format: "module",
        sourcemap: true,
        preferConst: true,
      },
    ],
    external: (id, parentId) => parentId && /^@?[A-Za-z]/.test(id),
    plugins: [typescript()],
  },
  {
    input: "src/index.browser.ts",
    output: [
      {
        file: "dist/index.browser.js",
        format: "module",
        sourcemap: true,
        preferConst: true,
      },
    ],
    external: (id, parentId) => parentId && /^@?[A-Za-z]/.test(id),
    plugins: [typescript()],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "module" }],
    plugins: [dts()],
  },
];
