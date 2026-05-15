import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Compostos/EnFooter',
  tags: ['autodocs'],
  argTypes: {
    copyright: { control: 'text' },
    version:   { control: 'text' },
  },
  args: { version: '2.4.1' },
};
export default meta;

export const Default: StoryObj = {
  render: ({ copyright, version }) =>
    html`<en-footer copyright=${copyright ?? ''} version=${version}></en-footer>`,
};

export const WithLinks: StoryObj = {
  name: 'Com links',
  render: () => html`
    <en-footer version="2.4.1">
      <div slot="links" style="display:flex;gap:1.5rem">
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Termos de uso</a>
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Privacidade</a>
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Suporte</a>
      </div>
    </en-footer>
  `,
};
