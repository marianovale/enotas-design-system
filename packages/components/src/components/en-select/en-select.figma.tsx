import figma from '@figma/code-connect';

/**
 * en-select — Web Component para seleção de opções em formulários.
 *
 * Props:
 *   label       {string}         Rótulo visível acima do campo
 *   placeholder {string}         Texto quando nenhuma opção está selecionada (default: 'Selecione...')
 *   value       {string}         Valor da opção atualmente selecionada
 *   options     {SelectOption[]} Array de opções — atribuído via JS (não é atributo HTML)
 *   disabled    {boolean}        Desabilita o campo (reflect: true)
 *   required    {boolean}        Marca o campo como obrigatório
 *   error       {string}         Mensagem de erro (exibe borda vermelha + texto)
 *   hint        {string}         Texto auxiliar exibido abaixo do campo
 *   name        {string}         Atributo name para submit de formulário
 *
 * Eventos:
 *   enChange  CustomEvent<string>  Disparado ao selecionar uma opção
 *   enFocus   CustomEvent<void>    Disparado ao focar o campo
 *   enBlur    CustomEvent<void>    Disparado ao sair do campo
 *
 * Nota: `options` é uma propriedade JS — não pode ser passada como atributo HTML.
 * Em Razor Views, atribua via script após o elemento estar no DOM:
 *   document.getElementById('my-select').options = [{ value: '...', label: '...' }];
 * Em frameworks com binding (Angular, Lit, Stencil), use a sintaxe .options=${...}.
 */

const BASE_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8082';

const SAMPLE_OPTIONS = [
  { value: 'simples', label: 'Simples Nacional' },
  { value: 'lucro-presumido', label: 'Lucro Presumido' },
  { value: 'lucro-real', label: 'Lucro Real' },
  { value: 'mei', label: 'MEI' },
];

// ─── Estado: default (placeholder visível, sem seleção) ─────────────────────
figma.connect('<en-select>', BASE_URL, {
  variant: { state: 'default' },
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => `
<en-select
  label="${label ?? 'Regime tributário'}"
  placeholder="Selecione..."
  id="select-regime"
></en-select>
<script>
  document.getElementById('select-regime').options = ${JSON.stringify(SAMPLE_OPTIONS)};
</script>`,
});

// ─── Estado: hover ────────────────────────────────────────────────────────────
figma.connect('<en-select>', BASE_URL, {
  variant: { state: 'hover' },
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => `
<en-select
  label="${label ?? 'Regime tributário'}"
  placeholder="Selecione..."
  id="select-regime"
></en-select>
<script>
  document.getElementById('select-regime').options = ${JSON.stringify(SAMPLE_OPTIONS)};
</script>`,
});

// ─── Estado: focus ────────────────────────────────────────────────────────────
figma.connect('<en-select>', BASE_URL, {
  variant: { state: 'focus' },
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => `
<en-select
  label="${label ?? 'Regime tributário'}"
  placeholder="Selecione..."
  id="select-regime"
></en-select>
<script>
  const el = document.getElementById('select-regime');
  el.options = ${JSON.stringify(SAMPLE_OPTIONS)};
  el.querySelector('select')?.focus();
</script>`,
});

// ─── Estado: filled / finished (opção já selecionada) ────────────────────────
figma.connect('<en-select>', BASE_URL, {
  variant: { state: 'finished' },
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => `
<en-select
  label="${label ?? 'Regime tributário'}"
  value="simples"
  id="select-regime"
></en-select>
<script>
  document.getElementById('select-regime').options = ${JSON.stringify(SAMPLE_OPTIONS)};
</script>`,
});

// ─── Estado: disabled / inactived ────────────────────────────────────────────
figma.connect('<en-select>', BASE_URL, {
  variant: { state: 'inactived' },
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => `
<en-select
  label="${label ?? 'Regime tributário'}"
  placeholder="Selecione..."
  disabled
  id="select-regime"
></en-select>
<script>
  document.getElementById('select-regime').options = ${JSON.stringify(SAMPLE_OPTIONS)};
</script>`,
});

// ─── Estado: error ────────────────────────────────────────────────────────────
figma.connect('<en-select>', BASE_URL, {
  variant: { state: 'error' },
  props: {
    label: figma.string('Label'),
    error: figma.string('Error'),
  },
  example: ({ label, error }) => `
<en-select
  label="${label ?? 'Regime tributário'}"
  error="${error ?? 'Selecione um regime'}"
  id="select-regime"
></en-select>
<script>
  document.getElementById('select-regime').options = ${JSON.stringify(SAMPLE_OPTIONS)};
</script>`,
});

// ─── Campo obrigatório ────────────────────────────────────────────────────────
figma.connect('<en-select>', BASE_URL, {
  variant: { state: 'required' },
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => `
<en-select
  label="${label ?? 'Regime tributário'}"
  placeholder="Selecione..."
  required
  id="select-regime"
></en-select>
<script>
  document.getElementById('select-regime').options = ${JSON.stringify(SAMPLE_OPTIONS)};
</script>`,
});
