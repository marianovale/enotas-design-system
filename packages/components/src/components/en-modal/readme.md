# en-modal



<!-- Auto Generated Below -->


## Overview

Modal/dialog genérico com backdrop.

## Properties

| Property     | Attribute    | Description                                                                                                         | Type                             | Default     |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `closable`   | `closable`   | Exibe o botão de fechar (X). Padrão `true`. Substitui `hideClose` (semântica invertida).                            | `boolean`                        | `true`      |
| `heading`    | `heading`    | Título (alternativa ao slot header)                                                                                 | `string \| undefined`            | `undefined` |
| `hideClose`  | `hide-close` | <span style="color:red">**[DEPRECATED]**</span> Use `closable={false}`. Mantido por retrocompatibilidade.<br/><br/> | `boolean`                        | `false`     |
| `open`       | `open`       | Visibilidade                                                                                                        | `boolean`                        | `false`     |
| `persistent` | `persistent` | Impede fechar ao clicar no backdrop                                                                                 | `boolean`                        | `false`     |
| `size`       | `size`       | Tamanho                                                                                                             | `"full" \| "lg" \| "md" \| "sm"` | `'md'`      |


## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `enModalClose` |             | `CustomEvent<void>` |


## Slots

| Slot       | Description        |
| ---------- | ------------------ |
|            | Conteúdo principal |
| `"footer"` | Ações (botões)     |
| `"header"` | Título do modal    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
