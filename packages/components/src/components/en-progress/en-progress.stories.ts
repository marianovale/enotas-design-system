import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/EnProgress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Barra de progresso determinada. Use `value` (0–100) para indicar avanço de processos como emissão de notas, importação de dados ou configuração inicial. A prop `intent` comunica o estado semântico (sucesso, alerta, erro) sem depender apenas de cor.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Percentual de progresso (0–100).',
      table: { defaultValue: { summary: '0' } },
    },
    intent: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger'],
      description:
        'Intenção semântica que define a cor da barra. Use `success` ao concluir, `warning` para limites próximos e `danger` para erros.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Altura da barra. `sm` para contextos compactos (cards, listas); `md` para uso geral.',
      table: { defaultValue: { summary: 'md' } },
    },
    showLabel: {
      control: 'boolean',
      description: 'Quando `true`, exibe uma linha com o `label` e o percentual acima da barra.',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Texto descritivo do processo em andamento. Usado como `aria-label` na barra (acessibilidade) e exibido na interface quando `show-label` está ativo.',
      table: { defaultValue: { summary: 'Progresso' } },
    },
  },
  args: { value: 65, intent: 'default', size: 'md', showLabel: true, label: 'Progresso' },
};
export default meta;

export const Default: StoryObj = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story: 'Use os controles para explorar todas as combinações de props.',
      },
    },
  },
  render: ({ value, intent, size, showLabel, label }) =>
    html`<en-progress
      value=${value}
      intent=${intent}
      size=${size}
      ?show-label=${showLabel}
      label=${label}
      style="max-width:400px"
    ></en-progress>`,
};

export const Intents: StoryObj = {
  name: 'Todas as intenções',
  parameters: {
    docs: {
      description: {
        story:
          'As quatro intenções disponíveis: `default` para progresso neutro, `success` para conclusão, `warning` para alertas de limite e `danger` para estados críticos.',
      },
    },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:400px">
      <en-progress value="72"  intent="default" show-label label="Emissão mensal"></en-progress>
      <en-progress value="100" intent="success" show-label label="Configuração concluída"></en-progress>
      <en-progress value="45"  intent="warning" show-label label="Limite de notas"></en-progress>
      <en-progress value="12"  intent="danger"  show-label label="Créditos restantes"></en-progress>
    </div>
  `,
};

export const Sizes: StoryObj = {
  name: 'Tamanhos',
  parameters: {
    docs: {
      description: {
        story:
          '`sm` reduz a altura da barra para contextos compactos. `md` é o tamanho padrão para uso em páginas e modais.',
      },
    },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:400px">
      <en-progress value="60" size="sm" show-label label="Tamanho sm"></en-progress>
      <en-progress value="60" size="md" show-label label="Tamanho md"></en-progress>
    </div>
  `,
};

export const AllStates: StoryObj = {
  name: 'Todos os estados',
  parameters: {
    docs: {
      description: {
        story:
          'Grid com os três estados de progresso (0%, 45%, 100%) cruzados com as quatro intenções. Use como referência visual para garantir consistência em diferentes combinações.',
      },
    },
  },
  render: () => {
    const intents = ['default', 'success', 'warning', 'danger'] as const;
    const states = [
      { value: 0,   label: 'Aguardando',  showLabel: false },
      { value: 45,  label: 'Processando', showLabel: true  },
      { value: 100, label: 'Concluído',   showLabel: true  },
    ];

    return html`
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem 2rem;max-width:720px">
        ${intents.flatMap(intent =>
          states.map(({ value, label, showLabel }) => html`
            <en-progress
              value=${value}
              intent=${intent}
              ?show-label=${showLabel}
              label=${label}
            ></en-progress>
          `)
        )}
      </div>
    `;
  },
};
