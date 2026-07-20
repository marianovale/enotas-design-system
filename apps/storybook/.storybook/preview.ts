import type { Preview } from '@storybook/web-components';
import '@enotas-ds/tokens/css';

// Registra todos os Web Components do eNotas DS.
// Usamos o bundle `dist-custom-elements` (auto-define) em vez do lazy-loader:
// o Vite empacota tudo estaticamente, sem chunks `.entry.js` carregados em runtime
// (que davam 404 no Storybook publicado no GitHub Pages).
import '@enotas-ds/components/components';

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
