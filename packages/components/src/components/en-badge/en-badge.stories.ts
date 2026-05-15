import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { BadgeIntent, BadgeSize } from './en-badge';

const meta: Meta = {
  title: 'Primitives/EnBadge',
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger', 'info', 'brand'] satisfies BadgeIntent[],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'] satisfies BadgeSize[],
    },
    outline: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    intent: 'neutral',
    size: 'md',
    outline: false,
    label: 'Status',
  },
};
export default meta;

type Story = StoryObj<{ intent: BadgeIntent; size: BadgeSize; outline: boolean; label: string }>;

export const Default: Story = {
  render: ({ intent, size, outline, label }) =>
    html`<en-badge intent=${intent} size=${size} ?outline=${outline}>${label}</en-badge>`,
};

export const AllIntents: Story = {
  render: () => html`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <en-badge intent="neutral">Neutral</en-badge>
      <en-badge intent="brand">Brand</en-badge>
      <en-badge intent="success">Aprovado</en-badge>
      <en-badge intent="warning">Pendente</en-badge>
      <en-badge intent="danger">Rejeitado</en-badge>
      <en-badge intent="info">Em análise</en-badge>
    </div>
  `,
};

export const Outline: Story = {
  render: () => html`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <en-badge intent="neutral" outline>Neutral</en-badge>
      <en-badge intent="brand" outline>Brand</en-badge>
      <en-badge intent="success" outline>Aprovado</en-badge>
      <en-badge intent="warning" outline>Pendente</en-badge>
      <en-badge intent="danger" outline>Rejeitado</en-badge>
      <en-badge intent="info" outline>Em análise</en-badge>
    </div>
  `,
};
