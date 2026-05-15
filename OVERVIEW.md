# eNotas Design System — Visão Executiva

> Documento de referência para stakeholders e times de engenharia. Explica o que foi construído, por que foi construído dessa forma, e como se integra com a realidade técnica do eNotas hoje e com o Cosmos DS no futuro.

---

## O problema que estamos resolvendo

O eNotas é uma funcionalidade crítica dentro da Hotmart, mas seu frontend acumula anos de decisões tomadas de forma isolada: componentes visuais repetidos sem padrão, inconsistências entre telas, e um custo crescente de manutenção toda vez que uma mudança de design precisa ser propagada.

Ao mesmo tempo, o time de produto da Hotmart avança com o **Cosmos DS** — o Design System corporativo em React. O eNotas precisa de um caminho que:

1. **Resolva o problema de consistência visual hoje**, sem exigir reescrita do frontend existente
2. **Não crie dívida técnica** que dificulte a convergência futura com o Cosmos
3. **Seja sustentável** — documentado, versionado e fácil de evoluir por qualquer dev do time

---

## A solução: Web Components como ponte

### Por que Web Components?

A stack atual do eNotas é **ASP.NET com Razor Views + JavaScript + jQuery**. Nesse cenário, qualquer solução baseada em React, Vue ou Angular exigiria uma migração de frontend — custosa, arriscada e sem valor de negócio imediato.

**Web Components são a única tecnologia de componentes que funciona nativamente em qualquer HTML**, independente de framework. O navegador os reconhece como elementos HTML de primeira classe — exatamente como `<input>`, `<select>` ou `<button>`.

Isso significa que o eNotas pode adotar o Design System **hoje**, em qualquer `.cshtml`, sem tocar no jQuery existente, sem configurar bundlers, sem alterar o pipeline de build do .NET.

### Como funciona na prática

Uma única adição no `_Layout.cshtml` — o arquivo de layout base que já existe no projeto:

```html
<!-- Fontes: Hotmart Sans, Hotmart Display, Font Awesome -->
<link rel="stylesheet" href="/dist/fonts.css">
<!-- Tokens de design e Web Components -->
<link rel="stylesheet" href="/dist/tokens.css">
<script type="module" src="/dist/enotas-ds/enotas-ds.esm.js"></script>
```

A partir daí, **qualquer dev do time** pode usar os componentes em qualquer view:

```html
<!-- Antes: HTML solto, sem padrão -->
<button class="btn btn-primary btn-emitir">Emitir Nota</button>

<!-- Depois: componente do DS com props tipadas -->
<en-button variant="primary" size="md">Emitir Nota</en-button>
```

Os eventos funcionam com jQuery sem nenhuma adaptação:

```js
$('en-button').on('enClick', function() {
    // lógica existente intacta
});
```

---

## O que foi construído

### Camada de Tokens

Todos os valores visuais do Figma — cores, tipografia, espaçamento, bordas, sombras — foram exportados como **CSS Custom Properties** com o prefixo `--en-*`. Essa camada é a "linguagem" compartilhada entre o Figma e o código.

A arquitetura tem dois níveis intencionais:

| Nível | Exemplo | Função |
|---|---|---|
| **Global** (primitivo) | `--en-color-teal-500: #22baa0` | Valor bruto, sem semântica |
| **Semântico** (alias) | `--en-action-primary-background: var(--en-color-teal-500)` | Intenção de uso |

Isso garante que uma mudança de cor primária (ex: teal → outro tom) seja feita **em um único lugar** e se propaga automaticamente para todos os componentes.

### Componentes — 30 entregues

Todos os componentes seguem o mesmo padrão:

- **`.tsx`** — lógica Stencil com props tipadas, eventos prefixados `en-`, acessibilidade (ARIA, teclado)
- **`.css`** — estilos com Shadow DOM, usando exclusivamente tokens `--en-*`
- **`.stories.ts`** — documentação interativa no Storybook com Controls
- **`.figma.tsx`** — Code Connect publicado: o Figma Dev Mode gera o código do componente real

#### Primitivos (11)

| Componente | Tag | Casos de uso no eNotas |
|---|---|---|
| `en-button` | `<en-button>` | CTAs de emissão, cancelamento, ações em tabelas |
| `en-input` | `<en-input>` | CNPJ, e-mail, razão social, campos de formulário |
| `en-textarea` | `<en-textarea>` | Motivo de cancelamento, observações |
| `en-select` | `<en-select>` | Regime tributário, tipo de NF, filtros |
| `en-checkbox` | `<en-checkbox>` | Configurações, filtros, toggles (switch) |
| `en-input-tag` | `<en-input-tag>` | Filtros por múltiplos valores, tags de busca |
| `en-tab` | `<en-tab>` | Navegação entre NFS-e / NF-e / NF-e de devolução — suporte a badge de contagem e modo link |
| `en-icon` | `<en-icon>` | 110+ ícones do Figma disponíveis |
| `en-badge` | `<en-badge>` | Labels de status em listagens |
| `en-nf-status` | `<en-nf-status>` | Status semântico de notas (emitida, falha, cancelada…) |
| `en-spinner` | `<en-spinner>` | Loading states em ações assíncronas |

#### Padrões Compostos (7)

| Componente | Tag | Casos de uso no eNotas |
|---|---|---|
| `en-card` | `<en-card>` | Resumos de notas, dashboards, painéis de métricas |
| `en-search` | `<en-search>` | Busca global de notas fiscais |
| `en-filter` | `<en-filter>` | Filtros por tipo de NF, status, período |
| `en-faq` | `<en-faq>` | Central de ajuda, perguntas frequentes |
| `en-stepper` | `<en-stepper>` | Fluxo de onboarding e configuração inicial |
| `en-popover` | `<en-popover>` | Menus de perfil, notificações, ações contextuais |
| `en-header` | `<en-header>` | Header principal da aplicação eNotas |

#### Componentes Avançados (7)

| Componente | Tag | Casos de uso no eNotas |
|---|---|---|
| `en-tooltip` | `<en-tooltip>` | Explicações contextuais, hints em campos de formulário |
| `en-input-number` | `<en-input-number>` | Quantidade de notas, alíquotas, valores numéricos |
| `en-progress` | `<en-progress>` | Progresso de importação em lote, onboarding |
| `en-modal` | `<en-modal>` | Confirmação de cancelamento, detalhes de NF, alertas críticos |
| `en-nav-item` | `<en-nav-item>` | Menu lateral de navegação (NFS-e, NF-e, Configurações…) |
| `en-footer` | `<en-footer>` | Rodapé da aplicação com versão e copyright |
| `en-tour` | `<en-tour>` | Tour guiado para novos usuários, apresentação de features |

#### Componentes Adicionais (2)

| Componente | Tag | Casos de uso no eNotas |
|---|---|---|
| `en-segmented` | `<en-segmented>` | Seleção de visualização (lista / grade), alternância entre modos de exibição |
| `en-loading-bar` | `<en-loading-bar>` | Progresso de carregamento de página, upload de arquivos, operações em lote |

#### Alinhamento Cosmos — Novos Componentes (3)

| Componente | Tag | Casos de uso no eNotas |
|---|---|---|
| `en-lookup` | `<en-lookup>` | Busca de tomador de serviço, seleção de município/prestador, campos com autocomplete |
| `en-tag` | `<en-tag>` | Categorização de notas, marcadores editáveis, filtros visuais por cor |
| `en-switch` | `<en-switch>` | Ativar/desativar emissão automática, toggles de configuração |

### Integração com Figma (Code Connect)

O **Code Connect** está publicado para todos os 27 componentes. Isso significa que quando um designer inspeciona um componente no Figma Dev Mode, o código gerado automaticamente já usa `<en-button>`, `<en-input>`, etc. — não divs genéricas.

O fluxo de handoff passa a ser:

```
Designer ajusta componente no Figma
        ↓
Dev abre Dev Mode → copia o código gerado
        ↓
Cola diretamente no .cshtml
        ↓
Funciona. Sem interpretação, sem retrabalho.
```

---

## Como o merge com o Cosmos será possível

### A aposta técnica central

O eNotas DS foi construído com **Stencil.js** — e não com Lit, FAST ou vanilla Web Components — por uma razão específica: o Stencil **gera automaticamente wrappers React** a partir dos mesmos componentes Web.

Isso significa que o mesmo `<en-button>` que hoje roda no Razor já tem um wrapper React disponível:

```tsx
// Wrapper React gerado automaticamente pelo Stencil
import { EnButton } from '@enotas-ds/components-react';

<EnButton variant="primary" size="md" onEnClick={handleClick}>
  Emitir Nota
</EnButton>
```

### O caminho de migração

A convergência com o Cosmos acontecerá em etapas, sem big-bang:

**Etapa 1 — Hoje (concluída)**
O DS roda no .NET via `<script>` tag. 27 componentes disponíveis em 4 fases. O HTML das views permanece intacto.

**Etapa 2 — Alinhamento de tokens**
Quando o time Cosmos definir o mapeamento semântico (`--cosmos-action-primary`), basta criar um arquivo de alias que aponta os tokens semânticos do eNotas para os do Cosmos. O HTML das views **não muda nada**.

```css
/* arquivo de compatibilidade — uma linha por token */
--en-action-primary-background: var(--cosmos-action-primary);
```

**Etapa 3 — Migração gradual para React**
Views que forem sendo migradas para React (Cosmos) simplesmente trocam a tag HTML pelo wrapper React. A lógica de negócio no componente continua idêntica — só muda a sintaxe de uso.

```html
<!-- Razor (continua funcionando) -->
<en-button variant="primary">Emitir</en-button>

<!-- React/Cosmos (novo, mesmo componente por baixo) -->
<EnButton variant="primary">Emitir</EnButton>
```

**Etapa 4 — Unificação (opcional)**
Se o Cosmos absorver os componentes do eNotas, a API de props já está alinhada (`variant`, `size`, `intent`, `disabled`) — foi uma decisão de projeto deliberada. A migração é um find-and-replace.

### O que não precisará ser refeito

- Toda a camada de tokens (só o mapeamento semântico muda)
- A API dos componentes (props, eventos, comportamentos)
- As stories do Storybook
- O Code Connect no Figma

---

## Governança e evolução

### Para adicionar um novo componente

```
1. Inspecionar o componente no Figma Dev Mode
2. Criar en-[nome].tsx + en-[nome].css com tokens --en-*
3. Criar en-[nome].stories.ts para documentação
4. Criar en-[nome].figma.tsx para Code Connect
5. pnpm build:components && pnpm figma:connect
6. Atualizar STATUS.md
```

O Stencil gera a documentação de props automaticamente — sem esforço manual de manutenção de docs.

### Para atualizar tokens do Figma

```
1. Exportar variáveis atualizadas do Figma
2. Atualizar packages/tokens/src/global/ ou /semantic/
3. pnpm build:tokens
4. Os componentes já refletem a mudança — CSS variables se propagam automaticamente
```

---

## Resumo executivo

| Dimensão | Situação antes | Situação agora |
|---|---|---|
| **Consistência visual** | Componentes ad-hoc por view | 30 componentes unificados, baseados no Figma |
| **Velocidade de desenvolvimento** | Dev interpreta o design manualmente | Code Connect gera o código do componente certo |
| **Compatibilidade com .NET** | Não havia camada de componentes | Web Components nativos, zero configuração |
| **Debt técnico** | Qualquer componente React criaria bifurcação | Stencil gera wrappers React automaticamente |
| **Merge com Cosmos** | Dependia de reescrever o frontend | Troca de mapeamento de tokens + find-and-replace |
| **Documentação** | Inexistente | Storybook com Controls, acessibilidade e Code Connect |

O eNotas Design System não é um projeto paralelo ao produto — é a infraestrutura que permite que qualquer evolução de interface aconteça mais rápido, com mais consistência e com menos risco de regressão visual.

---

*Dúvidas ou contribuições: acionar o responsável pelo DS no time.*
