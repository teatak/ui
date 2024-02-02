import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from '@rollup/plugin-babel';
const packageJson = require("./package.json");

export default [
    {
        input: "src/index.js",
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
            nodeResolve({
                extensions: ['.js', '.jsx']
            }),
            babel({
                babelHelpers: 'bundled',
                presets: ['@babel/preset-react'],
                extensions: ['.js', '.jsx']
            }),
            commonjs(),
        ],
        external: ["color", "react", "react-dom", "react-dom/client", "styled-components"],
    },
];