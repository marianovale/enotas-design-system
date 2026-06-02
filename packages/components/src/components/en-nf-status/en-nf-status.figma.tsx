import figma from '@figma/code-connect';

const NODE_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-9286';

/**
 * Connect genérico — cobre todas as combinações type × status.
 * Usado pelo Figma Dev Mode para exibir o snippet base quando nenhum
 * connect específico por status estiver selecionado.
 */
figma.connect('<en-nf-status>', NODE_URL, {
  props: {
    type: figma.enum('type', {
      'nfs-e': 'nfs-e',
      'nf-e': 'nf-e',
      'nf-e de devolução': 'nf-e de devolução',
      'all': 'all',
    }),
    status: figma.enum('status', {
      'emitida': 'emitida',
      'em processo de emissão': 'em processo de emissão',
      'pendente': 'pendente',
      'cancelada': 'cancelada',
      'falha ao cancelar': 'falha ao cancelar',
      'falha ao emitir': 'falha ao emitir',
      'nao-emitir': 'nao-emitir',
    }),
    hovering: figma.enum('state', { hovering: true }),
  },
  example: ({ type, status, hovering }) =>
    `<en-nf-status type="${type}" status="${status}"${hovering ? ' hovering' : ''}></en-nf-status>`,
});

/**
 * Status: emitida — uso principal; indica nota fiscal processada com sucesso.
 * Intent: success (verde). Aparece na listagem depois da emissão concluída.
 */
figma.connect('<en-nf-status>', NODE_URL, {
  variant: { status: 'emitida' },
  props: {
    type: figma.enum('type', {
      'nfs-e': 'nfs-e',
      'nf-e': 'nf-e',
      'nf-e de devolução': 'nf-e de devolução',
      'all': 'all',
    }),
  },
  example: ({ type }) =>
    `<en-nf-status type="${type}" status="emitida"></en-nf-status>`,
});

/**
 * Status: em processo de emissão — loading state; emissão foi disparada
 * mas ainda não há confirmação da SEFAZ/prefeitura. Intent: warning (amarelo).
 * Exibir com feedback de progresso na UI — não interagível pelo usuário.
 */
figma.connect('<en-nf-status>', NODE_URL, {
  variant: { status: 'em processo de emissão' },
  props: {
    type: figma.enum('type', {
      'nfs-e': 'nfs-e',
      'nf-e': 'nf-e',
      'nf-e de devolução': 'nf-e de devolução',
      'all': 'all',
    }),
  },
  example: ({ type }) =>
    `<en-nf-status type="${type}" status="em processo de emissão"></en-nf-status>`,
});

/**
 * Status: pendente — a nota ainda não foi enviada para emissão; aguarda
 * ação do usuário ou dependência externa. Intent: info (azul).
 */
figma.connect('<en-nf-status>', NODE_URL, {
  variant: { status: 'pendente' },
  props: {
    type: figma.enum('type', {
      'nfs-e': 'nfs-e',
      'nf-e': 'nf-e',
      'nf-e de devolução': 'nf-e de devolução',
      'all': 'all',
    }),
  },
  example: ({ type }) =>
    `<en-nf-status type="${type}" status="pendente"></en-nf-status>`,
});

/**
 * Status: cancelada — nota foi cancelada com sucesso. Intent: neutral (cinza).
 * Estado terminal positivo de cancelamento.
 */
figma.connect('<en-nf-status>', NODE_URL, {
  variant: { status: 'cancelada' },
  props: {
    type: figma.enum('type', {
      'nfs-e': 'nfs-e',
      'nf-e': 'nf-e',
      'nf-e de devolução': 'nf-e de devolução',
      'all': 'all',
    }),
  },
  example: ({ type }) =>
    `<en-nf-status type="${type}" status="cancelada"></en-nf-status>`,
});

/**
 * Status: falha ao emitir — erro durante o processo de emissão; exige
 * atenção do usuário para retentar ou corrigir dados. Intent: danger (vermelho).
 */
figma.connect('<en-nf-status>', NODE_URL, {
  variant: { status: 'falha ao emitir' },
  props: {
    type: figma.enum('type', {
      'nfs-e': 'nfs-e',
      'nf-e': 'nf-e',
      'nf-e de devolução': 'nf-e de devolução',
      'all': 'all',
    }),
  },
  example: ({ type }) =>
    `<en-nf-status type="${type}" status="falha ao emitir"></en-nf-status>`,
});

/**
 * Status: falha ao cancelar — tentativa de cancelamento falhou; a nota
 * ainda está ativa. Intent: danger (vermelho). Requer ação corretiva.
 */
figma.connect('<en-nf-status>', NODE_URL, {
  variant: { status: 'falha ao cancelar' },
  props: {
    type: figma.enum('type', {
      'nfs-e': 'nfs-e',
      'nf-e': 'nf-e',
      'nf-e de devolução': 'nf-e de devolução',
      'all': 'all',
    }),
  },
  example: ({ type }) =>
    `<en-nf-status type="${type}" status="falha ao cancelar"></en-nf-status>`,
});

/**
 * Status: nao-emitir — opt-out explícito; o usuário indicou que esta
 * transação não deve gerar nota fiscal. Intent: neutral (cinza).
 * Diferente de "cancelada": nunca chegou a ser emitida.
 */
figma.connect('<en-nf-status>', NODE_URL, {
  variant: { status: 'nao-emitir' },
  props: {
    type: figma.enum('type', {
      'nfs-e': 'nfs-e',
      'nf-e': 'nf-e',
      'nf-e de devolução': 'nf-e de devolução',
      'all': 'all',
    }),
  },
  example: ({ type }) =>
    `<en-nf-status type="${type}" status="nao-emitir"></en-nf-status>`,
});
