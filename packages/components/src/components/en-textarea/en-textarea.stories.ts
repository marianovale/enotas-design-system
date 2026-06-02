import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/EnTextarea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de texto multilinha com suporte a label, placeholder, hint, erro, required e tamanhos (sm/default/lg). ' +
          'Gerencia estados internamente (default → focus → finished) e emite eventos `enInput`, `enChange`, `enFocus` e `enBlur`.',
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
      description: 'Texto de apoio exibido quando o campo está vazio.',
    },
    value: {
      control: 'text',
      description: 'Valor atual do campo (controlado).',
    },
    hint: {
      control: 'text',
      description: 'Texto auxiliar exibido abaixo do campo (ocultado quando há erro).',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro — ativa borda vermelha e exibe o texto abaixo do campo.',
    },
    rows: {
      control: 'number',
      description: 'Número de linhas visíveis do textarea (padrão: 4).',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo impedindo qualquer interação. Corresponde ao estado `inactived` no Figma.',
    },
    required: {
      control: 'boolean',
      description: 'Marca o campo como obrigatório com asterisco (*) ao lado do label.',
    },
    variantSize: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Tamanho da fonte interna: sm = xs (0,75 rem), default = sm (0,875 rem), lg = md (1 rem).',
    },
    name: {
      control: 'text',
      description: 'Atributo `name` para submissão de formulários.',
    },
  },
  args: {
    label: 'Observações',
    placeholder: 'Descreva aqui...',
    rows: 4,
    disabled: false,
    required: false,
    variantSize: 'default',
  },
};
export default meta;

// ---

export const Default: StoryObj = {
  name: 'Default',
  parameters: {
    docs: {
      description: { story: 'Estado inicial do campo — vazio, sem interação.' },
    },
  },
  render: ({ label, placeholder, hint, error, rows, disabled, required, variantSize }) =>
    html`<en-textarea
      label=${label}
      placeholder=${placeholder}
      rows=${rows}
      ?disabled=${disabled}
      ?required=${required}
      hint=${hint ?? ''}
      error=${error ?? ''}
      variantSize=${variantSize}
    ></en-textarea>`,
};

export const Filled: StoryObj = {
  name: 'Filled',
  parameters: {
    docs: {
      description: {
        story:
          'Campo com valor preenchido — corresponde ao estado `finished` no Figma. ' +
          'A borda retorna à cor padrão (strong) indicando conteúdo válido.',
      },
    },
  },
  args: {
    label: 'Descrição da operação',
    value: 'Prestação de serviço de consultoria tributária referente ao mês de abril.',
    placeholder: 'Descreva aqui...',
    rows: 4,
  },
  render: ({ label, placeholder, value, rows }) =>
    html`<en-textarea label=${label} placeholder=${placeholder} value=${value} rows=${rows}></en-textarea>`,
};

export const WithHint: StoryObj = {
  name: 'With Hint',
  parameters: {
    docs: {
      description: {
        story: 'Texto auxiliar abaixo do campo orientando o preenchimento. Ocultado automaticamente quando há `error`.',
      },
    },
  },
  args: {
    label: 'Complemento do endereço',
    hint: 'Apto, sala, bloco — opcional',
    placeholder: '',
  },
  render: ({ label, hint }) =>
    html`<en-textarea label=${label} hint=${hint}></en-textarea>`,
};

export const WithError: StoryObj = {
  name: 'With Error',
  parameters: {
    docs: {
      description: {
        story: 'Estado de validação com erro — borda vermelha e mensagem abaixo do campo. Use `error=""` para limpar.',
      },
    },
  },
  args: { label: 'Motivo do cancelamento', error: 'Campo obrigatório', placeholder: 'Informe o motivo...' },
  render: ({ label, placeholder, error }) =>
    html`<en-textarea label=${label} placeholder=${placeholder ?? ''} error=${error}></en-textarea>`,
};

export const Required: StoryObj = {
  name: 'Required',
  parameters: {
    docs: {
      description: {
        story: 'Campo obrigatório — asterisco (*) ao lado do label e atributo `required` no textarea nativo.',
      },
    },
  },
  args: { label: 'Descrição da NF', placeholder: 'Descreva o serviço prestado...', required: true },
  render: ({ label, placeholder, required }) =>
    html`<en-textarea label=${label} placeholder=${placeholder} ?required=${required}></en-textarea>`,
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Campo desabilitado — corresponde ao estado `inactived` no Figma. Fundo cinza, cursor `not-allowed`.',
      },
    },
  },
  args: { disabled: true, label: 'Campo desabilitado', value: 'Conteúdo somente leitura' },
  render: ({ label, value, disabled }) =>
    html`<en-textarea label=${label} value=${value ?? ''} ?disabled=${disabled}></en-textarea>`,
};

export const Sizes: StoryObj = {
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: 'Três tamanhos disponíveis que afetam a fonte interna: `sm` (0,75 rem), `default` (0,875 rem) e `lg` (1 rem).',
      },
    },
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <en-textarea
        label="Small (font xs)"
        placeholder="variantSize=sm"
        variantSize="sm"
        rows="3"
      ></en-textarea>
      <en-textarea
        label="Default (font sm)"
        placeholder="variantSize=default"
        variantSize="default"
        rows="3"
      ></en-textarea>
      <en-textarea
        label="Large (font md)"
        placeholder="variantSize=lg"
        variantSize="lg"
        rows="3"
      ></en-textarea>
    </div>
  `,
};

export const AllStates: StoryObj = {
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story:
          'Visão geral de todos os estados: default, filled, disabled, error, required e with hint. ' +
          'Útil para validar tokens visuais e paridade com o Figma.',
      },
    },
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; padding: 1rem;">
      <en-textarea
        label="Default"
        placeholder="Descreva aqui..."
        rows="3"
      ></en-textarea>

      <en-textarea
        label="Filled"
        value="Prestação de serviço de consultoria tributária."
        rows="3"
      ></en-textarea>

      <en-textarea
        label="Disabled"
        placeholder="Não editável"
        disabled
        rows="3"
      ></en-textarea>

      <en-textarea
        label="Error"
        placeholder="Descreva aqui..."
        error="Campo obrigatório"
        rows="3"
      ></en-textarea>

      <en-textarea
        label="Required"
        placeholder="Descreva aqui..."
        required
        rows="3"
      ></en-textarea>

      <en-textarea
        label="With Hint"
        placeholder="Descreva aqui..."
        hint="Máximo 500 caracteres."
        rows="3"
      ></en-textarea>
    </div>
  `,
};
