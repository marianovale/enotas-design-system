import figma from '@figma/code-connect';

// Figma prop: variant (1-6) — representa diferentes conteúdos de modal, não prop de API
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15388', {
  props: {},
  example: () =>
    `<en-modal heading="Confirmação" open closable>\n  Tem certeza que deseja cancelar esta nota?\n  <div slot="footer">\n    <en-button variant="secondary">Cancelar</en-button>\n    <en-button variant="negative">Confirmar</en-button>\n  </div>\n</en-modal>`,
});
