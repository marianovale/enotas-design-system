import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/EnTag',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'],
    },
    dismissible: { control: 'boolean' },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    variant: 'neutral',
    dismissible: false,
    label: 'Tag Label',
  },
  render: ({ variant, dismissible, label }) => html`
    <en-tag variant=${variant} ?dismissible=${dismissible}>${label}</en-tag>
  `,
};

export const AllVariants: StoryObj = {
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:8px;padding:16px;">
      <en-tag variant="neutral">Neutral</en-tag>
      <en-tag variant="red">Red</en-tag>
      <en-tag variant="orange">Orange</en-tag>
      <en-tag variant="yellow">Yellow</en-tag>
      <en-tag variant="green">Green</en-tag>
      <en-tag variant="teal">Teal</en-tag>
      <en-tag variant="blue">Blue</en-tag>
      <en-tag variant="purple">Purple</en-tag>
    </div>
  `,
};

export const Dismissible: StoryObj = {
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:8px;padding:16px;">
      <en-tag variant="teal" dismissible>São Paulo</en-tag>
      <en-tag variant="blue" dismissible>Rio de Janeiro</en-tag>
      <en-tag variant="green" dismissible>Minas Gerais</en-tag>
    </div>
  `,
};
