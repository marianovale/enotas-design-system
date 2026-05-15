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
      customElementsExportBehavior: 'auto-define-custom-elements',
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
