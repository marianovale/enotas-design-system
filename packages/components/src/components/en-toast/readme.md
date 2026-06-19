# en-toast



<!-- Auto Generated Below -->


## Overview

en-toast — toaster: host de notificações efêmeras flutuantes.

Coloque uma vez no layout e dispare via JS:
  const t = document.querySelector('en-toast');
  t.show({ variant: 'positive', heading: 'Pagamento recebido', message: 'Fatura de maio quitada.' });

Empilha no canto (máx `max`), some sozinho após `duration`ms. Para avisos
persistentes ancorados ao layout, use `en-alert`.

## Properties

| Property   | Attribute  | Description                                                 | Type                                                                                              | Default       |
| ---------- | ---------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| `duration` | `duration` | Duração padrão (ms) até auto-dismiss. 0 desativa.           | `number`                                                                                          | `5000`        |
| `max`      | `max`      | Máximo de toasts simultâneos (o mais antigo sai ao exceder) | `number`                                                                                          | `3`           |
| `position` | `position` | Canto onde a pilha aparece                                  | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "top-center" \| "top-left" \| "top-right"` | `'top-right'` |


## Events

| Event            | Description                                         | Type                           |
| ---------------- | --------------------------------------------------- | ------------------------------ |
| `enToastDismiss` | Emitido quando um toast é removido (auto ou manual) | `CustomEvent<{ id: number; }>` |


## Methods

### `clear() => Promise<void>`

Remove todos os toasts

#### Returns

Type: `Promise<void>`



### `dismiss(id: number) => Promise<void>`

Remove um toast pelo id (com animação de saída)

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| `id` | `number` |             |

#### Returns

Type: `Promise<void>`



### `show(opts?: ToastOptions) => Promise<number>`

Exibe um toast. Retorna o id (para dismiss programático).

#### Parameters

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| `opts` | `ToastOptions` |             |

#### Returns

Type: `Promise<number>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
