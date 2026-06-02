import figma from '@figma/code-connect';

/**
 * en-loading-bar — barra de progresso linear do eNotas DS.
 *
 * Dois modos de operação:
 *  - Indeterminado: omitir `value` → animação infinita enquanto `active` estiver presente.
 *  - Determinado:   passar `value` (0–100) → largura proporcional ao percentual concluído.
 *
 * A barra fica visualmente oculta quando `active` não está presente (aria-hidden="true").
 */

/**
 * Estado indeterminado — animação infinita, progresso desconhecido.
 * Usar quando a operação não tem duração previsível (ex.: carregando página).
 */
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12089', {
  variant: { position: 'start' },
  example: () => `<en-loading-bar active></en-loading-bar>`,
});

/**
 * Estado determinado — progresso conhecido (value entre 1 e 99).
 * Usar quando a operação tem avanço mensurável (ex.: upload de arquivo).
 */
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12089', {
  variant: { position: '50' },
  example: () => `<en-loading-bar active value="50"></en-loading-bar>`,
});

/**
 * Estado completo — progresso chegou a 100%.
 * Remover `active` (ou deixar value=100) após a animação de conclusão.
 */
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12089', {
  variant: { position: '100' },
  example: () => `<en-loading-bar active value="100"></en-loading-bar>`,
});

/**
 * Estado inativo — barra oculta (aria-hidden="true").
 * Usar como estado inicial antes de iniciar o carregamento.
 */
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12089', {
  variant: { position: 'inactive' },
  example: () => `<en-loading-bar></en-loading-bar>`,
});
