import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { AlertVariant } from './en-alert';

const meta: Meta = {
  title: 'Feedback/EnAlert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**en-alert** é um aviso **persistente inline** (banner). Fica na tela até o usuário
fechar (quando \`dismissible\`) ou a condição mudar. Use para pendências de pagamento,
certificado vencendo, avisos no topo de uma página ou seção.

**Alert/Banner vs Toast**
- **Alert** (este): persistente, ancorado ao contexto/layout.
- **Toast**: efêmero, flutuante, some sozinho — para confirmações de ação.

**Acessibilidade**
O status é comunicado por **ícone + cor**, nunca só cor (WCAG 1.4.1). Variantes
\`negative\`/\`attention\` usam \`role="alert"\` (assertivo); \`positive\`/\`informative\`
usam \`role="status"\`.

**Slots**
- *default*: descrição/corpo.
- *action*: link ou botão (ex: \`<en-button slot="action">\`).

**Retrocompatibilidade**
A prop \`intent\` (success/warning/danger/info) é aceita e mapeada para as variantes
Cosmos (positive/attention/negative/informative). Prefira sempre \`variant\`.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['positive', 'attention', 'negative', 'informative'] satisfies AlertVariant[],
      description: 'Variante semântica (alinhado com Cosmos DS).',
      table: { defaultValue: { summary: 'informative' } },
    },
    heading: {
      control: 'text',
      description: 'Título opcional, exibido em bold acima da descrição.',
    },
    dismissible: {
      control: 'boolean',
      description: 'Exibe o botão de fechar (X) e emite `enAlertDismiss` ao fechar.',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: 'boolean',
      description: 'Exibe o ícone de status à esquerda.',
      table: { defaultValue: { summary: 'true' } },
    },
    body: {
      control: 'text',
      description: 'Conteúdo do corpo. Passado via **slot** padrão — não é uma prop.',
      table: { category: 'Slot (Storybook only)' },
    },
  },
  args: {
    variant: 'informative',
    heading: '',
    dismissible: false,
    icon: true,
    body: 'O certificado digital A1 da empresa vence em 12 dias.',
  },
};
export default meta;

type Story = StoryObj<{
  variant: AlertVariant;
  heading: string;
  dismissible: boolean;
  icon: boolean;
  body: string;
}>;

// ---------------------------------------------------------------------------
// Default — playground interativo
// ---------------------------------------------------------------------------
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Playground interativo. Use os controles para explorar variant, heading, dismissible e icon.',
      },
    },
  },
  render: ({ variant, heading, dismissible, icon, body }) => html`
    <en-alert
      variant=${variant}
      heading=${heading || undefined}
      ?dismissible=${dismissible}
      ?icon=${icon}
    >${body}</en-alert>
  `,
};

// ---------------------------------------------------------------------------
// AllVariants — as 4 variantes semânticas
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  name: 'Todas as variantes',
  parameters: { controls: { disable: true } },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:560px">
      <en-alert variant="positive" heading="Nota autorizada">A NFS-e #1042 foi autorizada pela prefeitura.</en-alert>
      <en-alert variant="informative" heading="Em apuração">O fechamento de excedentes está em apuração até o dia 05.</en-alert>
      <en-alert variant="attention" heading="Certificado vencendo">O certificado digital A1 vence em 12 dias.</en-alert>
      <en-alert variant="negative" heading="Pagamento recusado">A fatura de maio foi recusada. Atualize a forma de pagamento.</en-alert>
    </div>
  `,
};

// ---------------------------------------------------------------------------
// States — dismissible, com ação, sem título, multiline, sem ícone
// ---------------------------------------------------------------------------
export const States: Story = {
  name: 'Estados',
  parameters: { controls: { disable: true } },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:560px">
      <en-alert variant="attention" heading="Pendência de pagamento" dismissible>
        A fatura de maio está em aberto desde 10/06.
        <en-button slot="action" variant="primary" size="sm">Pagar agora</en-button>
        <en-button slot="action" variant="ghost" size="sm">Ver detalhes</en-button>
      </en-alert>

      <en-alert variant="informative">
        Apenas uma descrição, sem título nem ação.
      </en-alert>

      <en-alert variant="negative" heading="Falha na emissão" icon=${false} dismissible>
        Sem ícone — útil quando o contexto já comunica o status visualmente.
      </en-alert>

      <en-alert variant="positive" heading="Tudo certo">
        Banner multiline: texto mais longo que ocupa várias linhas para validar o
        alinhamento do ícone ao topo, o espaçamento interno e o comportamento de
        quebra de linha em descrições extensas dentro do componente.
      </en-alert>
    </div>
  `,
};
