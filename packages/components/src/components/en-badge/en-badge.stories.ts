import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { BadgeVariant, BadgeSize } from './en-badge';

const meta: Meta = {
  title: 'Primitives/EnBadge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**en-badge** exibe um rótulo de status curto e compacto. Use-o para comunicar o estado de um
objeto (nota fiscal, pedido, tarefa) de forma imediata e escaneável.

**Badge vs Tag**
- Use **badge** para estados de sistema gerados automaticamente — ex: "Autorizada", "Rejeitada", "Em análise".
- Use **tag** para categorias ou atributos escolhidos pelo usuário — ex: "Imposto retido", "Serviço", "NFS-e".
  A tag normalmente é interativa (clicável/removível); o badge é puramente informativo.

**Slot**
O conteúdo é passado via slot padrão (\`<en-badge>Texto</en-badge>\`), não por prop.

**Retrocompatibilidade**
A prop \`intent\` (valores legados: neutral, success, warning, danger, info) ainda é aceita e mapeada
internamente para os valores Cosmos. Prefira sempre \`variant\`.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'positive', 'negative', 'attention', 'informative', 'brand'] satisfies BadgeVariant[],
      description:
        'Variante visual (alinhado com Cosmos DS). Define cor de fundo, texto e borda de acordo com a semântica da informação.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'] satisfies BadgeSize[],
      description: 'Tamanho do badge. `sm` = 1.25rem de altura; `md` = 1.5rem (padrão).',
      table: { defaultValue: { summary: 'md' } },
    },
    outline: {
      control: 'boolean',
      description:
        'Quando `true`, exibe apenas a borda colorida sem fundo sólido. Útil em fundos coloridos para manter contraste.',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description:
        'Conteúdo exibido no badge. Passado via **slot** — não é uma prop do componente. Use este controle apenas nas stories interativas do Storybook.',
      table: { category: 'Slot (Storybook only)' },
    },
  },
  args: {
    variant: 'default',
    size: 'md',
    outline: false,
    label: 'Status',
  },
};
export default meta;

type Story = StoryObj<{ variant: BadgeVariant; size: BadgeSize; outline: boolean; label: string }>;

// ---------------------------------------------------------------------------
// Default — controle interativo
// ---------------------------------------------------------------------------
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Playground interativo. Use os controles do painel para explorar todas as combinações de variant, size e outline.',
      },
    },
  },
  render: ({ variant, size, outline, label }) =>
    html`<en-badge variant=${variant} size=${size} ?outline=${outline}>${label}</en-badge>`,
};

// ---------------------------------------------------------------------------
// AllVariants — todas as 6 variantes solid
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  name: 'Todas as variantes',
  parameters: {
    docs: {
      description: {
        story:
          'As 6 variantes semânticas no estilo sólido (padrão). Cada cor mapeia para um estado de negócio específico dentro do eNotas.',
      },
    },
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <en-badge variant="default">Default</en-badge>
      <en-badge variant="positive">Autorizada</en-badge>
      <en-badge variant="negative">Rejeitada</en-badge>
      <en-badge variant="attention">Pendente</en-badge>
      <en-badge variant="informative">Em análise</en-badge>
      <en-badge variant="brand">eNotas</en-badge>
    </div>
  `,
};

// ---------------------------------------------------------------------------
// AllStates — grid 6 variantes × solid + outline
// ---------------------------------------------------------------------------
export const AllStates: Story = {
  name: 'Todos os estados (solid + outline)',
  parameters: {
    docs: {
      description: {
        story:
          'Visão completa: as 6 variantes em modo sólido (linha superior) e em modo outline (linha inferior). Use para QA visual e validação de contraste.',
      },
    },
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:0.75rem">
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <en-badge variant="default">Default</en-badge>
        <en-badge variant="positive">Autorizada</en-badge>
        <en-badge variant="negative">Rejeitada</en-badge>
        <en-badge variant="attention">Pendente</en-badge>
        <en-badge variant="informative">Em análise</en-badge>
        <en-badge variant="brand">eNotas</en-badge>
      </div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <en-badge variant="default" outline>Default</en-badge>
        <en-badge variant="positive" outline>Autorizada</en-badge>
        <en-badge variant="negative" outline>Rejeitada</en-badge>
        <en-badge variant="attention" outline>Pendente</en-badge>
        <en-badge variant="informative" outline>Em análise</en-badge>
        <en-badge variant="brand" outline>eNotas</en-badge>
      </div>
    </div>
  `,
};

// ---------------------------------------------------------------------------
// Outline — foco no estilo de borda
// ---------------------------------------------------------------------------
export const Outline: Story = {
  name: 'Variante outline',
  parameters: {
    docs: {
      description: {
        story:
          'Todas as variantes em modo outline. Prefira este estilo quando o badge estiver sobre um fundo colorido ou em contextos de menor destaque.',
      },
    },
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <en-badge variant="default" outline>Default</en-badge>
      <en-badge variant="positive" outline>Autorizada</en-badge>
      <en-badge variant="negative" outline>Rejeitada</en-badge>
      <en-badge variant="attention" outline>Pendente</en-badge>
      <en-badge variant="informative" outline>Em análise</en-badge>
      <en-badge variant="brand" outline>eNotas</en-badge>
    </div>
  `,
};

// ---------------------------------------------------------------------------
// Sizes — comparação de tamanhos
// ---------------------------------------------------------------------------
export const Sizes: Story = {
  name: 'Tamanhos',
  parameters: {
    docs: {
      description: {
        story:
          '`sm` é indicado para tabelas densas e campos compactos. `md` é o padrão para a maioria dos contextos.',
      },
    },
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;gap:0.75rem;align-items:center">
      <en-badge variant="positive" size="sm">sm</en-badge>
      <en-badge variant="positive" size="md">md</en-badge>
    </div>
  `,
};

// ---------------------------------------------------------------------------
// InContext — listagem de notas fiscais (não alterar)
// ---------------------------------------------------------------------------
export const InContext: Story = {
  name: 'Em contexto — listagem de notas',
  parameters: {
    docs: {
      description: {
        story:
          'Uso real do badge em uma listagem de notas fiscais. Demonstra como cada variante comunica o estado de processamento de uma NFS-e.',
      },
    },
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:480px;font-family:sans-serif;font-size:14px">
      ${[
        { nf: 'NFS-e #001234', tomador: 'Empresa ABC Ltda',   variant: 'positive',    label: 'Autorizada'  },
        { nf: 'NFS-e #001235', tomador: 'Comércio XYZ S.A.',  variant: 'attention',   label: 'Pendente'    },
        { nf: 'NFS-e #001236', tomador: 'Serviços DEF Ltda',  variant: 'negative',    label: 'Rejeitada'   },
        { nf: 'NFS-e #001237', tomador: 'Tech Solutions Inc', variant: 'informative', label: 'Em análise'  },
      ].map(({ nf, tomador, variant, label }) => html`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border:1px solid #e5e7eb;border-radius:8px">
          <div>
            <div style="font-weight:600">${nf}</div>
            <div style="color:#6b7280;margin-top:2px">${tomador}</div>
          </div>
          <en-badge variant=${variant}>${label}</en-badge>
        </div>
      `)}
    </div>
  `,
};

// ---------------------------------------------------------------------------
// StatusFatura — catálogo de estados de fatura (item 5 do feedback-do-emissor)
// ---------------------------------------------------------------------------
const ASSINATURA = [
  { label: 'Paga',       variant: 'positive' },
  { label: 'Processando', variant: 'informative' },
  { label: 'Pendente',   variant: 'attention' },
  { label: 'Vencida',    variant: 'negative', outline: true },
  { label: 'Recusada',   variant: 'negative', outline: true },
  { label: 'Suspensa',   variant: 'negative' },               // negative solid = mais severo
  { label: 'Cancelada',  variant: 'default' },                // terminal/inativo
] as const;

const EXCEDENTES = [
  { label: 'Dentro do plano',     variant: 'positive' },
  { label: 'Em apuração',         variant: 'informative' },
  { label: 'A pagar',             variant: 'attention' },
  { label: 'Vencida',             variant: 'negative', outline: true },
  { label: 'Importação pendente', variant: 'attention' },
  { label: 'Paga',                variant: 'positive' },
] as const;

const row = (items: readonly { label: string; variant: string; outline?: boolean }[]) => html`
  <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
    ${items.map(s => html`<en-badge variant=${s.variant} ?outline=${(s as any).outline}>${s.label}</en-badge>`)}
  </div>
`;

export const StatusFatura: Story = {
  name: 'Status de fatura (Emissor)',
  parameters: {
    docs: {
      description: {
        story:
          'Catálogo dos estados de fatura do Emissor mapeados para variantes do `en-badge` (item 5 do feedback). ' +
          '`info` = purple (decisão unificada). Vencida/Recusada usam `negative` outline; Suspensa usa `negative` sólido (estado mais severo); Cancelada usa `default`.',
      },
    },
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1.25rem;font-family:sans-serif">
      <div>
        <div style="font-size:12px;font-weight:700;color:#7a7773;text-transform:uppercase;letter-spacing:1px;margin-bottom:0.5rem">Assinatura</div>
        ${row(ASSINATURA)}
      </div>
      <div>
        <div style="font-size:12px;font-weight:700;color:#7a7773;text-transform:uppercase;letter-spacing:1px;margin-bottom:0.5rem">Excedentes</div>
        ${row(EXCEDENTES)}
      </div>
    </div>
  `,
};
