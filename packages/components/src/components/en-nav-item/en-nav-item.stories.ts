import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Compostos/EnNavItem',
  tags: ['autodocs'],
  argTypes: {
    active:   { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon:     { control: 'text' },
    count:    { control: 'number' },
  },
  args: { active: false, disabled: false, icon: 'nfe' },
};
export default meta;

export const Default: StoryObj = {
  render: ({ active, disabled, icon, count }) =>
    html`<en-nav-item ?active=${active} ?disabled=${disabled} icon=${icon} count=${count} style="max-width:220px">
      Notas Fiscais
    </en-nav-item>`,
};

export const Sidebar: StoryObj = {
  name: 'Sidebar completa',
  render: () => html`
    <nav style="width:220px;padding:0.5rem;background:#fff;border:1px solid #e1e3e6;border-radius:0.75rem">
      <en-nav-item active icon="dashboard">Dashboard</en-nav-item>
      <en-nav-item icon="nfe" count="3">NF-e</en-nav-item>
      <en-nav-item icon="nfs">NFS-e</en-nav-item>
      <en-nav-item icon="company">Empresas</en-nav-item>
      <en-nav-item icon="setting">Configurações</en-nav-item>
      <en-nav-item icon="help">Ajuda</en-nav-item>
      <en-nav-item disabled icon="chart-line">Relatórios (em breve)</en-nav-item>
    </nav>
  `,
};
