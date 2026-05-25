import type { Meta } from '@storybook/web-components';

const meta: Meta = {
  title: 'Compostos/EnHeader',
  tags: ['autodocs'],
  argTypes: {
    userName:          { control: 'text' },
    notificationCount: { control: 'number' },
    showSearch:        { control: 'boolean' },
  },
  args: { userName: 'Mariano Vale', notificationCount: 3, showSearch: true },
};
export default meta;

export const Default = {
  render: ({ userName, notificationCount, showSearch }: any) => {
    const el = document.createElement('en-header') as any;
    el.userName = userName;
    el.notificationCount = notificationCount;
    el.showSearch = showSearch;
    return el;
  },
};

export const WithLogo = {
  name: 'Com logo customizado',
  render: () => {
    const el = document.createElement('en-header') as any;
    el.userName = 'Ana Souza';
    el.notificationCount = 0;
    el.logoSrc = 'https://via.placeholder.com/80x32?text=eNotas';
    el.logoAlt = 'eNotas';
    return el;
  },
};

export const NoSearch = {
  name: 'Sem campo de busca',
  render: () => {
    const el = document.createElement('en-header') as any;
    el.userName = 'Carlos Lima';
    el.showSearch = false;
    el.notificationCount = 12;
    return el;
  },
};
