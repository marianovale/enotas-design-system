import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Compostos/EnSearch',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled:    { control: 'boolean' },
  },
  args: { placeholder: 'Buscar notas fiscais...', disabled: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ placeholder, disabled }) =>
    html`<en-search placeholder=${placeholder} ?disabled=${disabled} style="max-width:400px"></en-search>`,
};

export const WithValue: StoryObj = {
  render: () => {
    const el = document.createElement('en-search') as any;
    el.value = 'NFS-e São Paulo';
    el.style.maxWidth = '400px';
    return el;
  },
};

export const Disabled: StoryObj = {
  args: { disabled: true },
  render: ({ placeholder, disabled }) =>
    html`<en-search placeholder=${placeholder} ?disabled=${disabled} style="max-width:400px"></en-search>`,
};
