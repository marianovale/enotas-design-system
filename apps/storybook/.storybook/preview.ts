import type { Preview } from '@storybook/web-components';
import '@enotas-ds/tokens/css';
import { defineCustomElements } from '@enotas-ds/components/loader';

// Registra todos os Web Components do eNotas DS
defineCustomElements();

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#f7f7f7' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#1f1f1f' },
      ],
    },
    a11y: {
      // axe-core rodando em todas as stories automaticamente
      config: {},
    },
  },
};

export default preview;
