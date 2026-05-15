import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/EnCheckbox',
  tags: ['autodocs'],
  argTypes: {
    type:     { control: 'select', options: ['square', 'round', 'switch'] },
    checked:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    label:    { control: 'text' },
  },
  args: { type: 'square', checked: false, disabled: false, label: 'Aceito os termos' },
};
export default meta;

export const Default: StoryObj = {
  render: ({ type, checked, disabled, label }) =>
    html`<en-checkbox type=${type} ?checked=${checked} ?disabled=${disabled} label=${label}></en-checkbox>`,
};

export const AllTypes: StoryObj = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square" label="Square" checked></en-checkbox>
      <en-checkbox type="round" label="Round" checked></en-checkbox>
      <en-checkbox type="switch" label="Switch" checked></en-checkbox>
    </div>
  `,
};
