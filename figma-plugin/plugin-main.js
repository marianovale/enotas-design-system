// eNotas DS Tools — plugin-main.js
// Handles 3 actions via UI buttons: standardize | variables | pages

figma.showUI(__html__, { width: 340, height: 420 });

figma.ui.onmessage = async (msg) => {
  let result = '';
  if (msg.type === 'standardize') result = await runStandardize();
  if (msg.type === 'variables')   result = await runVariables();
  if (msg.type === 'pages')       result = await runReorganizePages();
  figma.ui.postMessage({ result });
};

// ─────────────────────────────────────────────────────────────────────────────
// ACTION 1 — Standardize properties + descriptions
// ─────────────────────────────────────────────────────────────────────────────
async function runStandardize() {
  const UPDATES = {
    '290:3105':  { name: 'Button',       description: 'Botão de ação. variant: primary | secondary | ghost. size: sm | md | lg. color: default | green | danger | purple. Props: disabled, loading.', renames: { type: 'variant' } },
    '290:8176':  { name: 'Spinner',      description: 'Indicador de carregamento animado. Props: size (sm | md | lg), label.', renames: { loading: 'state' } },
    '290:8016':  { name: 'Input',        description: 'Campo de entrada de texto. Props: label, value, placeholder, type, disabled, required, error, hint.', renames: {} },
    '290:8051':  { name: 'Textarea',     description: 'Área de texto multilinha. Props: label, rows, value, disabled, required, error, hint.', renames: {} },
    '290:8082':  { name: 'Select',       description: 'Seletor com opções. Props: label, options (array), value, disabled, required, error, hint.', renames: {} },
    '290:8183':  { name: 'Checkbox',     description: 'Seleção. type: square | round | switch. Props: checked, disabled, label.', renames: { actived: 'active' } },
    '290:7004':  { name: 'Icon',         description: 'Ícone. 110+ ícones disponíveis. Props: name, size (8px | 12px | 16px | 20px | 24px).', renames: {} },
    '290:15130': { name: 'Tab',          description: 'Aba de navegação. Props: status (active | inactive), value, disabled.', renames: {} },
    '290:9286':  { name: 'NF Status',    description: 'Status de nota fiscal. type: nfs-e | nf-e | nf-e de devolução | all. status: emitida | pendente | cancelada | falha ao emitir | falha ao cancelar.', renames: {} },
    '290:15362': { name: 'Input Tag',    description: 'Campo com múltiplas tags. Enter ou vírgula adiciona, Backspace remove. Props: value (array), label, placeholder, disabled.', renames: { component: 'variant' } },
    '290:4460':  { name: 'Card',         description: 'Container card. size: large | small. Slots: header, default, footer.', renames: {} },
    '290:16006': { name: 'Search',       description: 'Campo de busca. Enter dispara, Esc limpa. Props: value, placeholder, disabled.', renames: { variation: 'variant' } },
    '290:15115': { name: 'Filter',       description: 'Filtro com badge. Props: active, count, value, disabled.', renames: { Status: 'state', Variation: 'variant' } },
    '290:16183': { name: 'FAQ',          description: 'Acordeão de perguntas. Props: items (array), openIndex, multiple.', renames: { selected: 'index' } },
    '290:12816': { name: 'Stepper',      description: 'Indicador de etapas. Props: steps (array), currentStep.', renames: { step: 'currentStep' } },
    '290:12619': { name: 'Popover',      description: 'Menu contextual. Fecha ao clicar fora. Props: items (array), placement. Slot: trigger.', renames: { modelo: 'variant', Quantity: 'count' } },
    '290:12797': { name: 'Header',       description: 'Cabeçalho da aplicação. Props: userName, avatarSrc, notificationCount, showSearch.', renames: { concept: 'variant' } },
    '290:7346':  { name: 'Tooltip',      description: 'Dica de contexto. placement: top | bottom | left | right. Props: content, disabled.', renames: { actived: 'active' } },
    '290:9333':  { name: 'Input Number', description: 'Campo numérico com botões +/-. Props: value, min, max, step, label, disabled.', renames: { State: 'state' } },
    '290:4457':  { name: 'Progress',     description: 'Barra de progresso. intent: default | success | warning | danger. Props: value (0-100), label, showLabel.', renames: { progress: 'value' } },
    '290:15388': { name: 'Modal',        description: 'Diálogo modal. ESC fecha. Props: open, heading, size. Slots: header, default, footer.', renames: {} },
    '290:3475':  { name: 'Nav Item',     description: 'Item de navegação lateral. Props: icon, active, disabled, count, href, value.', renames: {} },
    '290:16349': { name: 'Footer',       description: 'Rodapé da aplicação. Props: version, companyName, year.', renames: { variation: 'variant' } },
    '290:17843': { name: 'Tour',         description: 'Tour guiado de onboarding. Props: steps (array), open, currentStep, finishLabel, skipLabel.', renames: { State: 'state' } },
  };

  const ok = [], warn = [];
  for (const [nodeId, update] of Object.entries(UPDATES)) {
    const node = await figma.getNodeByIdAsync(nodeId);
    if (!node) { warn.push(`❌ Não encontrado: ${update.name}`); continue; }
    if (node.type !== 'COMPONENT_SET') { warn.push(`⚠️ Tipo inesperado: ${update.name}`); continue; }
    node.description = update.description;
    ok.push(`📝 ${update.name}: description atualizada`);
    for (const [oldName, newName] of Object.entries(update.renames)) {
      const defs = node.componentPropertyDefinitions || {};
      if (defs[oldName] !== undefined) {
        node.editComponentProperty(oldName, { name: newName });
        ok.push(`🔄 ${update.name}: "${oldName}" → "${newName}"`);
      } else {
        warn.push(`⚠️ ${update.name}: prop "${oldName}" não encontrada`);
      }
    }
  }
  return `✅ ${ok.length} mudanças, ⚠️ ${warn.length} avisos\n\n${[...ok, ...(warn.length ? ['', '--- Avisos ---', ...warn] : [])].join('\n')}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// ACTION 2 — Create variable collections
// ─────────────────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16) / 255,
    g: parseInt(hex.slice(3, 5), 16) / 255,
    b: parseInt(hex.slice(5, 7), 16) / 255,
    a: 1,
  };
}

async function runVariables() {
  const CORE_COLORS = {
    'brand/teal/500': '#22baa0', 'brand/teal/700': '#12795f',
    'brand/purple/500': '#841e67', 'brand/purple/700': '#6d1353',
    'neutral/0': '#ffffff', 'neutral/50': '#f7f7f7', 'neutral/100': '#ebebeb',
    'neutral/200': '#d6d6d6', 'neutral/300': '#b3b3b3', 'neutral/400': '#8f8f8f',
    'neutral/500': '#6b6b6b', 'neutral/600': '#484848', 'neutral/700': '#333333',
    'neutral/800': '#1f1f1f', 'neutral/900': '#0a0a0a',
    'success/100': '#e6f7ec', 'success/500': '#1a8a3c', 'success/700': '#0e5c27',
    'warning/100': '#fff8e1', 'warning/500': '#f59e0b', 'warning/700': '#92600a',
    'danger/100': '#fde8e8', 'danger/500': '#f13838', 'danger/700': '#c01f1f',
    'info/100': '#e0f0ff', 'info/500': '#0077cc', 'info/700': '#004f8a',
  };

  const SEMANTIC_ALIASES = {
    'action/primary/background': 'brand/teal/500',
    'action/primary/background-hover': 'brand/teal/700',
    'action/primary/background-disabled': 'neutral/200',
    'action/primary/foreground': 'neutral/0',
    'action/secondary/border': 'neutral/300',
    'action/secondary/foreground': 'neutral/700',
    'action/secondary/background-hover': 'neutral/50',
    'action/ghost/background-hover': 'neutral/100',
    'action/ghost/foreground': 'neutral/700',
    'action/danger/background': 'danger/500',
    'action/danger/background-hover': 'danger/700',
    'action/danger/foreground': 'neutral/0',
    'action/purple/background': 'brand/purple/500',
    'action/purple/background-hover': 'brand/purple/700',
    'action/purple/foreground': 'neutral/0',
    'surface/page': 'neutral/50',
    'surface/default': 'neutral/0',
    'surface/raised': 'neutral/0',
    'surface/overlay': 'neutral/0',
    'surface/sunken': 'neutral/100',
    'border/default': 'neutral/200',
    'border/strong': 'neutral/400',
    'border/focus': 'brand/teal/500',
    'text/primary': 'neutral/800',
    'text/secondary': 'neutral/500',
    'text/disabled': 'neutral/300',
    'text/inverse': 'neutral/0',
    'text/brand': 'brand/teal/500',
    'feedback/success/background': 'success/100',
    'feedback/success/foreground': 'success/700',
    'feedback/success/icon': 'success/500',
    'feedback/warning/background': 'warning/100',
    'feedback/warning/foreground': 'warning/700',
    'feedback/warning/icon': 'warning/500',
    'feedback/danger/background': 'danger/100',
    'feedback/danger/foreground': 'danger/700',
    'feedback/danger/icon': 'danger/500',
    'feedback/info/background': 'info/100',
    'feedback/info/foreground': 'info/700',
    'feedback/info/icon': 'info/500',
  };

  function getOrCreateCollection(name) {
    const existing = figma.variables.getLocalVariableCollections().find(c => c.name === name);
    if (existing) return { collection: existing, created: false };
    const col = figma.variables.createVariableCollection(name);
    col.renameMode(col.modes[0].modeId, 'Default');
    return { collection: col, created: true };
  }

  function getOrCreateVar(collection, varName) {
    const existing = figma.variables.getLocalVariables()
      .find(v => v.variableCollectionId === collection.id && v.name === varName);
    if (existing) return { variable: existing, created: false };
    return { variable: figma.variables.createVariable(varName, collection, 'COLOR'), created: true };
  }

  const log = [];

  // Core collection
  const { collection: coreCol, created: coreCreated } = getOrCreateCollection('Core / Color');
  log.push(`${coreCreated ? '✅ Criada' : '⏭ Existe'}: "Core / Color"`);
  const modeId = coreCol.modes[0].modeId;
  const coreVarMap = {};

  for (const [name, hex] of Object.entries(CORE_COLORS)) {
    const { variable, created } = getOrCreateVar(coreCol, name);
    variable.setValueForMode(modeId, hexToRgb(hex));
    coreVarMap[name] = variable;
    log.push(`  ${created ? '✅' : '⏭'} ${name}: ${hex}`);
  }

  // Semantic collection
  const { collection: semCol, created: semCreated } = getOrCreateCollection('Semantic');
  log.push(`\n${semCreated ? '✅ Criada' : '⏭ Existe'}: "Semantic"`);
  const semModeId = semCol.modes[0].modeId;

  for (const [aliasName, coreName] of Object.entries(SEMANTIC_ALIASES)) {
    const coreVar = coreVarMap[coreName];
    if (!coreVar) { log.push(`  ❌ Core var não encontrada: ${coreName}`); continue; }
    const { variable, created } = getOrCreateVar(semCol, aliasName);
    variable.setValueForMode(semModeId, figma.variables.createVariableAlias(coreVar));
    log.push(`  ${created ? '✅' : '⏭'} ${aliasName} → ${coreName}`);
  }

  return `Done! ${Object.keys(CORE_COLORS).length} core + ${Object.keys(SEMANTIC_ALIASES).length} semantic\n\n` + log.join('\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// ACTION 3 — Reorganize pages
// ─────────────────────────────────────────────────────────────────────────────
async function runReorganizePages() {
  const PAGE_MAP = {
    'Primitives': ['290:3105','290:8176','290:8016','290:8051','290:8082','290:8183','290:7004','290:15130','290:9286','290:15362'],
    'Composite':  ['290:4460','290:16006','290:15115','290:16183','290:12816','290:12619','290:12797'],
    'Advanced':   ['290:7346','290:9333','290:4457','290:15388','290:3475','290:16349','290:17843'],
  };

  const log = [];

  for (const [pageName, nodeIds] of Object.entries(PAGE_MAP)) {
    // Find or create the page
    let page = figma.root.children.find(p => p.name === pageName && p.type === 'PAGE');
    if (!page) {
      page = figma.createPage();
      page.name = pageName;
      log.push(`✅ Página criada: "${pageName}"`);
    } else {
      log.push(`⏭ Página existe: "${pageName}"`);
    }

    for (const nodeId of nodeIds) {
      const node = await figma.getNodeByIdAsync(nodeId);
      if (!node) { log.push(`  ❌ Não encontrado: ${nodeId}`); continue; }
      if (node.parent && node.parent.type === 'PAGE' && node.parent.name === pageName) {
        log.push(`  ⏭ Já está em "${pageName}": ${node.name}`);
        continue;
      }
      page.appendChild(node);
      log.push(`  ✅ Movido para "${pageName}": ${node.name}`);
    }
  }

  return log.join('\n');
}
