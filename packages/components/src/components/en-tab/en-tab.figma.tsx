import figma from '@figma/code-connect';

// tab simples (290:15130)
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15130', {
  props: {
    status: figma.enum('status', { Active: 'active', Inactive: 'inactive', Hovered: 'hovered' }),
  },
  example: ({ status }) =>
    `<en-tab status="${status ?? 'inactive'}">NFS-e</en-tab>`,
});

// Tab com count e link (290:12524)
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12524', {
  props: {
    active:   figma.enum('state', { actived: true }),
    hasCount: figma.enum('number', { true: true }),
    asLink:   figma.enum('redirect', { true: true }),
  },
  example: ({ active, hasCount, asLink }) =>
    `<en-tab${active ? ' status="active"' : ''}${hasCount ? ' count="12"' : ''}${asLink ? ' href="/notas"' : ''}>NFS-e</en-tab>`,
});
