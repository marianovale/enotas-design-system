import figma from '@figma/code-connect';

/**
 * en-input — campo de texto com label, hint, erro e tamanhos.
 *
 * Props principais:
 *   label        {string}  — rótulo visível acima do campo
 *   placeholder  {string}  — texto de apoio quando vazio
 *   value        {string}  — valor atual (mutable)
 *   type         {string}  — text | email | password | number | tel | url | search
 *   disabled     {boolean} — desabilita interação
 *   required     {boolean} — marca com asterisco e valida
 *   error        {string}  — mensagem de erro (borda vermelha + texto)
 *   hint         {string}  — texto auxiliar (só exibido quando sem erro)
 *   variantSize  {string}  — sm (32 px) | default (40 px) | lg (48 px)
 *
 * Eventos:
 *   enInput  — emitido a cada tecla (string)
 *   enChange — emitido no blur com mudança (string)
 *   enFocus  — emitido ao focar
 *   enBlur   — emitido ao desfocar
 *
 * Slots:
 *   prefix — ícone/elemento antes do input
 *   suffix — ícone/elemento após o input
 *
 * Estados Figma → prop Stencil:
 *   default       → sem props extras
 *   hover         → estado visual (CSS :hover), sem prop direta
 *   focus         → estado visual gerenciado internamente via enFocus/enBlur
 *   finished      → campo com value preenchido (não é erro!)
 *   inactived     → disabled
 *   error         → error="mensagem"
 *   required      → required
 */

const FIGMA_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8016';

// Estado: default — campo vazio, sem interação
figma.connect(FIGMA_URL, {
  variant: { state: 'default' },
  example: () =>
    `<en-input label="CNPJ" placeholder="00.000.000/0001-00"></en-input>`,
});

// Estado: focus — campo em foco (estado visual interno, sem prop Stencil)
figma.connect(FIGMA_URL, {
  variant: { state: 'focus' },
  example: () =>
    `<!-- O estado focus é gerenciado internamente via eventos enFocus/enBlur -->
<en-input label="CNPJ" placeholder="00.000.000/0001-00"></en-input>`,
});

// Estado: finished — campo preenchido com valor válido
figma.connect(FIGMA_URL, {
  variant: { state: 'finished' },
  example: () =>
    `<en-input label="CNPJ" value="11.222.333/0001-81"></en-input>`,
});

// Estado: inactived — campo desabilitado
figma.connect(FIGMA_URL, {
  variant: { state: 'inactived' },
  props: {
    disabled: figma.boolean('disabled', { true: true, false: false }),
  },
  example: () =>
    `<en-input label="CNPJ" placeholder="00.000.000/0001-00" disabled></en-input>`,
});

// Estado: error — campo com mensagem de erro
figma.connect(FIGMA_URL, {
  variant: { state: 'error' },
  props: {
    error: figma.string('Error text'),
  },
  example: ({ error }) =>
    `<en-input label="CNPJ" placeholder="00.000.000/0001-00" error="${error ?? 'CNPJ inválido'}"></en-input>`,
});

// Estado: required — campo obrigatório
figma.connect(FIGMA_URL, {
  variant: { state: 'required' },
  example: () =>
    `<en-input label="CNPJ" placeholder="00.000.000/0001-00" required></en-input>`,
});
