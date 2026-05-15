import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Compostos/EnFilter',
  tags: ['autodocs'],
  argTypes: {
    active:   { control: 'boolean' },
    disabled: { control: 'boolean' },
    count:    { control: 'number' },
  },
  args: { active: false, disabled: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ active, disabled, count }) =>
    html`<en-filter ?active=${active} ?disabled=${disabled} count=${count}>NFS-e</en-filter>`,
};

export const FilterGroup: StoryObj = {
  name: 'Grupo de filtros',
  render: () => html`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
      <en-filter active>Todos</en-filter>
      <en-filter count="24">NFS-e</en-filter>
      <en-filter count="8">NF-e</en-filter>
      <en-filter count="3">NF-e Devolução</en-filter>
      <en-filter disabled>Importação (em breve)</en-filter>
    </div>
  `,
};

export const WithIcon: StoryObj = {
  name: 'Com ícone',
  render: () => html`
    <div style="display:flex;gap:0.5rem">
      <en-filter>
        <en-icon slot="icon" name="filter-sort" size="16px"></en-icon>
        Filtrar
      </en-filter>
      <en-filter active>
        <en-icon slot="icon" name="done-check" size="16px"></en-icon>
        Emitidas
      </en-filter>
    </div>
  `,
};
