# Feedback do Emissor → eNotas DS

> Origem: iniciativa **Emissor / Gestão Financeira 2026** (Figma `ADCkn1ljWIETt4RELKDFD5`).
> jun/2026. Achados ao alinhar as telas do Emissor com o eNotas DS (de-para Nível 1).
> De-para completo: `/Users/marianovale/Documents/Hotmart/enotas-depara-ds.md`.

Lista do que o **DS precisa decidir / adicionar / documentar** para suportar o Emissor.

---

## 🆕 1. Componentes de feedback

> **✅ `<en-alert>` criado** (commit `8ee959d`) — variantes `positive|attention|negative|informative`, ícone de status (glifo) obrigatório, info=purple. O Emissor já replicou o padrão nos 33 alerts da experiência (re-skin Nível 1, fiel à spec do código).
> **Pendências:** (a) **publicar o component set `en-alert` no Figma** (hoje só há a página de doc `2438:1074`) p/ permitir instanciar via biblioteca; (b) **`<en-toast>` ainda não existe** — efêmero/flutuante.

O Emissor ainda precisa do `<en-toast>`; o DS **não tem** esse componente hoje.

### `<en-alert>` / `<en-banner>` — persistente, inline
- **Uso:** pendências de pagamento, certificado vencendo, avisos no topo da página/seção. Fica na tela (não some sozinho).
- **Variantes:** `success | warning | danger | info`
- **Anatomia:** `Icon` (status, esquerda) + título (opcional, bold) + descrição + ação(ões) (link/button) + close opcional (`Icon closed`)
- **Estados:** default · dismissible · with-action · multiline
- **Regra:** status comunicado por **ícone + cor** (nunca só por dot/cor — falha WCAG 1.4.1). Tokens de feedback `--en-feedback-*`.

### `<en-toast>` — efêmero, flutuante
- **Uso:** confirmação de ação ("Pagamento recebido", "Boleto enviado"). Some sozinho (~4–6s), stack máx 3, canto.
- **Variantes:** mesmas 4. Anatomia: `Icon` + mensagem + ação opcional + close.
- **Diferença chave:** Banner = persistente/contexto; Toast = efêmero/confirmação.

> Hoje o Emissor montou ambos "à mão" (frames). Formalizar no DS evita divergência.

---

## 🎨 2. Cor de "info" — RESOLVIDO (purple, unificado)

- DS define **`--en-feedback-info`** = **PURPLE** (`#ebe1fc` bg / `#38178f` texto / `#a475ff` ícone), alinhado ao `informative` do **Cosmos**. **Não é azul** — versões antigas citavam azul (`#e0f0ff`/`#004f8a`): era o bundle `/dist/` e a variável do Figma defasados, ambos já corrigidos para purple.
- **✅ Decisão (jun/2026, unifica):** "info / Processando / Em apuração" usam **o `informative` purple do DS** — em banner/alert/toast **e** em status de fatura. **O teal local do Emissor (`#d7f3ee`/`#0f6b5a`) é descontinuado.**
  - _Supersede a resolução anterior (teal nos status, purple no banner)._ Motivo: zero token novo, alinhamento Cosmos, e os status passam a usar as variantes padrão do `<en-badge>` (informative) sem caso especial.
- **Contraste:** purple `#38178f` sobre `#ebe1fc` = **~9.6:1** (passa AA e AAA). Ícone `#a475ff` só como reforço (ícone/borda), nunca como texto.
- **Impacto no Emissor:** trocar a cor de "Processando / Em apuração" de teal para o `informative` purple. Mudança visual consciente.
- ✅ Já refletido no DS: `<en-alert>`, `<en-toast>` e suas docs no Figma usam `informative` purple para esses casos.

---

## 🔤 3. Tipografia — confirmar e documentar

Tokens lidos da coleção **Core / Typography** (Figma):
- `font-family/sans` = `'Hotmart Sans', 'Helvetica Neue', Arial, sans-serif`
- `font-family/display` = `'Hotmart Display', Georgia, serif`
- `font-weight`: regular 400 · medium 500 · semibold 600 · bold 700

**⚠️ Importante:** o **type spec usa só Regular + Bold**. "Body MD/SM" é **tamanho** (`--text-base` 16 / `--text-sm` 14), **não peso**. Corpo = Regular; ênfase/links = Bold. Não há Medium/Semibold em uso (e a fonte instalada no Figma só tem Regular/Light/Bold).
- **Pedido ao DS:** documentar explicitamente "2 pesos (Regular/Bold)" para evitar que produtos apliquem Medium/Semibold; e garantir o token de tamanho (`--text-xs/sm/base/lg/xl/2xl/3xl`), overline `--text-title-sm-over`, line-height base 24 = `--spacing-6`.

---

## 🧩 4. Ícones

- Garantir/expor no `Icon` os de status usados pelo Emissor: `done-check(-circle)`, `refresh-rotate`, `alert(-circle)`, `closed`, `arrow-down`, `envelope`, `download`.
- **Confirmar nomes** para: tipo "excedentes" (sem match óbvio — `add`/grid?), "menu" (hamburger), ícone de "info".
- Estados de emissão (Emitida/Em emissão/Negada/Corrigida) devem usar **`<en-nf-status>`** (já existe), não Badge genérico.
- Regra geral: ícone = componente, **nunca caractere de texto/emoji**.

---

## 🏷️ 5. Estados de fatura — spec pronta para o DS

O Emissor mapeou o ciclo completo de estados de linha de fatura (Assinatura + Excedentes), com badge + tratamento + CTA por estado. Pode virar **variantes de `RegistroFatura*` / `<en-badge>`** no DS:
- Assinatura: Paga · Processando · Pendente · Vencida · Recusada · Suspensa · Cancelada
- Excedentes: Dentro do plano · Em apuração · A pagar · Vencida · Importação pendente · Paga
- Mapa Badge: positive · informative · attention · negative · default (+ "negative solid" reservado a Suspensa).
- Catálogo visual no Figma (Emissor): nó `354:286`.

---

## 6. O que NÃO muda no DS
O DS usa **neutros WARM** (`#f5f3ef`, `#eae9e7`, `#c3bfb8`, `#96938d`, `#7a7773`, `#0d0d0d`) e o Emissor **já era warm** — então neutros já batiam. (Uma versão antiga deste doc dizia "neutros frios `#f7f7f7/#1f1f1f…`" — estava errado, era leitura do bundle `/dist/` defasado; corrigido.) Brand `#22baa0`, success e raios também batem. Ação do Emissor no Nível 1 = só **fonte** (Hotmart Sans/Display), **borders** mais firmes e **warning/danger/raio-modal**. Nenhuma ação do DS aqui.

---

## Resumo do pedido ao DS
1. ✅ `<en-alert>` e `<en-toast>` criados (código + stories + página de doc no Figma). Pendente: virar **component set real** no Figma (hoje são páginas de doc) p/ Code Connect variant-aware.
2. ✅ Cor de "info" resolvida: **purple unificado** (banner/alert/toast **e** status de fatura); teal do Emissor descontinuado. Sem token novo. Contraste ~9.6:1.
3. ✅ Tipografia documentada: regra "Regular/Bold; MD/SM = tamanho" no `text-styles.css` + naming Cosmos (base/leading/tracking).
4. Confirmar ícones faltantes (excedentes/menu/info).
5. (Opcional) Variantes de `RegistroFatura`/Badge a partir do catálogo de estados do Emissor.
