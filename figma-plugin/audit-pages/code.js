// eNotas DS — Audit Pages (fast: top-level only, no deep traversal)
async function run() {
  const lines = [];

  for (const page of figma.root.children) {
    await figma.loadPageAsync(page);

    const topNames = page.children.map(c => c.name);
    const hasNew  = topNames.some(n => n.startsWith('.documentation-enotas'));
    const hasOld  = topNames.some(n => n.startsWith('📄'));

    const status = hasNew ? '✅' : (hasOld ? '⚠️' : '❌');
    lines.push(`${status} ${page.name} | new=${hasNew} old=${hasOld} | frames: ${topNames.join(', ')}`);
  }

  figma.closePlugin(lines.join('\n'));
}

run();
