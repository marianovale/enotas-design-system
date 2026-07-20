import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'enotas-ds',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      collectionDir: 'collection',
    },
    {
      type: 'dist-custom-elements',
      // `bundle`: gera uma função defineCustomElements() que registra TODOS os
      // componentes. Necessário para o Storybook — o modo auto-define é
      // tree-shakeable e o Vite removia componentes não referenciados por
      // outros (ex.: en-alert, en-toast), deixando o preview em branco.
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
