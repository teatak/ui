import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                dir: "./dist/cjs",
                format: "cjs",
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: 'src',
            },
            {
                dir: "./dist/esm",
                format: "esm",
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: 'src',
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.build.json" }),
        ],
        external: ["color", "classnames", "react", "react-dom", "react-dom/client", "react-transition-group", "styled-components"],
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/types.d.ts", format: "esm" }],
        plugins: [dts.default()],
    },
];