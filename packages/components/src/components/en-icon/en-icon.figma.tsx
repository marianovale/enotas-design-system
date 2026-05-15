import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-7004', {
  props: {
    name: figma.enum('name', {
      'curve-arrow': 'curve-arrow', 'alert': 'alert', 'arrow-shuffle': 'arrow-shuffle',
      'arrow-right': 'arrow-right', 'arrow-down': 'arrow-down', 'arrow-up': 'arrow-up',
      'chart': 'chart', 'company': 'company', 'credit-cards': 'credit-cards',
      'dashboard': 'dashboard', 'exit-door': 'exit-door', 'help': 'help',
      'nfe': 'nfe', 'nfs': 'nfs', 'nfe-devolution': 'nfe-devolution',
      'nfe-canceled': 'nfe-canceled', 'nfe-done': 'nfe-done', 'nfe-xml': 'nfe-xml',
      'invoice': 'invoice', 'invoice-checkmark': 'invoice-checkmark',
      'done-check': 'done-check', 'done-check-circle': 'done-check-circle',
      'alert-circle': 'alert-circle', 'trash': 'trash', 'pen': 'pen',
      'search': 'search', 'filter-sort': 'filter-sort', 'setting': 'setting',
      'user': 'user', 'users': 'users', 'download': 'download', 'print': 'print',
    }),
    size: figma.enum('size', {
      '8px': '8px', '12px': '12px', '16px': '16px', '16': '16px',
      '20px': '20px', '24px': '24px',
    }),
  },
  example: ({ name, size }) =>
    `<en-icon name="${name}" size="${size}"></en-icon>`,
});
