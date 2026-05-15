# en-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                              | Type                                                                        | Default     |
| ------------- | -------------- | -------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `disabled`    | `disabled`     | Desabilita o campo                                       | `boolean`                                                                   | `false`     |
| `error`       | `error`        | Mensagem de erro                                         | `string \| undefined`                                                       | `undefined` |
| `hint`        | `hint`         | Texto auxiliar abaixo do campo                           | `string \| undefined`                                                       | `undefined` |
| `label`       | `label`        | Label do campo                                           | `string \| undefined`                                                       | `undefined` |
| `name`        | `name`         | Nome do campo (form)                                     | `string \| undefined`                                                       | `undefined` |
| `placeholder` | `placeholder`  | Placeholder                                              | `string`                                                                    | `''`        |
| `required`    | `required`     | Torna o campo obrigatório                                | `boolean`                                                                   | `false`     |
| `type`        | `type`         | Tipo HTML do input                                       | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`       | `value`        | Valor atual                                              | `string`                                                                    | `''`        |
| `variantSize` | `variant-size` | Tamanho visual do campo (sm=32px, default=40px, lg=48px) | `"default" \| "lg" \| "sm"`                                                 | `'default'` |


## Events

| Event      | Description | Type                  |
| ---------- | ----------- | --------------------- |
| `enBlur`   |             | `CustomEvent<void>`   |
| `enChange` |             | `CustomEvent<string>` |
| `enFocus`  |             | `CustomEvent<void>`   |
| `enInput`  |             | `CustomEvent<string>` |


## Slots

| Slot       | Description                      |
| ---------- | -------------------------------- |
| `"prefix"` | Ícone ou elemento antes do input |
| `"suffix"` | Ícone ou elemento após o input   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
