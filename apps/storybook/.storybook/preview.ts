import type { Preview } from '@storybook/web-components';
import '@enotas-ds/tokens/css';

// Registra todos os Web Components do eNotas DS.
// Usamos o bundle `dist-custom-elements` (modo `bundle`) em vez do lazy-loader:
// o Vite empacota tudo estaticamente, sem chunks `.entry.js` em runtime
// (que davam 404 no GitHub Pages). A função defineCustomElements() registra
// TODOS os componentes — inclusive os não referenciados por outros (en-alert,
// en-toast), que o tree-shaking removeria no modo auto-define.
import { defineCustomElements } from '@enotas-ds/components/components';

defineCustomElements();

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#f5f3ef' },
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
