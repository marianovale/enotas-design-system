import type { Meta } from '@storybook/web-components';

const STEPS = [
  { label: 'Dados da empresa', description: 'CNPJ, razão social e endereço' },
  { label: 'Configuração fiscal', description: 'Regime tributário e certificado digital' },
  { label: 'Integração', description: 'Conectar com seu sistema de vendas' },
  { label: 'Pronto!', description: 'Comece a emitir suas notas' },
];

const meta: Meta = {
  title: 'Compostos/EnStepper',
  tags: ['autodocs'],
  argTypes: {
    currentStep: { control: 'number', min: 0, max: 3 },
  },
  args: { currentStep: 1 },
};
export default meta;

export const Default = {
  render: ({ currentStep }: any) => {
    const el = document.createElement('en-stepper') as any;
    el.steps = STEPS;
    el.currentStep = currentStep;
    el.style.maxWidth = '320px';
    return el;
  },
};

export const FirstStep = {
  name: 'Passo 1 (início)',
  render: () => {
    const el = document.createElement('en-stepper') as any;
    el.steps = STEPS;
    el.currentStep = 0;
    el.style.maxWidth = '320px';
    return el;
  },
};

export const LastStep = {
  name: 'Último passo (concluído)',
  render: () => {
    const el = document.createElement('en-stepper') as any;
    el.steps = STEPS;
    el.currentStep = 3;
    el.style.maxWidth = '320px';
    return el;
  },
};
