import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-9286', {
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
