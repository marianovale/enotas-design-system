import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { TagVariant } from './en-tag';

const ALL_VARIANTS: TagVariant[] = ['neutral', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'];

const meta: Meta = {
  title: 'Components/EnTag',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ALL_VARIANTS,
      description: 'Cor da tag',
    },
    dismissible: {
      control: 'boolean',
      description: 'Exibe botão de fechar',
    },
    label: { control: 'text' },
  },
  args: {
    variant: 'neutral',
    dismissible: false,
    label: 'São Paulo',
  },
};
export default meta;

type Story = StoryObj<{ variant: TagVariant; dismissible: boolean; label: string }>;

export const Default: Story = {
  render: ({ variant, dismissible, label }) => html`
    <en-tag variant=${variant} ?dismissible=${dismissible}>${label}</en-tag>
  `,
};

export const AllVariants: Story = {
  name: 'Todas as cores',
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:8px;padding:16px">
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

export const Dismissible: Story = {
  name: 'Com dismiss',
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:8px;padding:16px">
      <en-tag variant="teal" dismissible>São Paulo</en-tag>
      <en-tag variant="blue" dismissible>Rio de Janeiro</en-tag>
      <en-tag variant="green" dismissible>Minas Gerais</en-tag>
      <en-tag variant="orange" dismissible>Bahia</en-tag>
    </div>
  `,
};

export const InContext: Story = {
  name: 'Em contexto — filtros ativos',
  render: () => html`
    <div style="font-family:sans-serif;font-size:14px;padding:16px;max-width:560px">
      <div style="color:#6b7280;margin-bottom:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">
        Filtros ativos
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <en-tag variant="teal" dismissible>NFS-e</en-tag>
        <en-tag variant="blue" dismissible>Autorizada</en-tag>
        <en-tag variant="green" dismissible>Jan–Mar 2025</en-tag>
        <en-tag variant="purple" dismissible>Acima de R$ 1.000</en-tag>
      </div>
    </div>
  `,
};

export const Categorization: Story = {
  name: 'Em contexto — categorização de serviços',
  render: () => html`
    <div style="font-family:sans-serif;font-size:14px;padding:16px">
      <div style="display:flex;flex-direction:column;gap:12px">
        ${[
          { nome: 'Desenvolvimento de Software', tags: [{ v: 'teal', l: 'TI' }, { v: 'blue', l: 'ISS 5%' }] },
          { nome: 'Consultoria Tributária',       tags: [{ v: 'purple', l: 'Consultoria' }, { v: 'orange', l: 'ISS 2%' }] },
          { nome: 'Design Gráfico',               tags: [{ v: 'yellow', l: 'Criativo' }, { v: 'green', l: 'Simples' }] },
        ].map(({ nome, tags }) => html`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border:1px solid #e5e7eb;border-radius:8px">
            <span style="font-weight:500">${nome}</span>
            <div style="display:flex;gap:6px">
              ${tags.map(({ v, l }) => html`<en-tag variant=${v}>${l}</en-tag>`)}
            </div>
          </div>
        `)}
      </div>
    </div>
  `,
};
