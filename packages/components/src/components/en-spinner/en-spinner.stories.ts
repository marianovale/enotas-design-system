import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { SpinnerSize, SpinnerVariant } from './en-spinner';

const meta: Meta = {
  title: 'Primitives/EnSpinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Indicador de carregamento animado (spinning). Use sempre que uma operação assíncrona estiver em andamento. ' +
          'Forneça a prop `label` com texto descritivo — ela é lida por screen readers via `role="status"` e não aparece visualmente.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'] satisfies SpinnerSize[],
      description:
        'Tamanho do spinner. `default` é alias de `md`. Opções disponíveis: `xs`, `sm`, `md`, `lg`, `xl`.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'thin', 'thick'] satisfies SpinnerVariant[],
      description:
        'Espessura do traço do spinner. `default` usa a espessura padrão do design token.',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description:
        'Texto acessível lido por screen readers via `aria-label` interno. Não é visível na tela. ' +
        'Use verbos de ação no gerúndio: "Carregando...", "Salvando...", "Processando nota...".',
      table: {
        defaultValue: { summary: 'Carregando...' },
      },
    },
  },
  args: {
    size: 'md',
    variant: 'default',
    label: 'Carregando...',
  },
};
export default meta;

type Story = StoryObj<{ size: SpinnerSize; variant: SpinnerVariant; label: string }>;

/** Estado interativo padrão. Use os controles para explorar tamanhos, variantes e labels. */
export const Default: Story = {
  render: ({ size, variant, label }) =>
    html`<en-spinner size=${size} variant=${variant} label=${label}></en-spinner>`,
};

/** Todos os tamanhos disponíveis lado a lado para comparação visual. */
export const AllSizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;gap:1.5rem;align-items:center">
      <en-spinner size="xs"></en-spinner>
      <en-spinner size="sm"></en-spinner>
      <en-spinner size="md"></en-spinner>
      <en-spinner size="lg"></en-spinner>
      <en-spinner size="xl"></en-spinner>
    </div>
  `,
};

/**
 * Todos os tamanhos com label visível abaixo de cada spinner.
 * Útil para alinhar com decisões de layout: qual tamanho usar em cada contexto.
 */
export const AllSizesLabeled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;gap:2rem;align-items:flex-end">
      ${(['xs', 'sm', 'md', 'lg', 'xl'] as SpinnerSize[]).map(
        (size) => html`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem">
            <en-spinner size=${size} label="Carregando..."></en-spinner>
            <span style="font-size:0.75rem;color:var(--en-content-secondary,#6b7280)">${size}</span>
          </div>
        `,
      )}
    </div>
  `,
};

/**
 * Spinner em contexto real: botão com estado de carregamento.
 * Demonstra uso inline com ação desabilitada durante o processamento.
 */
export const InContext: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:320px">
      <!-- Botão com spinner inline -->
      <button
        disabled
        style="
          display:inline-flex;
          align-items:center;
          gap:0.5rem;
          padding:0.5rem 1rem;
          background:var(--en-action-primary-background,#22baa0);
          color:#fff;
          border:none;
          border-radius:var(--en-radius-md,6px);
          font-size:0.875rem;
          cursor:not-allowed;
          opacity:0.8;
        "
      >
        <en-spinner size="sm" label="Emitindo nota..."></en-spinner>
        Emitindo nota...
      </button>

      <!-- Card de carregamento -->
      <div
        style="
          display:flex;
          align-items:center;
          gap:1rem;
          padding:1rem 1.25rem;
          border:1px solid var(--en-border-subtle,#e5e7eb);
          border-radius:var(--en-radius-md,6px);
          background:var(--en-surface-default,#fff);
        "
      >
        <en-spinner size="md" label="Carregando notas fiscais..."></en-spinner>
        <div>
          <div style="font-size:0.875rem;font-weight:500;color:var(--en-content-default,#111827)">
            Carregando notas fiscais
          </div>
          <div style="font-size:0.75rem;color:var(--en-content-secondary,#6b7280);margin-top:0.25rem">
            Aguarde enquanto buscamos os dados...
          </div>
        </div>
      </div>
    </div>
  `,
};
