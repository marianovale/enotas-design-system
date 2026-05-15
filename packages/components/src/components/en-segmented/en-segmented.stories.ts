import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/Segmented',
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    value:    { control: 'text' },
  },
};
export default meta;

const options = [
  { value: 'month', label: 'Mês' },
  { value: 'quarter', label: 'Trimestre' },
  { value: 'year', label: 'Ano' },
];

export const Default: StoryObj = {
  render: () => {
    const el = html`<en-segmented value="month"></en-segmented>`;
    setTimeout(() => {
      (document.querySelector('en-segmented') as any).options = options;
    }, 0);
    return el;
  },
};

export const TwoOptions: StoryObj = {
  render: () => {
    const el = html`<en-segmented value="nfse"></en-segmented>`;
    setTimeout(() => {
      (document.querySelector('en-segmented') as any).options = [
        { value: 'nfse', label: 'NFS-e' },
        { value: 'nfe', label: 'NF-e' },
      ];
    }, 0);
    return el;
  },
};

export const FourOptions: StoryObj = {
  render: () => {
    const el = html`<en-segmented value="all"></en-segmented>`;
    setTimeout(() => {
      (document.querySelector('en-segmented') as any).options = [
        { value: 'all', label: 'Todos' },
        { value: 'nfse', label: 'NFS-e' },
        { value: 'nfe', label: 'NF-e' },
        { value: 'dev', label: 'Devolução' },
      ];
    }, 0);
    return el;
  },
};

export const WithDisabledOption: StoryObj = {
  render: () => {
    const el = html`<en-segmented value="month"></en-segmented>`;
    setTimeout(() => {
      (document.querySelector('en-segmented') as any).options = [
        { value: 'month', label: 'Mês' },
        { value: 'quarter', label: 'Trimestre', disabled: true },
        { value: 'year', label: 'Ano' },
      ];
    }, 0);
    return el;
  },
};
