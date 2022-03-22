import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const reactBabelRefreshPlugin = require(`./reactBabelRefreshPlugin`).default;
import svgr from "@honkhonk/vite-plugin-svgr";
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// https://github.com/capaj/vite-lingui-poc
// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
export default defineConfig({
    assetsInclude: [`./src/assets/*`],
    envDir: `./env`,
    plugins: [
        dynamicImportVars({
            include: [`*.js[x]?`, `*.ts[x]?`]
        }),
        react(),
        reactBabelRefreshPlugin(),
        svgr(),
        tsconfigPaths()
    ],
});
