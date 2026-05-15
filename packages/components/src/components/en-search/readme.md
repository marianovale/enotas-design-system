# en-search



<!-- Auto Generated Below -->


## Overview

Campo de busca com ícone integrado e estados visuais.

## Properties

| Property      | Attribute     | Description          | Type                  | Default       |
| ------------- | ------------- | -------------------- | --------------------- | ------------- |
| `disabled`    | `disabled`    | Desabilita o campo   | `boolean`             | `false`       |
| `name`        | `name`        | Nome do campo (form) | `string \| undefined` | `undefined`   |
| `placeholder` | `placeholder` | Placeholder do campo | `string`              | `'Buscar...'` |
| `value`       | `value`       | Valor atual          | `string`              | `''`          |


## Events

| Event      | Description | Type                  |
| ---------- | ----------- | --------------------- |
| `enChange` |             | `CustomEvent<string>` |
| `enClear`  |             | `CustomEvent<void>`   |
| `enInput`  |             | `CustomEvent<string>` |
| `enSearch` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [en-header](../en-header)

### Graph
```mermaid
graph TD;
  en-header --> en-search
  style en-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
