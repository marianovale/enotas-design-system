import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/EnSwitch',
  tags: ['autodocs'],
  argTypes: {
    label:    { control: 'text' },
    checked:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    value:    { control: 'text' },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    label: 'Ativar notificações',
    checked: false,
    disabled: false,
  },
  render: ({ label, checked, disabled }) => html`
    <en-switch
      label=${label}
      ?checked=${checked}
      ?disabled=${disabled}
    ></en-switch>
  `,
};

export const Checked: StoryObj = {
  args: {
    label: 'Modo escuro',
    checked: true,
  },
  render: ({ label, checked }) => html`
    <en-switch label=${label} ?checked=${checked}></en-switch>
  `,
};

export const Disabled: StoryObj = {
  args: {
    label: 'Funcionalidade bloqueada',
    disabled: true,
    checked: false,
  },
  render: ({ label, disabled, checked }) => html`
    <en-switch label=${label} ?disabled=${disabled} ?checked=${checked}></en-switch>
  `,
};

export const NoLabel: StoryObj = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;padding:16px;">
      <en-switch></en-switch>
      <en-switch checked></en-switch>
    </div>
  `,
};
