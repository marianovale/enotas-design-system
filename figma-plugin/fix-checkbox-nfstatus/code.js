// eNotas DS — Fix Checkbox & NfStatus Documentation Pages
// Rebuilds both doc frames on the Cover page with correct variant properties.
//
// Checkbox properties:  active (false/true), type (switch/round/square), label (true/false)
// NfStatus properties:  type (nfs-e/nf-e/nf-e de devolução/all), status (...), state (default/hovering)

// ─── Colors ──────────────────────────────────────────────────────────────────
const C = {
  white:      { r:1,    g:1,    b:1    },
  gray50:     { r:.973, g:.976, b:.980 },
  gray100:    { r:.937, g:.941, b:.949 },
  gray200:    { r:.878, g:.886, b:.898 },
  gray400:    { r:.576, g:.604, b:.643 },
  gray700:    { r:.216, g:.255, b:.314 },
  gray900:    { r:.067, g:.094, b:.133 },
  teal500:    { r:.133, g:.729, b:.627 },
  tealLight:  { r:.882, g:.965, b:.949 },
  red500:     { r:.945, g:.220, b:.220 },
  redLight:   { r:.997, g:.900, b:.900 },
};

function rgb(c, a) {
  return a !== undefined
    ? { type: 'SOLID', color: c, opacity: a }
    : { type: 'SOLID', color: c };
}

// ─── Text helpers ─────────────────────────────────────────────────────────────
function addText(parent, content, opts = {}) {
  const t = figma.createText();
  t.fontName = { family: 'Inter', style: opts.style || 'Regular' };
  t.characters = content;
  t.fontSize = opts.size || 12;
  t.fills = [rgb(opts.color || C.gray700)];
  if (opts.lineHeight) t.lineHeight = { unit: 'PIXELS', value: opts.lineHeight };
  if (opts.width) {
    t.textAutoResize = 'HEIGHT';
    t.resize(opts.width, t.height);
  }
  parent.appendChild(t);
  return t;
}

// ─── Frame helpers ────────────────────────────────────────────────────────────
function frame(opts = {}) {
  const f = figma.createFrame();
  f.name = opts.name || 'Frame';
  if (opts.fills !== undefined) f.fills = opts.fills;
  if (opts.cornerRadius !== undefined) f.cornerRadius = opts.cornerRadius;
  if (opts.stroke) { f.strokes = [rgb(opts.stroke)]; f.strokeWeight = opts.strokeWeight || 1; }
  if (opts.auto) {
    f.layoutMode = opts.auto;
    f.primaryAxisSizingMode = opts.primaryAxisSizing || 'AUTO';
    f.counterAxisSizingMode = opts.counterAxisSizing || 'AUTO';
    if (opts.gap !== undefined) f.itemSpacing = opts.gap;
    if (opts.padX !== undefined) { f.paddingLeft = opts.padX; f.paddingRight = opts.padX; }
    if (opts.padY !== undefined) { f.paddingTop = opts.padY; f.paddingBottom = opts.padY; }
    if (opts.padTop !== undefined) f.paddingTop = opts.padTop;
    if (opts.padBottom !== undefined) f.paddingBottom = opts.padBottom;
    if (opts.padLeft !== undefined) f.paddingLeft = opts.padLeft;
    if (opts.padRight !== undefined) f.paddingRight = opts.padRight;
    if (opts.align) f.counterAxisAlignItems = opts.align;
    if (opts.justify) f.primaryAxisAlignItems = opts.justify;
  }
  if (opts.w !== undefined && opts.h !== undefined) f.resize(opts.w, opts.h);
  return f;
}

function divider(parent, w) {
  const d = figma.createLine();
  d.resize(w, 0);
  d.strokes = [rgb(C.gray200)];
  d.strokeWeight = 1;
  parent.appendChild(d);
  return d;
}

// ─── Find variant by exact properties ────────────────────────────────────────
function findVariant(set, props) {
  return set.children.find(c => {
    if (!c.variantProperties) return false;
    return Object.entries(props).every(([k, v]) => c.variantProperties[k] === v);
  }) || null;
}

// ─── Breadcrumb + Title header ────────────────────────────────────────────────
function buildHeader(parent, name, accentColor, w) {
  const header = frame({ name: 'Header', auto: 'VERTICAL', gap: 8, fills: [] });
  header.resize(w, 10);

  // Breadcrumb
  const bc = frame({ name: 'Breadcrumb', auto: 'HORIZONTAL', gap: 4, fills: [], align: 'CENTER' });
  addText(bc, 'Design System', { size: 11, color: C.gray400 });
  addText(bc, '/', { size: 11, color: C.gray400 });
  addText(bc, 'Components', { size: 11, color: C.gray400 });
  addText(bc, '/', { size: 11, color: C.gray400 });
  addText(bc, name, { size: 11, color: C.gray400 });
  header.appendChild(bc);

  // Title row
  const titleRow = frame({ name: 'TitleRow', auto: 'HORIZONTAL', gap: 12, fills: [], align: 'CENTER' });
  const titleText = addText(titleRow, name, { style: 'Bold', size: 32, color: C.gray900 });

  // Chip
  const chip = frame({ name: 'Chip', auto: 'HORIZONTAL', padX: 10, padY: 4, gap: 4,
    fills: [rgb(accentColor === 'teal' ? C.tealLight : C.tealLight)],
    cornerRadius: 100, align: 'CENTER' });
  const chipDot = figma.createEllipse();
  chipDot.resize(6, 6);
  chipDot.fills = [rgb(C.teal500)];
  chip.appendChild(chipDot);
  addText(chip, 'Component', { size: 11, style: 'Medium', color: C.teal500 });
  titleRow.appendChild(chip);

  header.appendChild(titleRow);
  parent.appendChild(header);
  return header;
}

// ─── Doc panel section ────────────────────────────────────────────────────────
function buildSection(parent, title, lines, type = 'normal') {
  const sec = frame({ name: title, auto: 'VERTICAL', gap: 6, fills: [] });

  addText(sec, title, { style: 'Semi Bold', size: 13, color: C.gray900 });

  for (const line of lines) {
    if (type === 'dont') {
      const row = frame({ name: 'DontRow', auto: 'HORIZONTAL', gap: 8, fills: [], align: 'MIN' });
      const icon = addText(row, '✕', { size: 11, color: C.red500 });
      addText(row, line, { size: 12, color: C.red500, width: 340 });
      sec.appendChild(row);
    } else if (type === 'do') {
      const row = frame({ name: 'DoRow', auto: 'HORIZONTAL', gap: 8, fills: [], align: 'MIN' });
      addText(row, '✓', { size: 11, color: C.teal500 });
      addText(row, line, { size: 12, color: C.teal500, width: 340 });
      sec.appendChild(row);
    } else {
      addText(sec, line, { size: 12, color: C.gray700, width: 368, lineHeight: 18 });
    }
  }
  parent.appendChild(sec);
  return sec;
}

// ─── Build doc panel (right side) ────────────────────────────────────────────
function buildDocPanel(sections) {
  const panel = frame({ name: 'DocPanel', auto: 'VERTICAL', gap: 20,
    padX: 28, padTop: 28, padBottom: 28,
    fills: [rgb(C.white)], cornerRadius: 12,
    stroke: C.gray200 });

  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    buildSection(panel, s.title, s.lines, s.type);
    if (i < sections.length - 1) divider(panel, 368);
  }

  panel.resize(428, panel.height);
  return panel;
}

// ─── Matrix row with label + instances ───────────────────────────────────────
function buildMatrixRow(set, rowLabel, instances, cellW, cellH) {
  const row = frame({ name: `Row-${rowLabel}`, auto: 'HORIZONTAL', gap: 0, fills: [],
    stroke: C.gray100, align: 'CENTER' });

  // Row label cell
  const labelCell = frame({ name: 'LabelCell', auto: 'HORIZONTAL', padX: 12, fills: [],
    align: 'CENTER', justify: 'MIN' });
  labelCell.resize(140, cellH);
  const dot = figma.createEllipse();
  dot.resize(6, 6);
  dot.fills = [rgb(C.teal500)];
  labelCell.appendChild(dot);
  const lText = frame({ name: 'LabelText', auto: 'HORIZONTAL', padLeft: 8, fills: [], align: 'CENTER' });
  addText(lText, rowLabel, { size: 11, color: C.gray700 });
  labelCell.appendChild(lText);
  row.appendChild(labelCell);

  // Instance cells
  for (const instDef of instances) {
    const cell = frame({ name: `Cell-${instDef.label}`, auto: 'HORIZONTAL', fills: [],
      align: 'CENTER', justify: 'CENTER' });
    cell.resize(cellW, cellH);

    if (instDef.variantProps) {
      const variant = findVariant(set, instDef.variantProps);
      if (variant) {
        const inst = variant.createInstance();
        cell.appendChild(inst);
      } else {
        addText(cell, '—', { size: 14, color: C.gray200 });
      }
    } else {
      addText(cell, '—', { size: 14, color: C.gray200 });
    }
    row.appendChild(cell);
  }

  row.resize(row.width, cellH);
  return row;
}

// ─── Matrix group header bar ──────────────────────────────────────────────────
function buildGroupBar(label, w, accentColor) {
  const bar = frame({ name: `Group-${label}`, auto: 'HORIZONTAL', padX: 12, fills: [],
    align: 'CENTER' });
  bar.resize(w, 32);
  const accent = figma.createRectangle();
  accent.resize(3, 16);
  accent.fills = [rgb(accentColor)];
  accent.cornerRadius = 2;
  bar.appendChild(accent);
  const t = addText(bar, label, { style: 'Semi Bold', size: 12, color: C.gray900 });
  bar.itemSpacing = 8;
  bar.fills = [rgb(C.gray50)];
  return bar;
}

// ─── BUILD CHECKBOX DOC ──────────────────────────────────────────────────────
function buildCheckboxDoc(page, checkboxSet, x, y) {
  const PAGE_W = 1140;
  const PANEL_H = 640;

  const pageFrame = frame({ name: '📄 Checkbox — Documentation',
    fills: [rgb(C.gray50)], cornerRadius: 16 });
  pageFrame.resize(PAGE_W, 800);
  pageFrame.x = x; pageFrame.y = y;

  const content = frame({ name: 'Content', auto: 'VERTICAL', gap: 20,
    padX: 32, padTop: 32, padBottom: 32, fills: [] });
  content.resize(PAGE_W, 10);

  buildHeader(content, 'Checkbox', 'teal', PAGE_W - 64);

  // Content row
  const contentRow = frame({ name: 'ContentRow', auto: 'HORIZONTAL', gap: 20, fills: [] });

  // ── Matrix panel ──
  const MATRIX_W = 440;
  const COL_W = 90;
  const ROW_H = 52;
  const LABEL_W = 170;

  const matrixPanel = frame({ name: 'MatrixPanel', auto: 'VERTICAL', gap: 0,
    fills: [rgb(C.white)], cornerRadius: 12, stroke: C.gray200 });

  // Column header
  const colHeader = frame({ name: 'ColHeader', auto: 'HORIZONTAL', gap: 0,
    fills: [rgb(C.gray50)], cornerRadius: 0 });
  const corner = frame({ name: 'Corner', fills: [], align: 'CENTER' });
  corner.resize(LABEL_W, 36);
  addText(corner, 'Variante', { size: 11, color: C.gray400 });
  colHeader.appendChild(corner);

  for (const col of ['switch', 'round', 'square']) {
    const ch = frame({ name: col, fills: [], align: 'CENTER', justify: 'CENTER' });
    ch.resize(COL_W, 36);
    addText(ch, col, { style: 'Medium', size: 11, color: C.gray700 });
    colHeader.appendChild(ch);
  }
  colHeader.resize(LABEL_W + COL_W * 3, 36);
  matrixPanel.appendChild(colHeader);

  // Rows: active=false, active=true
  for (const active of ['false', 'true']) {
    const rowInsts = ['switch', 'round', 'square'].map(type => ({
      label: type,
      variantProps: { active, type, label: 'true' }
    }));
    const row = buildMatrixRow(checkboxSet, active === 'false' ? 'false (off)' : 'true (on)',
      rowInsts, COL_W, ROW_H);
    matrixPanel.appendChild(row);
  }

  matrixPanel.resize(LABEL_W + COL_W * 3, matrixPanel.height);
  contentRow.appendChild(matrixPanel);

  // ── Doc panel ──
  const docPanel = buildDocPanel([
    {
      title: 'Visão Geral',
      lines: ['Checkbox, Radio e Switch permitem ao usuário selecionar opções. Use Checkbox para seleção múltipla, Radio para seleção única e Switch para ativar/desativar com efeito imediato.'],
      type: 'normal'
    },
    {
      title: 'Quando usar cada tipo',
      lines: [
        'square — seleção múltipla em listas e formulários',
        'round — seleção única exclusiva (radio-style)',
        'switch — ativar/desativar uma configuração com efeito imediato',
      ],
      type: 'normal'
    },
    {
      title: 'Não fazer',
      lines: [
        'Não usar Switch para ações que precisam de confirmação',
        'Não usar Checkbox isolado sem contexto de lista ou grupo',
        'Não misturar square e round na mesma lista',
      ],
      type: 'dont'
    }
  ]);
  contentRow.appendChild(docPanel);

  content.appendChild(contentRow);
  pageFrame.appendChild(content);

  page.appendChild(pageFrame);
  return pageFrame;
}

// ─── BUILD NFSTATUS DOC ───────────────────────────────────────────────────────
function buildNfStatusDoc(page, nfStatusSet, x, y) {
  const PAGE_W = 1140;

  const pageFrame = frame({ name: '📄 NfStatus — Documentation',
    fills: [rgb(C.gray50)], cornerRadius: 16 });
  pageFrame.resize(PAGE_W, 900);
  pageFrame.x = x; pageFrame.y = y;

  const content = frame({ name: 'Content', auto: 'VERTICAL', gap: 20,
    padX: 32, padTop: 32, padBottom: 32, fills: [] });
  content.resize(PAGE_W, 10);

  buildHeader(content, 'NfStatus', 'teal', PAGE_W - 64);

  const contentRow = frame({ name: 'ContentRow', auto: 'HORIZONTAL', gap: 20, fills: [] });

  // ── Matrix panel ──
  // Cols: state=default, state=hovering
  // Groups: nfs-e/nf-e/nf-e de devolução → rows: emitida, em processo de emissão
  //         all → rows: pendente, falha ao emitir, falha ao cancelar, cancelada, nao-emitir, none

  const LABEL_W = 180;
  const COL_W = 80;
  const ROW_H = 44;
  const MATRIX_W = LABEL_W + COL_W * 2;

  const matrixPanel = frame({ name: 'MatrixPanel', auto: 'VERTICAL', gap: 0,
    fills: [rgb(C.white)], cornerRadius: 12, stroke: C.gray200 });

  // Column header
  const colHeader = frame({ name: 'ColHeader', auto: 'HORIZONTAL', gap: 0,
    fills: [rgb(C.gray50)] });
  const corner = frame({ name: 'Corner', fills: [], align: 'CENTER' });
  corner.resize(LABEL_W, 36);
  addText(corner, 'status', { size: 11, color: C.gray400 });
  colHeader.appendChild(corner);
  for (const col of ['default', 'hovering']) {
    const ch = frame({ name: col, fills: [], align: 'CENTER', justify: 'CENTER' });
    ch.resize(COL_W, 36);
    addText(ch, col, { style: 'Medium', size: 11, color: C.gray700 });
    colHeader.appendChild(ch);
  }
  colHeader.resize(MATRIX_W, 36);
  matrixPanel.appendChild(colHeader);

  // Group 1: nfs-e, nf-e, nf-e de devolução
  const group1Types = ['nfs-e', 'nf-e', 'nf-e de devolução'];
  const group1Status = ['emitida', 'em processo de emissão'];

  for (const type of group1Types) {
    matrixPanel.appendChild(buildGroupBar(type, MATRIX_W, C.teal500));

    for (const status of group1Status) {
      const rowInsts = ['default', 'hovering'].map(state => ({
        label: state,
        variantProps: { type, status, state }
      }));
      const row = buildMatrixRow(nfStatusSet, status, rowInsts, COL_W, ROW_H);
      matrixPanel.appendChild(row);
    }
  }

  // Group 2: all
  matrixPanel.appendChild(buildGroupBar('all (todos os tipos)', MATRIX_W, C.gray400));

  const group2Status = ['pendente', 'falha ao emitir', 'falha ao cancelar', 'cancelada', 'nao-emitir', 'none'];
  for (const status of group2Status) {
    const rowInsts = ['default', 'hovering'].map(state => ({
      label: state,
      variantProps: { type: 'all', status, state }
    }));
    const row = buildMatrixRow(nfStatusSet, status, rowInsts, COL_W, ROW_H);
    matrixPanel.appendChild(row);
  }

  matrixPanel.resize(MATRIX_W, matrixPanel.height);
  contentRow.appendChild(matrixPanel);

  // ── Doc panel ──
  const docPanel = buildDocPanel([
    {
      title: 'Visão Geral',
      lines: ['NfStatus exibe o estado atual de uma Nota Fiscal. Cada combinação de tipo e status tem cor e ícone semânticos próprios, garantindo escaneabilidade em listagens.'],
      type: 'normal'
    },
    {
      title: 'Tipos de NF',
      lines: [
        'nfs-e — Nota Fiscal de Serviço Eletrônica',
        'nf-e — Nota Fiscal Eletrônica de produto',
        'nf-e de devolução — NF-e de retorno de mercadoria',
        'all — aplica-se a qualquer tipo de nota',
      ],
      type: 'normal'
    },
    {
      title: 'Status disponíveis',
      lines: [
        'emitida — nota processada com sucesso',
        'em processo de emissão — em fila de processamento',
        'pendente — aguardando ação do usuário',
        'falha ao emitir / falha ao cancelar — erro de processamento',
        'cancelada — nota cancelada pelo emissor',
        'nao-emitir — configurada para não emitir',
        'none — sem status definido',
      ],
      type: 'normal'
    },
    {
      title: 'Boas práticas',
      lines: [
        'Sempre exibir junto ao número ou identificador da nota',
        'Usar state=default para listagens, hovering para tabelas interativas',
      ],
      type: 'do'
    }
  ]);
  contentRow.appendChild(docPanel);

  content.appendChild(contentRow);
  pageFrame.appendChild(content);

  page.appendChild(pageFrame);
  return pageFrame;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function run() {
  await Promise.all([
    figma.loadFontAsync({ family: 'Inter', style: 'Regular' }),
    figma.loadFontAsync({ family: 'Inter', style: 'Medium' }),
    figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' }),
    figma.loadFontAsync({ family: 'Inter', style: 'Bold' }),
  ]);

  const log = [];

  // Find component sets — deep search on current page only (same approach as missing-variants plugin)
  const page = figma.currentPage;

  const checkboxSet = page.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'checkbox');
  const nfStatusSet = page.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'nf-status');

  if (!checkboxSet) {
    figma.closePlugin('❌ Checkbox set não encontrado. Execute na página "Design System eNotas".'); return;
  }
  if (!nfStatusSet) {
    figma.closePlugin('❌ nf-status set não encontrado. Execute na página "Design System eNotas".'); return;
  }

  // Remove old doc frames on the current page (top-level only)
  const positions = {};
  for (const child of [...page.children]) {
    if (child.name === '📄 Checkbox — Documentation') {
      positions.checkbox = { x: child.x, y: child.y };
      child.remove();
    } else if (child.name === '📄 NfStatus — Documentation') {
      positions.nfstatus = { x: child.x, y: child.y };
      child.remove();
    }
  }

  if (!positions.checkbox) positions.checkbox = { x: 9720, y: 0 };
  if (!positions.nfstatus) positions.nfstatus = { x: 15500, y: 0 };

  buildCheckboxDoc(page, checkboxSet, positions.checkbox.x, positions.checkbox.y);
  log.push('✅ Checkbox doc criado');

  buildNfStatusDoc(page, nfStatusSet, positions.nfstatus.x, positions.nfstatus.y);
  log.push('✅ NfStatus doc criado');

  figma.closePlugin('Done!\n' + log.join('\n'));
}

run();
