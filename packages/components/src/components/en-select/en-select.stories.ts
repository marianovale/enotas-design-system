import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const REGIME_OPTIONS = JSON.stringify([
  { value: 'simples', label: 'Simples Nacional' },
  { value: 'lucro-presumido', label: 'Lucro Presumido' },
  { value: 'lucro-real', label: 'Lucro Real' },
  { value: 'mei', label: 'MEI' },
]);

const meta: Meta = {
  title: 'Primitives/EnSelect',
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    hint:        { control: 'text' },
    error:       { control: 'text' },
    disabled:    { control: 'boolean' },
    required:    { control: 'boolean' },
  },
  args: { label: 'Regime tributário', placeholder: 'Selecione...', disabled: false, required: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ label, placeholder, hint, error, disabled, required }) =>
    html`<en-select
      label=${label}
      placeholder=${placeholder}
      .options=${JSON.parse(REGIME_OPTIONS)}
      ?disabled=${disabled}
      ?required=${required}
      hint=${hint ?? ''}
      error=${error ?? ''}
    ></en-select>`,
};

export const WithError: StoryObj = {
  args: { label: 'Regime tributário', error: 'Selecione um regime' },
  render: ({ label, error }) =>
    html`<en-select label=${label} .options=${JSON.parse(REGIME_OPTIONS)} error=${error}></en-select>`,
};

export const Disabled: StoryObj = {
  args: { disabled: true, label: 'Regime tributário' },
  render: ({ label, disabled }) =>
    html`<en-select label=${label} .options=${JSON.parse(REGIME_OPTIONS)} ?disabled=${disabled}></en-select>`,
};
