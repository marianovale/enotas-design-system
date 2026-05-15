import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'eNotas/EnNfStatus',
  tags: ['autodocs'],
  argTypes: {
    type:   { control: 'select', options: ['nf-e', 'nfs-e', 'nf-e de devolução', 'all'] },
    status: { control: 'select', options: ['emitida', 'em processo de emissão', 'pendente', 'cancelada', 'falha ao cancelar', 'falha ao emitir', 'nao-emitir'] },
  },
  args: { type: 'nf-e', status: 'emitida' },
};
export default meta;

export const Default: StoryObj = {
  render: ({ type, status }) =>
    html`<en-nf-status type=${type} status=${status}></en-nf-status>`,
};

export const AllStatuses: StoryObj = {
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
      <en-nf-status type="nf-e" status="emitida"></en-nf-status>
      <en-nf-status type="nf-e" status="em processo de emissão"></en-nf-status>
      <en-nf-status type="nf-e" status="pendente"></en-nf-status>
      <en-nf-status type="nf-e" status="cancelada"></en-nf-status>
      <en-nf-status type="nf-e" status="falha ao emitir"></en-nf-status>
      <en-nf-status type="nf-e" status="falha ao cancelar"></en-nf-status>
      <en-nf-status type="nf-e" status="nao-emitir"></en-nf-status>
    </div>
  `,
};

export const AllTypes: StoryObj = {
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
      <en-nf-status type="nf-e" status="emitida"></en-nf-status>
      <en-nf-status type="nfs-e" status="emitida"></en-nf-status>
      <en-nf-status type="nf-e de devolução" status="emitida"></en-nf-status>
    </div>
  `,
};
