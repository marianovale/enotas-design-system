# en-input-tag



<!-- Auto Generated Below -->


## Overview

Campo de input que permite adicionar múltiplas tags.
Enter ou vírgula confirmam uma tag; Backspace remove a última.

## Properties

| Property      | Attribute     | Description                                                          | Type                  | Default          |
| ------------- | ------------- | -------------------------------------------------------------------- | --------------------- | ---------------- |
| `disabled`    | `disabled`    | Desabilita o campo                                                   | `boolean`             | `false`          |
| `error`       | `error`       | Mensagem de erro                                                     | `string \| undefined` | `undefined`      |
| `hint`        | `hint`        | Texto auxiliar abaixo do campo                                       | `string \| undefined` | `undefined`      |
| `label`       | `label`       | Label do campo                                                       | `string \| undefined` | `undefined`      |
| `placeholder` | `placeholder` | Placeholder enquanto sem tags                                        | `string`              | `'Adicionar...'` |
| `value`       | --            | Tags atuais (array separado por vírgula ao setar via HTML attribute) | `string[]`            | `[]`             |


## Events

| Event         | Description | Type                    |
| ------------- | ----------- | ----------------------- |
| `enChange`    |             | `CustomEvent<string[]>` |
| `enTagAdd`    |             | `CustomEvent<string>`   |
| `enTagRemove` |             | `CustomEvent<string>`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
