import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/EnSwitch',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Switch toggle para ativar/desativar uma configuração com efeito imediato. ' +
          'Use `<en-switch>` quando a ação tem efeito imediato (ex: ligar emissão automática). ' +
          'Prefira `<en-checkbox>` quando a seleção faz parte de um formulário com botão de confirmação.',
      },
    },
  },
  argTypes: {
    label:    { control: 'text',    description: 'Label visível ao lado do switch' },
    checked:  { control: 'boolean', description: 'Estado ligado/desligado' },
    disabled: { control: 'boolean', description: 'Desabilita a interação' },
    value:    { control: 'text',    description: 'Valor submetido quando checked (formulários)' },
  },
  args: {
    label:    'Emissão automática',
    checked:  false,
    disabled: false,
    value:    'on',
  },
};
export default meta;

type Story = StoryObj<{ label: string; checked: boolean; disabled: boolean; value: string }>;

export const Default: Story = {
  render: ({ label, checked, disabled }) => html`
    <en-switch
      label=${label}
      ?checked=${checked}
      ?disabled=${disabled}
    ></en-switch>
  `,
};

export const Checked: Story = {
  name: 'Ligado (checked)',
  args: { label: 'Modo escuro', checked: true },
  render: ({ label, checked }) => html`
    <en-switch label=${label} ?checked=${checked}></en-switch>
  `,
};

export const Disabled: Story = {
  name: 'Desabilitado',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;padding:16px">
      <en-switch label="Desabilitado (off)" disabled></en-switch>
      <en-switch label="Desabilitado (on)" disabled checked></en-switch>
    </div>
  `,
};

export const WithoutLabel: Story = {
  name: 'Sem label',
  render: () => html`
    <div style="display:flex;gap:16px;padding:16px;align-items:center">
      <en-switch></en-switch>
      <en-switch checked></en-switch>
    </div>
  `,
};

export const AllStates: Story = {
  name: 'Todos os estados',
  parameters: {
    docs: {
      description: {
        story: 'Grid 2×3 mostrando as combinações de off/on com sem label, com label e disabled.',
      },
    },
  },
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:16px;font-family:sans-serif;font-size:12px;color:#6b7280;text-align:center">
      <div>
        <div style="margin-bottom:8px;font-weight:600">Sem label</div>
        <en-switch></en-switch>
      </div>
      <div>
        <div style="margin-bottom:8px;font-weight:600">Com label</div>
        <en-switch label="Label"></en-switch>
      </div>
      <div>
        <div style="margin-bottom:8px;font-weight:600">Disabled</div>
        <en-switch label="Label" disabled></en-switch>
      </div>
      <div>
        <en-switch checked></en-switch>
        <div style="margin-top:8px">Sem label (on)</div>
      </div>
      <div>
        <en-switch checked label="Label"></en-switch>
        <div style="margin-top:8px">Com label (on)</div>
      </div>
      <div>
        <en-switch checked disabled label="Label"></en-switch>
        <div style="margin-top:8px">Disabled (on)</div>
      </div>
    </div>
  `,
};

export const InContext: Story = {
  name: 'Em contexto — configurações de emissão',
  render: () => html`
    <div style="font-family:sans-serif;font-size:14px;max-width:480px;padding:16px">
      <div style="font-weight:600;font-size:16px;margin-bottom:16px">Configurações de emissão</div>
      <div style="display:flex;flex-direction:column;gap:0;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        ${[
          { label: 'Emissão automática',          description: 'Emite a NFS-e imediatamente após o pagamento',       checked: true  },
          { label: 'Enviar por e-mail',            description: 'Envia a nota para o tomador automaticamente',         checked: true  },
          { label: 'Cancelamento automático',     description: 'Cancela a nota ao estornar o pagamento',              checked: false },
          { label: 'Notificações de falha',        description: 'Alerta por e-mail quando uma emissão falhar',         checked: true  },
          { label: 'Modo sandbox',                 description: 'Emite em ambiente de testes (não gera nota fiscal real)', checked: false },
        ].map(({ label, description, checked }, i) => html`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;${i > 0 ? 'border-top:1px solid #e5e7eb' : ''}">
            <div>
              <div style="font-weight:500">${label}</div>
              <div style="color:#6b7280;font-size:12px;margin-top:2px">${description}</div>
            </div>
            <en-switch ?checked=${checked}></en-switch>
          </div>
        `)}
      </div>
    </div>
  `,
};

export const EventHandling: Story = {
  name: 'Captura de eventos (enChange)',
  render: () => {
    const onSwitch = (label: string) => (e: Event) => {
      const checked = (e as CustomEvent<boolean>).detail;
      console.log(`[enChange] ${label}:`, checked);
    };
    return html`
      <div style="font-family:sans-serif;font-size:14px;padding:16px;display:flex;flex-direction:column;gap:12px">
        <p style="margin:0;color:#6b7280">Abra o console para ver os eventos <code>enChange</code>.</p>
        <en-switch
          label="Emissão automática"
          @enChange=${onSwitch('Emissão automática')}
        ></en-switch>
        <en-switch
          label="Enviar por e-mail"
          checked
          @enChange=${onSwitch('Enviar por e-mail')}
        ></en-switch>
      </div>
    `;
  },
};
