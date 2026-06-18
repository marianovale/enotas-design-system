# en-alert



<!-- Auto Generated Below -->


## Overview

en-alert — aviso persistente inline (banner).

Para pendências, avisos e confirmações que ficam na tela (não somem sozinhos).
Para confirmações efêmeras flutuantes, use `en-toast` (quando disponível).

Status é comunicado por **ícone + cor** (nunca só cor — WCAG 1.4.1).

## Properties

| Property      | Attribute     | Description                                                                                                                                      | Type                                                                                                       | Default         |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | --------------- |
| `dismissible` | `dismissible` | Exibe o botão de fechar (X)                                                                                                                      | `boolean`                                                                                                  | `false`         |
| `heading`     | `heading`     | Título (opcional, exibido em bold acima da descrição)                                                                                            | `string \| undefined`                                                                                      | `undefined`     |
| `icon`        | `icon`        | Exibe o ícone de status à esquerda. Padrão `true`.                                                                                               | `boolean`                                                                                                  | `true`          |
| `intent`      | `intent`      | <span style="color:red">**[DEPRECATED]**</span> Use `variant`. Mantido por retrocompatibilidade — se informado, sobrescreve `variant`.<br/><br/> | `"danger" \| "info" \| "success" \| "warning" \| undefined`                                                | `undefined`     |
| `variant`     | `variant`     | Variante semântica (alinhado com Cosmos). Aceita também os valores legados de `intent` por retrocompatibilidade.                                 | `"attention" \| "danger" \| "info" \| "informative" \| "negative" \| "positive" \| "success" \| "warning"` | `'informative'` |


## Events

| Event            | Description                | Type                |
| ---------------- | -------------------------- | ------------------- |
| `enAlertDismiss` | Emitido ao fechar o alerta | `CustomEvent<void>` |


## Slots

| Slot       | Description                                |
| ---------- | ------------------------------------------ |
|            | Descrição/corpo do alerta                  |
| `"action"` | Ação(ões): link ou botão (ex: <en-button>) |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
