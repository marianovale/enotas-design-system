import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const ICON_NAMES = [
  'alert', 'alert-circle', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up',
  'calendar-tucked-corner', 'chart', 'clock', 'company', 'credit-cards', 'dashboard',
  'done-check', 'done-check-circle', 'download', 'earth-world', 'envelope',
  'eye-hidden', 'eye-show-visible', 'filter-sort', 'help', 'hourglass',
  'invoice', 'invoice-checkmark', 'key', 'link', 'mail-open', 'nfe', 'nfs',
  'notification', 'padlock-lock', 'padlock-unlock', 'pen', 'percent',
  'plus-add', 'print', 'refresh-rotate', 'rocket', 'search', 'setting',
  'share-arrow', 'shopping-bag-line', 'star', 'target', 'trash', 'user',
  'users', 'wallet',
];

const meta: Meta = {
  title: 'Primitives/EnIcon',
  tags: ['autodocs'],
  argTypes: {
    name:  { control: 'select', options: ICON_NAMES },
    size:  { control: 'select', options: ['8px', '12px', '16px', '20px', '24px'] },
    label: { control: 'text' },
  },
  args: { name: 'nfe', size: '24px' },
};
export default meta;

export const Default: StoryObj = {
  render: ({ name, size, label }) =>
    html`<en-icon name=${name} size=${size} label=${label ?? ''}></en-icon>`,
};

export const Sizes: StoryObj = {
  render: () => html`
    <div style="display:flex;align-items:center;gap:1.5rem;color:#1f1f1f">
      <en-icon name="nfe" size="8px"></en-icon>
      <en-icon name="nfe" size="12px"></en-icon>
      <en-icon name="nfe" size="16px"></en-icon>
      <en-icon name="nfe" size="20px"></en-icon>
      <en-icon name="nfe" size="24px"></en-icon>
    </div>
  `,
};

export const ENotasIcons: StoryObj = {
  name: 'Ícones eNotas',
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;color:#1f1f1f">
      ${['nfe', 'nfs', 'nfe-devolution', 'nfe-split', 'nfe-history', 'nfe-canceled', 'nfe-done', 'nfe-xml', 'nf-paper', 'invoice', 'invoice-checkmark'].map(
        name => html`
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;color:#6b6b6b">
            <en-icon name=${name} size="24px"></en-icon>
            <span>${name}</span>
          </div>`
      )}
    </div>
  `,
};
