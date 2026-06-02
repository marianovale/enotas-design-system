/**
 * Code Connect — en-progress
 *
 * Props mapeadas:
 *   value      — número 0–100 (estado da barra)
 *   intent     — 'default' | 'success' | 'warning' | 'danger'
 *   size       — 'sm' | 'md'
 *   show-label — exibe linha de label + percentual acima da barra
 *   label      — texto descritivo acessível
 *
 * Sem eventos (@Event não definido no componente).
 */

import figma from '@figma/code-connect';

const FIGMA_BASE =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System';

// ─── Estado: início (0%) ──────────────────────────────────────────────────────
figma.connect(`${FIGMA_BASE}?node-id=290-4457`, {
  variant: { State: 'start' },
  example: () => `<en-progress value="0" label="Aguardando"></en-progress>`,
});

// ─── Estado: em progresso (intermediário) ─────────────────────────────────────
figma.connect(`${FIGMA_BASE}?node-id=290-4457`, {
  variant: { State: 'progress' },
  example: () =>
    `<en-progress value="65" show-label label="Processando..."></en-progress>`,
});

// ─── Estado: concluído (100%) ─────────────────────────────────────────────────
figma.connect(`${FIGMA_BASE}?node-id=290-4457`, {
  variant: { State: 'finished' },
  example: () =>
    `<en-progress value="100" show-label label="Concluído"></en-progress>`,
});

// ─── Intent: success ──────────────────────────────────────────────────────────
figma.connect(`${FIGMA_BASE}?node-id=290-4457`, {
  variant: { Intent: 'success' },
  example: () =>
    `<en-progress value="100" intent="success" show-label label="Configuração concluída"></en-progress>`,
});

// ─── Intent: warning ─────────────────────────────────────────────────────────
figma.connect(`${FIGMA_BASE}?node-id=290-4457`, {
  variant: { Intent: 'warning' },
  example: () =>
    `<en-progress value="45" intent="warning" show-label label="Limite de notas"></en-progress>`,
});

// ─── Intent: danger ──────────────────────────────────────────────────────────
figma.connect(`${FIGMA_BASE}?node-id=290-4457`, {
  variant: { Intent: 'danger' },
  example: () =>
    `<en-progress value="12" intent="danger" show-label label="Créditos restantes"></en-progress>`,
});

// ─── Size: sm ─────────────────────────────────────────────────────────────────
figma.connect(`${FIGMA_BASE}?node-id=290-4457`, {
  variant: { Size: 'sm' },
  example: () =>
    `<en-progress value="65" size="sm" show-label label="Processando..."></en-progress>`,
});
