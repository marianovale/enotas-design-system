import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const FAQ_ITEMS = [
  { question: 'O que é NFS-e?', answer: 'A Nota Fiscal de Serviços Eletrônica (NFS-e) é um documento de existência exclusivamente digital, gerado e armazenado eletronicamente pela Prefeitura ou por empresa conveniada, para documentar as operações de prestação de serviços.' },
  { question: 'Como cancelo uma nota fiscal?', answer: 'Para cancelar uma NF-e, acesse a nota desejada, clique em "Cancelar" e informe o motivo do cancelamento. O prazo máximo para cancelamento varia conforme a prefeitura emissora.' },
  { question: 'Qual o prazo de emissão da NFS-e?', answer: 'O prazo de emissão depende da prefeitura. A maioria processa em até 2 minutos, mas algumas podem levar até 24 horas em casos de instabilidade no sistema municipal.' },
  { question: 'Posso emitir NF-e e NFS-e pela mesma conta?', answer: 'Sim. O eNotas suporta emissão de múltiplos tipos de notas fiscais na mesma conta, desde que a empresa esteja habilitada para cada tipo junto às autoridades fiscais.' },
];

const meta: Meta = {
  title: 'Compostos/EnFaq',
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
  },
  args: { multiple: false },
};
export default meta;

export const Default: StoryObj = {
  render: ({ multiple }) => {
    const el = document.createElement('en-faq') as any;
    el.items = FAQ_ITEMS;
    el.multiple = multiple;
    el.style.maxWidth = '640px';
    return el;
  },
};

export const MultipleOpen: StoryObj = {
  name: 'Múltiplos abertos',
  render: () => {
    const el = document.createElement('en-faq') as any;
    el.items = FAQ_ITEMS;
    el.multiple = true;
    el.openIndex = 0;
    el.style.maxWidth = '640px';
    return el;
  },
};
