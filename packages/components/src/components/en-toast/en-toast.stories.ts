import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { ToastVariant, ToastPosition } from './en-toast';

const meta: Meta = {
  title: 'Feedback/EnToast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**en-toast** é o *toaster*: um host de notificações **efêmeras flutuantes**. Coloque
**uma vez** no layout e dispare via JS — útil para confirmar ações ("Pagamento recebido").

\`\`\`js
const t = document.querySelector('en-toast');
t.show({ variant: 'positive', heading: 'Pagamento recebido', message: 'Fatura de maio quitada.' });
\`\`\`

**Toast vs Alert**
- **Toast** (este): efêmero, flutuante, some sozinho (~5s), empilha no canto (máx 3).
- **Alert**: persistente, ancorado ao layout, fica até o usuário fechar.

**API imperativa**
- \`show(opts)\` → cria um toast e retorna o id. \`opts\`: variant, heading, message, duration (ms; 0 = fixo), dismissible.
- \`dismiss(id)\` → remove um toast. \`clear()\` → remove todos.

**Acessibilidade**: host com \`aria-live="polite"\`; \`role="alert"\` para negative/attention,
\`role="status"\` para positive/informative. Respeita \`prefers-reduced-motion\`.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['positive', 'attention', 'negative', 'informative'] satisfies ToastVariant[] },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'] satisfies ToastPosition[],
    },
    heading: { control: 'text' },
    message: { control: 'text' },
    duration: { control: 'number', description: 'ms até sumir; 0 = não some' },
  },
  args: {
    variant: 'positive',
    position: 'top-right',
    heading: 'Pagamento recebido',
    message: 'A fatura de maio foi quitada com sucesso.',
    duration: 5000,
  },
};
export default meta;

type Args = { variant: ToastVariant; position: ToastPosition; heading: string; message: string; duration: number };
type Story = StoryObj<Args>;

const fire = (e: Event, opts: object) => {
  const root = (e.target as HTMLElement).closest('.demo')!;
  const host = root.querySelector('en-toast') as HTMLElement & { show: (o: object) => Promise<number> };
  host.show(opts);
};

// ---------------------------------------------------------------------------
// Default — playground: dispara com os controles atuais
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: ({ variant, position, heading, message, duration }) => html`
    <div class="demo">
      <button
        style="padding:8px 14px;border-radius:6px;border:1px solid #c3bfb8;background:#fff;cursor:pointer;font:inherit"
        @click=${(e: Event) => fire(e, { variant, heading, message, duration })}
      >Disparar toast</button>
      <en-toast position=${position} duration=${duration}></en-toast>
    </div>
  `,
};

// ---------------------------------------------------------------------------
// Variantes — um botão por variante
// ---------------------------------------------------------------------------
export const Variantes: Story = {
  parameters: { controls: { disable: true } },
  render: () => html`
    <div class="demo" style="display:flex;gap:8px;flex-wrap:wrap">
      <button style="padding:8px 14px;border-radius:6px;border:1px solid #c3bfb8;background:#fff;cursor:pointer;font:inherit"
        @click=${(e: Event) => fire(e, { variant: 'positive', heading: 'Nota emitida', message: 'NFS-e #1042 autorizada.' })}>positive</button>
      <button style="padding:8px 14px;border-radius:6px;border:1px solid #c3bfb8;background:#fff;cursor:pointer;font:inherit"
        @click=${(e: Event) => fire(e, { variant: 'informative', heading: 'Processando', message: 'Sua solicitação está em apuração.' })}>informative</button>
      <button style="padding:8px 14px;border-radius:6px;border:1px solid #c3bfb8;background:#fff;cursor:pointer;font:inherit"
        @click=${(e: Event) => fire(e, { variant: 'attention', heading: 'Atenção', message: 'Certificado vence em 12 dias.' })}>attention</button>
      <button style="padding:8px 14px;border-radius:6px;border:1px solid #c3bfb8;background:#fff;cursor:pointer;font:inherit"
        @click=${(e: Event) => fire(e, { variant: 'negative', heading: 'Falha', message: 'Não foi possível emitir a nota.' })}>negative</button>
      <en-toast position="top-right"></en-toast>
    </div>
  `,
};

// ---------------------------------------------------------------------------
// Stack — dispara vários para demonstrar o empilhamento (máx 3)
// ---------------------------------------------------------------------------
export const Stack: Story = {
  name: 'Empilhamento (máx 3)',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Dispare várias vezes: no máximo 3 toasts ficam visíveis; o mais antigo sai ao exceder.' } },
  },
  render: () => html`
    <div class="demo">
      <button style="padding:8px 14px;border-radius:6px;border:1px solid #c3bfb8;background:#fff;cursor:pointer;font:inherit"
        @click=${(e: Event) => {
          const vs: ToastVariant[] = ['positive', 'informative', 'attention', 'negative'];
          const v = vs[Math.floor(Math.random() * vs.length)];
          fire(e, { variant: v, heading: 'Notificação', message: `Toast ${v} disparado às ${new Date().toLocaleTimeString('pt-BR')}.`, duration: 0 });
        }}>Disparar (duration 0)</button>
      <en-toast position="top-right" max="3"></en-toast>
    </div>
  `,
};
