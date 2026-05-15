# en-faq



<!-- Auto Generated Below -->


## Overview

Accordion de perguntas frequentes.
Aceita items via prop ou via slot para conteúdo customizado.

## Properties

| Property    | Attribute    | Description                                      | Type        | Default |
| ----------- | ------------ | ------------------------------------------------ | ----------- | ------- |
| `items`     | --           | Lista de perguntas e respostas                   | `FaqItem[]` | `[]`    |
| `multiple`  | `multiple`   | Permite múltiplos itens abertos ao mesmo tempo   | `boolean`   | `false` |
| `openIndex` | `open-index` | Índice do item aberto inicialmente (-1 = nenhum) | `number`    | `-1`    |


## Events

| Event         | Description | Type                                             |
| ------------- | ----------- | ------------------------------------------------ |
| `enFaqChange` |             | `CustomEvent<{ index: number; open: boolean; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
