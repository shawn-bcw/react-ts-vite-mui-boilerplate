import react from "@vitejs/plugin-react";
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from "path";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
// https://github.com/capaj/vite-lingui-poc
export default defineConfig({
    assetsInclude: [`./src/assets/*`],
    envDir: `./env`,
    plugins: [
        macrosPlugin(),
        react(),
        reactRefresh(),
    ],
    resolve:{
        alias:{
            '@' : path.resolve(__dirname, `./src`)
        },
    },
});
