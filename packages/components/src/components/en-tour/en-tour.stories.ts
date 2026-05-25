import type { Meta } from '@storybook/web-components';

const TOUR_STEPS = [
  {
    title: 'Bem-vindo ao eNotas!',
    description: 'O eNotas é a plataforma de emissão de notas fiscais integrada à Hotmart. Vamos te mostrar o que você pode fazer por aqui.',
  },
  {
    title: 'Emita notas em segundos',
    description: 'Configure sua empresa uma vez e emita NFS-e, NF-e e NF-e de devolução diretamente da plataforma, sem precisar acessar a prefeitura.',
  },
  {
    title: 'Acompanhe tudo em um lugar',
    description: 'Dashboard com visão geral de notas emitidas, pendentes e com falha. Filtros por tipo, período e status para encontrar qualquer nota rapidamente.',
  },
  {
    title: 'Pronto para começar?',
    description: 'Configure sua primeira empresa e emita sua primeira nota em menos de 5 minutos.',
  },
];

const meta: Meta = {
  title: 'Compostos/EnTour',
  tags: ['autodocs'],
  argTypes: {
    finishLabel: { control: 'text' },
    skipLabel:   { control: 'text' },
  },
  args: { finishLabel: 'Começar agora', skipLabel: 'Pular tour' },
};
export default meta;

export const Default = {
  render: ({ finishLabel, skipLabel }: any) => {
    const wrapper = document.createElement('div');

    const btn = document.createElement('en-button') as any;
    btn.setAttribute('variant', 'primary');
    btn.textContent = 'Iniciar tour';

    const tour = document.createElement('en-tour') as any;
    tour.steps = TOUR_STEPS;
    tour.finishLabel = finishLabel;
    tour.skipLabel = skipLabel;

    btn.addEventListener('enClick', () => { tour.open = true; tour.currentStep = 0; });

    wrapper.appendChild(btn);
    wrapper.appendChild(tour);
    return wrapper;
  },
};
