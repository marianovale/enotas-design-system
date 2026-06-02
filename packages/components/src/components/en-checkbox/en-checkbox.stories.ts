import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/EnCheckbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
\`en-checkbox\` é o controle de seleção do eNotas DS. Oferece três variantes visuais:

- **square** — caixa com cantos arredondados; use para seleções múltiplas em listas (padrão HTML \`<input type="checkbox">\`)
- **round** — caixa circular; use para seleção exclusiva em grupos pequenos (estilo radio visual com semântica de checkbox)
- **switch** — toggle deslizante; use para ligar/desligar uma configuração com efeito imediato

O estado \`checked="indeterminate"\` (traço −) aplica-se a square e round quando um grupo parcialmente está selecionado.
Emite \`enChange\` com o novo valor booleano ao ser clicado ou acionado por teclado (Space / Enter).
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['square', 'round', 'switch'],
      description:
        'Variante visual do controle. `square` = caixa; `round` = círculo; `switch` = toggle deslizante.',
      table: { defaultValue: { summary: 'square' } },
    },
    checked: {
      control: 'select',
      options: [false, true, 'indeterminate'],
      description:
        'Estado marcado. Aceita `true`, `false` ou `"indeterminate"` (exibe traço −, só em square/round).',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description:
        'Desabilita o controle. Bloqueia cliques, aplica opacity 0.4 e remove do tab order.',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Texto visível ao lado do controle. Omita para usar apenas o ícone.',
      table: { defaultValue: { summary: '' } },
    },
  },
  args: { type: 'square', checked: false, disabled: false, label: 'Aceito os termos' },
};
export default meta;

// ─── Default (interativo) ────────────────────────────────────────────────────

export const Default: StoryObj = {
  name: 'Default',
  render: ({ type, checked, disabled, label }) =>
    html`<en-checkbox
      type=${type}
      .checked=${checked}
      ?disabled=${disabled}
      label=${label}
    ></en-checkbox>`,
};

// ─── Estados de checked ───────────────────────────────────────────────────────

export const Checked: StoryObj = {
  name: 'Checked',
  parameters: { docs: { description: { story: 'Controle no estado marcado (`checked`).' } } },
  render: () => html`<en-checkbox type="square" checked label="Selecionado"></en-checkbox>`,
};

export const Indeterminate: StoryObj = {
  name: 'Indeterminate',
  parameters: {
    docs: {
      description: {
        story:
          'Estado intermediário: exibe traço (−). Útil quando um grupo tem seleção parcial. Aplica-se a `square` e `round`; ignorado em `switch`.',
      },
    },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square" checked="indeterminate" label="Square — indeterminate"></en-checkbox>
      <en-checkbox type="round"  checked="indeterminate" label="Round — indeterminate"></en-checkbox>
    </div>
  `,
};

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: StoryObj = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story:
          'Todos os tipos no estado `disabled` (desmarcado e marcado). Opacity 0.4, sem interação.',
      },
    },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square"  disabled label="Square desabilitado"></en-checkbox>
      <en-checkbox type="square"  disabled checked label="Square marcado desabilitado"></en-checkbox>
      <en-checkbox type="round"   disabled label="Round desabilitado"></en-checkbox>
      <en-checkbox type="round"   disabled checked label="Round marcado desabilitado"></en-checkbox>
      <en-checkbox type="switch"  disabled label="Switch desabilitado"></en-checkbox>
      <en-checkbox type="switch"  disabled checked label="Switch ativo desabilitado"></en-checkbox>
    </div>
  `,
};

// ─── AllTypes ─────────────────────────────────────────────────────────────────

export const AllTypes: StoryObj = {
  name: 'All Types',
  parameters: {
    docs: {
      description: {
        story: 'As três variantes visuais no estado marcado.',
      },
    },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square" checked label="Square"></en-checkbox>
      <en-checkbox type="round"  checked label="Round"></en-checkbox>
      <en-checkbox type="switch" checked label="Switch"></en-checkbox>
    </div>
  `,
};

// ─── AllStates ────────────────────────────────────────────────────────────────

export const AllStates: StoryObj = {
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story:
          'Grade completa: type (square / round / switch) × estado (default / checked / indeterminate / disabled / checked+disabled).',
      },
    },
  },
  render: () => html`
    <div style="display:grid;grid-template-columns:auto repeat(5,1fr);gap:0.75rem 1.5rem;align-items:center">
      <!-- Cabeçalho -->
      <span></span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Default</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Checked</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Indeterminate</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Disabled</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Checked + Disabled</span>

      <!-- Square -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Square</span>
      <en-checkbox type="square" label="Label"></en-checkbox>
      <en-checkbox type="square" checked label="Label"></en-checkbox>
      <en-checkbox type="square" checked="indeterminate" label="Label"></en-checkbox>
      <en-checkbox type="square" disabled label="Label"></en-checkbox>
      <en-checkbox type="square" checked disabled label="Label"></en-checkbox>

      <!-- Round -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Round</span>
      <en-checkbox type="round" label="Label"></en-checkbox>
      <en-checkbox type="round" checked label="Label"></en-checkbox>
      <en-checkbox type="round" checked="indeterminate" label="Label"></en-checkbox>
      <en-checkbox type="round" disabled label="Label"></en-checkbox>
      <en-checkbox type="round" checked disabled label="Label"></en-checkbox>

      <!-- Switch -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Switch</span>
      <en-checkbox type="switch" label="Label"></en-checkbox>
      <en-checkbox type="switch" checked label="Label"></en-checkbox>
      <span style="font-size:0.75rem;color:#999;font-style:italic">n/a</span>
      <en-checkbox type="switch" disabled label="Label"></en-checkbox>
      <en-checkbox type="switch" checked disabled label="Label"></en-checkbox>
    </div>
  `,
};
