# en-tour



<!-- Auto Generated Below -->


## Overview

Tour de onboarding guiado com imagem e navegação por passos.

## Properties

| Property      | Attribute      | Description                             | Type         | Default        |
| ------------- | -------------- | --------------------------------------- | ------------ | -------------- |
| `currentStep` | `current-step` | Passo atual (base 0)                    | `number`     | `0`            |
| `finishLabel` | `finish-label` | Label do botão primário no último passo | `string`     | `'Começar'`    |
| `open`        | `open`         | Visível                                 | `boolean`    | `false`        |
| `skipLabel`   | `skip-label`   | Label do botão de pular                 | `string`     | `'Pular tour'` |
| `steps`       | --             | Lista de passos do tour                 | `TourStep[]` | `[]`           |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `enTourFinish` |             | `CustomEvent<void>`   |
| `enTourNext`   |             | `CustomEvent<number>` |
| `enTourPrev`   |             | `CustomEvent<number>` |
| `enTourSkip`   |             | `CustomEvent<void>`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
