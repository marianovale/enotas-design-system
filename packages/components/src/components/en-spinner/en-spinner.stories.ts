import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { SpinnerSize } from './en-spinner';

const meta: Meta = {
  title: 'Primitives/EnSpinner',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies SpinnerSize[],
    },
    label: { control: 'text' },
  },
  args: {
    size: 'md',
    label: 'Carregando...',
  },
};
export default meta;

type Story = StoryObj<{ size: SpinnerSize; label: string }>;

export const Default: Story = {
  render: ({ size, label }) =>
    html`<en-spinner size=${size} label=${label}></en-spinner>`,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display:flex;gap:1.5rem;align-items:center">
      <en-spinner size="sm"></en-spinner>
      <en-spinner size="md"></en-spinner>
      <en-spinner size="lg"></en-spinner>
    </div>
  `,
};
