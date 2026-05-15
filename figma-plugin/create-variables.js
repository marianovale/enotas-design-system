// eNotas DS — Create Variable Collections
// Creates five collections in Figma:
//   1. "Core / Color"      — global color primitives (raw hex values)
//   2. "Semantic"          — color aliases pointing to Core / Color
//   3. "Core / Spacing"    — spacing scale in px
//   4. "Core / Radius"     — border-radius scale in px
//   5. "Core / Typography" — font-size, font-weight, line-height (px), font-family (string)
// Run once. Safe to re-run: skips collections/variables that already exist.

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b, a: 1 };
}

// ─── 1. Core / Color ─────────────────────────────────────────────────────────

const CORE_COLORS = {
  'brand/teal/500':    '#22baa0',
  'brand/teal/700':    '#12795f',
  'brand/purple/500':  '#841e67',
  'brand/purple/700':  '#6d1353',
  'neutral/0':         '#ffffff',
  'neutral/50':        '#f7f7f7',
  'neutral/100':       '#ebebeb',
  'neutral/200':       '#d6d6d6',
  'neutral/300':       '#b3b3b3',
  'neutral/400':       '#8f8f8f',
  'neutral/500':       '#6b6b6b',
  'neutral/600':       '#484848',
  'neutral/700':       '#333333',
  'neutral/800':       '#1f1f1f',
  'neutral/900':       '#0a0a0a',
  'success/100':       '#e6f7ec',
  'success/500':       '#1a8a3c',
  'success/700':       '#0e5c27',
  'warning/100':       '#fff8e1',
  'warning/500':       '#f59e0b',
  'warning/700':       '#92600a',
  'danger/100':        '#fde8e8',
  'danger/500':        '#f13838',
  'danger/700':        '#c01f1f',
  'info/100':          '#e0f0ff',
  'info/500':          '#0077cc',
  'info/700':          '#004f8a',
};

// ─── 2. Semantic (color aliases) ─────────────────────────────────────────────

const SEMANTIC_ALIASES = {
  'action/primary/background':           'brand/teal/500',
  'action/primary/background-hover':     'brand/teal/700',
  'action/primary/background-disabled':  'neutral/200',
  'action/primary/foreground':           'neutral/0',
  'action/secondary/border':             'neutral/300',
  'action/secondary/foreground':         'neutral/700',
  'action/secondary/background-hover':   'neutral/50',
  'action/ghost/background-hover':       'neutral/100',
  'action/ghost/foreground':             'neutral/700',
  'action/danger/background':            'danger/500',
  'action/danger/background-hover':      'danger/700',
  'action/danger/foreground':            'neutral/0',
  'action/purple/background':            'brand/purple/500',
  'action/purple/background-hover':      'brand/purple/700',
  'action/purple/foreground':            'neutral/0',
  'surface/page':                        'neutral/50',
  'surface/default':                     'neutral/0',
  'surface/raised':                      'neutral/0',
  'surface/overlay':                     'neutral/0',
  'surface/sunken':                      'neutral/100',
  'border/default':                      'neutral/200',
  'border/strong':                       'neutral/400',
  'border/focus':                        'brand/teal/500',
  'text/primary':                        'neutral/800',
  'text/secondary':                      'neutral/500',
  'text/disabled':                       'neutral/300',
  'text/inverse':                        'neutral/0',
  'text/brand':                          'brand/teal/500',
  'feedback/success/background':         'success/100',
  'feedback/success/foreground':         'success/700',
  'feedback/success/icon':               'success/500',
  'feedback/warning/background':         'warning/100',
  'feedback/warning/foreground':         'warning/700',
  'feedback/warning/icon':               'warning/500',
  'feedback/danger/background':          'danger/100',
  'feedback/danger/foreground':          'danger/700',
  'feedback/danger/icon':                'danger/500',
  'feedback/info/background':            'info/100',
  'feedback/info/foreground':            'info/700',
  'feedback/info/icon':                  'info/500',
};

// ─── 3. Core / Spacing (px) ──────────────────────────────────────────────────
// Source: --en-spacing-* in tokens.css (rem × 16)

const CORE_SPACING = {
  'spacing/0':   0,
  'spacing/1':   4,   // 0.25rem
  'spacing/2':   8,   // 0.5rem
  'spacing/3':   12,  // 0.75rem
  'spacing/4':   16,  // 1rem
  'spacing/5':   20,  // 1.25rem
  'spacing/6':   24,  // 1.5rem
  'spacing/8':   32,  // 2rem
  'spacing/10':  40,  // 2.5rem
  'spacing/12':  48,  // 3rem
  'spacing/16':  64,  // 4rem
};

// ─── 4. Core / Radius (px) ───────────────────────────────────────────────────
// Source: --en-radius-* in tokens.css (rem × 16)

const CORE_RADIUS = {
  'radius/none': 0,
  'radius/sm':   4,     // 0.25rem
  'radius/md':   8,     // 0.5rem
  'radius/lg':   12,    // 0.75rem
  'radius/xl':   16,    // 1rem
  'radius/full': 9999,
};

// ─── 5. Core / Typography ────────────────────────────────────────────────────
// FLOAT: font-size (px), font-weight (numeric), line-height (px)
// STRING: font-family

const CORE_TYPOGRAPHY_FLOAT = {
  // font-size (rem × 16)
  'font-size/xs':   12,  // 0.75rem
  'font-size/sm':   14,  // 0.875rem
  'font-size/md':   16,  // 1rem
  'font-size/lg':   18,  // 1.125rem
  'font-size/xl':   20,  // 1.25rem
  'font-size/2xl':  24,  // 1.5rem
  'font-size/3xl':  30,  // 1.875rem
  'font-size/4xl':  36,  // 2.25rem
  'font-size/5xl':  48,  // 3rem
  'font-size/6xl':  60,  // 3.75rem
  // font-weight
  'font-weight/regular':   400,
  'font-weight/medium':    500,
  'font-weight/semibold':  600,
  'font-weight/bold':      700,
  // line-height (rem × 16)
  'line-height/xs':   16,  // 1rem
  'line-height/sm':   20,  // 1.25rem
  'line-height/md':   24,  // 1.5rem
  'line-height/lg':   28,  // 1.75rem
  'line-height/xl':   28,  // 1.75rem
  'line-height/2xl':  32,  // 2rem
  'line-height/3xl':  36,  // 2.25rem
  'line-height/4xl':  40,  // 2.5rem
  'line-height/5xl':  48,  // 3rem
};

const CORE_TYPOGRAPHY_STRING = {
  'font-family/sans':    "'Hotmart Sans', 'Helvetica Neue', Arial, sans-serif",
  'font-family/display': "'Hotmart Display', Georgia, serif",
  'font-family/mono':    "'JetBrains Mono', 'Courier New', monospace",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function getOrCreateCollection(name) {
  const existing = figma.variables.getLocalVariableCollections()
    .find(c => c.name === name);
  if (existing) return { collection: existing, created: false };
  const collection = figma.variables.createVariableCollection(name);
  collection.renameMode(collection.modes[0].modeId, 'Default');
  return { collection, created: true };
}

function getOrCreateVariable(collection, varName, type) {
  const existing = figma.variables.getLocalVariables()
    .find(v => v.variableCollectionId === collection.id && v.name === varName);
  if (existing) return { variable: existing, created: false };
  const variable = figma.variables.createVariable(varName, collection, type);
  return { variable, created: true };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const log = [];

  // 1. Core / Color
  const { collection: coreCol, created: coreCreated } =
    await getOrCreateCollection('Core / Color');
  log.push(`${coreCreated ? '✅ Created' : '⏭ Exists'}: "Core / Color"`);

  const colorModeId = coreCol.modes[0].modeId;
  const coreVarMap = {};

  for (const [name, hex] of Object.entries(CORE_COLORS)) {
    const { variable, created } = getOrCreateVariable(coreCol, name, 'COLOR');
    variable.setValueForMode(colorModeId, hexToRgb(hex));
    coreVarMap[name] = variable;
    log.push(`  ${created ? '✅' : '⏭'} ${name}`);
  }

  // 2. Semantic
  const { collection: semCol, created: semCreated } =
    await getOrCreateCollection('Semantic');
  log.push(`\n${semCreated ? '✅ Created' : '⏭ Exists'}: "Semantic"`);

  const semModeId = semCol.modes[0].modeId;

  for (const [aliasName, coreName] of Object.entries(SEMANTIC_ALIASES)) {
    const coreVar = coreVarMap[coreName];
    if (!coreVar) {
      log.push(`  ❌ Missing core var: ${coreName} (for ${aliasName})`);
      continue;
    }
    const { variable, created } = getOrCreateVariable(semCol, aliasName, 'COLOR');
    variable.setValueForMode(semModeId, figma.variables.createVariableAlias(coreVar));
    log.push(`  ${created ? '✅' : '⏭'} ${aliasName} → ${coreName}`);
  }

  // 3. Core / Spacing
  const { collection: spaceCol, created: spaceCreated } =
    await getOrCreateCollection('Core / Spacing');
  log.push(`\n${spaceCreated ? '✅ Created' : '⏭ Exists'}: "Core / Spacing"`);

  const spaceModeId = spaceCol.modes[0].modeId;

  for (const [name, value] of Object.entries(CORE_SPACING)) {
    const { variable, created } = getOrCreateVariable(spaceCol, name, 'FLOAT');
    variable.setValueForMode(spaceModeId, value);
    log.push(`  ${created ? '✅' : '⏭'} ${name}: ${value}px`);
  }

  // 4. Core / Radius
  const { collection: radCol, created: radCreated } =
    await getOrCreateCollection('Core / Radius');
  log.push(`\n${radCreated ? '✅ Created' : '⏭ Exists'}: "Core / Radius"`);

  const radModeId = radCol.modes[0].modeId;

  for (const [name, value] of Object.entries(CORE_RADIUS)) {
    const { variable, created } = getOrCreateVariable(radCol, name, 'FLOAT');
    variable.setValueForMode(radModeId, value);
    log.push(`  ${created ? '✅' : '⏭'} ${name}: ${value}px`);
  }

  // 5. Core / Typography
  const { collection: typoCol, created: typoCreated } =
    await getOrCreateCollection('Core / Typography');
  log.push(`\n${typoCreated ? '✅ Created' : '⏭ Exists'}: "Core / Typography"`);

  const typoModeId = typoCol.modes[0].modeId;

  for (const [name, value] of Object.entries(CORE_TYPOGRAPHY_FLOAT)) {
    const { variable, created } = getOrCreateVariable(typoCol, name, 'FLOAT');
    variable.setValueForMode(typoModeId, value);
    log.push(`  ${created ? '✅' : '⏭'} ${name}: ${value}`);
  }

  for (const [name, value] of Object.entries(CORE_TYPOGRAPHY_STRING)) {
    const { variable, created } = getOrCreateVariable(typoCol, name, 'STRING');
    variable.setValueForMode(typoModeId, value);
    log.push(`  ${created ? '✅' : '⏭'} ${name}`);
  }

  const totals = [
    Object.keys(CORE_COLORS).length,
    Object.keys(SEMANTIC_ALIASES).length,
    Object.keys(CORE_SPACING).length,
    Object.keys(CORE_RADIUS).length,
    Object.keys(CORE_TYPOGRAPHY_FLOAT).length + Object.keys(CORE_TYPOGRAPHY_STRING).length,
  ];
  const summary =
    `Done!\n` +
    `  Core / Color:      ${totals[0]} variables\n` +
    `  Semantic:          ${totals[1]} variables\n` +
    `  Core / Spacing:    ${totals[2]} variables\n` +
    `  Core / Radius:     ${totals[3]} variables\n` +
    `  Core / Typography: ${totals[4]} variables\n` +
    `  Total: ${totals.reduce((a, b) => a + b, 0)} variables\n\n` +
    log.join('\n');

  figma.closePlugin(summary);
}

run();
