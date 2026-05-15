import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/Tab',
  tags: ['autodocs'],
  argTypes: {
    status:   { control: 'select', options: ['inactive', 'active', 'hovered'] },
    disabled: { control: 'boolean' },
    count:    { control: 'number' },
    href:     { control: 'text' },
  },
  args: { status: 'inactive' },
};
export default meta;

export const Default: StoryObj = {
  render: ({ status, disabled, count }) =>
    html`<en-tab status=${status} ?disabled=${disabled} count=${count}>NFS-e</en-tab>`,
};

export const Active: StoryObj = {
  render: () => html`<en-tab status="active">NFS-e</en-tab>`,
};

export const WithCount: StoryObj = {
  render: () => html`
    <div style="display:flex;gap:4px">
      <en-tab status="active" count="24">Emitidas</en-tab>
      <en-tab count="8">NF-e</en-tab>
      <en-tab count="3">Devoluções</en-tab>
    </div>`,
};

export const AsLink: StoryObj = {
  render: () => html`<en-tab href="/notas">Ver todas as notas</en-tab>`,
};

export const TabGroup: StoryObj = {
  render: () => html`
    <div style="display:flex;border-bottom:1px solid #d6d6d6">
      <en-tab status="active" count="24">Emitidas</en-tab>
      <en-tab count="3">Em processo</en-tab>
      <en-tab>Canceladas</en-tab>
      <en-tab disabled>Rascunhos</en-tab>
    </div>`,
};
