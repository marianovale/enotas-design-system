import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Primitives/EnInputTag',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de entrada que permite adicionar múltiplas tags. ' +
          'O usuário digita um valor e pressiona **Enter** ou **vírgula** para confirmar cada tag. ' +
          '**Backspace** com o campo vazio remove a última tag. ' +
          'Aceita valor inicial via propriedade `.value` (array de strings).',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label visível acima do campo.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando o campo está vazio e sem tags.',
    },
    hint: {
      control: 'text',
      description: 'Texto auxiliar exibido abaixo do campo quando não há erro.',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro — ativa o estado de erro visualmente.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita interação com o campo (somente-leitura).',
    },
  },
  args: {
    label: 'Palavras-chave',
    placeholder: 'Digite e pressione Enter...',
    disabled: false,
  },
};
export default meta;

export const Default: StoryObj = {
  name: 'Vazio (padrão)',
  render: ({ label, placeholder, hint, error, disabled }) =>
    html`<en-input-tag
      label=${label}
      placeholder=${placeholder}
      ?disabled=${disabled}
      hint=${hint ?? ''}
      error=${error ?? ''}
    ></en-input-tag>`,
};

export const WithInitialTags: StoryObj = {
  name: 'Com tags iniciais',
  render: ({ label, placeholder, disabled }) => {
    const tpl = html`<en-input-tag
      label=${label}
      placeholder=${placeholder}
      ?disabled=${disabled}
    ></en-input-tag>`;
    // Lit não suporta binding de array via atributo — setamos a prop via ref após render
    const container = document.createElement('div');
    import('lit').then(({ render }) => {
      render(tpl, container);
      const el = container.querySelector('en-input-tag') as any;
      if (el) el.value = ['NFS-e', 'São Paulo', 'Aprovada'];
    });
    const el = document.createElement('en-input-tag') as any;
    el.label = label ?? 'Filtros ativos';
    el.placeholder = placeholder ?? 'Digite e pressione Enter...';
    el.value = ['NFS-e', 'São Paulo', 'Aprovada'];
    return el;
  },
  args: { label: 'Filtros ativos' },
};

export const WithError: StoryObj = {
  name: 'Com erro',
  args: { label: 'E-mails', error: 'Adicione ao menos um e-mail' },
  render: ({ label, placeholder, error }) =>
    html`<en-input-tag
      label=${label}
      placeholder=${placeholder ?? 'nome@empresa.com'}
      error=${error}
    ></en-input-tag>`,
};

export const WithHint: StoryObj = {
  name: 'Com hint',
  args: { label: 'Categorias', hint: 'Separe as categorias com Enter ou vírgula.' },
  render: ({ label, placeholder, hint }) =>
    html`<en-input-tag
      label=${label}
      placeholder=${placeholder}
      hint=${hint}
    ></en-input-tag>`,
};

export const Disabled: StoryObj = {
  name: 'Desabilitado',
  args: { label: 'Tags (somente leitura)', disabled: true },
  render: ({ label, disabled }) => {
    const el = document.createElement('en-input-tag') as any;
    el.label = label ?? 'Tags (somente leitura)';
    el.disabled = disabled ?? true;
    el.value = ['Fixo', 'Não editável'];
    return el;
  },
};

export const AllStates: StoryObj = {
  name: 'Todos os estados',
  parameters: {
    docs: {
      description: {
        story: 'Grade com os quatro estados do componente: vazio, com tags, desabilitado e com erro.',
      },
    },
    controls: { disable: true },
  },
  render: () => {
    // Cria cada variante diretamente como elemento para poder setar .value
    const withTags = document.createElement('en-input-tag') as any;
    withTags.label = 'Com tags';
    withTags.placeholder = 'Digite e pressione Enter...';
    withTags.value = ['NFS-e', 'São Paulo', 'Aprovada'];

    const disabledEl = document.createElement('en-input-tag') as any;
    disabledEl.label = 'Desabilitado';
    disabledEl.disabled = true;
    disabledEl.value = ['Fixo', 'Não editável'];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;max-width:720px';

    const emptyContainer = document.createElement('div');
    emptyContainer.innerHTML = `<en-input-tag label="Vazio (padrão)" placeholder="Digite e pressione Enter..."></en-input-tag>`;

    const errorContainer = document.createElement('div');
    errorContainer.innerHTML = `<en-input-tag label="Com erro" error="Campo obrigatório"></en-input-tag>`;

    wrapper.appendChild(emptyContainer);
    wrapper.appendChild(withTags);
    wrapper.appendChild(disabledEl);
    wrapper.appendChild(errorContainer);

    return wrapper;
  },
};
