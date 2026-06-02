import figma from '@figma/code-connect';

/**
 * en-textarea — campo de texto multilinha com label, hint, erro e tamanhos.
 *
 * Props principais:
 *   label        {string}  — rótulo visível acima do campo
 *   placeholder  {string}  — texto de apoio quando vazio
 *   value        {string}  — valor atual (mutable)
 *   rows         {number}  — número de linhas visíveis (padrão: 4)
 *   disabled     {boolean} — desabilita interação (estado `inactived` no Figma)
 *   required     {boolean} — marca com asterisco e valida
 *   error        {string}  — mensagem de erro (borda vermelha + texto abaixo)
 *   hint         {string}  — texto auxiliar (só exibido quando sem erro)
 *   variantSize  {string}  — sm | default | lg (afeta font-size interno)
 *   name         {string}  — atributo name para submissão de formulários
 *
 * Eventos:
 *   enInput  — emitido a cada tecla (string)
 *   enChange — emitido no blur com mudança (string)
 *   enFocus  — emitido ao focar
 *   enBlur   — emitido ao desfocar
 *
 * Estados Figma → prop Stencil:
 *   default           → sem props extras
 *   hover             → estado visual (CSS :hover), sem prop direta
 *   focus             → estado visual gerenciado internamente via enFocus/enBlur
 *   finished          → campo com value preenchido
 *   edit → hover      → hover com valor (visual CSS, sem prop)
 *   edit → focus      → focus com valor (visual interno)
 *   inactived         → disabled
 *   error             → error="mensagem"
 *   required          → required
 */

const FIGMA_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8051';

// Estado: default — campo vazio, sem interação
figma.connect(FIGMA_URL, {
  variant: { state: 'default' },
  example: () =>
    `<en-textarea label="Observações" placeholder="Descreva aqui..." rows="4"></en-textarea>`,
});

// Estado: focus — campo em foco (estado visual interno, sem prop Stencil)
figma.connect(FIGMA_URL, {
  variant: { state: 'focus' },
  example: () =>
    `<!-- O estado focus é gerenciado internamente via eventos enFocus/enBlur -->
<en-textarea label="Observações" placeholder="Descreva aqui..." rows="4"></en-textarea>`,
});

// Estado: finished — campo preenchido com valor válido
figma.connect(FIGMA_URL, {
  variant: { state: 'finished' },
  example: () =>
    `<en-textarea label="Observações" value="NF emitida com sucesso." rows="4"></en-textarea>`,
});

// Estado: edit → hover — hover com conteúdo (visual CSS, sem prop direta)
figma.connect(FIGMA_URL, {
  variant: { state: 'edit -> hover' },
  example: () =>
    `<!-- Hover é estado visual CSS; passe value para refletir conteúdo já digitado -->
<en-textarea label="Observações" value="NF emitida com sucesso." rows="4"></en-textarea>`,
});

// Estado: edit → focus — focus com conteúdo (visual interno)
figma.connect(FIGMA_URL, {
  variant: { state: 'edit -> focus' },
  example: () =>
    `<!-- Focus com conteúdo; estado gerenciado internamente -->
<en-textarea label="Observações" value="NF emitida com sucesso." rows="4"></en-textarea>`,
});

// Estado: inactived — campo desabilitado
figma.connect(FIGMA_URL, {
  variant: { state: 'inactived' },
  example: () =>
    `<en-textarea label="Observações" placeholder="Descreva aqui..." rows="4" disabled></en-textarea>`,
});

// Estado: error — campo com mensagem de erro
figma.connect(FIGMA_URL, {
  variant: { state: 'error' },
  props: {
    error: figma.string('Error text'),
  },
  example: ({ error }) =>
    `<en-textarea label="Observações" placeholder="Descreva aqui..." rows="4" error="${error ?? 'Campo obrigatório'}"></en-textarea>`,
});

// Estado: required — campo obrigatório
figma.connect(FIGMA_URL, {
  variant: { state: 'required' },
  example: () =>
    `<en-textarea label="Observações" placeholder="Descreva aqui..." rows="4" required></en-textarea>`,
});
