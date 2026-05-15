# en-filter



<!-- Auto Generated Below -->


## Overview

Chip de filtro clicável — toggle entre default e active.

## Properties

| Property   | Attribute  | Description                                    | Type                  | Default     |
| ---------- | ---------- | ---------------------------------------------- | --------------------- | ----------- |
| `active`   | `active`   | Estado ativo do filtro                         | `boolean`             | `false`     |
| `count`    | `count`    | Exibe badge com contagem                       | `number \| undefined` | `undefined` |
| `disabled` | `disabled` | Desabilita o filtro                            | `boolean`             | `false`     |
| `value`    | `value`    | Valor identificador (útil em grupos de filtro) | `string \| undefined` | `undefined` |


## Events

| Event            | Description | Type                                                            |
| ---------------- | ----------- | --------------------------------------------------------------- |
| `enFilterChange` |             | `CustomEvent<{ value: string \| undefined; active: boolean; }>` |


## Slots

| Slot     | Description                   |
| -------- | ----------------------------- |
|          | Label do filtro               |
| `"icon"` | Ícone opcional antes do label |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
