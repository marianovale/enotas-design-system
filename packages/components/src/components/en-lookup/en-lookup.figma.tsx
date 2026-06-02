import figma from '@figma/code-connect';

/**
 * en-lookup — Campo de busca com autocomplete
 *
 * Equivalente Cosmos: Combobox
 * Tag: <en-lookup>
 * Docs: packages/components/src/components/en-lookup/readme.md
 *
 * Props disponíveis:
 *   label        — rótulo acima do campo
 *   placeholder  — hint interno (default: "Buscar...")
 *   value        — valor selecionado (LookupOption | LookupOption[])
 *   options      — array de opções { label, value, disabled? }
 *   disabled     — bloqueia interação
 *   error        — mensagem de erro abaixo do campo
 *   hint         — texto auxiliar (sem erro)
 *   loading      — exibe spinner, bloqueia dropdown
 *   multiple     — permite múltiplas seleções (chips)
 *
 * Eventos:
 *   enSearch(query: string)                              — dispara ao digitar
 *   enLookupChange(value: LookupOption | LookupOption[]) — ao selecionar opção
 *   enLookupClear()                                      — ao limpar seleção
 */

// Component set — mapeamento principal (todos os estados via prop `state`)
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2396-45835',
  {
    props: {
      disabled: figma.enum('state', { disabled: true }),
      loading:  figma.enum('state', { loading: true }),
      hasError: figma.enum('state', { error: true }),
      isFilled: figma.enum('state', { filled: true }),
    },
    example: ({ disabled, loading, hasError, isFilled }) => {
      const errorAttr   = hasError  ? ` error="Campo obrigatório"` : '';
      const loadingAttr = loading   ? ` loading` : '';
      const disabledAttr = disabled ? ` disabled` : '';
      const valueAttr   = isFilled && !hasError && !loading && !disabled
        ? `\n  .value=${{ label: 'Hotmart Technologies', value: 'hotmart-tech' }}`
        : '';
      return `<en-lookup\n  label="Tomador"\n  placeholder="Buscar..."${valueAttr}${errorAttr}${loadingAttr}${disabledAttr}\n  .options=\${options}\n></en-lookup>`;
    },
  },
);

// Variante: state=default — campo vazio aguardando interação
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2396-44497',
  {
    example: () =>
      `<en-lookup\n  label="Tomador"\n  placeholder="Buscar..."\n  .options=\${options}\n></en-lookup>`,
  },
);

// Variante: state=focus — digitando, dropdown aberto com resultados filtrados
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2396-44503',
  {
    example: () =>
      `<!-- O estado focus é controlado pelo browser ao focar o campo -->\n<en-lookup\n  label="Tomador"\n  placeholder="Buscar..."\n  .options=\${options}\n></en-lookup>`,
  },
);

// Variante: state=filled — valor selecionado visível no campo
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2396-44515',
  {
    example: () =>
      `<en-lookup\n  label="Tomador"\n  .value=${{ label: 'Hotmart Technologies', value: 'hotmart-tech' }}\n  .options=\${options}\n></en-lookup>`,
  },
);

// Variante: state=disabled — campo bloqueado, não interativo
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2396-44521',
  {
    example: () =>
      `<en-lookup label="Tomador" disabled .options=\${options}></en-lookup>`,
  },
);

// Variante: state=error — validação falhou, mensagem exibida abaixo
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2396-44527',
  {
    example: () =>
      `<en-lookup\n  label="Tomador"\n  error="Campo obrigatório"\n  .options=\${options}\n></en-lookup>`,
  },
);

// Variante: state=loading — aguardando resultados da API
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2396-44534',
  {
    example: () =>
      `<en-lookup label="Tomador" loading .options=\${[]}></en-lookup>`,
  },
);
