import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { LookupOption } from './en-lookup';

const SAMPLE_OPTIONS: LookupOption[] = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'ba', label: 'Bahia' },
  { value: 'pr', label: 'Paraná' },
  { value: 'rs', label: 'Rio Grande do Sul' },
  { value: 'sc', label: 'Santa Catarina' },
  { value: 'go', label: 'Goiás', disabled: true },
];

const meta: Meta = {
  title: 'Components/EnLookup',
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    loading:     { control: 'boolean' },
    multiple:    { control: 'boolean' },
    disabled:    { control: 'boolean' },
    error:       { control: 'text' },
    hint:        { control: 'text' },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    label: 'Estado',
    placeholder: 'Buscar estado...',
    loading: false,
    multiple: false,
    disabled: false,
    error: '',
    hint: 'Selecione um estado brasileiro',
  },
  render: ({ label, placeholder, loading, multiple, disabled, error, hint }) => html`
    <en-lookup
      label=${label}
      placeholder=${placeholder}
      ?loading=${loading}
      ?multiple=${multiple}
      ?disabled=${disabled}
      error=${error || undefined}
      hint=${hint}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};

export const Multiple: StoryObj = {
  args: {
    label: 'Estados',
    placeholder: 'Buscar estados...',
    loading: false,
    multiple: true,
    disabled: false,
  },
  render: ({ label, placeholder, loading, multiple, disabled }) => html`
    <en-lookup
      label=${label}
      placeholder=${placeholder}
      ?loading=${loading}
      ?multiple=${multiple}
      ?disabled=${disabled}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};

export const Loading: StoryObj = {
  args: {
    label: 'Busca remota',
    placeholder: 'Digitando...',
    loading: true,
    multiple: false,
  },
  render: ({ label, placeholder, loading }) => html`
    <en-lookup
      label=${label}
      placeholder=${placeholder}
      ?loading=${loading}
      .options=${[]}
    ></en-lookup>
  `,
};

export const WithError: StoryObj = {
  args: {
    label: 'Estado',
    error: 'Campo obrigatório',
  },
  render: ({ label, error }) => html`
    <en-lookup
      label=${label}
      error=${error}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};

export const Disabled: StoryObj = {
  args: {
    label: 'Estado',
    disabled: true,
  },
  render: ({ label, disabled }) => html`
    <en-lookup
      label=${label}
      ?disabled=${disabled}
      .options=${SAMPLE_OPTIONS}
    ></en-lookup>
  `,
};
