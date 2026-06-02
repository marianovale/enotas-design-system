import figma from '@figma/code-connect';

/**
 * en-input-number — campo numérico com botões de incremento/decremento.
 *
 * Props principais:
 *   label     {string}  — rótulo visível acima do campo
 *   value     {number}  — valor atual (mutable, padrão 0)
 *   min       {number}  — valor mínimo permitido
 *   max       {number}  — valor máximo permitido
 *   step      {number}  — incremento/decremento por clique (padrão 1)
 *   disabled  {boolean} — desabilita botões e input
 *   required  {boolean} — marca com asterisco e valida
 *   error     {string}  — mensagem de erro (borda vermelha + texto)
 *   hint      {string}  — texto auxiliar (só exibido quando sem erro)
 *   name      {string}  — atributo `name` para submissão de formulários
 *
 * Eventos:
 *   enChange — emitido ao alterar valor via botão ou input (number)
 *   enInput  — emitido a cada digitação no input nativo (number)
 *
 * Estados Figma → prop Stencil:
 *   Default   → sem props extras (value=0)
 *   Hovering  → estado visual (CSS :hover nos botões), sem prop direta
 *   Focus     → estado visual gerenciado internamente via onFocus/onBlur
 *   Finished  → campo com value preenchido (ex: value="5")
 *   inactived → disabled
 *   error     → error="mensagem"
 */

const FIGMA_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-9333';

// Estado: default — valor zero, sem interação
figma.connect(FIGMA_URL, {
  variant: { state: 'Default' },
  example: () =>
    `<en-input-number label="Quantidade" value="0" min="0" max="100"></en-input-number>`,
});

// Estado: hovering — botões de step em hover (estado visual CSS, sem prop Stencil)
figma.connect(FIGMA_URL, {
  variant: { state: 'Hovering' },
  example: () =>
    `<!-- O estado hover é gerenciado pelo CSS interno nos botões de step -->
<en-input-number label="Quantidade" value="0" min="0" max="100"></en-input-number>`,
});

// Estado: focus — input em foco (estado visual interno, sem prop Stencil)
figma.connect(FIGMA_URL, {
  variant: { state: 'Focus' },
  example: () =>
    `<!-- O estado focus é gerenciado internamente via onFocus/onBlur -->
<en-input-number label="Quantidade" value="0" min="0" max="100"></en-input-number>`,
});

// Estado: finished — campo com valor preenchido
figma.connect(FIGMA_URL, {
  variant: { state: 'Finished' },
  example: () =>
    `<en-input-number label="Quantidade" value="5" min="0" max="100"></en-input-number>`,
});

// Estado: inactived — campo desabilitado
figma.connect(FIGMA_URL, {
  variant: { state: 'inactived' },
  example: () =>
    `<en-input-number label="Quantidade" value="0" min="0" max="100" disabled></en-input-number>`,
});

// Estado: error — campo com mensagem de erro
figma.connect(FIGMA_URL, {
  variant: { state: 'error' },
  props: {
    error: figma.string('Error text'),
  },
  example: ({ error }) =>
    `<en-input-number label="Quantidade" value="0" min="0" max="100" error="${error ?? 'Valor inválido'}"></en-input-number>`,
});
