import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Compostos/EnCard',
  tags: ['autodocs'],
  argTypes: {
    size:      { control: 'select', options: ['large', 'small'] },
    bordered:  { control: 'boolean' },
    clickable: { control: 'boolean' },
  },
  args: { size: 'large', bordered: false, clickable: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ size, bordered, clickable }) => html`
    <en-card size=${size} ?bordered=${bordered} ?clickable=${clickable} style="max-width:400px">
      <div slot="header" style="font-weight:600;font-size:1rem">Resumo do mês</div>
      <p style="margin:0;color:#6b6b6b">Total de notas emitidas: <strong>142</strong></p>
      <p style="margin:8px 0 0;color:#6b6b6b">Valor total: <strong>R$ 48.320,00</strong></p>
      <div slot="footer">
        <en-button variant="ghost" size="sm">Ver detalhes</en-button>
      </div>
    </en-card>
  `,
};

export const Sizes: StoryObj = {
  render: () => html`
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <en-card size="large" style="width:300px">
        <div slot="header" style="font-weight:600">Large card</div>
        Conteúdo do card grande com mais padding.
      </en-card>
      <en-card size="small" style="width:300px">
        <div slot="header" style="font-weight:600">Small card</div>
        Conteúdo do card compacto.
      </en-card>
    </div>
  `,
};

export const Clickable: StoryObj = {
  render: () => html`
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <en-card clickable size="small" style="width:200px;cursor:pointer">
        <en-nf-status type="nfs-e" status="emitida"></en-nf-status>
        <p style="margin:8px 0 0;font-weight:600">NFS-e #1042</p>
        <p style="margin:4px 0 0;font-size:.875rem;color:#6b6b6b">R$ 1.200,00</p>
      </en-card>
      <en-card clickable size="small" style="width:200px;cursor:pointer">
        <en-nf-status type="nf-e" status="cancelada"></en-nf-status>
        <p style="margin:8px 0 0;font-weight:600">NF-e #893</p>
        <p style="margin:4px 0 0;font-size:.875rem;color:#6b6b6b">R$ 3.450,00</p>
      </en-card>
    </div>
  `,
};
