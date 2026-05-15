// Diagnóstico: lista frames 📄 na página ATUAL apenas (sem carregar outras páginas)
function run() {
  const page = figma.currentPage;
  const results = [];

  for (const child of page.children) {
    if (child.name && child.name.startsWith('📄')) { // 📄
      results.push(`${child.id} | x=${Math.round(child.x)} | ${child.name}`);
    }
  }

  if (results.length === 0) {
    figma.closePlugin(`Nenhum frame 📄 na página: "${page.name}"\nTotal de filhos: ${page.children.length}`);
  } else {
    figma.closePlugin(results.join('\n'));
  }
}

run();
