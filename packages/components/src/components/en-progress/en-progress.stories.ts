import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitivos/EnProgress',
  tags: ['autodocs'],
  argTypes: {
    value:     { control: 'range', min: 0, max: 100, step: 1 },
    intent:    { control: 'select', options: ['default', 'success', 'warning', 'danger'] },
    size:      { control: 'select', options: ['sm', 'md'] },
    showLabel: { control: 'boolean' },
    label:     { control: 'text' },
  },
  args: { value: 65, intent: 'default', size: 'md', showLabel: true, label: 'Progresso' },
};
export default meta;

export const Default: StoryObj = {
  render: ({ value, intent, size, showLabel, label }) =>
    html`<en-progress value=${value} intent=${intent} size=${size} ?show-label=${showLabel} label=${label} style="max-width:400px"></en-progress>`,
};

export const Intents: StoryObj = {
  name: 'Todas as intenções',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:400px">
      <en-progress value="72" intent="default" show-label label="Emissão mensal"></en-progress>
      <en-progress value="100" intent="success" show-label label="Configuração concluída"></en-progress>
      <en-progress value="45" intent="warning" show-label label="Limite de notas"></en-progress>
      <en-progress value="12" intent="danger" show-label label="Créditos restantes"></en-progress>
    </div>
  `,
};

export const Sizes: StoryObj = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem;max-width:400px">
      <en-progress value="60" size="sm" label="sm"></en-progress>
      <en-progress value="60" size="md" label="md"></en-progress>
    </div>
  `,
};
