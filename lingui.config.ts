const linguiConfig = {
    catalogs: [
        {
            path: `<rootDir>/src/locales/{locale}`,
            include: [`<rootDir>/src`],
        },
    ],
    compileNamespace: `ts`,
    fallbackLocales: {
        default: `en-US`,
    },
    format: `po`,
    formatOptions: {
        lineNumbers: false,
    },
    locales: [
        `en-US`,
        `pseudo`,
    ],
    orderBy: `messageId`,
    rootDir: `.`,
    runtimeConfigModule: [`@lingui/core`, `i18n`],
    sourceLocale: `en-US`,
    pseudoLocale: `pseudo`,
};
  
export default linguiConfig;