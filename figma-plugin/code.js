// eNotas DS — Standardize Component Properties
// Renomeia props inconsistentes e preenche descriptions em todos os 25 component sets.
// Roda uma vez e fecha automaticamente.

const UPDATES = {
  '290:3105': {
    name: 'Button',
    description: 'Botão de ação. variant: primary | secondary | ghost. size: sm | md | lg. color: default | green | danger | purple. Props: disabled, loading.',
    renames: { type: 'variant' },
  },
  '290:8176': {
    name: 'Spinner',
    description: 'Indicador de carregamento animado. Props: size (sm | md | lg), label.',
    renames: { loading: 'state' },
  },
  '290:8016': {
    name: 'Input',
    description: 'Campo de entrada de texto. Props: label, value, placeholder, type, disabled, required, error, hint.',
    renames: {},
  },
  '290:8051': {
    name: 'Textarea',
    description: 'Área de texto multilinha. Props: label, rows, value, disabled, required, error, hint.',
    renames: {},
  },
  '290:8082': {
    name: 'Select',
    description: 'Seletor com opções. Props: label, options (array), value, disabled, required, error, hint.',
    renames: {},
  },
  '290:8183': {
    name: 'Checkbox',
    description: 'Seleção. type: square | round | switch. Props: checked, disabled, label.',
    renames: { actived: 'active' },
  },
  '290:7004': {
    name: 'Icon',
    description: 'Ícone. 110+ ícones disponíveis. Props: name, size (8px | 12px | 16px | 20px | 24px).',
    renames: {},
  },
  '290:15130': {
    name: 'Tab',
    description: 'Aba de navegação. Props: status (active | inactive), value, disabled.',
    renames: {},
  },
  '290:9286': {
    name: 'NF Status',
    description: 'Status de nota fiscal. type: nfs-e | nf-e | nf-e de devolução | all. status: emitida | pendente | cancelada | falha ao emitir | falha ao cancelar | em processo de emissão.',
    renames: {},
  },
  '290:15362': {
    name: 'Input Tag',
    description: 'Campo com múltiplas tags. Enter ou vírgula adiciona, Backspace remove a última. Props: value (array), label, placeholder, disabled.',
    renames: { component: 'variant' },
  },
  '290:4460': {
    name: 'Card',
    description: 'Container card. size: large | small. Props: bordered, clickable. Slots: header, default, footer.',
    renames: {},
  },
  '290:16006': {
    name: 'Search',
    description: 'Campo de busca. Enter dispara busca, Esc limpa. Props: value, placeholder, disabled.',
    renames: { variation: 'variant' },
  },
  '290:15115': {
    name: 'Filter',
    description: 'Filtro com badge de contagem. variant: 1 (sem count) | 2 (com count). Props: active, count, value, disabled.',
    renames: { Status: 'state', Variation: 'variant' },
  },
  '290:16183': {
    name: 'FAQ',
    description: 'Acordeão de perguntas frequentes com animação CSS. Props: items (array), openIndex, multiple.',
    renames: { selected: 'index' },
  },
  '290:12816': {
    name: 'Stepper',
    description: 'Indicador de progresso em etapas. Props: steps (array), currentStep.',
    renames: { step: 'currentStep' },
  },
  '290:12619': {
    name: 'Popover',
    description: 'Menu contextual flutuante. Fecha ao clicar fora, navegação por teclado. Props: items (array), placement. Slot: trigger.',
    renames: { modelo: 'variant', Quantity: 'count' },
  },
  '290:12797': {
    name: 'Header',
    description: 'Cabeçalho da aplicação eNotas. Props: userName, avatarSrc, notificationCount, showSearch.',
    renames: { concept: 'variant' },
  },
  '290:7346': {
    name: 'Tooltip',
    description: 'Dica de contexto ao hover/focus. placement: top | bottom | left | right. Props: content, disabled.',
    renames: { actived: 'active' },
  },
  '290:9333': {
    name: 'Input Number',
    description: 'Campo numérico com botões +/-. Props: value, min, max, step, label, disabled.',
    renames: { State: 'state' },
  },
  '290:4457': {
    name: 'Progress',
    description: 'Barra de progresso. intent: default | success | warning | danger. Props: value (0-100), max, label, showLabel.',
    renames: { progress: 'value' },
  },
  '290:15388': {
    name: 'Modal',
    description: 'Diálogo modal com backdrop. ESC fecha, scroll do body bloqueado. Props: open, heading, size. Slots: header, default, footer.',
    renames: {},
  },
  '290:3475': {
    name: 'Nav Item',
    description: 'Item de navegação lateral. Renderiza como <button> ou <a> (com href). Props: icon, active, disabled, count, href, value.',
    renames: {},
  },
  '290:16349': {
    name: 'Footer',
    description: 'Rodapé da aplicação. Props: version, companyName, year.',
    renames: { variation: 'variant' },
  },
  '290:17843': {
    name: 'Tour',
    description: 'Tour guiado de onboarding com animação de dots. Props: steps (array), open, currentStep, finishLabel, skipLabel.',
    renames: { State: 'state' },
  },
};

async function run() {
  const ok = [];
  const warn = [];

  for (const [nodeId, update] of Object.entries(UPDATES)) {
    const node = await figma.getNodeByIdAsync(nodeId);

    if (!node) {
      warn.push(`❌ Não encontrado: ${update.name} (${nodeId})`);
      continue;
    }

    if (node.type !== 'COMPONENT_SET') {
      warn.push(`⚠️  Tipo inesperado: ${update.name} → ${node.type}`);
      continue;
    }

    // Description
    node.description = update.description;
    ok.push(`📝 ${update.name}: description atualizada`);

    // Rename properties
    for (const [oldName, newName] of Object.entries(update.renames)) {
      const defs = node.componentPropertyDefinitions || {};
      if (defs[oldName] !== undefined) {
        node.editComponentProperty(oldName, { name: newName });
        ok.push(`🔄 ${update.name}: "${oldName}" → "${newName}"`);
      } else {
        warn.push(`⚠️  ${update.name}: prop "${oldName}" não existe (já renomeada?)`);
      }
    }
  }

  const summary = [
    `✅ ${ok.length} mudanças aplicadas, ⚠️ ${warn.length} avisos`,
    '',
    ...ok,
    ...(warn.length ? ['', '--- Avisos ---', ...warn] : []),
  ].join('\n');

  figma.closePlugin(summary);
}

run();
