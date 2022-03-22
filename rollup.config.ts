/**
 * Basic config file for rollup in order to compile dynamic imports (e.g. LinguiJS locale file)
 */

import typescript from 'rollup-plugin-typescript2';

export default {
    input: `./index.tsx`,

    plugins: [
        typescript({
            tsconfig: `./tsconfig.json`,
            useTsconfigDeclarationDir: true
        })
    ]
};