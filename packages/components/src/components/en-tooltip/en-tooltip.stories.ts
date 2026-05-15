import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitivos/EnTooltip',
  tags: ['autodocs'],
  argTypes: {
    text:      { control: 'text' },
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    disabled:  { control: 'boolean' },
  },
  args: { text: 'Texto explicativo', placement: 'top', disabled: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ text, placement, disabled }) => html`
    <div style="display:flex;justify-content:center;padding:3rem">
      <en-tooltip text=${text} placement=${placement} ?disabled=${disabled}>
        <en-button variant="secondary" size="sm">Passe o mouse</en-button>
      </en-tooltip>
    </div>
  `,
};

export const AllPlacements: StoryObj = {
  name: 'Todos os posicionamentos',
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(2,auto);gap:2rem;justify-content:center;padding:4rem">
      <en-tooltip text="Tooltip em cima" placement="top">
        <en-button variant="secondary" size="sm">Top</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip embaixo" placement="bottom">
        <en-button variant="secondary" size="sm">Bottom</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip à esquerda" placement="left">
        <en-button variant="secondary" size="sm">Left</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip à direita" placement="right">
        <en-button variant="secondary" size="sm">Right</en-button>
      </en-tooltip>
    </div>
  `,
};

export const WithIcon: StoryObj = {
  name: 'Em ícone de ajuda',
  render: () => html`
    <div style="display:flex;align-items:center;gap:0.5rem;padding:3rem">
      <span>Regime tributário</span>
      <en-tooltip text="O regime define como os impostos são calculados na emissão da nota." placement="right">
        <en-icon name="help" size="16px" style="color:#6b6b6b;cursor:help"></en-icon>
      </en-tooltip>
    </div>
  `,
};
