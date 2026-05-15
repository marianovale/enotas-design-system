import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitivos/EnInputNumber',
  tags: ['autodocs'],
  argTypes: {
    label:    { control: 'text' },
    value:    { control: 'number' },
    min:      { control: 'number' },
    max:      { control: 'number' },
    step:     { control: 'number' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error:    { control: 'text' },
    hint:     { control: 'text' },
  },
  args: { label: 'Quantidade', value: 1, min: 0, max: 100, step: 1, disabled: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ label, value, min, max, step, disabled, required, error, hint }) =>
    html`<en-input-number
      label=${label} value=${value} min=${min} max=${max} step=${step}
      ?disabled=${disabled} ?required=${required}
      error=${error ?? ''} hint=${hint ?? ''}
      style="max-width:200px"
    ></en-input-number>`,
};

export const WithLimits: StoryObj = {
  name: 'Com limites (1–10)',
  render: () =>
    html`<en-input-number label="Número de parcelas" value="3" min="1" max="12" hint="Máximo 12 parcelas" style="max-width:200px"></en-input-number>`,
};

export const Disabled: StoryObj = {
  args: { disabled: true, label: 'Quantidade (fixo)' },
  render: ({ label }) =>
    html`<en-input-number label=${label} value="5" disabled style="max-width:200px"></en-input-number>`,
};
