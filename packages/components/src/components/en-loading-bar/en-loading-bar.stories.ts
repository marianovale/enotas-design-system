import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/LoadingBar',
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
    value:  { control: 'number', min: 0, max: 100 },
  },
  args: { active: true },
};
export default meta;

export const Indeterminate: StoryObj = {
  render: () => html`<en-loading-bar active></en-loading-bar>`,
};

export const Determinate: StoryObj = {
  args: { value: 65 },
  render: ({ value }) => html`<en-loading-bar active value=${value}></en-loading-bar>`,
};

export const PageLoader: StoryObj = {
  render: () => html`
    <div style="position:relative;width:100%">
      <en-loading-bar active style="position:absolute;top:0;left:0;right:0"></en-loading-bar>
      <div style="padding:32px;color:#6b6b6b;text-align:center">Carregando notas fiscais...</div>
    </div>`,
};

export const Progress0to100: StoryObj = {
  render: () => {
    const el = html`<en-loading-bar active value="0" id="demo-bar"></en-loading-bar>`;
    let v = 0;
    const interval = setInterval(() => {
      v += 5;
      const bar = document.getElementById('demo-bar') as any;
      if (bar) bar.value = v;
      if (v >= 100) clearInterval(interval);
    }, 200);
    return el;
  },
};
