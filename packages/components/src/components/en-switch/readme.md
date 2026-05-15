# en-switch



<!-- Auto Generated Below -->


## Overview

Switch toggle — componente de conveniência com a mesma aparência do
`<en-checkbox type="switch">`, mas com API simplificada (sem `type`).

## Properties

| Property   | Attribute  | Description                                  | Type                  | Default     |
| ---------- | ---------- | -------------------------------------------- | --------------------- | ----------- |
| `checked`  | `checked`  | Estado ligado/desligado                      | `boolean`             | `false`     |
| `disabled` | `disabled` | Desabilita o switch                          | `boolean`             | `false`     |
| `label`    | `label`    | Label visível ao lado do switch              | `string \| undefined` | `undefined` |
| `name`     | `name`     | Nome do campo (formulários)                  | `string \| undefined` | `undefined` |
| `value`    | `value`    | Valor submetido ao formulário quando checked | `string`              | `'on'`      |


## Events

| Event      | Description                                                     | Type                   |
| ---------- | --------------------------------------------------------------- | ---------------------- |
| `enChange` | Emitido quando o estado muda. Payload: novo valor de `checked`. | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
