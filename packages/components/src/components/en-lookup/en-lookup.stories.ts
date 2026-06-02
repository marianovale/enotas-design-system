import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { LookupOption } from './en-lookup';

// Opções de amostra — representativas de casos de uso reais do eNotas


const SAMPLE_OPTIONS: LookupOption[] = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'ba', label: 'Bahia' },
  { value: 'pr', label: 'Paraná' },
  { value: 'rs', label: 'Rio Grande do Sul' },
  { value: 'sc', label: 'Santa Catarina' },
  { value: 'go', label: 'Goiás', disabled: true },
];

const meta: Meta = {
  title: 'Components/EnLookup',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Campo de busca com autocomplete para selecionar itens de listas dinâmicas.
Combina digitação livre com dropdown de resultados filtrados em tempo real.

**Quando usar:**
- Listas com muitos itens onde o usuário precisa filtrar digitando (clientes, municípios, CNPJs)
- Busca assíncrona — use \`loading\` enquanto aguarda resposta da API

**Não usar:**
- Listas pequenas e fixas → prefira \`en-select\`
- Múltiplas seleções complexas → prefira \`en-checkbox-group\`

**Eventos:**
- \`enSearch\` — dispara ao digitar (use para busca assíncrona)
- \`enLookupChange\` — dispara ao selecionar uma opção
- \`enLookupClear\` — dispara ao limpar a seleção
        `,
      },
    },
  },
  argTypes: {
    label:       { control: 'text',    description: 'Rótulo acima do campo' },
    placeholder: { control: 'text',    description: 'Texto de hint interno do input' },
    loading:     { control: 'boolean', description: 'Exibe spinner e bloqueia o dropdown' },
    multiple:    { control: 'boolean', description: 'Permite selecionar múltiplas opções (modo chips)' },
    disabled:    { control: 'boolean', description: 'Bloqueia toda interação com o campo' },
    error:       { control: 'text',    description: 'Mensagem de erro exibida abaixo do campo' },
    hint:        { control: 'text',    description: 'Texto auxiliar exibido quando não há erro' },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    label: 'Estado',
    placeholder: 'Buscar estado...',
    loading: false,
    multiple: false,
    disabled: false,
    error: '',
    hint: 'Selecione um estado brasileiro',
  },
  render: ({ label, placeholder, loading, multiple, disabled, error, hint }) => html`
    <en-lookup
      label=${label}
      placeholder=${placeholder}
      ?loading=${loading}
      ?multiple=${multiple}
      ?disabled=${disabled}
      error=${error || undefined}
      hint=${hint}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};

export const Multiple: StoryObj = {
  args: {
    label: 'Estados',
    placeholder: 'Buscar estados...',
    loading: false,
    multiple: true,
    disabled: false,
  },
  render: ({ label, placeholder, loading, multiple, disabled }) => html`
    <en-lookup
      label=${label}
      placeholder=${placeholder}
      ?loading=${loading}
      ?multiple=${multiple}
      ?disabled=${disabled}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};

export const Loading: StoryObj = {
  args: {
    label: 'Busca remota',
    placeholder: 'Digitando...',
    loading: true,
    multiple: false,
  },
  render: ({ label, placeholder, loading }) => html`
    <en-lookup
      label=${label}
      placeholder=${placeholder}
      ?loading=${loading}
      .options=${[]}
    ></en-lookup>
  `,
};

export const WithError: StoryObj = {
  args: {
    label: 'Estado',
    error: 'Campo obrigatório',
  },
  render: ({ label, error }) => html`
    <en-lookup
      label=${label}
      error=${error}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: { story: 'Campo bloqueado quando o usuário não tem permissão para editar o campo naquele contexto.' },
    },
  },
  args: {
    label: 'Estado',
    disabled: true,
  },
  render: ({ label, disabled }) => html`
    <en-lookup
      label=${label}
      ?disabled=${disabled}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};

export const Filled: StoryObj = {
  name: 'Filled',
  parameters: {
    docs: {
      description: { story: 'Campo com valor já selecionado — estado após o usuário escolher uma opção.' },
    },
  },
  args: {
    label: 'Estado',
  },
  render: ({ label }) => {
    const selected: LookupOption = { value: 'sp', label: 'São Paulo' };
    return html`
      <en-lookup
        label=${label}
        .value=${selected}
        .options=${SAMPLE_OPTIONS}
      ></en-lookup>
    `;
  },
};

export const WithHint: StoryObj = {
  name: 'With Hint',
  parameters: {
    docs: {
      description: { story: 'Texto auxiliar abaixo do campo para orientar o usuário sem estado de erro.' },
    },
  },
  args: {
    label: 'Estado',
    hint: 'Selecione o estado de emissão da nota fiscal',
  },
  render: ({ label, hint }) => html`
    <en-lookup
      label=${label}
      hint=${hint}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};

export const AllStates: StoryObj = {
  name: 'All States',
  parameters: {
    docs: {
      description: { story: 'Todos os estados do componente em uma única view — útil para QA e revisão visual.' },
    },
    controls: { disable: true },
  },
  render: () => {
    const selected: LookupOption = { value: 'sp', label: 'São Paulo' };
    return html`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 300px;">
        <en-lookup label="Default" placeholder="Buscar..." .options=${SAMPLE_OPTIONS}></en-lookup>
        <en-lookup label="Filled" .value=${selected} .options=${SAMPLE_OPTIONS}></en-lookup>
        <en-lookup label="Disabled" disabled .options=${SAMPLE_OPTIONS}></en-lookup>
        <en-lookup label="Error" error="Campo obrigatório" .options=${SAMPLE_OPTIONS}></en-lookup>
        <en-lookup label="Loading" loading .options=${[]}></en-lookup>
        <en-lookup label="With Hint" hint="Selecione um estado brasileiro" .options=${SAMPLE_OPTIONS}></en-lookup>
      </div>
    `;
  },
};
