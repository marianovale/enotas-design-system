import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { ButtonVariant, ButtonSize } from './en-button';

const meta: Meta = {
  title: 'Primitives/EnButton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'] satisfies ButtonVariant[],
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies ButtonSize[],
      description: 'Tamanho do botão',
    },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    label: 'Emitir Nota',
  },
};
export default meta;

type Story = StoryObj<{
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  label: string;
}>;

export const Default: Story = {
  render: ({ variant, size, disabled, loading, fullWidth, label }) =>
    html`<en-button
      variant=${variant}
      size=${size}
      ?disabled=${disabled}
      ?loading=${loading}
      ?full-width=${fullWidth}
    >${label}</en-button>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center">
      <en-button variant="primary">Primary</en-button>
      <en-button variant="secondary">Secondary</en-button>
      <en-button variant="ghost">Ghost</en-button>
      <en-button variant="danger">Danger</en-button>
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display:flex;gap:1rem;align-items:center">
      <en-button size="sm">Small</en-button>
      <en-button size="md">Medium</en-button>
      <en-button size="lg">Large</en-button>
    </div>
  `,
};

export const Loading: Story = {
  args: { loading: true, label: 'Aguarde...' },
  render: ({ label }) =>
    html`<en-button variant="primary" loading>${label}</en-button>`,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display:flex;gap:1rem">
      <en-button variant="primary" disabled>Primary</en-button>
      <en-button variant="secondary" disabled>Secondary</en-button>
      <en-button variant="ghost" disabled>Ghost</en-button>
    </div>
  `,
};
