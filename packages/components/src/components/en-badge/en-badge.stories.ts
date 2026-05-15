import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { BadgeVariant, BadgeSize } from './en-badge';

const meta: Meta = {
  title: 'Primitives/EnBadge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'positive', 'negative', 'attention', 'informative', 'brand'] satisfies BadgeVariant[],
      description: 'Variante visual (alinhado com Cosmos DS)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'] satisfies BadgeSize[],
      description: 'Tamanho do badge',
    },
    outline: {
      control: 'boolean',
      description: 'Contorno em vez de fundo sólido',
    },
    label: { control: 'text' },
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

export const Default: Story = {
  render: ({ variant, size, outline, label }) =>
    html`<en-badge variant=${variant} size=${size} ?outline=${outline}>${label}</en-badge>`,
};

export const AllVariants: Story = {
  name: 'Todas as variantes',
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

export const Outline: Story = {
  name: 'Variante outline',
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

export const Sizes: Story = {
  name: 'Tamanhos',
  render: () => html`
    <div style="display:flex;gap:0.75rem;align-items:center">
      <en-badge variant="positive" size="sm">sm</en-badge>
      <en-badge variant="positive" size="md">md</en-badge>
    </div>
  `,
};

export const InContext: Story = {
  name: 'Em contexto — listagem de notas',
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
