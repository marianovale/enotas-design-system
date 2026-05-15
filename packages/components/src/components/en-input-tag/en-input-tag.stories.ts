import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/EnInputTag',
  tags: ['autodocs'],
  argTypes: {
    label:    { control: 'text' },
    hint:     { control: 'text' },
    error:    { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Palavras-chave', disabled: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ label, hint, error, disabled }) =>
    html`<en-input-tag label=${label} placeholder="Digite e pressione Enter..." ?disabled=${disabled} hint=${hint ?? ''} error=${error ?? ''}></en-input-tag>`,
};

export const WithInitialTags: StoryObj = {
  name: 'Com tags iniciais',
  render: () => {
    const el = document.createElement('en-input-tag') as any;
    el.label = 'Filtros ativos';
    el.value = ['NFS-e', 'São Paulo', 'Aprovada'];
    return el;
  },
};

export const WithError: StoryObj = {
  args: { label: 'E-mails', error: 'Adicione ao menos um e-mail' },
  render: ({ label, error }) =>
    html`<en-input-tag label=${label} placeholder="nome@empresa.com" error=${error}></en-input-tag>`,
};

export const Disabled: StoryObj = {
  args: { disabled: true, label: 'Tags (somente leitura)' },
  render: ({ label, disabled }) => {
    const el = document.createElement('en-input-tag') as any;
    el.label = label;
    el.disabled = disabled;
    el.value = ['Fixo', 'Não editável'];
    return el;
  },
};
