import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { NfStatus, NfType } from './en-nf-status';

const ALL_TYPES: NfType[] = ['nf-e', 'nfs-e', 'nf-e de devolução'];
const ALL_STATUSES: NfStatus[] = [
  'emitida',
  'em processo de emissão',
  'pendente',
  'cancelada',
  'falha ao emitir',
  'falha ao cancelar',
  'nao-emitir',
];

const meta: Meta = {
  title: 'eNotas/EnNfStatus',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**en-nf-status** exibe o tipo e o status de uma nota fiscal de forma compacta,
combinando a sigla do tipo (NF-e, NFS-e, NF-e de devolução) com um badge
colorido que reflete o estado atual da nota.

**Quando usar:**
- Linhas de tabela ou listagem de notas fiscais, ao lado do número/série
- Cards de resumo em dashboards de emissão
- Tooltips e popovers de detalhe rápido

**Não usar:**
- Como substituto de mensagens de erro — use \`en-feedback\` para explicações detalhadas
- Em fluxos de edição onde o status ainda não foi definido — use \`en-badge\` genérico

**Intents por status:**
| Status | Intent |
|---|---|
| emitida | success |
| em processo de emissão | warning |
| pendente | info |
| cancelada | neutral |
| falha ao emitir | danger |
| falha ao cancelar | danger |
| nao-emitir | neutral |
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['nf-e', 'nfs-e', 'nf-e de devolução', 'all'],
      description:
        'Tipo da nota fiscal. `all` omite o rótulo de tipo e exibe apenas o status.',
      table: {
        defaultValue: { summary: 'nf-e' },
      },
    },
    status: {
      control: 'select',
      options: ALL_STATUSES,
      description:
        'Estado atual da nota fiscal. Determina a cor (intent) e o texto do badge de status.',
      table: {
        defaultValue: { summary: 'emitida' },
      },
    },
    hovering: {
      control: 'boolean',
      description:
        'Ativa o visual de hover programaticamente. Útil para testes visuais e estados de foco em listas interativas.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: { type: 'nf-e', status: 'emitida', hovering: false },
};
export default meta;

/** Playground — controles disponíveis para explorar qualquer combinação de type, status e hovering. */
export const Default: StoryObj = {
  name: 'Playground',
  render: ({ type, status, hovering }) =>
    html`<en-nf-status
      type=${type}
      status=${status}
      ?hovering=${hovering}
    ></en-nf-status>`,
};

/**
 * Todos os 7 status disponíveis para o tipo `nf-e`.
 * Use esta story para validar intents e rótulos de forma rápida.
 */
export const AllStatuses: StoryObj = {
  name: 'Todos os status (NF-e)',
  parameters: {
    docs: {
      description: {
        story:
          'Os 7 valores de `status` aplicados ao tipo `nf-e`. Cada status carrega um intent semântico distinto (success, warning, info, neutral, danger).',
      },
    },
  },
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center">
      ${ALL_STATUSES.map(
        s => html`<en-nf-status type="nf-e" status=${s}></en-nf-status>`,
      )}
    </div>
  `,
};

/**
 * Os 3 tipos de nota com status `emitida`.
 * Confirma que o rótulo de tipo aparece corretamente em cada variante.
 * O tipo `all` é omitido aqui pois não exibe rótulo de tipo.
 */
export const AllTypes: StoryObj = {
  name: 'Todos os tipos (emitida)',
  parameters: {
    docs: {
      description: {
        story:
          'Os 3 tipos de nota fiscal com o status `emitida`. O type `all` omite o rótulo de tipo — veja a story **Matrix** para ver o comportamento completo.',
      },
    },
  },
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center">
      ${ALL_TYPES.map(
        t => html`<en-nf-status type=${t} status="emitida"></en-nf-status>`,
      )}
    </div>
  `,
};

/**
 * Matriz completa type × status — todas as combinações em uma única view.
 * Referência visual para QA e revisões de design.
 */
export const AllTypesAndStatuses: StoryObj = {
  name: 'Matrix type × status',
  parameters: {
    docs: {
      description: {
        story:
          'Matriz completa de todas as combinações type × status. Cada linha é um tipo de nota; cada coluna é um status. Use para QA visual e alinhamento com o Figma.',
      },
    },
    layout: 'padded',
  },
  render: () => html`
    <table style="border-collapse:collapse;font-family:var(--en-font-family-sans,sans-serif);font-size:0.75rem">
      <thead>
        <tr>
          <th style="padding:0.5rem 0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600;border-bottom:1px solid var(--en-color-neutral-200,#e5e7eb)">
            type \\ status
          </th>
          ${ALL_STATUSES.map(
            s => html`
              <th style="padding:0.5rem 0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600;border-bottom:1px solid var(--en-color-neutral-200,#e5e7eb);white-space:nowrap">
                ${s}
              </th>
            `,
          )}
        </tr>
      </thead>
      <tbody>
        ${[...ALL_TYPES, 'all' as NfType].map(
          (t, i) => html`
            <tr style="${i % 2 === 0 ? 'background:var(--en-color-neutral-50,#f9fafb)' : ''}">
              <td style="padding:0.5rem 0.75rem;font-weight:600;white-space:nowrap;color:var(--en-color-neutral-700,#374151)">
                ${t}
              </td>
              ${ALL_STATUSES.map(
                s => html`
                  <td style="padding:0.5rem 0.75rem">
                    <en-nf-status type=${t} status=${s}></en-nf-status>
                  </td>
                `,
              )}
            </tr>
          `,
        )}
      </tbody>
    </table>
  `,
};

/**
 * Simulação de uma listagem real de notas fiscais — contexto de uso mais próximo
 * do produto. Demonstra como o componente se comporta em diferentes densidades
 * e junto a outras informações da NF.
 */
export const InContext: StoryObj = {
  name: 'Em contexto (lista de NFs)',
  parameters: {
    docs: {
      description: {
        story:
          'Lista de notas fiscais simulada, mostrando `en-nf-status` ao lado de número, tomador e valor. Replica o padrão de uso em tabelas do produto eNotas.',
      },
    },
    layout: 'padded',
  },
  render: () => {
    const rows: Array<{ num: string; type: NfType; status: NfStatus; tomador: string; valor: string }> = [
      { num: '001.234', type: 'nf-e',              status: 'emitida',                tomador: 'Acme Ltda.',          valor: 'R$ 1.500,00' },
      { num: '001.235', type: 'nfs-e',             status: 'em processo de emissão', tomador: 'Beta Serviços S.A.',  valor: 'R$ 320,00'   },
      { num: '001.236', type: 'nf-e',              status: 'pendente',               tomador: 'Gamma Comércio Eireli', valor: 'R$ 8.750,00' },
      { num: '001.237', type: 'nf-e de devolução', status: 'emitida',                tomador: 'Delta ME',            valor: 'R$ 450,00'   },
      { num: '001.238', type: 'nf-e',              status: 'falha ao emitir',         tomador: 'Épsilon Tech Ltda.',  valor: 'R$ 2.100,00' },
      { num: '001.239', type: 'nfs-e',             status: 'cancelada',              tomador: 'Zeta Consultoria',    valor: 'R$ 5.000,00' },
      { num: '001.240', type: 'nf-e',              status: 'nao-emitir',             tomador: 'Eta Distribuidora',   valor: 'R$ 670,00'   },
      { num: '001.241', type: 'nf-e',              status: 'falha ao cancelar',       tomador: 'Theta Logística',    valor: 'R$ 3.200,00' },
    ];

    return html`
      <table style="width:100%;border-collapse:collapse;font-family:var(--en-font-family-sans,sans-serif);font-size:0.875rem">
        <thead>
          <tr style="border-bottom:2px solid var(--en-color-neutral-200,#e5e7eb)">
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Número</th>
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Status</th>
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Tomador</th>
            <th style="padding:0.75rem;text-align:right;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Valor</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(
            (row, i) => html`
              <tr style="border-bottom:1px solid var(--en-color-neutral-100,#f3f4f6);${i % 2 !== 0 ? 'background:var(--en-color-neutral-50,#f9fafb)' : ''}">
                <td style="padding:0.75rem;color:var(--en-color-neutral-900,#111827);font-weight:500">${row.num}</td>
                <td style="padding:0.75rem">
                  <en-nf-status type=${row.type} status=${row.status}></en-nf-status>
                </td>
                <td style="padding:0.75rem;color:var(--en-color-neutral-700,#374151)">${row.tomador}</td>
                <td style="padding:0.75rem;text-align:right;color:var(--en-color-neutral-700,#374151)">${row.valor}</td>
              </tr>
            `,
          )}
        </tbody>
      </table>
    `;
  },
};
