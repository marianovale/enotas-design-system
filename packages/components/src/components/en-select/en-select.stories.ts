import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const REGIME_OPTIONS = [
  { value: 'simples', label: 'Simples Nacional' },
  { value: 'lucro-presumido', label: 'Lucro Presumido' },
  { value: 'lucro-real', label: 'Lucro Real' },
  { value: 'mei', label: 'MEI' },
];

const meta: Meta = {
  title: 'Primitives/EnSelect',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de seleção com suporte a label, placeholder, hint, erro e estado desabilitado. ' +
          'A prop `options` é um array JS (`SelectOption[]`) — não pode ser passada como atributo HTML. ' +
          'Use `.options` em frameworks com binding ou atribua via `element.options = [...]` em Razor/jQuery. ' +
          'Emite `enChange` ao selecionar, `enFocus` ao focar e `enBlur` ao sair do campo.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo visível acima do campo.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando nenhuma opção está selecionada.',
    },
    value: {
      control: 'text',
      description: 'Valor da opção selecionada. Quando preenchido, o campo entra no estado `finished`.',
    },
    hint: {
      control: 'text',
      description: 'Texto auxiliar exibido abaixo do campo (não aparece quando há `error`).',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro. Exibe borda vermelha e texto abaixo do campo.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo. Refletido como atributo HTML (`disabled`).',
    },
    required: {
      control: 'boolean',
      description: 'Marca o campo como obrigatório. Exibe asterisco (*) ao lado do label.',
    },
  },
  args: {
    label: 'Regime tributário',
    placeholder: 'Selecione...',
    disabled: false,
    required: false,
  },
};
export default meta;

// ─── Default ─────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  parameters: {
    docs: {
      description: { story: 'Estado padrão — placeholder visível, sem seleção.' },
    },
  },
  render: ({ label, placeholder, hint, error, disabled, required }) =>
    html`<en-select
      label=${label}
      placeholder=${placeholder}
      .options=${REGIME_OPTIONS}
      ?disabled=${disabled}
      ?required=${required}
      hint=${hint ?? ''}
      error=${error ?? ''}
    ></en-select>`,
};

// ─── Filled ──────────────────────────────────────────────────────────────────
export const Filled: StoryObj = {
  parameters: {
    docs: {
      description: { story: 'Campo com opção já selecionada — estado `finished` no Figma.' },
    },
  },
  args: {
    label: 'Regime tributário',
    value: 'simples',
  },
  render: ({ label, value }) =>
    html`<en-select
      label=${label}
      value=${value}
      .options=${REGIME_OPTIONS}
    ></en-select>`,
};

// ─── WithHint ─────────────────────────────────────────────────────────────────
export const WithHint: StoryObj = {
  parameters: {
    docs: {
      description: { story: 'Texto auxiliar abaixo do campo. Desaparece quando `error` está preenchido.' },
    },
  },
  args: {
    label: 'Regime tributário',
    hint: 'Consulte seu contador caso tenha dúvidas.',
  },
  render: ({ label, hint }) =>
    html`<en-select
      label=${label}
      hint=${hint}
      .options=${REGIME_OPTIONS}
    ></en-select>`,
};

// ─── WithError ────────────────────────────────────────────────────────────────
export const WithError: StoryObj = {
  parameters: {
    docs: {
      description: { story: 'Exibe borda vermelha e mensagem de erro abaixo do campo.' },
    },
  },
  args: {
    label: 'Regime tributário',
    error: 'Selecione um regime',
  },
  render: ({ label, error }) =>
    html`<en-select
      label=${label}
      .options=${REGIME_OPTIONS}
      error=${error}
    ></en-select>`,
};

// ─── Required ─────────────────────────────────────────────────────────────────
export const Required: StoryObj = {
  parameters: {
    docs: {
      description: { story: 'Campo obrigatório — exibe asterisco (*) ao lado do label.' },
    },
  },
  args: {
    label: 'Regime tributário',
    required: true,
  },
  render: ({ label, required }) =>
    html`<en-select
      label=${label}
      .options=${REGIME_OPTIONS}
      ?required=${required}
    ></en-select>`,
};

// ─── Disabled ─────────────────────────────────────────────────────────────────
export const Disabled: StoryObj = {
  parameters: {
    docs: {
      description: { story: 'Campo desabilitado — estado `inactived` no Figma.' },
    },
  },
  args: {
    disabled: true,
    label: 'Regime tributário',
  },
  render: ({ label, disabled }) =>
    html`<en-select
      label=${label}
      .options=${REGIME_OPTIONS}
      ?disabled=${disabled}
    ></en-select>`,
};

// ─── AllStates ────────────────────────────────────────────────────────────────
export const AllStates: StoryObj = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Grid com todos os estados do componente para validação visual rápida.',
      },
    },
  },
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(3, 240px); gap: 24px; align-items: start;">
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Default</p>
        <en-select label="Regime tributário" .options=${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Filled</p>
        <en-select label="Regime tributário" value="simples" .options=${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Required</p>
        <en-select label="Regime tributário" required .options=${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">With Hint</p>
        <en-select label="Regime tributário" hint="Consulte seu contador." .options=${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Error</p>
        <en-select label="Regime tributário" error="Selecione um regime" .options=${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Disabled</p>
        <en-select label="Regime tributário" disabled .options=${REGIME_OPTIONS}></en-select>
      </div>
    </div>
  `,
};
