// eNotas DS — Create Missing Button Variants
//
// Cria as 40 variantes faltantes do componente Button:
//   • Primary/Danger  → SM e LG  (default, hovering, inactive)
//   • Primary/Purple  → SM e LG  (default, hovering, inactive)
//   • Outline/Green   → LG       (default, hovering, inactive)
//   • Outline/Purple  → SM e LG  (default, hovering, inactive)
//   • Tab             → SM e LG  (default, hovering, actived)
//   • Link            → MD e LG  (default, hovering)
//   • Primary/Default → inactive SM e LG
//   • Outline/Default → inactive SM e LG
//
// Como usar:
//   1. Abrir o arquivo fonte eNotas DS no Figma
//   2. Navegar até a página "Design System eNotas"
//   3. Plugins > Development > New Plugin → "Run script"
//   4. Colar este arquivo e executar
//
// Seguro para re-executar: pula variantes que já existem.

// ─── Tamanhos: altura e padding horizontal por size ───────────────────────────
const SIZE_PROPS = {
  sm: { height: 32, padX:  8 },
  md: { height: 40, padX: 16 },
  lg: { height: 48, padX: 20 },
};

// ─── Variantes a criar ────────────────────────────────────────────────────────
const TO_CREATE = [
  // Primary / default — inactive faltando em sm e lg
  { variant: 'primary', color: 'default', state: 'inactive', size: 'sm' },
  { variant: 'primary', color: 'default', state: 'inactive', size: 'lg' },

  // Primary / danger — tudo em sm e lg + inactive em md
  { variant: 'primary', color: 'danger', state: 'default',  size: 'sm' },
  { variant: 'primary', color: 'danger', state: 'default',  size: 'lg' },
  { variant: 'primary', color: 'danger', state: 'hovering', size: 'sm' },
  { variant: 'primary', color: 'danger', state: 'hovering', size: 'lg' },
  { variant: 'primary', color: 'danger', state: 'inactive', size: 'sm' },
  { variant: 'primary', color: 'danger', state: 'inactive', size: 'md' },
  { variant: 'primary', color: 'danger', state: 'inactive', size: 'lg' },

  // Primary / purple — tudo em sm e lg + inactive em md
  { variant: 'primary', color: 'purple', state: 'default',  size: 'sm' },
  { variant: 'primary', color: 'purple', state: 'default',  size: 'lg' },
  { variant: 'primary', color: 'purple', state: 'hovering', size: 'sm' },
  { variant: 'primary', color: 'purple', state: 'hovering', size: 'lg' },
  { variant: 'primary', color: 'purple', state: 'inactive', size: 'sm' },
  { variant: 'primary', color: 'purple', state: 'inactive', size: 'md' },
  { variant: 'primary', color: 'purple', state: 'inactive', size: 'lg' },

  // Outline / default — inactive faltando em sm e lg
  { variant: 'outline', color: 'default', state: 'inactive', size: 'sm' },
  { variant: 'outline', color: 'default', state: 'inactive', size: 'lg' },

  // Outline / green — lg + inactive em todos
  { variant: 'outline', color: 'green', state: 'default',  size: 'lg' },
  { variant: 'outline', color: 'green', state: 'hovering', size: 'lg' },
  { variant: 'outline', color: 'green', state: 'inactive', size: 'sm' },
  { variant: 'outline', color: 'green', state: 'inactive', size: 'md' },
  { variant: 'outline', color: 'green', state: 'inactive', size: 'lg' },

  // Outline / purple — tudo em sm e lg + inactive em md
  { variant: 'outline', color: 'purple', state: 'default',  size: 'sm' },
  { variant: 'outline', color: 'purple', state: 'default',  size: 'lg' },
  { variant: 'outline', color: 'purple', state: 'hovering', size: 'sm' },
  { variant: 'outline', color: 'purple', state: 'hovering', size: 'lg' },
  { variant: 'outline', color: 'purple', state: 'inactive', size: 'sm' },
  { variant: 'outline', color: 'purple', state: 'inactive', size: 'md' },
  { variant: 'outline', color: 'purple', state: 'inactive', size: 'lg' },

  // Tab — sm e lg em todos os estados
  { variant: 'tab', color: 'default', state: 'default',  size: 'sm' },
  { variant: 'tab', color: 'default', state: 'default',  size: 'lg' },
  { variant: 'tab', color: 'default', state: 'hovering', size: 'sm' },
  { variant: 'tab', color: 'default', state: 'hovering', size: 'lg' },
  { variant: 'tab', color: 'default', state: 'actived',  size: 'sm' },
  { variant: 'tab', color: 'default', state: 'actived',  size: 'lg' },

  // Link — md e lg
  { variant: 'link', color: 'default', state: 'default',  size: 'md' },
  { variant: 'link', color: 'default', state: 'default',  size: 'lg' },
  { variant: 'link', color: 'default', state: 'hovering', size: 'md' },
  { variant: 'link', color: 'default', state: 'hovering', size: 'lg' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildName(v) {
  return `variant=${v.variant}, state=${v.state}, size=${v.size}, icon=none, text=true, color=${v.color}`;
}

function findRef(buttonSet, v) {
  // Prefer same variant/color/state in a different size; fallback to same variant/color in any state
  const fallbackSizes = v.size === 'sm' ? ['md', 'lg'] : ['md', 'sm'];
  for (const refSize of fallbackSizes) {
    const c = buttonSet.children.find(c => {
      const vp = c.variantProperties;
      return vp &&
        vp.variant === v.variant && vp.color === v.color &&
        vp.state  === v.state   && vp.size  === refSize &&
        vp.text   === 'true'    && vp.icon  === 'none';
    });
    if (c) return c;
  }
  // Last resort: any same variant/color
  return buttonSet.children.find(c => {
    const vp = c.variantProperties;
    return vp && vp.variant === v.variant && vp.color === v.color && vp.text === 'true' && vp.icon === 'none';
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const log = [];
  const page = figma.currentPage;
  const buttonSet = page.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'Button');

  if (!buttonSet) {
    figma.closePlugin('❌ Button component set não encontrado na página atual.\nCertifique-se de estar na página "Design System eNotas".');
    return;
  }
  log.push(`Button set: ${buttonSet.children.length} variantes existentes`);

  // Build set of existing names for idempotency
  const existingNames = new Set(buttonSet.children.map(c => c.name));

  let created = 0, skipped = 0;

  for (const v of TO_CREATE) {
    const targetName = buildName(v);

    if (existingNames.has(targetName)) {
      log.push(`  ⏭ já existe: ${targetName}`);
      skipped++;
      continue;
    }

    const ref = findRef(buttonSet, v);
    if (!ref) {
      log.push(`  ❌ sem referência para: ${targetName}`);
      continue;
    }

    // Clone into button set
    const clone = ref.clone();
    buttonSet.appendChild(clone);

    // Rename to correct variant name
    clone.name = targetName;

    // Apply size-specific dimensions
    const { height, padX } = SIZE_PROPS[v.size];
    clone.paddingLeft  = padX;
    clone.paddingRight = padX;

    // Resize: keep auto-width (HUG), fix height
    clone.layoutSizingVertical = 'FIXED';
    clone.resize(clone.width, height);

    // For 'inactive' state: ensure fills match primary/default/inactive style
    // The clone already copies fills from reference, which is correct.

    existingNames.add(targetName);
    log.push(`  ✅ criado: ${targetName}`);
    created++;
  }

  const summary =
    `Done!\n` +
    `  Criados:   ${created}\n` +
    `  Ignorados: ${skipped}\n` +
    `  Total no set agora: ${buttonSet.children.length}\n\n` +
    log.join('\n');

  figma.closePlugin(summary);
}

run();
