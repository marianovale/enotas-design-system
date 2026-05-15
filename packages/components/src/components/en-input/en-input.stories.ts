import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/EnInput',
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    hint:        { control: 'text' },
    error:       { control: 'text' },
    disabled:    { control: 'boolean' },
    required:    { control: 'boolean' },
  },
  args: { label: 'CNPJ', placeholder: '00.000.000/0001-00', disabled: false, required: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ label, placeholder, hint, error, disabled, required }) =>
    html`<en-input label=${label} placeholder=${placeholder} ?disabled=${disabled} ?required=${required} hint=${hint ?? ''} error=${error ?? ''}></en-input>`,
};

export const WithError: StoryObj = {
  args: { label: 'E-mail', placeholder: 'seu@email.com', error: 'E-mail inválido' },
  render: ({ label, placeholder, error }) =>
    html`<en-input label=${label} placeholder=${placeholder} error=${error}></en-input>`,
};

export const Disabled: StoryObj = {
  args: { disabled: true, label: 'Campo desabilitado' },
  render: ({ label, placeholder, disabled }) =>
    html`<en-input label=${label} placeholder=${placeholder ?? ''} ?disabled=${disabled}></en-input>`,
};
