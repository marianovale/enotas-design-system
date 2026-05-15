import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/EnTextarea',
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    hint:        { control: 'text' },
    error:       { control: 'text' },
    rows:        { control: 'number' },
    disabled:    { control: 'boolean' },
    required:    { control: 'boolean' },
  },
  args: { label: 'Observações', placeholder: 'Descreva aqui...', rows: 4, disabled: false, required: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ label, placeholder, hint, error, rows, disabled, required }) =>
    html`<en-textarea label=${label} placeholder=${placeholder} rows=${rows} ?disabled=${disabled} ?required=${required} hint=${hint ?? ''} error=${error ?? ''}></en-textarea>`,
};

export const WithError: StoryObj = {
  args: { label: 'Motivo do cancelamento', error: 'Campo obrigatório' },
  render: ({ label, placeholder, error }) =>
    html`<en-textarea label=${label} placeholder=${placeholder ?? ''} error=${error}></en-textarea>`,
};

export const WithHint: StoryObj = {
  args: { label: 'Complemento do endereço', hint: 'Apto, sala, bloco — opcional' },
  render: ({ label, hint }) =>
    html`<en-textarea label=${label} hint=${hint}></en-textarea>`,
};

export const Disabled: StoryObj = {
  args: { disabled: true, label: 'Campo desabilitado', value: 'Conteúdo somente leitura' },
  render: ({ label, disabled }) =>
    html`<en-textarea label=${label} ?disabled=${disabled}></en-textarea>`,
};
